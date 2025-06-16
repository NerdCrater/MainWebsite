"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import ReactDOM from "react-dom"

interface FloatingElementProps {
  children: React.ReactNode
  target: HTMLElement | null
  placement?: "top" | "bottom" | "left" | "right"
  offset?: number
}

const FloatingElement: React.FC<FloatingElementProps> = ({ children, target, placement = "bottom", offset = 10 }) => {
  const [position, setPosition] = useState({ top: 0, left: 0 })
  const floatingElementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!target) return

    const updatePosition = () => {
      if (!target || !floatingElementRef.current) return

      const targetRect = target.getBoundingClientRect()
      const floatingElementRect = floatingElementRef.current.getBoundingClientRect()

      let newTop = 0
      let newLeft = 0

      switch (placement) {
        case "top":
          newTop = targetRect.top - floatingElementRect.height - offset
          newLeft = targetRect.left + (targetRect.width - floatingElementRect.width) / 2
          break
        case "bottom":
          newTop = targetRect.bottom + offset
          newLeft = targetRect.left + (targetRect.width - floatingElementRect.width) / 2
          break
        case "left":
          newTop = targetRect.top + (targetRect.height - floatingElementRect.height) / 2
          newLeft = targetRect.left - floatingElementRect.width - offset
          break
        case "right":
          newTop = targetRect.top + (targetRect.height - floatingElementRect.height) / 2
          newLeft = targetRect.right + offset
          break
        default:
          newTop = targetRect.bottom + offset
          newLeft = targetRect.left + (targetRect.width - floatingElementRect.width) / 2
      }

      setPosition({
        top: newTop,
        left: newLeft,
      })
    }

    updatePosition()

    if (typeof window !== "undefined") {
      window.addEventListener("resize", updatePosition)
      window.addEventListener("scroll", updatePosition)

      return () => {
        window.removeEventListener("resize", updatePosition)
        window.removeEventListener("scroll", updatePosition)
      }
    }
  }, [target, placement, offset])

  if (!target) {
    return null
  }

  return ReactDOM.createPortal(
    <div
      ref={floatingElementRef}
      style={{
        position: "fixed",
        top: position.top,
        left: position.left,
        zIndex: 1000,
      }}
    >
      {children}
    </div>,
    document.body,
  )
}

export default FloatingElement
