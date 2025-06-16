"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface ParallaxSectionProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

const ParallaxSection: React.FC<ParallaxSectionProps> = ({ children, strength = 0.2, className = "" }) => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        if (sectionRef.current) {
          const rect = sectionRef.current.getBoundingClientRect()
          const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0

          if (isVisible) {
            const scrollY = window.scrollY
            const sectionTop = sectionRef.current.offsetTop
            const offset = (scrollY - sectionTop) * strength

            sectionRef.current.style.transform = `translateY(${offset}px)`
          } else {
            sectionRef.current.style.transform = `translateY(0px)`
          }
        }
      }

      window.addEventListener("scroll", handleScroll)

      return () => {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [strength])

  return (
    <div ref={sectionRef} className={`parallax-section ${className}`}>
      {children}
    </div>
  )
}

export default ParallaxSection
