import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export const StepCard = ({ step, index }:any) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[#F49F1C] rounded-full -translate-x-1/2 z-10 flex items-center justify-center">
        <div className="w-4 h-4 bg-[#020B3F] rounded-full"></div>
      </div>

      {/* Content */}
      <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
        <div className="bg-[#030E4F] border border-[#F49F1C]/20 p-6 rounded-xl shadow-sm">
          <div className="text-[#F49F1C] font-bold text-xl mb-2">{step.year}</div>
          <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
          <p className="text-gray-300">{step.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
