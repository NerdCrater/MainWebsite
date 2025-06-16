import { Github, Twitter, Linkedin, Facebook, Instagram } from "lucide-react"
import { HoverAnimation } from "./animations"

export default function SocialIcons() {
  return (
    <div className="flex items-center space-x-3">
      <HoverAnimation type="scale" scale={1.2}>
        <a
          href="https://github.com/NerdCrater"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#030E4F] hover:text-[#F49F1C] transition-colors"
          aria-label="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
      </HoverAnimation>
      <HoverAnimation type="scale" scale={1.2}>
        <a
          href="https://x.com/Nerdcrater?t=N5egW-l_u5qGtOdEZVsVkw&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#030E4F] hover:text-[#F49F1C] transition-colors"
          aria-label="Twitter"
        >
          <Twitter className="h-4 w-4" />
        </a>
      </HoverAnimation>
      <HoverAnimation type="scale" scale={1.2}>
        <a
          href="https://www.linkedin.com/in/nerd-crater-34bb19368?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#030E4F] hover:text-[#F49F1C] transition-colors"
          aria-label="LinkedIn"
        >
          <Linkedin className="h-4 w-4" />
        </a>
      </HoverAnimation>
      <HoverAnimation type="scale" scale={1.2}>
        <a
          href=" https://www.facebook.com/share/16ftALx6Fi/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#030E4F] hover:text-[#F49F1C] transition-colors"
          aria-label="Facebook"
        >
          <Facebook className="h-4 w-4" />
        </a>
      </HoverAnimation>
      <HoverAnimation type="scale" scale={1.2}>
        <a
          href=" https://www.instagram.com/nerdcrater?igsh=MTFrY3cyN2ZrMG94NA=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#030E4F] hover:text-[#F49F1C] transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="h-4 w-4" />
        </a>
      </HoverAnimation>
    </div>
  )
}
