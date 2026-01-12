export default function ProjectCard({ project }) {
  return (
    <article
      className="group rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm
                 transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200"
    >
      <div className="aspect-[16/9] bg-neutral-50 flex items-center justify-center overflow-hidden">
        <img
          src={project.image}
          alt={`${project.name} cover`}
          className="h-full w-full object-contain p-6 transition-transform duration-300 ease-out group-hover:scale-[1.02]"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-base transition-colors duration-300 group-hover:text-blue-700">
          {project.name}
        </h3>
        <p className="mt-1 text-sm text-neutral-600">{project.summary}</p>

        <div className="mt-3">
          <a
            href={project.links.github || "#"}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md bg-blue-700 px-4 py-2 text-sm text-white
                       hover:bg-blue-800 transition-colors w-full"
          >
            View Project
          </a>
        </div>
      </div>
    </article>
  );
}