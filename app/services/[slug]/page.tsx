      import type { Metadata } from "next"
      import { notFound } from "next/navigation"
      import Link from "next/link"
      import Image from "next/image"
      import { ArrowLeft, CheckCircle, ArrowRight } from "lucide-react"
      import { services } from "@/lib/data"
      import { Button } from "@/components/ui/button"
      import { Card, CardContent } from "@/components/ui/card"
      import ServiceBody from "@/components/ServiceBody"

      export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
        const { slug } = await params 
        const service = services.find((service) => service.slug === slug)

        if (!service) {
          return {
            title: 'Service Not Found',
          }
        }

        return {
          title: service.title,
          description: service.description,
          image : service.images
        }
      }

      export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
      const { slug } = await params  // ✅ await params
        const service = services.find((service) => service.slug === slug)

        if (!service) {
          notFound()
        }

        // Find related services (excluding current service)
        const relatedServices = services.filter((s) => s.id !== service.id).slice(0, 3)

        // Service-specific content
        const serviceDetails = {
          "web-development": {
            image: "/assets/images/services/web-development.jpg",
            benefits: [
              "Responsive design that works on all devices",
              "SEO-friendly architecture for better visibility",
              "Fast loading speeds for improved user experience",
              "Secure coding practices to protect your data",
              "Scalable solutions that grow with your business",
            ],
            process: [
              { title: "Discovery", description: "We start by understanding your business goals and requirements." },
              { title: "Planning", description: "We create a detailed roadmap for your project." },
              { title: "Design", description: "Our designers create mockups and prototypes for your approval." },
              { title: "Development", description: "Our developers bring the designs to life with clean, efficient code." },
              { title: "Testing", description: "We thoroughly test your website to ensure it works flawlessly." },
              { title: "Launch", description: "We deploy your website and provide ongoing support." },
            ],
            technologies: ["React", "Next.js", "Vue.js", "Node.js", "Express", "MongoDB", "PostgreSQL"],
          },
          "mobile-app-development": {
            image: "/assets/images/services/mobile-app.jpg",
            benefits: [
              "Native performance on iOS and Android",
              "Intuitive user interfaces for better engagement",
              "Offline functionality for uninterrupted use",
              "Push notifications to keep users engaged",
              "Analytics integration to track user behavior",
            ],
            process: [
              { title: "Concept", description: "We help refine your app idea and define its core features." },
              { title: "Wireframing", description: "We create wireframes to visualize the app's structure." },
              { title: "UI/UX Design", description: "Our designers create beautiful, intuitive interfaces." },
              { title: "Development", description: "Our developers build your app using the latest technologies." },
              { title: "Testing", description: "We test your app on multiple devices to ensure compatibility." },
              { title: "Deployment", description: "We help you publish your app to the App Store and Google Play." },
            ],
            technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "AWS Amplify"],
          },
          "ui-ux-design": {
            image: "/assets/images/services/ui-ux-design.jpg",
            benefits: [
              "User-centered design that focuses on your audience",
              "Improved user satisfaction and engagement",
              "Reduced development costs through early problem identification",
              "Consistent brand experience across all touchpoints",
              "Data-driven design decisions for better results",
            ],
            process: [
              { title: "Research", description: "We conduct user research to understand your audience's needs." },
              { title: "Information Architecture", description: "We organize your content for optimal user flow." },
              { title: "Wireframing", description: "We create wireframes to visualize the structure." },
              { title: "Prototyping", description: "We build interactive prototypes for testing." },
              { title: "Visual Design", description: "We create beautiful, on-brand visual designs." },
              { title: "Handoff", description: "We provide developers with all the assets they need." },
            ],
            technologies: ["Figma", "Adobe XD", "Sketch", "InVision", "Zeplin", "Principle"],
          },
          "ai-powered-applications": {
            image: "/assets/images/services/ai-solutions.jpg",
            benefits: [
              "Automated processes that save time and resources",
              "Personalized user experiences that increase engagement",
              "Predictive analytics for better decision-making",
              "Natural language processing for improved communication",
              "Computer vision for image and video analysis",
            ],
            process: [
              { title: "Problem Definition", description: "We help you identify where AI can add value." },
              { title: "Data Collection", description: "We gather and prepare the data needed for your AI solution." },
              { title: "Model Selection", description: "We choose the right AI models for your specific needs." },
              { title: "Training", description: "We train and fine-tune the models for optimal performance." },
              { title: "Integration", description: "We integrate the AI solution into your existing systems." },
              { title: "Monitoring", description: "We continuously monitor and improve the AI performance." },
            ],
            technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Hugging Face", "Computer Vision", "NLP"],
          },
          "cloud-solutions": {
            image: "/assets/images/services/cloud-solutions.jpg",
            benefits: [
              "Scalable infrastructure that grows with your business",
              "Reduced IT costs through optimized resource usage",
              "Improved reliability and uptime for your applications",
              "Enhanced security with industry-leading practices",
              "Disaster recovery capabilities for business continuity",
            ],
            process: [
              { title: "Assessment", description: "We assess your current infrastructure and needs." },
              { title: "Strategy", description: "We develop a cloud migration or implementation strategy." },
              { title: "Architecture", description: "We design a cloud architecture that meets your requirements." },
              { title: "Migration", description: "We migrate your applications and data to the cloud." },
              { title: "Optimization", description: "We optimize your cloud resources for cost and performance." },
              { title: "Management", description: "We provide ongoing cloud management and support." },
            ],
            technologies: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Terraform"],
          },
          "voice-assistant-integration": {
            image: "/assets/images/services/voice-assistant.jpg",
            benefits: [
              "Hands-free interaction for improved user experience",
              "Increased accessibility for all users",
              "New channel for customer engagement",
              "Brand differentiation in a competitive market",
              "Streamlined user journeys for common tasks",
            ],
            process: [
              { title: "Use Case Definition", description: "We identify the best use cases for voice integration." },
              { title: "Conversation Design", description: "We design natural, effective voice interactions." },
              { title: "Development", description: "We build your voice application using the latest technologies." },
              { title: "Testing", description: "We test your voice application for accuracy and usability." },
              { title: "Deployment", description: "We deploy your voice application to the relevant platforms." },
              { title: "Monitoring", description: "We continuously monitor and improve performance." },
            ],
            technologies: ["Amazon Alexa", "Google Assistant", "Apple Siri", "Dialogflow", "SSML", "NLP"],
          },
        }

        const details = serviceDetails[service.slug as keyof typeof serviceDetails] || {
          image: "/placeholder.svg?height=600&width=800",
          benefits: [],
          process: [],
          technologies: [],
        }

        return (
          <div className="bg-[#d6d7dc] py-12">
            <div className="container mx-auto px-4">
              <div className="max-w-5xl mx-auto bg-[#30396d] rounded-xl shadow-md overflow-hidden">
                <Link href="/services" passHref>
                  <Button variant="ghost" className="m-6 group">
                    <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Back to Services
                  </Button>
                </Link>

                <div className="relative h-[400px] w-full">
              <Image src={service.images ?? "/placeholder.svg"} alt={service.title} fill className="object-contain" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-8 text-white">
                      <div className="text-5xl mb-6">{service.icon}</div>
                      <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                      <p className="text-xl max-w-2xl">{service.description}</p>
                    </div>
                  </div>
                </div>

                <div className="p-8">
                  <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
                    <h6 style={{fontSize:"32px"}} >Overview</h6>
                    <ServiceBody content={service.body} />


                    <p style={{marginTop:'33px'}} >
                      At NerdCrater, we understand that every business has unique needs and challenges. Our{" "}
                      {service.title.toLowerCase()} services are tailored to meet your specific requirements, ensuring that
                      you get a solution that not only meets your current needs but also scales with your business as it
                      grows.
                    </p>

                    <h2 style={{fontSize:'1.25rem',marginTop:'30px',fontWeight:600}} >Our Approach</h2>
                    <p>
                      We follow a collaborative, client-centered approach to {service.title.toLowerCase()}. Our team works
                      closely with you at every stage of the process, from initial concept to final delivery, ensuring that
                      the end result aligns perfectly with your vision and goals.
                    </p>
                  </div>

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
                          <span key={index} className="px-3 py-1 bg-muted rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

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

                  <div className="bg-muted p-8 rounded-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
                    <p className="text-lg mb-6 max-w-2xl mx-auto">
                      Contact us today to discuss how our {service.title.toLowerCase()} services can help your business thrive
                      in the digital age.
                    </p>
                    <Button size="lg" asChild className="bg-[#F49F1C]/90 hover:bg-[#F49F1C]/90">
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                  </div>
                </div>
              </div>

              {relatedServices.length > 0 && (
                <div className="max-w-5xl mx-auto mt-12">
                  <h2 className="text-2xl  font-bold mb-6 text-[#F49F1C]">Related Services</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {relatedServices.map((relatedService) => (
                     <Card key={relatedService.id} className="overflow-hidden border-none shadow-md">
  <CardContent className="p-6 flex flex-col h-full">
    <div>
      <div className="text-4xl mb-4">{relatedService.icon}</div>
      <h3 className="text-xl font-bold mb-2">{relatedService.title}</h3>
      <p className="text-muted-foreground line-clamp-3">{relatedService.description}</p>
    </div>

    {/* Push button to bottom */}
    <div className="mt-auto pt-4">
      <Link href={`/services/${relatedService.slug}`} passHref>
        {/* <Button variant="outline" className="w-full group">
          <span>Learn More</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button> */}
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
