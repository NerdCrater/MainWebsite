import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react";
import { HoverAnimation } from "./animations";

export default function ProfileSocialIcons({
  linkedin,
  facebook,
  twitter,
  github,
  instagram,
}: {
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
}) {
  return (
    <div className="flex items-center space-x-3">
      {github && (
        <HoverAnimation type="scale" scale={1.2}>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </HoverAnimation>
      )}
      {twitter && (
        <HoverAnimation type="scale" scale={1.2}>
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="h-4 w-4" />
          </a>
        </HoverAnimation>
      )}
      {linkedin && (
        <HoverAnimation type="scale" scale={1.2}>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </HoverAnimation>
      )}

      {facebook && (
        <HoverAnimation type="scale" scale={1.2}>
          <a
            href=" https://www.facebook.com/share/16ftALx6Fi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="h-4 w-4" />
          </a>
        </HoverAnimation>
      )}
      {instagram && (
        <HoverAnimation type="scale" scale={1.2}>
          <a
            href=" https://www.instagram.com/nerdcrater?igsh=MTFrY3cyN2ZrMG94NA=="
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-primary transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="h-4 w-4" />
          </a>
        </HoverAnimation>
      )}
    </div>
  );
}
