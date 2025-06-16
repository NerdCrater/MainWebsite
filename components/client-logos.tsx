"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function ClientLogos() {
  const [logos, setLogos] = useState([
    { name: "Company 1", src: "/placeholder.svg?height=60&width=120&text=Client+1" },
    { name: "Company 2", src: "/placeholder.svg?height=60&width=120&text=Client+2" },
    { name: "Company 3", src: "/placeholder.svg?height=60&width=120&text=Client+3" },
    { name: "Company 4", src: "/placeholder.svg?height=60&width=120&text=Client+4" },
    { name: "Company 5", src: "/placeholder.svg?height=60&width=120&text=Client+5" },
    { name: "Company 6", src: "/placeholder.svg?height=60&width=120&text=Client+6" },
  ])

  // Duplicate logos for infinite scroll effect
  useEffect(() => {
    setLogos((prevLogos) => [...prevLogos, ...prevLogos])
  }, [])

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex items-center gap-12"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
          >
            <Image src={logo.src || "/placeholder.svg"} alt={logo.name} width={120} height={60} />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
