"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X, Code, Terminal, Github,PhoneCallIcon ,MailIcon} from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import SocialIcons from "./social-icons"
import { motion } from "framer-motion"
import Image from "next/image"


const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      // className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      //   isScrolled ? "bg-[#030E4F]/90 backdrop-blur-md shadow-md" : "bg-[#030E4F]"
      // }`}
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
  isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-[#ebecf1] backdrop-blur-md shadow-md"
}`}

    >
      {/* Quick access bar */}
      <div className="hidden md:flex items-center justify-between border-b border-[#F49F1C]/20 px-4 py-2">
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2 text-[#030E4F]">
            <PhoneCallIcon className="h-4 w-4 text-[#F49F1C]" />
            <span>+91-9671626662</span>
          </div>  
          <div className="flex items-center gap-2 text-[#030E4F]">
            <MailIcon className="h-4 w-4 text-[#F49F1C]" />
            <span>contact@nerdcrater.com</span>
          </div>
        </div>
        <SocialIcons />
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-32  w-40">
            <Image
              src = "/N_20250526_230751_0000-removebg-preview.png" 
              alt="NerdCrater Logo"
              fill
              className="object-contain"
            />
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {/* {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[#F49F1C] relative group 
                ${
                pathname === link.href ? "text-[#F49F1C]" : "text-gray-300"
              }`
            }
            >
              {link.label}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F49F1C] group-hover:w-full transition-all duration-300"
                initial={{ width: pathname === link.href ? "100%" : "0%" }}
                animate={{ width: pathname === link.href ? "100%" : "0%" }}
                whileHover={{ width: "100%" }}
              />
            </Link>
          ))} */}
          {navLinks.map((link) => (
  <Link
    key={link.href}
    href={link.href}
    className={`text-sm font-medium transition-colors relative group 
      ${pathname === link.href ? "text-[#F49F1C]" : "text-[#030E4F]"} hover:text-[#F49F1C]`}
  >
    {link.label}
    <motion.span
      className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F49F1C] group-hover:w-full transition-all duration-300"
      initial={{ width: pathname === link.href ? "100%" : "0%" }}
      animate={{ width: pathname === link.href ? "100%" : "0%" }}
      whileHover={{ width: "100%" }}
    />
  </Link>
))}

        </nav>

        <div className="flex items-center gap-4">
          {/* <ModeToggle /> */}
          {/* <Button
            asChild
            className="hidden md:inline-flex bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold"
          >
            <Link href="/contact">
              <Github className="mr-2 h-4 w-4" /> Get Started
            </Link>
          </Button> */}

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-[#030E4F] border-[#F49F1C]/20">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between border-b border-[#F49F1C]/20 pb-4">
                  <Link href="/" className="relative h-8 w-32">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/N_20250526_230751_0000-XNojGRCojowR9cBa4DKYdMyDSG1Vym.png"
                      alt="NerdCrater Logo"
                      fill
                      className="object-contain"
                    />
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white">
                      <X className="h-6 w-6" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>
                <nav className="flex flex-col gap-4 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`text-lg font-medium transition-colors hover:text-[#F49F1C] ${
                        pathname === link.href ? "text-[#F49F1C]" : "text-gray-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                  <Button asChild className="w-full bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
                    <Link href="/contact">
                      <Github className="mr-2 h-4 w-4" /> Get Started
                    </Link>
                  </Button>
                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <Terminal className="h-4 w-4 text-[#F49F1C]" />
                      <span>Developer-First</span>
                    </div>
                    <SocialIcons />
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
