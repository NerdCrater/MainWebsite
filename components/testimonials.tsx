"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/lib/data"
import { motion, useInView, AnimatePresence } from "framer-motion"
import ParallaxSection from "@/components/parallax-section"
import Card3D from "@/components/3d-card"
import MouseParallax from "@/components/mouse-parallax"

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!autoplay || !isInView) return

    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, isInView])

  // Generate client avatars
  const clientAvatars = testimonials.map((testimonial) => {
    const initials = testimonial.initial
    const colors = ["bg-blue-500", "bg-purple-500", "bg-green-500", "bg-red-500", "bg-yellow-500", "bg-pink-500"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)]

    return {
      initials,
      color: randomColor,
    }
  })

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 animated-bg opacity-10"></div>

      {/* Floating elements in background */}
      <MouseParallax className="absolute inset-0 pointer-events-none" strength={30}>
        {clientAvatars.map((avatar, index) => (
          <motion.div
            key={index}
            className={`absolute w-16 h-16 rounded-full ${avatar.color} flex items-center justify-center text-white font-bold text-lg opacity-20`}
            initial={{
              x: `${Math.random() * 100}%`,
              y: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 50 - 25, 0],
              x: [0, Math.random() * 50 - 25, 0],
              scale: [1, Math.random() * 0.3 + 0.9, 1],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          >
            {avatar.initials}
          </motion.div>
        ))}
      </MouseParallax>

      <div className="container mx-auto px-4 relative z-10">
        <ParallaxSection offset={[0, 0.5]} targetScale={1} targetOpacity={1}>
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-bold mb-4 text-gradient-primary">Hear from Our Clients</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our clients have to say about working with us.
            </p>
          </motion.div>
        </ParallaxSection>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <Card3D key={currentIndex} className="w-full">
              <Card className="border-none shadow-xl bg-gradient-to-br from-white/80 to-gray-50/80 dark:from-gray-900/80 dark:to-gray-800/80 backdrop-blur-sm overflow-hidden">
                <CardContent className="p-8 md:p-12 relative">
                  {/* Background quote icon */}
                  <motion.div
                    className="absolute top-6 right-6 opacity-5"
                    animate={{
                      rotate: [0, 5, 0, -5, 0],
                      scale: [1, 1.05, 1, 0.95, 1],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    <Quote className="h-32 w-32 text-primary" />
                  </motion.div>

                  <Quote className="h-16 w-16 text-primary/20 mb-6" />
                  <p className="text-xl md:text-2xl mb-8 italic leading-relaxed">{testimonials[currentIndex].quote}</p>
                  <div className="flex items-center">
                    <div className="w-14 h-14 rounded-full bg-gradient-primary flex items-center justify-center mr-4 text-lg font-bold text-white">
                      {testimonials[currentIndex].initial}
                    </div>
                    <div>
                      <p className="font-bold text-lg">{testimonials[currentIndex].name}</p>
                      <p className="text-muted-foreground">
                        {testimonials[currentIndex].title}, {testimonials[currentIndex].company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Card3D>
          </AnimatePresence>

          <div className="flex justify-center mt-8 gap-2">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => {
                setAutoplay(false)
                prevTestimonial()
              }}
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => {
                setAutoplay(false)
                nextTestimonial()
              }}
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>

          <div className="flex justify-center mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full mx-1 transition-all ${
                  index === currentIndex ? "bg-gradient-primary scale-125" : "bg-muted"
                }`}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
