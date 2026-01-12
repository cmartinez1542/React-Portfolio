import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { site } from "../data/site";
import { projects } from "../data/projects";
import { Mail, Github, Linkedin } from "lucide-react"; 

function IconCode() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M8 9l-3 3 3 3" />
      <path d="M16 9l3 3-3 3" />
      <path d="M14 7l-4 10" />
    </svg>
  );
}
function IconDB() {
  return (
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  );
}
function IconGear() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.01a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.01a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-950">
      <Navbar />

      {/* HERO (matches the screenshot style) */}
      <section className="relative">
        {/* background banner */}
        <div
          className="h-[320px] sm:h-[360px] w-full bg-cover bg-center"
          style={{ backgroundImage: "url('/hero.png')" }}
        />
        {/* dark overlay */}
        <div className="absolute inset-0 h-[320px] sm:h-[360px] bg-black/45" />

        <div className="absolute inset-0">
          <Container>
            <div className="h-[320px] sm:h-[360px] flex items-center">
              <div className="flex items-center gap-6 sm:gap-10">
                {/* profile photo (left) */}
                <div className="hidden sm:block">
                  <div className="h-80 w-60 rounded-2xl  mt-10">
                    <div className="h-full w-full object-cover object-center overflow-hidden rounded-xl">
                      <img
                        src="/profile-rbg.png"
                        alt="Profile"
                        className="h-full w-full object-contain object-top bg-transparent"
                        
                      />
                    </div>
                  </div>
                </div>

                {/* text (right) */}
                <div className="text-white">
                  <p className="text-sm text-white/80">{site.location}</p>
                  <h1 className="mt-2 text-4xl sm:text-5xl font-semibold tracking-tight">
                    {site.name}
                  </h1>
                  <p className="mt-2 text-lg text-white/90">{site.title}</p>

                  <div className="mt-6 flex gap-3">
                    <a
                      href={site.links.resume}
                      className="rounded-md bg-blue-700 px-5 py-2.5 text-sm font-medium hover:bg-blue-800 transition-colors"
                    >
                      Download Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ABOUT (title + 3 icon blocks) */}
      <section id="about" className="py-14 bg-neutral-50">
        <Container>
          <h2 className="text-center text-2xl sm:text-3xl font-semibold">About Me</h2>
          <p className="mt-3 text-center text-neutral-600 max-w-3xl mx-auto">
            Passionate computer scientist with a focus on embedded systems and data science.
            Experienced in building innovative solutions and analyzing complex datasets.
          </p>

<div className="mt-10 grid gap-6 sm:grid-cols-3 text-center">
  {/* Embedded Systems */}
  <div className="group relative rounded-xl border border-neutral-200 bg-white p-6 overflow-hidden transition-colors duration-300">
    {/* gradient sweep */}
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-gradient-to-tl from-blue-500/0 via-blue-500/10 to-blue-500/0" />
    {/* border glow */}
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-blue-500/0
                    group-hover:ring-1 group-hover:ring-blue-500/20 transition-all duration-300" />

    <div className="relative">
      <div className="mx-auto text-neutral-800 transition-transform duration-300 ease-out
                      group-hover:-translate-y-0.5 group-hover:scale-[1.03]">
        <IconCode />
      </div>
      <h3 className="mt-4 font-semibold transition-colors duration-300 group-hover:text-blue-700">
        Embedded Systems
      </h3>
    </div>
  </div>

  {/* Data Science & ML */}
  <div className="group relative rounded-xl border border-neutral-200 bg-white p-6 overflow-hidden transition-colors duration-300">
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-gradient-to-tl from-blue-500/0 via-blue-500/10 to-blue-500/0" />
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-blue-500/0
                    group-hover:ring-1 group-hover:ring-blue-500/20 transition-all duration-300" />

    <div className="relative">
      <div className="mx-auto text-neutral-800 transition-transform duration-300 ease-out
                      group-hover:-translate-y-0.5 group-hover:scale-[1.03]">
        <IconDB />
      </div>
      <h3 className="mt-4 font-semibold transition-colors duration-300 group-hover:text-blue-700">
        Data Science & ML
      </h3>
    </div>
  </div>

  {/* Software Development */}
  <div className="group relative rounded-xl border border-neutral-200 bg-white p-6 overflow-hidden transition-colors duration-300">
    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                    bg-gradient-to-tl from-blue-500/0 via-blue-500/10 to-blue-500/0" />
    <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-blue-500/0
                    group-hover:ring-1 group-hover:ring-blue-500/20 transition-all duration-300" />

    <div className="relative">
      <div className="mx-auto text-neutral-800 transition-transform duration-300 ease-out
                      group-hover:-translate-y-0.5 group-hover:scale-[1.03]">
        <IconGear />
      </div>
      <h3 className="mt-4 font-semibold transition-colors duration-300 group-hover:text-blue-700">
        Software Development
      </h3>
    </div>
  </div>
</div>

        </Container>
      </section>

      {/* PROJECTS (3 cards) */}
      <section id="projects" className="py-14">
        <Container>
          <h2 className="text-center text-2xl sm:text-3xl font-semibold">My Projects</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

{/* CONTACT (Get in Touch) */}
<section id="contact" className="py-14 bg-neutral-50">
  <Container>
    <h2 className="text-center text-2xl sm:text-3xl font-semibold">Get In Touch</h2>
    <p className="mt-3 text-center text-neutral-600">
      Feel free to reach out for collaborations or any questions.
    </p>

    <div className="mt-10 grid gap-6 sm:grid-cols-3 text-center">
      {/* Email */}
      <a
        href={`mailto:${site.email}`}
        className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300
                   hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200"
      >
        <div className="mx-auto w-fit rounded-lg bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-blue-100">
          <Mail className="h-6 w-6 text-blue-700" />
        </div>
        <p className="mt-4 font-semibold">Email</p>
        <p className="mt-1 text-sm text-neutral-600 break-all">{site.email}</p>
      </a>

      {/* LinkedIn */}
      <a
        href={site.links.linkedin}
        target="_blank"
        rel="noreferrer"
        className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300
                   hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200"
      >
        <div className="mx-auto w-fit rounded-lg bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-blue-100">
          <Linkedin className="h-6 w-6 text-blue-700" />
        </div>
        <p className="mt-4 font-semibold">LinkedIn</p>
        <p className="mt-1 text-sm text-neutral-600">View profile</p>
      </a>

      {/* GitHub */}
      <a
        href={site.links.github}
        target="_blank"
        rel="noreferrer"
        className="group rounded-xl border border-neutral-200 bg-white p-6 transition-all duration-300
                   hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 hover:border-blue-200"
      >
        <div className="mx-auto w-fit rounded-lg bg-blue-50 p-3 transition-colors duration-300 group-hover:bg-blue-100">
          <Github className="h-6 w-6 text-blue-700" />
        </div>
        <p className="mt-4 font-semibold">GitHub</p>
        <p className="mt-1 text-sm text-neutral-600">See repositories</p>
      </a>
    </div>
  </Container>
</section>


      <Footer />
    </div>
  );
}
