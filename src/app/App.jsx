import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import ProjectCard from "../components/ProjectCard";
import { site } from "../data/site";
import { projects } from "../data/projects";

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
    <svg viewBox="0 0 24 24" className="h-10 w-10" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 15.5A3.5 3.5 0 1 0 12 8.5a3.5 3.5 0 0 0 0 7z" />
      <path d="M19.4 15a7.8 7.8 0 0 0 .1-2l2-1.2-2-3.4-2.3.5a7.6 7.6 0 0 0-1.7-1l-.3-2.3H10.8l-.3 2.3a7.6 7.6 0 0 0-1.7 1l-2.3-.5-2 3.4 2 1.2a7.8 7.8 0 0 0 .1 2l-2 1.2 2 3.4 2.3-.5c.5.4 1.1.7 1.7 1l.3 2.3h4.4l.3-2.3c.6-.3 1.2-.6 1.7-1l2.3.5 2-3.4-2-1.2z" />
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
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <div className="mx-auto text-neutral-800">
                <IconCode />
              </div>
              <h3 className="mt-4 font-semibold">Embedded Systems</h3>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <div className="mx-auto text-neutral-800">
                <IconDB />
              </div>
              <h3 className="mt-4 font-semibold">Data Science & ML</h3>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <div className="mx-auto text-neutral-800">
                <IconGear />
              </div>
              <h3 className="mt-4 font-semibold">Software Development</h3>
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
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <p className="font-semibold">Email</p>
              <a className="mt-2 block text-neutral-600 underline" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <p className="font-semibold">LinkedIn</p>
              <a className="mt-2 block text-neutral-600 underline" href={site.links.linkedin} target="_blank" rel="noreferrer">
                linkedin.com
              </a>
            </div>
            <div className="rounded-xl border border-neutral-200 bg-white p-6">
              <p className="font-semibold">GitHub</p>
              <a className="mt-2 block text-neutral-600 underline" href={site.links.github} target="_blank" rel="noreferrer">
                github.com
              </a>
            </div>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
}
