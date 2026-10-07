"""
Case-insensitive search for banned/retired wording across the project source and the built HTML.
(Uses Python instead of grep: Git Bash's `grep -i` crashes on UTF-8 files and prints nothing.)
Run after `npm run build`:  python scripts/check-banned-terms.py
"""
import os, re, sys

TERMS = ["Windstream", "Customer Service", "Customer Support", "DIRECTV bundle", "DIRECTV", "TV plans",
         "TV and entertainment", "Double your savings", "Kinetic + AT&T", "$79.99", "79.99", "100 Mbps", "100Mbps",
         "[PLACEHOLDER", "DSL"]
SKIP_DIRS = {"node_modules", ".next", "brand-assets", ".claude", ".git", "scripts"}
# data/disclaimer.ts keeps a DISCLAIMER_CHANGES audit trail that quotes the removed live-site text.
AUDIT_TRAIL = os.path.join("data", "disclaimer.ts")

def scan(root, exts, label, skip_dirs=SKIP_DIRS):
    hits = {t: [] for t in TERMS}
    for dp, dns, fns in os.walk(root):
        dns[:] = [d for d in dns if d not in skip_dirs]
        for fn in fns:
            path = os.path.join(dp, fn)
            if not fn.endswith(exts): continue
            text = open(path, encoding="utf8", errors="replace").read()
            if os.path.normpath(path).endswith(AUDIT_TRAIL):
                text = text.split("export const DISCLAIMER_CHANGES")[0]
            for t in TERMS:
                for m in re.finditer(re.escape(t), text, re.I):
                    line = text.count("\n", 0, m.start()) + 1
                    hits[t].append(f"{path}:{line}")
        # also flag file names
        for fn in fns:
            for t in ("windstream", "mastercard", "directv"):
                if t in fn.lower(): hits.setdefault("FILENAME:" + t, []).append(os.path.join(dp, fn))
    print(f"\n=== {label} ===")
    total = 0
    for t, h in hits.items():
        total += len(h)
        print(f"  {t:<24} {len(h)}" + (f"   e.g. {h[:3]}" if h else ""))
    return total

src = scan(".", (".ts", ".tsx", ".css", ".md", ".json", ".mjs"), "project source (excl. node_modules, .next, brand-assets)")
built = scan(os.path.join(".next", "server", "app"), (".html", ".rsc"), "built pages (.next/server/app)", skip_dirs=set())
sys.exit(1 if (src or built) else 0)
