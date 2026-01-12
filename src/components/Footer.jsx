import Container from "./Container";
import { site } from "../data/site";
import { Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <Container>
        <div className="py-10 flex flex-col items-center text-center gap-4">
          <div className="flex gap-6">
            <a
              href={`mailto:${site.email}`}
              className="text-white/80 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="text-white/80 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} {site.name}. All Rights Reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
