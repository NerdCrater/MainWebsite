"use client";
import Link from "next/link"
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
 import { Homeservices } from "@/lib/data"
  import { motion } from "framer-motion";
import { Globe, Server, Palette, Database, Rocket, Search, Code } from "lucide-react"

import ClientLogos from "@/components/client-logos";
import NewsletterCTA from "@/components/newsletter-cta";
import {
  ArrowRight,

  FileCode,
  Github,


  Terminal,
} from "lucide-react";
import {
  FadeIn,
  PopIn,
  HoverAnimation,
  StaggerContainer,
  AnimatedCounter,
} from "@/components/animations";
// import TypeWriter from "@/components/TypeWriter"
import Typewriter from "typewriter-effect";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiRedux,
  SiGraphql,
  SiNodedotjs,
  SiPython,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiExpo,
  SiFirebase,

  // DevOps
  SiDocker,
  SiKubernetes,
  SiAmazon,
  SiGithubactions,
  SiTerraform,
  SiPrometheus,
} from "react-icons/si";

const backendIcons: any = {
  "Node.js": SiNodedotjs,
  Python: SiPython,
  Go: SiGo,
  PostgreSQL: SiPostgresql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
};
const techIcons: any = {
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  Redux: SiRedux,
  GraphQL: SiGraphql,
};
const mobileIcons: any = {
  "React Native": SiReact,
  Flutter: SiFlutter,
  Swift: SiSwift,
  Kotlin: SiKotlin,
  Expo: SiExpo,
  Firebase: SiFirebase,
};

const devopsIcons: any = {
  Docker: SiDocker,
  Kubernetes: SiKubernetes,
  AWS: SiAmazon,
  "GitHub Actions": SiGithubactions,
  Terraform: SiTerraform,
  Prometheus: SiPrometheus,
};



const serviceIcons: Record<string, React.ElementType> = {
  "web-development": Globe,
  "backend-development": Server,
  "frontend-architecture": Palette,
  "database-design": Database,
  "devops-ci-cd": Rocket,
  "code-auditing": Search,
}

// Code Block Component

function CodeBlock({
  language = "",
  code,
}: {
  language?: string;
  code: string;
}) {
  const lines = code.trimEnd().split("\n");

  return (
    <div className="rounded-lg overflow-hidden">
      {/* Header */}
      <div className="bg-[#030E4F] px-4 py-2 flex items-center justify-between">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-gray-400">{language}</span>
      </div>

      {/* Code body */}
      <pre className="bg-[#020B3F] p-4 overflow-x-auto text-sm leading-relaxed font-mono text-gray-300 whitespace-pre-wrap">
        {lines.map((line, idx) => {
          const highlightWords = [
            "🚀  We turn bold ideas into real-world impact",
            // "research & strategy",
            "UX/UI",
            "full-stack",
            "growing startups",
            // "measurable results"
          ];

          // Wrap each highlight word in a span with animation
          const highlightedLine = highlightWords.reduce((acc, word) => {
            const regex = new RegExp(`(${word})`, "g");
            return acc.replace(
              regex,
              `<span class="font-bold inline-block animate-zoom text-white">${word}</span>`
            );
          }, line);

          return (
            <div
              key={idx}
              className="whitespace-pre text-white"
              dangerouslySetInnerHTML={{ __html: highlightedLine }}
            />
          );
        })}
      </pre>
    </div>
  );
}

const landingCopy = {
  badgeTexts: [
    "Developer-First Approach",
    "Innovation in Every Line",
    "Built for Scalability",
    "Engineering Excellence",
    "Pixel-Perfect Execution",
    "Performance Obsessed",
    "Code Meets Vision",
    "Future-Ready Products",
    "Crafted for Impact",
  ],

  headlines: [
    "From Idea to Impact—Faster Than You Thought Possible",
    "Launch Smarter. Scale Faster. Innovate Relentlessly.",
    "Engineering the Future—One Product at a Time",
    "You Bring the Vision. We Build the Future.",
    "Turning Complex Challenges Into Elegant Code.",
    "Your Product’s Launchpad Is Right Here",
    "Scalable, Reliable, Unstoppable—That’s Our Code",
    "Build Boldly. Deliver Seamlessly.",
    "Think Big. Ship Fast. Grow Continuously.",
  ],

  subheadings: [
    "We craft high-performance solutions that turn your business goals into scalable digital products.",
    "Trusted by startups & enterprises to build, launch, and scale without the guesswork.",
    "No buzzwords. Just results—built with precision, designed for growth.",
    "We turn abstract ideas into production-grade platforms that perform under pressure.",
    "Our team lives at the intersection of code, creativity, and real-world results.",
    "Modern engineering with a strong user focus—that’s how we deliver impact.",
    "Every project is treated like a product, every line of code like a promise.",
    "If it's worth building, it’s worth building right. We make sure of that.",
    "Digital craftsmanship that balances innovation, usability, and performance.",
  ],

  ctaPrimary: [
    "See What We've Built",
    "View Our Projects",
    "Browse Success Stories",
    "Discover Our Work",
    "Get Inspired",
    "Build With Us",
    "Start Exploring",
    "Check Our Portfolio",
    "See the Code in Action",
  ],

  ctaSecondary: [
    "Explore Our Code",
    "See How We Work",
    "Dive into GitHub",
    "Read Our Playbook",
    "Explore Engineering Docs",
    "See Open Source Contributions",
    "Peek Behind the Code",
    "Understand Our Process",
    "Meet the Stack",
  ],

  ctaTertiary: [
    "Let’s Talk About Your Idea",
    "Book a Free Consultation",
    "Start a Project",
    "Schedule a Call",
    "Plan Your MVP",
    "Pitch Us Your Vision",
    "Let’s Build Together",
    "Got a Vision? Let’s Chat",
    "Turn Your Idea Into Code",
  ],
};

/* --- Change this to instantly switch variants --- */
const choice = Math.floor(Math.random() * landingCopy.headlines.length);

export default function Homepage() {
  const [activeTab, setActiveTab] = useState("web");

  // Only update the synced texts when typing is done (full phrase visible)
  // const currentIndex = isTypingDone ? phraseIndex : 0;
  const currentIndex = 0;

  const B = landingCopy.badgeTexts[currentIndex];
  // const H = headlineText; // typed text always shown
  const S = landingCopy.subheadings[currentIndex];
  const P1 = landingCopy.ctaPrimary[currentIndex];
  const P2 = landingCopy.ctaSecondary[currentIndex];
  const P3 = landingCopy.ctaTertiary[currentIndex];
  
          

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const TechGrid = ({ icons }: { icons: Record<string, any> }) => (
  <motion.div
    variants={containerVariants}
    initial="hidden"
    animate="show"
    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8"
  >
    {Object.keys(icons).map((tech, index) => {
      const Icon = icons[tech];
      return (
        <motion.div
          key={index}
          variants={itemVariants}
          className="flex flex-col items-center transition-transform duration-300 hover:scale-105"
        >
          <div className="w-20 h-20 md:w-24 md:h-24 bg-[#30396d] border border-[#F49F1C]/20 rounded-2xl flex items-center justify-center mb-3 shadow-lg hover:shadow-orange-400/30">
            <Icon className="text-white w-10 h-10" />
          </div>
          <span className="text-sm font-medium text-center text-[#030E4F] tracking-wide">
            {tech}
          </span>
        </motion.div>
      );
    })}
  </motion.div>
);

  return (
    <div className="min-h-screen bg-[#030E4F] text-white">
      {/* Hero Section with Code */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-[#d6d7dc] via-[#1E3A8A] to-[#030E4F] z-0" /> */}
        {/* <div className= "absolute inset-0 bg-gradient-to-br from-[#d6d7dc] z-0" ></div> */}
       <div className="absolute inset-0 bg-[#d6d7dc] z-0"></div>


        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* ---------- LEFT COLUMN ---------- */}
    <div>
  {/* Badge */}
  <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
    {B}
  </Badge>

  {/* Heading with placeholder and absolute typewriter */}
  <div className="relative mb-20"> {/* Increased bottom margin */}
    {/* Invisible Placeholder to reserve space */}
    <h1 className="invisible text-[#030E4F] md:text-6xl font-bold leading-tight break-words max-w-full">
      Build Your Dream Project with Us {/* ← replace with longest headline */}
    </h1>

    {/* Actual Animated Typewriter Heading */}
    <h1 className="absolute top-0 left-0 text-[#030E4F] md:text-6xl font-bold leading-tight break-words max-w-full">
      <Typewriter
        options={{
          strings: landingCopy.headlines,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 80,
        }}
      />
    </h1>
  </div>

  {/* Subheading */}
  <p className="text-xl text-[#030E4F] mb-10 max-w-full">{S}</p> {/* More margin */}

  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row gap-4">
    <HoverAnimation type="scale">
      <Link href="/portfolio">
      <Button
        size="lg"
        className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold"
      >
        {P1}
      </Button>
      </Link>
    </HoverAnimation>

    <HoverAnimation type="scale">
         <Link href="/contact">
      <Button
        size="lg"
        variant="outline"
        className="border-[#F49F1C] text-[#F49F1C] bg-[#30396d] "
      >
        {P3}
      </Button>
         </Link>
    </HoverAnimation>
  </div>
</div>


            {/* ---------- RIGHT COLUMN (STATIC) ---------- */}
            <div className="relative">
              {/* glow border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#F49F1C] to-[#FF8C00] rounded-lg blur opacity-20"></div>

              {/* terminal prompt */}
              <div className="text-[#030E4F] text-xs font-mono mb-2 select-none">
                $ npx&nbsp;launch-your-idea&nbsp;--with-us
              </div>

              {/* pseudo-code block */}
              <CodeBlock
                language="TypeScript"
                code={`// 🚀  We turn bold ideas into real-world impact
// --------------------------------------------

// Describe your next big thing
type BusinessIdea = {
  vision: string;
  targetUsers: string[];
  successMetric: string;
};

// Our step-by-step innovation engine
function transform(idea: BusinessIdea) {
  const discovery   = deepDive(idea);            // research & strategy
  const prototype   = rapidPrototype(discovery); // UX/UI & MVP build
  const product     = engineer(prototype);       // full-stack development
  const marketFit   = launchAndLearn(product);   // iterate & scale
  return celebrateImpact(marketFit);             // measurable results
}

// Ready to build something remarkable?
const yourNextProduct = transform({
  vision: "Re-imagine customer experience with AI-powered insights",
  targetUsers: ["growing startups", "enterprise innovators"],
  successMetric: "10x engagement & ROI"
});`}
              />
            </div>
          </div>
        </div>

        {/* caret blink keyframes */}
        <style jsx>{`
          @keyframes blink {
            0%,
            49% {
              opacity: 1;
            }
            50%,
            100% {
              opacity: 0;
            }
          }
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
        `}</style>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#30396d]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <FadeIn className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F49F1C] mb-2">
                <AnimatedCounter end={4000} suffix="+" />
              </div>
              <p className="text-gray-300">Lines Of Code Delivered</p>
            </FadeIn>
            <FadeIn delay={0.1} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F49F1C] mb-2">
                <AnimatedCounter end={10} suffix="+" />
              </div>
              <p className="text-gray-300">Happy Clients</p>
            </FadeIn>
            <FadeIn delay={0.2} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F49F1C] mb-2">
                <AnimatedCounter end={5} suffix=" Years" />
              </div>
              <p className="text-gray-300">Team Experience</p>
            </FadeIn>
            <FadeIn delay={0.3} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F49F1C] mb-2">
                <AnimatedCounter end={24} suffix="/7" />
              </div>
              <p className="text-gray-300">Support</p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20  bg-[#d6d7dc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
                Our Services
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-[#030E4F] md:text-5xl font-bold mb-6 ">
                Technical Expertise
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[#030E4F] max-w-3xl mx-auto">
                We deliver robust, scalable solutions using cutting-edge
                technologies and best practices.
              </p>
            </FadeIn>
          </div>


{/* <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {Homeservices.map((service, index) => (
    <HoverAnimation key={index} type="lift">
      <Card className="bg-[#30396d] border-[#F49F1C]/20 hover:border-[#F49F1C]/50 transition-all duration-300 ">
        <CardContent className="p-6 flex flex-col justify-between h-full min-h-[360px]">
          <div>
            <div className="mb-4 text-[#F49F1C] text-6xl">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
            <p className="text-gray-300 font-bold 
            ">{service.shortDesc}</p>
          </div>

          <Link href={`/homeservices/${service.slug}`}>
            <Button
              variant="link"
              className="text-[#F49F1C] p-0 mt-4 flex items-center"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </HoverAnimation>
  ))}
</StaggerContainer> */}

<StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  {Homeservices.map((service, index) => {
    const IconComponent = serviceIcons[service.slug] || Code
    return (
      <HoverAnimation key={index} type="lift">
        <Card className="bg-[#30396d] border-[#F49F1C]/20 hover:border-[#F49F1C]/50 transition-all duration-300">
          <CardContent className="p-6 flex flex-col justify-between h-full min-h-[360px]">
            <div>
              {/* Icon style like services */}
              <div className="w-14 h-14 rounded-full bg-[#F49F1C]/10 flex items-center justify-center mb-4">
                <IconComponent className="h-8 w-8 text-[#F49F1C]" />
              </div>

              <h3 className="text-xl font-bold mb-2 text-white">{service.title}</h3>
              <p className="text-gray-300 font-bold">{service.shortDesc}</p>
            </div>

            <Link href={`/homeservices/${service.slug}`}>
              <Button
                variant="link"
                className="text-[#F49F1C] p-0 mt-4 flex items-center"
              >
                Learn more <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </HoverAnimation>
    )
  })}
</StaggerContainer>


        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-20 bg-[#d6d7dc] z-0">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
                Tech Stack
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-[#030E4F] md:text-5xl font-bold mb-6">
                Our Technology Toolkit
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[#30396d] max-w-3xl mx-auto">
                We use the latest technologies to build robust, scalable, and
                maintainable applications.
              </p>
            </FadeIn>
          </div>

          <Tabs
            defaultValue={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
         <div className="flex justify-center mb-12">
  <TabsList className="bg-[#30396d] border border-[#F49F1C]/20 rounded-lg p-1">
    <TabsTrigger
      value="web"
      className="text-lg px-6 py-3 font-semibold text-white data-[state=active]:bg-[#F49F1C] data-[state=active]:text-[#030E4F] rounded-md transition"
    >
      Frontend
    </TabsTrigger>
    <TabsTrigger
      value="backend"
      className="text-lg px-6 py-3 font-semibold text-white data-[state=active]:bg-[#F49F1C] data-[state=active]:text-[#030E4F] rounded-md transition"
    >
      Backend
    </TabsTrigger>
    <TabsTrigger
      value="mobile"
      className="text-lg px-6 py-3 font-semibold text-white data-[state=active]:bg-[#F49F1C] data-[state=active]:text-[#030E4F] rounded-md transition"
    >
      Mobile
    </TabsTrigger>
    <TabsTrigger
      value="devops"
      className="text-lg px-6 py-3 font-semibold text-white data-[state=active]:bg-[#F49F1C] data-[state=active]:text-[#030E4F] rounded-md transition"
    >
      DevOps
    </TabsTrigger>
  </TabsList>
</div>



<TabsContent value="web" className="mt-0">
  <TechGrid icons={techIcons} />
</TabsContent>

<TabsContent value="backend" className="mt-0">
  <TechGrid icons={backendIcons} />
</TabsContent>

<TabsContent value="mobile" className="mt-0">
  <TechGrid icons={mobileIcons} />
</TabsContent>

<TabsContent value="devops" className="mt-0">
  <TechGrid icons={devopsIcons} />
</TabsContent>

          </Tabs>
        </div>
      </section>

      {/* Portfolio Section */}
      {/* <section className="py-20  bg-[#d6d7dc]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
                Our Work
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-[#030E4F] md:text-5xl font-bold mb-6">
                Featured Projects
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[#30396d] max-w-3xl mx-auto">
                Explore our portfolio of technical solutions and development
                projects.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "E-commerce Platform",
                category: "Web Development",
                tech: "Next.js, Node.js, MongoDB",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Financial Dashboard",
                category: "Data Visualization",
                tech: "React, D3.js, Express",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Healthcare API",
                category: "Backend Development",
                tech: "Go, PostgreSQL, Docker",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Real-time Chat App",
                category: "Full Stack",
                tech: "React, Socket.io, Redis",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Inventory Management System",
                category: "Enterprise",
                tech: "TypeScript, NestJS, MySQL",
                image: "/placeholder.svg?height=600&width=800",
              },
              {
                title: "Mobile Fitness App",
                category: "Mobile Development",
                tech: "React Native, Firebase, Node.js",
                image: "/placeholder.svg?height=600&width=800",
              },
            ].map((project, index) => (
              <HoverAnimation key={index} type="scale" className="group">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 overflow-hidden h-full">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-6">
                    <Badge className="mb-2 bg-[#F49F1C]/20 text-[#F49F1C] border-[#F49F1C]/30">
                      {project.category}
                    </Badge>
                    <h3 className="text-xl font-bold mb-2 text-white">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{project.tech}</p>
                    <Button
                      variant="link"
                      className="text-[#F49F1C] p-0 flex items-center"
                    >
                      View Case Study <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </HoverAnimation>
            ))}
          </StaggerContainer>

          <div className="text-center mt-12">
            <FadeIn>
              <HoverAnimation type="scale">
                <Button
                  size="lg"
                  className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold"
                >
                  View All Projects
                </Button>
              </HoverAnimation>
            </FadeIn>
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-20 bg-[#d6d7dc] ">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <FadeIn>
              <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">
                Testimonials
              </Badge>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="text-[#030E4F] md:text-5xl font-bold mb-6">
                Client Feedback
              </h2>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="text-xl text-[#30396d] max-w-3xl mx-auto">
                Hear what our clients have to say about our technical expertise
                and development process.
              </p>
            </FadeIn>
          </div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "David Kim",
                role: "CTO, TechStart",
                quote:
                  "NerdCrater's development team delivered a complex application with clean, maintainable code that exceeded our expectations.",
              },
              {
                name: "Emily Chen",
                role: "Product Manager, DataViz",
                quote:
                  "Their technical expertise and attention to detail resulted in a high-performance system that scales effortlessly with our growing user base.",
              },
              {
                name: "Robert Patel",
                role: "Founder, FinTech Solutions",
                quote:
                  "Working with NerdCrater was a game-changer for our startup. They translated our vision into a robust technical solution.",
              },
            ].map((testimonial, index) => (
              <HoverAnimation key={index} type="lift">
                <Card className="bg-[#30396d] border-[#F49F1C]/20 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 text-[#F49F1C]">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-xl">
                          ★
                        </span>
                      ))}
                    </div>
                    <p className="text-gray-300 italic mb-6 flex-grow">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-bold text-white">{testimonial.name}</p>
                      <p className="text-gray-400">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </HoverAnimation>
            ))}
          </StaggerContainer>
        </div>
      </section> */}

      {/* Client Logos Section */}
      {/* <section className="py-16 bg-[#030E4F]">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-10">
              <h3 className="text-2xl font-bold mb-4">
                Trusted by Tech Leaders
              </h3>
            </div>
          </FadeIn>
          <ClientLogos />
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section 
      // className="py-20 bg-gradient-to-r from-[#030E4F] via-[#1E3A8A] to-[#F49F1C]/20"
      className="py-20 bg-[#d6d7dc]"
      >
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-[#030E4F] md:text-5xl font-bold mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-xl text-[#30396d] mb-8">
                Let's discuss your project and how our technical expertise can
                help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <HoverAnimation type="scale">
                  <Button
                    size="lg"
                    className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold"
                  >
                    Start a Project
                  </Button>
                </HoverAnimation>
                <HoverAnimation type="scale">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-[#F49F1C] text-[#F49F1C] bg-[#30396d]"
                  >
                    Schedule a Consultation
                  </Button>
                </HoverAnimation>
              </div>
            </div>
          </FadeIn>
        </div>
      </section> */}

      {/* Newsletter Section */}
      {/* <NewsletterCTA /> */}
    </div>
  );
}
