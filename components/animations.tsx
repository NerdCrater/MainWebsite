"use client"

import React, { type ReactNode } from "react"
import { motion } from "framer-motion"

interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number
  once?: boolean
}

export const FadeIn = ({
  children,
  delay = 0,
  duration = 0.5,
  className = "",
  direction = "up",
  distance = 20,
  once = true,
}: FadeInProps) => {
  const getDirectionOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      default:
        return {}
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...getDirectionOffset() }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface PopInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
  once?: boolean
}

export const PopIn = ({ children, delay = 0, duration = 0.5, className = "", once = true }: PopInProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once }}
      transition={{ duration, delay, ease: [0.175, 0.885, 0.32, 1.275] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface HoverAnimationProps {
  children: ReactNode
  className?: string
  type?: "scale" | "lift" | "glow" | "border" | "none"
  scale?: number
  duration?: number
}

export const HoverAnimation = ({
  children,
  className = "",
  type = "scale",
  scale = 1.05,
  duration = 0.2,
}: HoverAnimationProps) => {
  const getHoverEffect = () => {
    switch (type) {
      case "scale":
        return { scale }
      case "lift":
        return { y: -5 }
      case "glow":
        return { boxShadow: "0 0 15px rgba(244, 159, 28, 0.5)" }
      case "border":
        return { borderColor: "#F49F1C" }
      default:
        return {}
    }
  }

  return (
    <motion.div whileHover={getHoverEffect()} transition={{ duration, ease: "easeOut" }} className={className}>
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerDelay?: number
  once?: boolean
}

export const StaggerContainer = ({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) => {
  const childrenArray = React.Children.toArray(children)

  return (
    <div className={className}>
      {childrenArray.map((child, index) => (
        <FadeIn key={index} delay={delay + index * staggerDelay} once={once}>
          {child}
        </FadeIn>
      ))}
    </div>
  )
}

interface AnimatedCounterProps {
  end: number
  duration?: number
  className?: string
  suffix?: string
  prefix?: string
}

export const AnimatedCounter = ({
  end,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
}: AnimatedCounterProps) => {
  const [count, setCount] = React.useState(0)
  const countRef = React.useRef(null)

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime: number
          let animationFrame: number

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
            setCount(Math.floor(progress * end))

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate)
            }
          }

          animationFrame = requestAnimationFrame(animate)

          return () => {
            if (animationFrame) {
              cancelAnimationFrame(animationFrame)
            }
          }
        }
      },
      { threshold: 0.1 },
    )

    if (countRef.current) {
      observer.observe(countRef.current)
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current)
      }
    }
  }, [end, duration])

  return (
    <span ref={countRef} className={className}>
      {prefix}
      {count}
      {suffix}
    </span>
  )
}
