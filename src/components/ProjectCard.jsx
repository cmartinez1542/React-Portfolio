export default function ProjectCard({ project }) {
  return (
    <article className="group rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden bg-white dark:bg-neutral-950">
      <div className="aspect-[16/9] bg-neutral-100 dark:bg-neutral-900 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="h-full w-full object-cover group-hover:scale-[1.02] transition-transform"
          loading="lazy"
        />
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-semibold text-lg leading-snug">{project.name}</h3>
          <div className="flex gap-2 shrink-0">
            {project.links.github ? (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline text-neutral-700 dark:text-neutral-300"
              >
                GitHub
              </a>
            ) : null}
            {project.links.demo ? (
              <a
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
                className="text-sm underline text-neutral-700 dark:text-neutral-300"
              >
                Demo
              </a>
            ) : null}
          </div>
        </div>

        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
          {project.summary}
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full px-2.5 py-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800"
            >
              {t}
            </span>
          ))}
        </div>

        {project.highlights?.length ? (
          <ul className="mt-4 space-y-1 text-sm text-neutral-700 dark:text-neutral-200 list-disc pl-5">
            {project.highlights.slice(0, 3).map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        ) : null}
      </div>
    </article>
  );
}
