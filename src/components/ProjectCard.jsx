export default function ProjectCard({ project }) {
  return (
    <article
      className="group h-full rounded-xl overflow-hidden border border-neutral-200 bg-white shadow-sm
                 transition-all duration-300 ease-out
                 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200"
    >
      <div className="flex h-full flex-col">
        <div className="aspect-[16/9] bg-neutral-50 flex items-center justify-center overflow-hidden">
          <img
            src={project.image}
            alt={`${project.name} cover`}
            className="h-full w-full object-contain p-6 transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            loading="lazy"
          />
        </div>

        <div className="flex flex-1 flex-col p-4">
          <h3 className="font-semibold text-base transition-colors duration-300 group-hover:text-blue-700">
            {project.name}
          </h3>

          <p className="mt-1 text-sm text-neutral-600">
            {project.summary}
          </p>

          <div className="mt-auto pt-4">
            <div className="flex flex-wrap gap-2">
              {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-md bg-blue-700 px-4 py-2 text-sm text-white
                             hover:bg-blue-800 transition-colors min-w-[140px]"
                >
                  View Project
                </a>
              )}

              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-md border border-blue-700 px-4 py-2 text-sm text-blue-700
                             hover:bg-blue-50 transition-colors min-w-[140px]"
                >
                  Live Demo
                </a>
              )}

              {project.links.video && (
                <a
                  href={project.links.video}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center rounded-md border border-neutral-300 px-4 py-2 text-sm text-neutral-700
                             hover:bg-neutral-100 transition-colors min-w-[140px]"
                >
                  Watch Video
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}