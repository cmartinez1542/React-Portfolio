import Container from "./Container";
import { site } from "../data/site";

const items = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-neutral-950 text-white">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <a href="#" className="font-semibold tracking-tight">
            {site.name}
          </a>

          <nav className="hidden sm:flex items-center gap-8 text-sm text-white/80">
            {items.map((i) => (
              <a
                key={i.href}
                href={i.href}
                className="hover:text-white transition-colors"
              >
                {i.label}
              </a>
            ))}
          </nav>

          <a
            href={site.links.resume}
            className="rounded-md bg-white/10 px-3 py-1.5 text-sm hover:bg-white/15 transition-colors"
          >
            Resume
          </a>
        </div>
      </Container>
    </header>
  );
}
