"use client"
  import * as React from "react";
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Calendar, CheckCircle2 } from "lucide-react"
import { projects } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { useState } from "react"

// export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
//   const project = projects.find((project) => project.slug === params.slug)

//   if (!project) {
//     return {
//       title: "Project Not Found",
//       description: "The requested project could not be found.",
//     }
//   }

//   return {
//     title: `${project.title} | NerdCrater Portfolio`,
//     description: project.description,
//   }
// }

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = React.use(params); // unwrap params Promise

  const project = projects.find((project) => project.slug === slug);
  if (!project) {
    notFound()
  }
const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Find related projects (same category, excluding current project)
  const relatedProjects = projects.filter((p) => p.category === project.category && p.id !== project.id).slice(0, 2)

  return (
    <div className="bg-[#d6d7dc] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-[#30396d] rounded-xl shadow-md overflow-hidden">
          <Link href="/portfolio" passHref>
            <Button variant="ghost" className="m-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Portfolio
            </Button>
          </Link>

        {project.images && project.images.length > 0 && (
  <div className="relative h-[500px] w-full">
    <Image
      src={project.images[currentImageIndex] || "/placeholder.svg"}
      alt={`${project.title} - Image ${currentImageIndex + 1}`}
      fill
      className="object-cover rounded-xl transition-all duration-500"
    />

    <button
      onClick={() => setCurrentImageIndex(prev => (prev === 0 ? project.images.length - 1 : prev - 1))}
      className="absolute top-1/2 left-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
      aria-label="Previous Image"
    >
      <ArrowLeft className="h-5 w-5" />
    </button>

    <button
      onClick={() => setCurrentImageIndex(prev => (prev === project.images.length - 1 ? 0 : prev + 1))}
      className="absolute top-1/2 right-4 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-2 rounded-full transition"
      aria-label="Next Image"
    >
      <ArrowLeft className="h-5 w-5 rotate-180" />
    </button>

    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
      {project.images.map((_, idx) => (
        <div
          key={idx}
          className={`h-2 w-2 rounded-full ${idx === currentImageIndex ? "bg-white" : "bg-white/50"}`}
        />
      ))}
    </div>
  </div>
)}


          <div className="p-8">
            <div className="flex flex-wrap gap-3 mb-6">
              {project.technologies?.map((tech: string) => (
                <Badge key={tech} variant="secondary" className="text-sm">
                  {tech}
                </Badge>
              ))}
            </div>

            <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl text-muted-foreground mb-8 text-white">{project.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="border-none shadow-md bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-blue-700 dark:text-blue-400">
                    <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center">
                      <span className="text-lg">🎯</span>
                    </span>
                    The Challenge
                  </h2>
                  <p className="text-muted-foreground">{project.challenge}</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/20">
                <CardContent className="p-6">
                  <h2 className="text-xl font-bold mb-4 flex items-center gap-2 text-green-700 dark:text-green-400">
                    <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center">
                      <span className="text-lg">💡</span>
                    </span>
                    Our Solution
                  </h2>
                  <p className="text-muted-foreground">{project.solution}</p>
                </CardContent>
              </Card>
            </div>

            {/* <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <h2>Project Overview</h2>
              <p>{project.body}</p>

              <p>
                Our team worked closely with the client to understand their specific needs and challenges. Through a
                collaborative approach, we developed a solution that not only met their immediate requirements but also
                provided a foundation for future growth and expansion.
              </p>

              <h2>Key Features</h2>
              <ul>
                <li>Responsive design that works seamlessly across all devices</li>
                <li>Intuitive user interface that enhances user experience</li>
                <li>Robust backend architecture that ensures scalability</li>
                <li>Advanced security measures to protect sensitive data</li>
                <li>Comprehensive analytics to track performance and user behavior</li>
              </ul>

              <h2>Technical Implementation</h2>
              <p>
                We utilized a modern tech stack to build this solution, leveraging the strengths of each technology to
                create a robust and efficient system. Our development process followed agile methodologies, with regular
                client check-ins and iterations based on feedback.
              </p>

              <h2>Results</h2>
              <p>
                The implementation of this solution resulted in significant improvements for the client, including
                increased efficiency, reduced costs, and enhanced user satisfaction. The system continues to perform
                exceptionally well, with minimal maintenance required.
              </p>
            </div> */}
          <div className="max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed text-muted-foreground">

  <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
    📝 Project Overview
  </h2>
 {
  project?.overview?.map((overviewItem: any, index: number) => (
    <p key={index} className="text-white">
      {overviewItem}
    </p>
  ))
}

  {/* <p className="mt-2">
    The client, a mid-sized retailer with ambitious growth plans, needed a scalable platform that delivered a superior shopping experience. We built a custom platform using Next.js for the frontend and a Node.js microservices backend with MongoDB as the primary database.
  </p>
  <p className="mt-2">
    The platform continues to scale with the client's business, which has grown by 150% since implementation, while significantly improving customer satisfaction and operational efficiency.
  </p> */}

  <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2 text-white">
    🚀 Key Features
  </h2>
  <ul className="list-disc list-inside space-y-1">
    {
      project?.keyFeatures?.map((keyFeatures:any)=>(
        <li className="text-white">
          {keyFeatures}
        </li>
      ))
    }
    {/* <li>Real-time inventory management across multiple warehouses</li>
    <li>AI-powered product recommendations based on browsing and purchase patterns</li>
    <li>Seamless integration with multiple payment gateways</li>
    <li>Advanced analytics dashboard for business intelligence</li>
    <li>Mobile-responsive design with PWA capabilities</li> */}
  </ul>

  <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2 text-white">
    💻 Technical Implementation
  </h2>
  {
    project?.technicalImplementation?.map((technicalImplementation:any)=>(

  <p className="text-white">
    {technicalImplementation}
  </p>
    ))
  }

  <h2 className="text-2xl font-bold mb-4 mt-8 flex items-center gap-2 text-white">
    🏆 Results
  </h2>
  {
    project?.results?.map((results:any)=>(

  <p className="text-white">
    {results}
  </p>
    ))
  }
</div>



            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="border-none shadow-md bg-muted">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Project Duration</h3>
                  <p className="text-muted-foreground">3 months</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-muted">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">Project Status</h3>
                  <p className="text-muted-foreground">Completed</p>
                </CardContent>
              </Card>
              <Card className="border-none shadow-md bg-muted">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-xl">🌐</span>
                  </div>
                  <h3 className="font-bold mb-2">Industry</h3>
                  <p className="text-muted-foreground">E-commerce</p>
                </CardContent>
              </Card>
            </div>

          {/* <div className="flex justify-center">
  <Button
    size="lg"
    className="gap-2 bg-[#F49F1C] text-white hover:bg-[#E8890B]"
  >
    <span>View Live Project</span>
    <ExternalLink className="h-4 w-4" />
  </Button>
</div> */}

          </div>
        </div>

        {relatedProjects.length > 0 && (
          <div className="max-w-5xl mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Card key={relatedProject.id} className="overflow-hidden border-none shadow-md">
                  <div className="relative h-48">
                    <Image
                      src={relatedProject.mainImage || "/placeholder.svg"}
                      alt={relatedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{relatedProject.title}</h3>
                    <p className="text-muted-foreground line-clamp-2 mb-4">{relatedProject.description}</p>
                    <Link href={`/portfolio/${relatedProject.slug}`} passHref>
                      <Button variant="outline" className="w-full">
                        View Project
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}



// export default function ProjectPage(){
//   return (
//     <></>
//   )
// }