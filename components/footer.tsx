import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import SocialIcons from "./social-icons"
import { FadeIn, StaggerContainer } from "./animations"
import { Code, Terminal, Server, Database, Globe, Cpu } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-[#030E4F] border-t border-[#F49F1C]/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FadeIn>
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="relative h-10 w-40">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/N_20250526_230751_0000-XNojGRCojowR9cBa4DKYdMyDSG1Vym.png"
                    alt="NerdCrater Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </Link>
              <p className="text-gray-300 mb-4">
                Innovative IT solutions for businesses of all sizes. We help you transform your ideas into reality with
                our developer-first approach.
              </p>
              <SocialIcons />
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
              <StaggerContainer className="space-y-2">
                <Link href="/" className="text-gray-300 hover:text-[#F49F1C] transition-colors block">
                  Home
                </Link>
                <Link href="/about" className="text-gray-300 hover:text-[#F49F1C] transition-colors block">
                  About Us
                </Link>
                <Link href="/services" className="text-gray-300 hover:text-[#F49F1C] transition-colors block">
                  Services
                </Link>
                <Link href="/portfolio" className="text-gray-300 hover:text-[#F49F1C] transition-colors block">
                  Portfolio
                </Link>
                <Link href="/blog" className="text-gray-300 hover:text-[#F49F1C] transition-colors block">
                  Blog
                </Link>
                <Link href="/contact" className="text-gray-300 hover:text-[#F49F1C] transition-colors block">
                  Contact
                </Link>
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Services</h3>
              <StaggerContainer className="space-y-2">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-[#F49F1C]" />
                  <Link
                    href="/services/web-development"
                    className="text-gray-300 hover:text-[#F49F1C] transition-colors"
                  >
                    Web Development
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-[#F49F1C]" />
                  <Link
                    href="/services/mobile-app-development"
                    className="text-gray-300 hover:text-[#F49F1C] transition-colors"
                  >
                    Mobile App Development
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-[#F49F1C]" />
                  <Link href="/services/ui-ux-design" className="text-gray-300 hover:text-[#F49F1C] transition-colors">
                    UI/UX Design
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Cpu className="h-4 w-4 text-[#F49F1C]" />
                  <Link
                    href="/services/ai-powered-applications"
                    className="text-gray-300 hover:text-[#F49F1C] transition-colors"
                  >
                    AI Solutions
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Server className="h-4 w-4 text-[#F49F1C]" />
                  <Link
                    href="/services/cloud-solutions"
                    className="text-gray-300 hover:text-[#F49F1C] transition-colors"
                  >
                    Cloud Solutions
                  </Link>
                </div>
                <div className="flex items-center gap-2">
                  <Database className="h-4 w-4 text-[#F49F1C]" />
                  <Link href="/services/devops" className="text-gray-300 hover:text-[#F49F1C] transition-colors">
                    DevOps & CI/CD
                  </Link>
                </div>
              </StaggerContainer>
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div>
              <h3 className="font-bold text-lg mb-4 text-white">Newsletter</h3>
              <p className="text-gray-300 mb-4">Subscribe to our newsletter to receive updates and insights.</p>
              <div className="flex gap-2">
                <Input
                  placeholder="Your email"
                  type="email"
                  className="bg-[#030E4F]/50 border-[#F49F1C]/30 focus:border-[#F49F1C] text-white"
                />
                <Button className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">Subscribe</Button>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="border-t border-[#F49F1C]/20 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">© {new Date().getFullYear()} NerdCrater. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-sm text-gray-300 hover:text-[#F49F1C] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-sm text-gray-300 hover:text-[#F49F1C] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
