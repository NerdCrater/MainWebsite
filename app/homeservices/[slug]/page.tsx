import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import ServiceBody from "@/components/ServiceBody"
import { Homeservices } from "@/lib/data" // make sure this is correct path

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params

  const service = Homeservices.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  // Dummy fallback details (replace with real data later)
  const details = {
    benefits: [
      "Improved efficiency and scalability",
      "Enhanced security and reliability",
      "Tailored solutions for your business",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
    process: [
      { title: "Discovery", description: "We analyze your needs and define project goals." },
      { title: "Planning", description: "We design the roadmap and choose the right tech stack." },
      { title: "Execution", description: "Our team builds, tests, and iterates quickly." },
      { title: "Delivery", description: "We launch and provide continuous support." },
    ],
  }

  const relatedServices = Homeservices.filter((s) => s.slug !== slug).slice(0, 3)

  return (
    <div className="bg-[#d6d7dc] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-[#30396d] rounded-xl shadow-md overflow-hidden">
          {/* Back Button */}
          <Link href="/" passHref>
            <Button variant="ghost" className="m-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to homepage
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="relative h-[400px] w-full">
              <Image src={service.images ?? "/placeholder.svg"} alt={service.title} fill className="object-contain" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-8 text-white">
               <div className="text-5xl mb-6">{service.icon}</div>
                      <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
                      <p className="text-xl max-w-2xl">{service.shortDesc}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <h6 style={{ fontSize: "32px" }}>Overview</h6>
              <ServiceBody content={service.description} />

              <p style={{ marginTop: "33px" }}>
                At NerdCrater, we understand that every business has unique needs and challenges. Our{" "}
                {service.title.toLowerCase()} services are tailored to meet your specific requirements,
                ensuring that you get a solution that not only meets your current needs but also scales
                with your business as it grows.
              </p>

              <h2 style={{ fontSize: "1.25rem", marginTop: "30px", fontWeight: 600 }}>Our Approach</h2>
              <p>
                We follow a collaborative, client-centered approach to {service.title.toLowerCase()}. Our
                team works closely with you at every stage of the process, from initial concept to final
                delivery, ensuring that the end result aligns perfectly with your vision and goals.
              </p>
            </div>

            {/* Benefits & Technologies */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-6">Key Benefits</h2>
                <ul className="space-y-4">
                  {details.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6">Technologies We Use</h2>
                <div className="flex flex-wrap gap-2">
                  {details.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Process */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Our Process</h2>
              <div className="relative">
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-muted"></div>
                <div className="space-y-8">
                  {details.process.map((step, index) => (
                    <div key={index} className="relative pl-14">
                      <div className="absolute left-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center z-10">
                        <span className="font-bold text-primary">{index + 1}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-muted p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
              <p className="text-lg mb-6 max-w-2xl mx-auto">
                Contact us today to discuss how our {service.title.toLowerCase()} services can help your
                business thrive in the digital age.
              </p>
              <Button size="lg" asChild className="bg-[#F49F1C]/90 hover:bg-[#F49F1C]/90">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Related Services */}
        {relatedServices.length > 0 && (
          <div className="max-w-5xl mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-6 text-[#F49F1C]">Related Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((relatedService) => (
                <Card key={relatedService.slug} className="overflow-hidden border-none shadow-md">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
                      <p className="text-muted-foreground line-clamp-3">
                        {relatedService.description}
                      </p>
                    </div>
                    <div className="mt-auto pt-4">
                      <Link href={`/homeservices/${relatedService.slug}`} passHref>
                        <Button
                          variant="ghost"
                          className="group text-[#F49F1C] hover:text-[#F49F1C] hover:bg-[#F49F1C]/10"
                        >
                          Learn More
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </div>
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
