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
    <div id={id} className="scroll-mt-28">
      {eyebrow ? (
        <p className="text-sm font-medium uppercase tracking-wider text-accent-soft">
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={titleId}
        className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-2xl text-muted">{description}</p>
      ) : null}
    </div>
  );
}
