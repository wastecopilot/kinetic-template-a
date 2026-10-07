type Props = {
  eyebrow?: string;
  title: string;
  intro?: string;
  id?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
};

/** Template A section heading: purple eyebrow subhead + large lowercase headline (>= 2x body size). */
export function SectionHeading({ eyebrow, title, intro, id, tone = "light", align = "left" }: Props) {
  const dark = tone === "dark";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p className={`flex items-center gap-3 text-base font-black ${dark ? "text-white" : "text-purple"} ${align === "center" ? "justify-center" : ""}`}>
          <span aria-hidden="true" className={`h-1 w-8 ${dark ? "bg-green" : "bg-purple"}`} />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className={`mt-3 text-4xl leading-tight sm:text-5xl ${dark ? "text-white" : "text-navy"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 text-lg ${dark ? "text-white" : "text-navy"}`}>{intro}</p>}
    </div>
  );
}
