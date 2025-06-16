"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface MouseParallaxProps {
  children: React.ReactNode
  strength?: number
  className?: string
}

const MouseParallax: React.FC<MouseParallaxProps> = ({ children, strength = 20, className = "" }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseMove = (event: MouseEvent) => {
        if (containerRef.current) {
          const rect = containerRef.current.getBoundingClientRect()
          const x = event.clientX - rect.left
          const y = event.clientY - rect.top
          const centerX = rect.width / 2
          const centerY = rect.height / 2

          const deltaX = (x - centerX) / centerX
          const deltaY = (y - centerY) / centerY

          setOffset({
            x: deltaX * strength,
            y: deltaY * strength,
          })
        }
      }

      const element = containerRef.current
      if (element) {
        element.addEventListener("mousemove", handleMouseMove)

        return () => {
          element.removeEventListener("mousemove", handleMouseMove)
        }
      }
    }
  }, [strength])

  return (
    <div
      className={`mouse-parallax-container ${className}`}
      ref={containerRef}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <div
        className="mouse-parallax-content"
        style={{
          position: "relative",
          transform: `translate(${offset.x}px, ${offset.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default MouseParallax
