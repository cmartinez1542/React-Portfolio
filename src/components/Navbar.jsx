import Container from "./Container";
import { site } from "../data/site";

const items = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200/60 dark:border-neutral-800/60 bg-white/70 dark:bg-neutral-950/70 backdrop-blur">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            {site.name}
          </a>

          <nav className="hidden sm:flex gap-6 text-sm">
            {items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="text-neutral-700 hover:text-neutral-950 dark:text-neutral-300 dark:hover:text-white"
              >
                {i.label}
              </a>
            ))}
          </nav>

          <a
            href={site.links.resume}
            className="text-sm rounded-full px-4 py-2 border border-neutral-200 dark:border-neutral-800 hover:bg-neutral-50 dark:hover:bg-neutral-900"
          >
            Resume
          </a>
        </div>
      </Container>
    </header>
  );
}
