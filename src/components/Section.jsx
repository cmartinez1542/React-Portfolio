import Container from "./Container";

export default function Section({ id, title, subtitle, children }) {
  return (
    <section id={id} className="py-14 sm:py-16">
      <Container>
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
            {title}
          </h2>
          {subtitle ? (
            <p className="mt-2 text-base text-neutral-600 dark:text-neutral-300">
              {subtitle}
            </p>
          ) : null}
        </div>
        {children}
      </Container>
    </section>
  );
}
