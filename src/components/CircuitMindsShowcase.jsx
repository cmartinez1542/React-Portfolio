import React from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  CheckCircle2,
  Database,
  ExternalLink,
  GitBranch,
  GraduationCap,
  Layers,
  LockKeyhole,
  MonitorSmartphone,
  Server,
  Users,
} from "lucide-react";

const platformFlow = [
  {
    title: "Public Website",
    text: "Marketing pages and course information for visitors.",
    icon: MonitorSmartphone,
  },
  {
    title: "Student Portal",
    text: "Authenticated user experience for students and platform users.",
    icon: Users,
  },
  {
    title: "Backend API",
    text: "NestJS services for platform logic, routing, and data workflows.",
    icon: Server,
  },
  {
    title: "Supabase Database",
    text: "PostgreSQL data layer with authentication and data management.",
    icon: Database,
  },
];

const modules = [
  {
    title: "Courses",
    text: "Structured learning content and course data.",
    icon: BookOpen,
  },
  {
    title: "Sessions",
    text: "Session-based learning workflows and scheduling logic.",
    icon: CalendarDays,
  },
  {
    title: "Enrollments",
    text: "Student enrollment tracking and platform participation.",
    icon: Users,
  },
  {
    title: "Authentication",
    text: "Supabase-powered login and protected access workflows.",
    icon: LockKeyhole,
  },
  {
    title: "Monorepo Structure",
    text: "Separate web, portal, and API services managed together.",
    icon: GitBranch,
  },
  {
    title: "Full-Stack Integration",
    text: "Frontend, backend, authentication, and database layers connected.",
    icon: Layers,
  },
];

const stack = [
  "Next.js",
  "NestJS",
  "TypeScript",
  "Supabase",
  "PostgreSQL",
  "Monorepo",
  "Authentication",
  "API Development",
];

export default function CircuitMindsShowcase() {
  return (
    <section id="circuit-minds-showcase" className="py-14 bg-neutral-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-900/30 bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 p-4 shadow-2xl shadow-cyan-950/30 sm:p-6">
          <div className="pointer-events-none absolute left-10 top-10 h-44 w-44 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="pointer-events-none absolute bottom-10 right-10 h-56 w-56 rounded-full bg-blue-500/10 blur-3xl" />

          <div className="relative">
            {/* Header + product screenshot */}
<div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/80 to-cyan-950/50 p-4 backdrop-blur sm:p-6">
  <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    {/* Left project intro */}
    <div className="flex flex-col justify-center p-2 sm:p-4 lg:p-6">
      <div className="inline-flex w-fit items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium tracking-wide text-cyan-200">
        <GraduationCap className="h-4 w-4" />
        Full-Stack Platform Project
      </div>

      <h2 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
        Circuit Minds
      </h2>

      <p className="mt-2 text-lg font-medium text-cyan-300">
        Education platform with web, portal, API, and database layers
      </p>

      <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
        Circuit Minds is a full-stack education platform built with a
        monorepo architecture. The project includes a public website,
        student portal functionality, backend API services, Supabase
        authentication, and PostgreSQL-powered data management.
      </p>

      <div className="mt-8 grid gap-3 sm:grid-cols-3">
        <StatCard title="Web" text="public site" />
        <StatCard title="Portal" text="student access" />
        <StatCard title="API + DB" text="backend layer" />
      </div>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="https://github.com/davidmtzh/circuit-minds"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
        >
          View Repository
          <ExternalLink className="h-4 w-4" />
        </a>

        <a
          href="https://circuit-minds-web.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/10 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-white/15"
        >
          Live Demo
          <ExternalLink className="h-4 w-4" />
        </a>
      </div>
    </div>

    {/* Right project preview */}
    <div className="p-2 sm:p-4 lg:p-6">
      <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-3 shadow-2xl shadow-cyan-500/10">
        <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
          <span className="h-3 w-3 rounded-full bg-red-400/80" />
          <span className="h-3 w-3 rounded-full bg-yellow-300/80" />
          <span className="h-3 w-3 rounded-full bg-green-400/80" />

          <span className="ml-3 rounded-full border border-cyan-300/20 bg-cyan-400/10 px-3 py-1 text-xs text-cyan-200">
            circuit-minds-web.vercel.app
          </span>
        </div>

        <img
          src="/React-Portfolio/projects/circuit-minds-website.png"
          alt="Circuit Minds website or student portal screenshot"
          className="h-[300px] w-full rounded-b-2xl object-cover object-top sm:h-[430px]"
          loading="lazy"
        />
      </div>

      <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/45 p-4">
        <p className="text-sm font-semibold text-white">
          Platform preview
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          A product-style interface for an education platform with
          public pages, portal access, authentication, and backend
          data workflows.
        </p>
      </div>
    </div>
  </div>
</div>

            {/* Platform architecture */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white">
                  Platform architecture
                </h3>
                <p className="mt-1 text-sm text-slate-300">
                  A simple view of how the main parts of the platform connect.
                </p>
              </div>

              <div className="grid gap-4 lg:grid-cols-4">
                {platformFlow.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.title} className="relative">
                      <div className="h-full rounded-2xl border border-white/10 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-400/10">
                        <div className="mb-4 inline-flex rounded-xl bg-cyan-400/10 p-3 text-cyan-200 ring-1 ring-cyan-300/15">
                          <Icon className="h-6 w-6" />
                        </div>

                        <h4 className="font-semibold text-white">
                          {item.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {item.text}
                        </p>
                      </div>

                      {index < platformFlow.length - 1 && (
                        <div className="hidden lg:absolute lg:-right-5 lg:top-1/2 lg:z-10 lg:flex lg:h-10 lg:w-10 lg:-translate-y-1/2 lg:items-center lg:justify-center lg:rounded-full lg:border lg:border-cyan-300/20 lg:bg-slate-950 lg:text-cyan-300 lg:shadow-sm">
                          <ArrowRight className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Product modules + technical scope */}
            <div className="mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur">
                <h3 className="text-xl font-semibold text-white">
                  Product modules
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-300">
                  The platform is structured like a real product, with modules
                  connected across the frontend, backend, authentication, and
                  database layers.
                </p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {modules.map((module) => {
                    const Icon = module.icon;

                    return (
                      <div
                        key={module.title}
                        className="rounded-2xl border border-white/10 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-cyan-400/10"
                      >
                        <div className="mb-3 inline-flex rounded-xl bg-cyan-400/10 p-2 text-cyan-200 ring-1 ring-cyan-300/15">
                          <Icon className="h-5 w-5" />
                        </div>

                        <h4 className="font-semibold text-white">
                          {module.title}
                        </h4>

                        <p className="mt-2 text-sm leading-6 text-slate-300">
                          {module.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-300/15 bg-cyan-400/10 p-6 backdrop-blur">
                <h3 className="text-xl font-semibold text-white">
                  Technical scope
                </h3>

                <div className="mt-5 space-y-3">
                  <ScopeLine text="Built a multi-app monorepo with separate web, portal, and API responsibilities." />
                  <ScopeLine text="Developed backend services for courses, sessions, enrollments, and authentication workflows." />
                  <ScopeLine text="Integrated Supabase and PostgreSQL for user access and data management." />
                  <ScopeLine text="Worked through routing, environment configuration, API behavior, and deployment preparation." />
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-semibold uppercase tracking-wide text-cyan-200">
                    Technology stack
                  </h4>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-cyan-300/20 bg-white p-2 text-sm font-medium text-cyan-100"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Final outcome */}
            <div className="mt-6 rounded-3xl border border-white/10 bg-white p-6 backdrop-blur">
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    Final outcome
                  </h3>

                  <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-300">
                    Circuit Minds demonstrates full-stack software development
                    by combining a public website, student portal structure,
                    backend API services, authentication, and database
                    integration into one organized education platform.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/davidmtzh/circuit-minds"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-cyan-300"
                  >
                    View Repository
                    <ExternalLink className="h-4 w-4" />
                  </a>

                  <a
                    href="https://circuit-minds-web.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-md border border-white/15 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
                  >
                    Live Demo
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white p-4 backdrop-blur">
      <p className="text-2xl font-semibold text-white">{title}</p>
      <p className="mt-1 text-xs text-cyan-100/65">{text}</p>
    </div>
  );
}

function ScopeLine({ text }) {
  return (
    <div className="flex gap-3 rounded-2xl border border-white/10 bg-white p-4">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
      <p className="text-sm leading-6 text-slate-300">{text}</p>
    </div>
  );
}