// "use client"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { projects } from "@/lib/data"
// import ProjectCard from "@/components/project-card"
// import ClientLogos from "@/components/client-logos"
// import { Badge } from "@/components/ui/badge"
// import { Button } from "@/components/ui/button"
// import { FadeIn, StaggerContainer, HoverAnimation } from "@/components/animations"

// export default function PortfolioPage() {
//   const categories = [
//     { id: "all", label: "All Projects" },
//     { id: "web", label: "Web Development" },
//     { id: "mobile", label: "Mobile Apps" },
//     { id: "design", label: "UI/UX Design" },
//     { id: "ai", label: "AI Solutions" },
//   ]

//   return (
//     <div className="min-h-screen bg-[#030E4F] text-white">
//       <div className="container mx-auto px-4 py-12">
//         {/* Hero Section */}
//         <section className="text-center py-20">
//           <FadeIn>
//             <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">Our Portfolio</Badge>
//           </FadeIn>
//           <FadeIn delay={0.1}>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6">
//               Our <span className="text-[#F49F1C]">Success Stories</span>
//             </h1>
//           </FadeIn>
//           <FadeIn delay={0.2}>
//             <p className="text-xl text-gray-300 max-w-3xl mx-auto">
//               Explore our successful projects and see how we've helped businesses achieve their goals through innovative
//               technology solutions.
//             </p>
//           </FadeIn>
//         </section>

//         {/* Portfolio Tabs */}
//         <section className="py-20">
//           <Tabs defaultValue="all" className="mb-16">
//             <div className="flex justify-center mb-12">
//               <TabsList className="bg-[#020B3F] border border-[#F49F1C]/20">
//                 {categories.map((category) => (
//                   <TabsTrigger
//                     key={category.id}
//                     value={category.id}
//                     className="data-[state=active]:bg-[#F49F1C] data-[state=active]:text-[#030E4F]"
//                   >
//                     {category.label}
//                   </TabsTrigger>
//                 ))}
//               </TabsList>
//             </div>

//             {categories.map((category) => (
//               <TabsContent key={category.id} value={category.id} className="mt-0">
//                 <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                   {projects
//                     .filter((project) => category.id === "all" || project.category === category.id)
//                     .map((project) => (
//                       <HoverAnimation key={project.id} type="scale">
//                         <ProjectCard
//                           title={project.title}
//                           description={project.description}
//                           image={project.image}
//                           technologies={project.technologies}
//                           slug={project.slug}
//                         />
//                       </HoverAnimation>
//                     ))}
//                 </StaggerContainer>
//               </TabsContent>
//             ))}
//           </Tabs>
//         </section>

//         {/* Client Logos Section */}
//         <section className="py-20 bg-[#020B3F] rounded-2xl">
//           <FadeIn>
//             <h2 className="text-3xl font-bold mb-8 text-center">Trusted By</h2>
//           </FadeIn>
//           <ClientLogos />
//         </section>

//         {/* CTA Section */}
//         <section className="py-20 text-center">
//           <FadeIn>
//             <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
//             <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
//               Let's create something amazing together. Contact us to discuss your next project.
//             </p>
//             <HoverAnimation type="scale">
//               <Button size="lg" className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
//                 Get Started Today
//               </Button>
//             </HoverAnimation>
//           </FadeIn>
//         </section>
//       </div>
//     </div>
//   )
// }

export default function PortfolioPage() {
return (
  <></>
)
}