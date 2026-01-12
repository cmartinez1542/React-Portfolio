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
                className="relative px-1 py-1 text-sm text-white/80 hover:text-white transition-colors group"
              >
                {i.label}
                <span
                  className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-blue-500
                            transition-all duration-300 ease-out
                            group-hover:w-full group-hover:left-0"
                />
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
