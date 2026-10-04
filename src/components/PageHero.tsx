export function PageHero({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-sky">
      <div className="container-x py-16 md:py-20">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h-display mt-3 max-w-3xl text-4xl md:text-5xl">{title}</h1>
        {children && <p className="mt-5 max-w-2xl text-lg text-muted">{children}</p>}
      </div>
    </section>
  );
}
