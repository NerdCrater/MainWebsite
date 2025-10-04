"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Calendar,
} from "lucide-react";
import ContactForm from "@/components/contact-form";
import { FadeIn, StaggerContainer, HoverAnimation } from "@/components/animations";

// Load Map client-side only
const MohaliMap = dynamic(() => import("@/components/ContactUsMap"), { ssr: false });

export default function ContactPage() {
  const [clicked, setClicked] = useState(false);

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#030E4F]">
              Let's Build Something <span className="text-[#F49F1C]">Amazing</span>
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
            {/* Start Conversation */}
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6 text-center">
                <MessageSquare className="h-12 w-12 text-[#F49F1C] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Start a Conversation</h3>
                <p className="text-gray-300 mb-4">
                  Ready to discuss your project? Let's talk!
                </p>
                {!clicked ? (
                  <Button
                    className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold"
                    onClick={() => setClicked(true)}
                  >
                    Send Message
                  </Button>
                ) : (
                  <a
                    href="mailto:nerdcrater@gmail.com"
                    className="inline-block text-[#030E4F] font-semibold bg-[#F49F1C] hover:bg-[#E8890B] px-4 py-2 rounded"
                  >
                    nerdcrater@gmail.com
                  </a>
                )}
              </Card>
            </HoverAnimation>

            {/* Schedule a Call */}
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6 text-center">
                <Calendar className="h-12 w-12 text-[#F49F1C] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Schedule a Call</h3>
                <p className="text-gray-300 mb-4">Book a consultation with our experts.</p>
                <a href="https://calendly.com/nerdcrater/30min" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold"
                  >
                    Book Meeting
                  </Button>
                </a>
              </Card>
            </HoverAnimation>

            {/* Call Us */}
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6 text-center">
                <Phone className="h-12 w-12 text-[#F49F1C] mx-auto mb-4" />
                <h3 className="font-bold text-lg mb-2 text-white">Call Us Directly</h3>
                <p className="text-gray-300 mb-4">Speak with our team right away.</p>
                <a href="tel:+919671626662">
                  <Button
                    variant="outline"
                    className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold"
                  >
                    +91 9671626662
                  </Button>
                </a>
              </Card>
            </HoverAnimation>
          </StaggerContainer>
        </section>

        {/* Main Contact Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <FadeIn direction="left">
            <div>
              <h2 className="text-3xl text-[#030E4F] font-bold mb-8">Get In Touch</h2>
              <ContactForm />
            </div>
          </FadeIn>

          {/* Contact Details + Map */}
          <FadeIn direction="right" delay={0.2}>
            <div className="space-y-6">
              {/* Location */}
              <HoverAnimation type="lift">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-[#F49F1C] mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">Our Location</h3>
                      <p className="text-gray-300">Mohali, Punjab, India, 140301</p>
                    </div>
                  </div>
                </Card>
              </HoverAnimation>

              {/* Phone */}
              <HoverAnimation type="lift">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-[#F49F1C] mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">Phone</h3>
                      <p className="text-gray-300">+91 9671626662</p>
                      <p className="text-gray-300">Mon-Fri, 9am-10pm IST</p>
                    </div>
                  </div>
                </Card>
              </HoverAnimation>

              {/* Email */}
              <HoverAnimation type="lift">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-[#F49F1C] mt-1" />
                    <div>
                      <h3 className="font-bold text-lg mb-2 text-white">Email</h3>
                      <p className="text-gray-300">contact@nerdcrater.com</p>
                      <p className="text-gray-300">info@nerdcrater.com</p>
                    </div>
                  </div>
                </Card>
              </HoverAnimation>

              {/* Map */}
              <div className="h-64 rounded-lg overflow-hidden mt-6">
                <MohaliMap />
              </div>
            </div>
          </FadeIn>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <FadeIn>
            <h2 className="text-3xl text-[#030E4F] font-bold mb-12 text-center">
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <StaggerContainer className="max-w-3xl mx-auto space-y-6">
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                <h3 className="font-bold text-lg mb-2 text-white">How long does a typical project take?</h3>
                <p className="text-gray-300">
                  Project timelines vary based on complexity and scope. Simple websites typically take 4-6 weeks, while complex applications can take 3-6 months.
                </p>
              </Card>
            </HoverAnimation>
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                <h3 className="font-bold text-lg mb-2 text-white">Do you provide ongoing support?</h3>
                <p className="text-gray-300">
                  Yes, we offer comprehensive maintenance and support packages to ensure your application continues to perform optimally after launch.
                </p>
              </Card>
            </HoverAnimation>
            <HoverAnimation type="lift">
              <Card className="bg-[#30396d] border-[#F49F1C]/20 p-6">
                <h3 className="font-bold text-lg mb-2 text-white">What technologies do you specialize in?</h3>
                <p className="text-gray-300">
                  We specialize in modern web technologies including React, Next.js, Node.js, Python, and cloud platforms like AWS and Azure.
                </p>
              </Card>
            </HoverAnimation>
          </StaggerContainer>
        </section>
      </div>
    </div>
  );
}
