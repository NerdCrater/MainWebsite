"use client";
import { Card } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Calendar,
} from "lucide-react";
import ContactForm from "@/components/contact-form";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FadeIn,
  StaggerContainer,
  HoverAnimation,
} from "@/components/animations";
import MohaliMap from "@/components/ContactUsMap";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#d6d7dc] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <FadeIn>
            <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
              Contact Us
            </Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl text-[#030E4F] md:text-6xl font-bold mb-6">
              Let's Build Something{" "}
              <span className="text-[#F49F1C]">Amazing</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-[#030E4F] max-w-3xl mx-auto">
              Have a project in mind? Get in touch with our team to discuss how
              we can help bring your vision to life.
            </p>
          </FadeIn>
        </section>

        {/* Contact Methods */}
        <section className="py-20">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6 text-center">
                <MessageSquare className="h-12 w-12 text-[#F49F1C] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">
                  Start a Conversation
                </h3>
                <p className="text-gray-300 mb-4">
                  Ready to discuss your project? Let's talk!
                </p>
                <Button className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
                  Send Message
                </Button>
              </Card>
            </HoverAnimation>
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6 text-center">
                <Calendar className="h-12 w-12 text-[#F49F1C] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">
                  Schedule a Call
                </h3>
                <p className="text-gray-300 mb-4">
                  Book a consultation with our experts.
                </p>
                <a
                  href="https://calendly.com/psingh20112002/30min"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    className="border-[#F49F1C] text-[#F49F1C] hover:bg-[#F49F1C]/10"
                  >
                    Book Meeting
                  </Button>
                </a>
              </Card>
            </HoverAnimation>
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6 text-center">
                <Phone className="h-12 w-12 text-[#F49F1C] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">
                  Call Us Directly
                </h3>
                <p className="text-gray-300 mb-4">
                  Speak with our team right away.
                </p>
                <a href="tel:+917004335954">
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#F49F1C] text-[#F49F1C] hover:bg-[#F49F1C]/10"
                  >
                    <span>+91 (9871)-627-742</span>
                  </Button>
                </a>
              </Card>
            </HoverAnimation>
          </StaggerContainer>
        </section>

        {/* Main Contact Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl text-[#030E4F]  font-bold mb-8">Get In Touch</h2>
              <ContactForm />
            </div>
          </FadeIn>

          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              <HoverAnimation type="lift">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#F49F1C] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">
                        Our Location
                      </h3>
                      <p className="text-gray-300">Mohali, </p>
                      <p className="text-gray-300">Punjab, India, 140301</p>
                    </div>
                  </div>
                </Card>
              </HoverAnimation>

              <HoverAnimation type="lift">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#F49F1C] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">
                        Phone
                      </h3>
                      <p className="text-gray-300">+91 9871627742</p>
                      <p className="text-gray-300">Mon-Fri, 9am-10pm IST</p>
                    </div>
                  </div>
                </Card>
              </HoverAnimation>

              <HoverAnimation type="lift">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#F49F1C] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">
                        Email
                      </h3>
                      <p className="text-gray-300">contact@nerdcrater.com</p>
                      <p className="text-gray-300">info@nerdcrater.com</p>
                    </div>
                  </div>
                </Card>
              </HoverAnimation>

              {/* <HoverAnimation type="lift">
                <Card className="bg-[#020B3F] border-[#F49F1C]/20 p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-[#F49F1C] shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">Working Hours</h3>
                      <p className="text-gray-300">Monday - Friday: 9am - 6pm PST</p>
                      <p className="text-gray-300">Saturday - Sunday: Closed</p>
                    </div>
                  </div>
                </Card>
              </HoverAnimation> */}

              <div className="h-64 rounded-lg overflow-hidden mt-6">
                <MohaliMap />
                <div className="w-full h-full bg-[#020B3F] border border-[#F49F1C]/20 rounded-lg flex items-center justify-center">
                  {/* <p className="text-gray-400">Google Maps Integration</p> */}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <FadeIn>
            <h2 className="text-3xl  text-[#030E4F] font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <StaggerContainer className="max-w-3xl mx-auto space-y-6">
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                <h3 className="font-bold text-lg mb-2 text-white">
                  How long does a typical project take?
                </h3>
                <p className="text-gray-300">
                  Project timelines vary based on complexity and scope. Simple
                  websites typically take 4-6 weeks, while complex applications
                  can take 3-6 months.
                </p>
              </Card>
            </HoverAnimation>
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                <h3 className="font-bold text-lg mb-2 text-white">
                  Do you provide ongoing support?
                </h3>
                <p className="text-gray-300">
                  Yes, we offer comprehensive maintenance and support packages
                  to ensure your application continues to perform optimally
                  after launch.
                </p>
              </Card>
            </HoverAnimation>
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                <h3 className="font-bold text-lg mb-2 text-white">
                  What technologies do you specialize in?
                </h3>
                <p className="text-gray-300">
                  We specialize in modern web technologies including React,
                  Next.js, Node.js, Python, and cloud platforms like AWS and
                  Azure.
                </p>
              </Card>
            </HoverAnimation>
          </StaggerContainer>
        </section>
      </div>
    </div>
  );
}
