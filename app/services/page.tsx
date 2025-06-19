"use client"
import Link from "next/link"
import { services } from "@/lib/data"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Code, Smartphone, Palette, Brain, Cloud, Settings,ShoppingBasket,Hospital,MonitorCogIcon } from "lucide-react"
import { FadeIn, HoverAnimation, StaggerContainer } from "@/components/animations"
import { StepCard } from "@/components/StepCard"
import { useRouter } from "next/navigation"

const serviceIcons = {
  "web-development": Code,
  "mobile-app-development": Smartphone,
  "ui-ux-design": Palette,
  "ai-powered-applications": Brain,
  "cloud-solutions": Cloud,
  "ecommerce-solutions":ShoppingBasket,
  devops: Settings,
  "hospital-management":Hospital,
  "crm-solutions":MonitorCogIcon
}

export default function ServicesPage() {
  const router = useRouter()
  return (
    <div className="min-h-screen bg-[#d6d7dc] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <FadeIn>
            <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">Our Services</Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl text-[#030E4F] md:text-6xl font-bold mb-6">
              Comprehensive <span className="text-[#F49F1C]">IT Solutions</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-[#030E4F]  max-w-3xl mx-auto">
              We offer a comprehensive range of IT solutions to help businesses thrive in the digital age.
            </p>
          </FadeIn>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const IconComponent = serviceIcons[service.slug] || Code
              return (
                <HoverAnimation key={service.id} type="lift">
                  <Card className="bg-[#30396d] border-[#F49F1C]/20 hover:border-[#F49F1C]/50 transition-all h-full">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-[#F49F1C]/10 flex items-center justify-center mb-4">
                        <IconComponent className="h-6 w-6 text-[#F49F1C]" />
                      </div>
                      <CardTitle className="text-white">{service.title}</CardTitle>
                      <CardDescription className="text-gray-300">{service.description}</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Link href={`/services/${service.slug}`} passHref>
                        <Button
                          variant="ghost"
                          className="group text-[#F49F1C] hover:text-[#F49F1C] hover:bg-[#F49F1C]/10"
                        >
                          Learn more
                          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                </HoverAnimation>
              )
            })}
          </StaggerContainer>
        </section>

        {/* Process Section */}
        {/* <section className="py-20 bg-[#020B3F] rounded-2xl">
          <div className="text-center mb-16">
            <FadeIn>
              <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">Our Process</Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-4xl font-bold mb-6">How We Work</h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our proven methodology ensures successful project delivery from concept to deployment.
              </p>
            </FadeIn>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                number: "01",
                title: "Discovery & Planning",
                description:
                  "We start by understanding your business goals, technical requirements, and user needs to create a comprehensive project plan.",
              },
              {
                number: "02",
                title: "Design & Architecture",
                description:
                  "Our team designs scalable architecture and creates detailed specifications that align with your requirements.",
              },
              {
                number: "03",
                title: "Development & Testing",
                description:
                  "We follow agile methodologies with regular sprints, continuous integration, and thorough testing throughout development.",
              },
              {
                number: "04",
                title: "Deployment & Launch",
                description:
                  "We implement CI/CD pipelines for smooth deployment and provide comprehensive support during launch.",
              },
              {
                number: "05",
                title: "Maintenance & Support",
                description:
                  "Our relationship continues after launch with ongoing maintenance, updates, and technical support.",
              },
            ].map((step, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex mb-12 last:mb-0">
                  <div className="mr-6 flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-[#F49F1C]/20 border border-[#F49F1C] flex items-center justify-center text-[#F49F1C] font-bold">
                      {step.number}
                    </div>
                    {index < 4 && <div className="w-0.5 h-12 bg-[#F49F1C]/30 mx-auto mt-2"></div>}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section> */}
        
        <section className="py-20 bg-[#30396d] rounded-2xl relative">
  <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#F49F1C]/30 -translate-x-1/2"></div>

  <div className="text-center mb-16">
    <FadeIn>
      <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">Our Process</Badge>
    </FadeIn>
    <FadeIn delay={0.1}>
      <h2 className="text-4xl font-bold mb-6">How We Work</h2>
    </FadeIn>
    <FadeIn delay={0.2}>
      <p className="text-xl text-gray-300 max-w-3xl mx-auto">
        Our proven methodology ensures successful project delivery from concept to deployment.
      </p>
    </FadeIn>
  </div>

  <div className="space-y-12 relative z-10">
    {[
  {
    year: "01",
    title: "Discovery & Planning",
    description:
      "We begin by deeply understanding your business objectives, user personas, technical constraints, and competitive landscape. This forms the foundation for strategic planning and efficient resource allocation.",
  },
  {
    year: "02",
    title: "Design & Architecture",
    description:
      "Our design team creates user-focused UI/UX wireframes and prototypes while the architects define a scalable, secure, and maintainable technology stack tailored to your requirements.",
  },
  {
    year: "03",
    title: "Development & Testing",
    description:
      "Using agile sprints, we develop modular, reusable code with continuous integration. Every feature goes through rigorous unit, integration, and QA testing to ensure performance and stability.",
  },
  {
    year: "04",
    title: "Deployment & Launch",
    description:
      "After final validations, we deploy your application using CI/CD pipelines and cloud infrastructure, ensuring zero-downtime releases and full operational readiness.",
  },
  {
    year: "05",
    title: "Maintenance & Support",
    description:
      "Post-launch, we offer real-time monitoring, periodic updates, patching, and technical support to ensure smooth operations and adapt to user feedback or evolving needs.",
  },
  {
    year: "06",
    title: "Analytics & Optimization",
    description:
      "We integrate analytics tools to gather real user data and generate insights. This enables us to continuously refine features, enhance user experience, and drive ROI.",
  },
  {
    year: "07",
    title: "Scaling & Growth",
    description:
      "As your platform grows, we help scale infrastructure, optimize databases, and improve system architecture to handle increased load and expand your digital presence globally.",
  },
]
.map((step, index) => (
      <StepCard step={step} index={index} key={index} />
    ))}
  </div>
</section>


        {/* CTA Section */}
        <section className="py-20 text-center">
          <FadeIn>
            <h2 className="text-4xl text-[#030E4F] font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-[#030E4F] mb-8 max-w-2xl mx-auto">
              Let's discuss your project and how we can help bring your vision to life.
            </p>
            <HoverAnimation type="scale">
              <Button onClick={()=>{
                router.push('/contact')
              }}  size="lg" className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
                Start Your Project
              </Button>
            </HoverAnimation>
          </FadeIn>
        </section>
      </div>
    </div>
  )
}
