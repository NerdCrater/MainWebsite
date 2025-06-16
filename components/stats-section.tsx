"use client"

import { motion } from "framer-motion"
import { FadeIn, AnimatedCounter } from "./animations"
import { Code, Users, CheckCircle, Clock } from "lucide-react"

export default function StatsSection() {
  const stats = [
    { value: 200, label: "Projects Completed", icon: <CheckCircle className="h-6 w-6" />, suffix: "+" },
    { value: 50, label: "Happy Clients", icon: <Users className="h-6 w-6" />, suffix: "+" },
    { value: 10, label: "Years Experience", icon: <Clock className="h-6 w-6" />, suffix: "+" },
    { value: 500000, label: "Lines of Code", icon: <Code className="h-6 w-6" />, suffix: "+" },
  ]

  return (
    <section className="py-16 bg-gradient-to-r from-secondary to-secondary/70 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <FadeIn key={stat.label} delay={index * 0.1}>
              <motion.div whileHover={{ y: -5 }} className="text-center">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 text-primary">
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-200">{stat.label}</div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
