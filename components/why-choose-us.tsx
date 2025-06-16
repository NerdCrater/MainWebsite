"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import ParallaxSection from "@/components/parallax-section"
import Card3D from "@/components/3d-card"
import MouseParallax from "@/components/mouse-parallax"

const reasons = [
  {
    title: "24/7 Support",
    description: "Our dedicated support team is available around the clock to address any issues or concerns.",
    icon: "/images/features/support.png",
  },
  {
    title: "Secure Solutions",
    description: "We prioritize security in all our solutions to protect your data and your customers.",
    icon: "/images/features/security.png",
  },
  {
    title: "Agile Process",
    description: "Our agile development process ensures quick iterations and adaptability to changing requirements.",
    icon: "/images/features/agile.png",
  },
  {
    title: "Client-First Mindset",
    description: "We put our clients' needs first and work collaboratively to achieve their goals.",
    icon: "/images/features/client.png",
  },
  {
    title: "Proven Track Record",
    description:
      "With years of experience and numerous successful projects, we have a proven track record of excellence.",
    icon: "/images/features/track-record.png",
  },
]

export default function WhyChooseUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-10"></div>

      {/* Floating elements in background */}
      <MouseParallax className="absolute inset-0 pointer-events-none" strength={20}>
        <motion.div
          className="absolute top-[10%] left-[10%] w-32 h-32 rounded-full bg-gradient-primary opacity-10"
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
          className="absolute bottom-[20%] right-[15%] w-40 h-40 rounded-full bg-gradient-secondary opacity-10"
          animate={{
            y: [0, -40, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 1,
          }}
        />
        <motion.div
          className="absolute top-[40%] right-[30%] w-24 h-24 rounded-full bg-gradient-accent opacity-10"
          animate={{
            y: [0, 20, 0],
            x: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 7,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </MouseParallax>

      <div className="container mx-auto px-4 relative z-10">
        <ParallaxSection offset={[0, 0.5]} targetScale={1} targetOpacity={1}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary">What Makes NerdCrater Different?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with a client-focused approach to deliver exceptional results.
            </p>
          </motion.div>
        </ParallaxSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <ParallaxSection key={index} offset={[0, 0.5]} targetScale={1} targetOpacity={1} className="h-full">
              <Card3D className="h-full">
                <div className="bg-card rounded-xl p-6 shadow-lg border border-transparent h-full backdrop-blur-sm">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative w-20 h-20 mb-6 rounded-full overflow-hidden">
                      <Image src={reason.icon || "/placeholder.svg"} alt={reason.title} fill className="object-cover" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-primary opacity-20"
                        animate={{
                          opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                          delay: index * 0.2,
                        }}
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-3 animated-text">{reason.title}</h3>
                    <p className="text-muted-foreground">{reason.description}</p>
                  </div>
                </div>
              </Card3D>
            </ParallaxSection>
          ))}
        </div>
      </div>
    </section>
  )
}
