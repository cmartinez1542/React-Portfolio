import Navbar from "../components/Navbar";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import Container from "../components/Container";
import { site } from "../data/site";
import { projects } from "../data/projects";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-950 dark:bg-neutral-950 dark:text-white">
      <Navbar />

      {/* Hero */}
      <div className="py-16 sm:py-20">
        <Container>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">
            {site.location}
          </p>

          <h1 className="mt-3 text-4xl sm:text-5xl font-semibold tracking-tight">
            {site.name}
          </h1>

          <p className="mt-3 text-lg text-neutral-700 dark:text-neutral-200">
            {site.title}
          </p>

          <p className="mt-5 max-w-2xl text-neutral-600 dark:text-neutral-300">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-full px-5 py-2.5 bg-neutral-950 text-white dark:bg-white dark:text-neutral-950"
            >
              View Projects
            </a>
            <a
              href={`mailto:${site.email}`}
              className="rounded-full px-5 py-2.5 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900"
            >
              Contact
            </a>
          </div>
        </Container>
      </div>

      <Section
        id="about"
        title="About"
        subtitle="A quick snapshot of what I do and what I’m optimizing for."
      >
        <div className="max-w-3xl text-neutral-700 dark:text-neutral-200 leading-relaxed">
          <p>
            I build across embedded systems, robotics, and data-driven software. I like projects
            where I can design the architecture, ship something real, and measure improvements.
          </p>
        </div>
      </Section>

      <Section
        id="projects"
        title="Projects"
        subtitle="Curated work with clear outcomes, tech stack, and links."
      >
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </Section>

      <Section
        id="skills"
        title="Skills"
        subtitle="Keep this short and credible—back it up with projects."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 text-sm">
          {[
            "C/C++ • Arduino • Control Systems",
            "Python • Pandas • SQL",
            "Linux • Docker • Networking",
            "React • JS • UI",
            "Git • Documentation",
            "Hardware • Sensors • Debugging",
          ].map((s) => (
            <div
              key={s}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white dark:bg-neutral-950"
            >
              {s}
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="contact"
        title="Contact"
        subtitle="Simple and direct."
      >
        <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 bg-white dark:bg-neutral-950">
          <p className="text-neutral-700 dark:text-neutral-200">
            Email:{" "}
            <a className="underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
