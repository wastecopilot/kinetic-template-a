"""
Brand typography audit for the built site (.next/server/app/**/*.html).

1. Headlines/subheads (h1-h6, FAQ <summary>, eyebrow/callout <p class="... font-black ...">)
   must be lowercase, except approved proper nouns and product names.
2. Buttons and CTA links must be sentence case (first word capitalised, rest lowercase
   unless an approved exception).
3. Reports any font-family other than Figtree in the built CSS.
Run:  python scripts/check-typography.py
"""
import glob, re, sys
from html.parser import HTMLParser

# Words that may keep capitals (Kinetic brand exceptions + proper nouns).
EXCEPTIONS = {
    "Kinetic", "Fiber", "Internet", "Max", "Gig", "Mbps", "Secure", "Plus", "AutoPay", "Home", "Phone",
    "Voice", "Manager", "Mastercard", "Mastercard®", "AT&T", "Wi-Fi", "Wi-Fi.", "eero", "Pro", "I", "Ziatan", "LLC",
    "YouTube", "TV", "Netflix", "Hulu", "Disney+", "Prime", "Video", "Peacock", "Paramount+", "Apple", "TV+", "Sling",
    "4K", "4K/8K", "8K", "Premium", "Technical", "Support", "Authorized", "Agent", "Caller", "ID",
    "Call", "Forwarding", "Voicemail", "Spam", "Alert", "Waiting", "3-Way", "Calling", "Block", "Anonymous",
    "Rejection", "Speed", "Dial", "California", "Privacy", "Policy", "Template", "A", "B", "Mbps.", "Gig.",
    "Gateway",  # part of the product name "eero Pro 7 Wi-Fi Gateway"
}

def words_with_caps(text):
    out = []
    for w in re.split(r"\s+", text.strip()):
        core = w.strip(".,:;!?()\"'·—-")
        if core and any(c.isupper() for c in core) and core not in EXCEPTIONS and not re.fullmatch(r"[\d$./%+-]+", core):
            out.append(core)
    return out

class P(HTMLParser):
    def __init__(self):
        super().__init__(); self.stack = []; self.items = []
    def handle_starttag(self, tag, attrs):
        a = dict(attrs); cls = a.get("class", "") or ""
        kind = None
        if tag in ("h1", "h2", "h3", "h4", "h5", "h6", "summary", "legend"): kind = "heading"
        elif tag == "p" and "font-black" in cls.split(): kind = "heading"
        elif tag == "button" or (tag == "a" and ("font-black" in cls.split() or "rounded" in cls)): kind = "button"
        # A link that wraps block content (p, div, headings) is a card, not a button.
        if tag in ("p", "div", "h1", "h2", "h3", "h4", "ul") and self.stack and self.stack[-1][1] == "button":
            self.stack[-1][1] = "container"
        self.stack.append([tag, kind, ""])
    def handle_endtag(self, tag):
        while self.stack:
            t, kind, txt = self.stack.pop()
            if kind and kind != "container":
                self.items.append((kind, re.sub(r"\s+", " ", txt).strip()))
            if self.stack:
                self.stack[-1][2] += " " + txt + " "
                # A link that wraps headings/paragraphs is a card, not a button: skip it.
                if kind and self.stack[-1][1] == "button": self.stack[-1][1] = "container"
            if t == tag: break
    def handle_data(self, d):
        if self.stack: self.stack[-1][2] += d
        # ignore text outside tracked tags

problems = 0
for f in sorted(glob.glob(".next/server/app/**/*.html", recursive=True)):
    html = open(f, encoding="utf8").read()
    html = re.sub(r'<span class="sr-only">.*?</span>', "", html)  # screen-reader-only text
    html = re.sub(r"<(script|style)[^>]*>.*?</\1>", "", html, flags=re.S)
    p = P(); p.feed(html)
    seen = set()
    for kind, text in p.items:
        if not text or (kind, text) in seen: continue
        seen.add((kind, text))
        words = text.split()
        if kind == "heading":
            bad = words_with_caps(text)
        else:  # button: sentence case -> ignore the first word
            bad = words_with_caps(" ".join(words[1:])) if len(words) > 1 else []
            if words and words[0][:1].islower() and not words[0].startswith("("): bad.append(f"(first word lowercase: {words[0]})")
        if bad:
            problems += 1
            print(f"{f.split('app')[-1]:<38} {kind:<8} {text[:70]!r} -> {bad}")

css = " ".join(open(c, encoding="utf8").read() for c in glob.glob(".next/static/css/*.css"))
fams = sorted(set(re.findall(r"font-family:([^;}]+)", css)))
print("\nfont-family declarations in built CSS:")
for fam in fams: print("  ", fam)
print(f"\n{problems} capitalization issue(s) found.")
sys.exit(1 if problems else 0)
