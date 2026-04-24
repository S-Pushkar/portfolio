type SectionHeadingProps = {
  id: string;
  titleId: string;
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  id,
  titleId,
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div id={id} className="scroll-mt-32">
      {eyebrow ? (
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="mt-4 text-4xl font-extrabold tracking-[-0.03em] text-foreground sm:text-6xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  );
}
