import Container from "./Container";
import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 py-10">
      <Container>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between text-sm text-neutral-600 dark:text-neutral-300">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-4">
            <a className="underline" href={site.links.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="underline" href={site.links.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="underline" href={`mailto:${site.email}`}>
              Email
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
