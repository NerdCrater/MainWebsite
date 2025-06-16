"use client"

import { useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"
import { motion, useInView } from "framer-motion"
import ParallaxSection from "@/components/parallax-section"
import MouseParallax from "@/components/mouse-parallax"

export default function FeaturedProjects() {
  // Get only the first 3 projects for the featured section
  const featuredProjects = projects.slice(0, 3)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="container mx-auto px-4 py-20 relative overflow-hidden">
      {/* Floating elements in background */}
      <MouseParallax className="absolute inset-0 pointer-events-none" strength={20}>
        <motion.div
          className="absolute top-[20%] left-[20%] w-40 h-40 rounded-full bg-gradient-primary opacity-5"
          animate={{
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-[10%] right-[10%] w-32 h-32 rounded-full bg-gradient-secondary opacity-5"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
      </MouseParallax>

      <ParallaxSection offset={[0, 0.5]} targetScale={1} targetOpacity={1}>
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold mb-4 text-gradient-primary">Recent Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Take a look at some of our recent work and see how we've helped businesses achieve their goals.
          </p>
        </motion.div>
      </ParallaxSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {featuredProjects.map((project, index) => (
          <ParallaxSection key={project.id} offset={[0, 0.5]} targetScale={1} targetOpacity={1} className="h-full">
            <ProjectCard project={project} />
          </ParallaxSection>
        ))}
      </div>

      <ParallaxSection offset={[0, 0.5]} targetScale={1} targetOpacity={1}>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
            <Link href="/portfolio">View All Projects</Link>
          </Button>
        </motion.div>
      </ParallaxSection>
    </section>
  )
}
