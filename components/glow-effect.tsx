"use client"

import type React from "react"
import { useEffect, useRef } from "react"

interface GlowEffectProps {
  className?: string
  glowColor?: string
}

const GlowEffect: React.FC<GlowEffectProps> = ({ className = "", glowColor = "rgba(255, 255, 255, 0.5)" }) => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return

        const container = containerRef.current
        const rect = container.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        container.style.setProperty("--x", `${x}px`)
        container.style.setProperty("--y", `${y}px`)
      }

      const element = containerRef.current
      if (element) {
        element.addEventListener("mousemove", handleMouseMove)

        return () => {
          element.removeEventListener("mousemove", handleMouseMove)
        }
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className={`glow-effect-container ${className}`}
      style={{
        "--glow-color": glowColor,
      }}
    >
      <style jsx>{`
        .glow-effect-container {
          position: relative;
          overflow: hidden;
        }

        .glow-effect-container::before {
          content: "";
          display: block;
          position: absolute;
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: var(--glow-color);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.3s ease;
          transform: translate(-50%, -50%);
          left: var(--x, 0);
          top: var(--y, 0);
        }

        .glow-effect-container:hover::before {
          opacity: 1;
        }
      `}</style>
    </div>
  )
}

export default GlowEffect
