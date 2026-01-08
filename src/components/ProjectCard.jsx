export default function ProjectCard({ project }) {
  return (
    <article className="rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm">
      <div className="aspect-[16/9] bg-neutral-100 overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-base">{project.name}</h3>
        <p className="mt-1 text-sm text-neutral-600">{project.summary}</p>

        <div className="mt-3">
          <a
            href={project.links.github || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-blue-700 px-4 py-2 text-sm text-white hover:bg-blue-800 transition-colors w-full"
          >
            View Project
          </a>
        </div>
      </div>
    </article>
  );
}
