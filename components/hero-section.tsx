"use client"

import { useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { useThemeContext } from "@/context/theme-context"
import Scene3D from "@/components/3d-scene"
import MouseParallax from "@/components/mouse-parallax"
import FloatingElement from "@/components/floating-element"

export default function HeroSection() {
  const { themeColors } = useThemeContext()
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 200])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
      {/* 3D animated background */}
      <Scene3D className="opacity-30" />

      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8 py-12 relative z-10">
        <MouseParallax className="flex flex-col justify-center" strength={20}>
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animated-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Full-Stack IT Solutions That Scale with You
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-muted-foreground"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Future-ready web, mobile, and AI solutions – powered by innovation. Let's build the future together with
            NerdCrater.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button size="lg" asChild className="bg-gradient-primary hover:opacity-90 transition-opacity">
              <Link href="/contact">Get Started</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="animated-border">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </MouseParallax>

        <div className="relative h-[400px] lg:h-auto">
          <MouseParallax className="absolute inset-0" strength={40}>
            {/* 3D animated elements */}
            <div className="relative w-full h-full">
              <FloatingElement
                className="absolute top-[10%] left-[10%] w-20 h-20 bg-gradient-primary rounded-lg opacity-80"
                duration={6}
                distance={30}
                rotate={[5, 10, 15]}
              />

              <FloatingElement
                className="absolute bottom-[20%] right-[15%] w-24 h-24 bg-gradient-secondary rounded-full opacity-70"
                duration={8}
                distance={40}
                delay={1}
                rotate={[10, 5, 0]}
              />

              <FloatingElement
                className="absolute top-[40%] right-[10%] w-16 h-16 bg-gradient-accent rounded-lg opacity-80"
                duration={7}
                distance={25}
                delay={0.5}
                rotate={[0, 15, 5]}
              />

              {/* Central 3D object */}
              <motion.div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64"
                animate={{
                  rotateY: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              >
                <div className="w-full h-full perspective-800 transform-style-3d">
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary rounded-lg flex items-center justify-center text-white"
                    style={{ transform: "translateZ(80px)" }}
                  >
                    <span className="text-6xl">💻</span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-secondary rounded-lg flex items-center justify-center text-white"
                    style={{ transform: "rotateY(180deg) translateZ(80px)" }}
                  >
                    <span className="text-6xl">📱</span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-accent rounded-lg flex items-center justify-center text-white"
                    style={{ transform: "rotateY(90deg) translateZ(80px)" }}
                  >
                    <span className="text-6xl">🤖</span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-primary rounded-lg flex items-center justify-center text-white"
                    style={{ transform: "rotateY(-90deg) translateZ(80px)" }}
                  >
                    <span className="text-6xl">🎨</span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-secondary rounded-lg flex items-center justify-center text-white"
                    style={{ transform: "rotateX(90deg) translateZ(80px)" }}
                  >
                    <span className="text-6xl">🚀</span>
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-accent rounded-lg flex items-center justify-center text-white"
                    style={{ transform: "rotateX(-90deg) translateZ(80px)" }}
                  >
                    <span className="text-6xl">⚙️</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </MouseParallax>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-0 right-0 flex justify-center"
        style={{ y, opacity }}
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14" />
          <path d="m19 12-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  )
}
