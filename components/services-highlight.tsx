// "use client"

// import { useRef } from "react"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Button } from "@/components/ui/button"
// import Link from "next/link"
// import { ArrowRight } from "lucide-react"
// import { motion, useInView } from "framer-motion"
// import Image from "next/image"
// import ParallaxSection from "@/components/parallax-section"
// // import Card3D from "@/components/3d-card"
// import GlowEffect from "@/components/glow-effect"
// import { services } from "@/lib/data"



// export default function ServicesHighlight() {
//   const ref = useRef(null)
//   const isInView = useInView(ref, { once: true, amount: 0.2 })

//   return (
//     <section ref={ref} className="container mx-auto px-4 py-20 relative overflow-hidden">
//       <ParallaxSection offset={[0, 0.5]} targetScale={1} targetOpacity={1}>
//         <motion.div
//           className="text-center mb-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//         >
//           <h2 className="text-3xl font-bold mb-4 text-gradient-primary">Our Core Services</h2>
//           <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
//             We offer a comprehensive range of IT solutions to help businesses thrive in the digital age.
//           </p>
//         </motion.div>
//       </ParallaxSection>

//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {services.map((service:any, index:any) => (
//           <ParallaxSection key={service.slug} offset={[0, 0.5]} targetScale={1} targetOpacity={1} className="h-full">
//             <Card className="h-full">
//               <GlowEffect className="h-full">
//                 <Card className="h-full border-none shadow-md overflow-hidden bg-card/80 backdrop-blur-sm">
//                   <CardHeader>
//                     <div className="relative w-16 h-16 mb-4 overflow-hidden rounded-xl">
//                       <Image
//                         src={service.icon || "/placeholder.svg"}
//                         alt={service.title}
//                         width={64}
//                         height={64}
//                         className="object-cover"
//                       />
//                       <motion.div
//                         className="absolute inset-0 bg-gradient-primary opacity-30"
//                         animate={{
//                           opacity: [0.2, 0.4, 0.2],
//                         }}
//                         transition={{
//                           duration: 3,
//                           repeat: Number.POSITIVE_INFINITY,
//                           ease: "easeInOut",
//                         }}
//                       />
//                     </div>
//                     <CardTitle className="group-hover:text-gradient-primary transition-all duration-300">
//                       {service.title}
//                     </CardTitle>
//                     <CardDescription className="text-base">{service.description}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <Link href={`/services/${service.slug}`} passHref>
//                       <Button variant="ghost" className="group/button p-0">
//                         Learn more
//                         <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
//                       </Button>
//                     </Link>
//                   </CardContent>
//                 </Card>
//               </GlowEffect>
//             </Card>
//           </ParallaxSection>
//         ))}
//       </div>

//       <ParallaxSection offset={[0, 0.5]} targetScale={1} targetOpacity={1}>
//         <motion.div
//           className="text-center mt-16"
//           initial={{ opacity: 0, y: 50 }}
//           animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
//           transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
//         >
//           <Button asChild size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity">
//             <Link href="/services">View All Services</Link>
//           </Button>
//         </motion.div>
//       </ParallaxSection>
//     </section>
//   )
// }
