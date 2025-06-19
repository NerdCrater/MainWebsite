"use client"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import Timeline from "@/components/timeline"
import TeamSection from "@/components/team-section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FadeIn, HoverAnimation, StaggerContainer, AnimatedCounter } from "@/components/animations"
import { Code, Users, Award, Target, Eye, Heart } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#d6d7dc] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col gap-16">
          {/* Hero Section */}
          <section className="text-center py-20">
            <FadeIn>
              <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">About Us</Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h1 className="text-5xl text-[#030E4F]  md:text-6xl font-bold mb-6">
                Building the <span className="text-[#F49F1C]">Future</span> Together
              </h1>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[#030E4F] max-w-3xl mx-auto">
                We're a team of passionate tech enthusiasts dedicated to creating innovative IT solutions that drive
                business growth and digital transformation.
              </p>
            </FadeIn>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-[#30396d] rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <FadeIn>
                <div className="text-4xl md:text-5xl font-bold text-[#F49F1C] mb-2">
                  <AnimatedCounter end={4000} suffix="+" />
                </div>
                <p className="text-gray-300">Lines Of Code Delivered</p>
              </FadeIn>
              <FadeIn delay={0.1}>
                <div className="text-4xl md:text-5xl font-bold text-[#F49F1C] mb-2">
                  <AnimatedCounter end={10} suffix="+" />
                </div>
                <p className="text-gray-300">Happy Clients</p>
              </FadeIn>
              <FadeIn delay={0.2}>
                <div className="text-4xl md:text-5xl font-bold text-[#F49F1C] mb-2">
                  <AnimatedCounter end={5} suffix=" Years" />
                </div>
                <p className="text-gray-300">Team Experience</p>
              </FadeIn>
              <FadeIn delay={0.3}>
                <div className="text-4xl md:text-5xl font-bold text-[#F49F1C] mb-2">
                  <AnimatedCounter end={4} suffix="+" />
                </div>
                <p className="text-gray-300">Team Members</p>
              </FadeIn>
            </div>
          </section>

          {/* Vision & Mission */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn direction="left">
              <div>
                <h2 className="text-4xl text-[#030E4F] font-bold mb-6">Our Story</h2>
                <p className="text-xl mb-6 text-[#030E4F]">
                  Founded with a vision to bridge the gap between innovative technology and practical business
                  solutions, NerdCrater has grown from a small team of developers to a comprehensive IT solutions
                  provider.
                </p>
                <p className="text-lg text-[#030E4F] mb-8">
                  We believe that great software is not just about code – it's about understanding business needs,
                  solving real problems, and creating experiences that users love.
                </p>
                <div className="space-y-6">
                  <HoverAnimation type="lift">
                    <Card className="bg-[#30396d] border-[#F49F1C]/20">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <Target className="h-8 w-8 text-[#F49F1C]" />
                          <h3 className="text-xl font-bold">Our Mission</h3>
                        </div>
                        <p className="text-gray-300">
                          To empower businesses with cutting-edge technology solutions that solve complex problems and
                          drive digital transformation.
                        </p>
                      </CardContent>
                    </Card>
                  </HoverAnimation>
                  <HoverAnimation type="lift">
                    <Card className="bg-[#30396d] border-[#F49F1C]/20">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4 mb-3">
                          <Eye className="h-8 w-8 text-[#F49F1C]" />
                          <h3 className="text-xl font-bold">Our Vision</h3>
                        </div>
                        <p className="text-gray-300">
                          To be the leading innovator in IT solutions, recognized globally for our expertise,
                          reliability, and forward-thinking approach.
                        </p>
                      </CardContent>
                    </Card>
                  </HoverAnimation>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/about-us-section.jpg"
                  alt="NerdCrater team"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030E4F]/80 to-transparent"></div>
              </div>
            </FadeIn>
          </section>

          {/* Values Section */}
          <section className="py-20">
            <div className="text-center mb-16">
              <FadeIn>
                <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">Our Values</Badge>
              </FadeIn>
              <FadeIn delay={0.1}>
                <h2 className="text-4xl text-[#030E4F] font-bold mb-6">What Drives Us</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className="text-xl text-[#030E4F] max-w-3xl mx-auto">
                  Our core values shape everything we do, from how we write code to how we interact with clients.
                </p>
              </FadeIn>
            </div>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <HoverAnimation type="lift">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 h-full">
                  <CardContent className="p-6 text-center">
                    <Code className="h-12 w-12 text-[#F49F1C] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Technical Excellence</h3>
                    <p className="text-gray-300">
                      We strive for perfection in every line of code, ensuring our solutions are robust, scalable, and
                      maintainable.
                    </p>
                  </CardContent>
                </Card>
              </HoverAnimation>
              <HoverAnimation type="lift">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 h-full">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-[#F49F1C] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Client Partnership</h3>
                    <p className="text-gray-300">
                      We work as an extension of your team, understanding your business goals and challenges deeply.
                    </p>
                  </CardContent>
                </Card>
              </HoverAnimation>
              <HoverAnimation type="lift">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 h-full">
                  <CardContent className="p-6 text-center">
                    <Award className="h-12 w-12 text-[#F49F1C] mx-auto mb-4" />
                    <h3 className="text-xl font-bold mb-3">Innovation</h3>
                    <p className="text-gray-300">
                      We stay ahead of technology trends and continuously explore new ways to solve complex problems.
                    </p>
                  </CardContent>
                </Card>
              </HoverAnimation>
            </StaggerContainer>
          </section>

          {/* Our Story Timeline */}
          <section>
            <FadeIn>
              <h2 className="text-3xl text-[#030E4F] font-bold mb-8 text-center">Our Journey</h2>
            </FadeIn>
            <Timeline />
          </section>

          {/* Team Section */}
          <section>
            <FadeIn>
              <h2 className="text-3xl text-[#030E4F] font-bold mb-8 text-center">Meet Our Team</h2>
            </FadeIn>
            <TeamSection />
          </section>

          {/* Careers CTA */}
          <section className="bg-gradient-to-r bg-[#30396d] rounded-2xl p-8 text-center">
            <FadeIn>
              <Heart className="h-12 w-12 text-[#F49F1C] mx-auto mb-4" />
              <h2 className="text-3xl font-bold mb-4">Join Our Team</h2>
              <p className="text-xl mb-6 max-w-2xl mx-auto text-gray-300">
                We're always looking for talented individuals who are passionate about technology and innovation.
              </p>
              <HoverAnimation type="scale">
                <Button size="lg" className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
                  View Open Positions
                </Button>
              </HoverAnimation>
            </FadeIn>
          </section>
        </div>
      </div>
    </div>
  )
}
