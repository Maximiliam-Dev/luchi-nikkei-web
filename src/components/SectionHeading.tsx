type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  id?: string;
};

export function SectionHeading({
  kicker,
  title,
  description,
  id,
}: SectionHeadingProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {kicker ? (
        <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-coral">
          {kicker}
        </p>
      ) : null}
      <h2
        id={id}
        className="mt-2 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
      >
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-ink/70 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
