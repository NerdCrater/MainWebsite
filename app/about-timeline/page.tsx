"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  Users,
  Award,
  Briefcase,
  Clock,
  Globe,
  Cpu,
  Trophy,
  CheckCircle,
  Heart,
  Lightbulb,
  Shield,
  Twitter,
  Linkedin,
  Mail,
  Github,
  Dribbble,
} from "lucide-react"

// Timeline component
const Timeline = () => {
  const timelineEvents = [
    {
      year: "2013",
      title: "Company Founded",
      description: "NerdCrater was founded with a vision to transform how businesses leverage technology.",
      icon: <Briefcase className="h-6 w-6" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2015",
      title: "Team Expansion",
      description: "Our team grew to 10 members and we expanded our service offerings to include mobile development.",
      icon: <Users className="h-6 w-6" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2017",
      title: "First Major Client",
      description: "Secured our first enterprise client and delivered a complex e-commerce platform.",
      icon: <Award className="h-6 w-6" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2019",
      title: "International Expansion",
      description: "Opened our first international office and reached 25+ team members.",
      icon: <Globe className="h-6 w-6" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2021",
      title: "AI Division Launch",
      description: "Launched our AI solutions division and partnered with leading tech companies.",
      icon: <Cpu className="h-6 w-6" />,
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Received multiple awards for our innovative solutions and client satisfaction.",
      icon: <Trophy className="h-6 w-6" />,
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-600/20"></div>

      {/* Timeline events */}
      {timelineEvents.map((event, index) => (
        <motion.div
          key={event.year}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className={`relative mb-16 flex ${
            index % 2 === 0 ? "flex-row" : "flex-row-reverse"
          } items-center justify-center`}
        >
          {/* Timeline dot */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-blue-600 border-4 border-white dark:border-gray-900 z-10"></div>

          {/* Content */}
          <div className={`w-1/2 ${index % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
            <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold mb-3">
              {event.year}
            </div>
            <h3 className="text-2xl font-bold mb-2">{event.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{event.description}</p>
            <div className="flex items-center justify-end">
              <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-3">
                {event.icon}
              </div>
            </div>
          </div>

          {/* Image (opposite side) */}
          <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                width={400}
                height={300}
                className="w-full h-auto"
              />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

// Team member component
const TeamMember = ({ name, role, image, bio, socialLinks }:any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-lg">
        <div className="aspect-w-3 aspect-h-4">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={400}
            className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <div className="p-6 w-full">
              <div className="flex justify-center space-x-4 mb-4">
                {socialLinks.map((link : any, index : any) => (
                  <a
                    key={index}
                    href={link.url}
                    className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-blue-600 transition-colors"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400 mb-4">{role}</p>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-3">{bio}</p>
        </div>
      </div>
    </motion.div>
  )
}

// Stats component with animated counters
const Stats = () => {
  const stats = [
    { value: 10, label: "Years of Experience", icon: <Clock className="h-6 w-6" /> },
    { value: 200, label: "Projects Completed", icon: <CheckCircle className="h-6 w-6" /> },
    { value: 50, label: "Happy Clients", icon: <Heart className="h-6 w-6" /> },
    { value: 25, label: "Team Members", icon: <Users className="h-6 w-6" /> },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg text-center"
        >
          <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 mx-auto mb-4">
            {stat.icon}
          </div>
          <div className="text-4xl font-bold mb-2 text-blue-600 dark:text-blue-400">
            <CountUp end={stat.value} duration={2} />
            {stat.value > 100 ? "+" : ""}
          </div>
          <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  )
}

// CountUp component for animated numbers
// const CountUp = ({ end, duration }:any) => {
//   const [count, setCount] = useState(0)
//   const countRef = useRef(null)

//   useScroll({
//     target: countRef,
//     onEnter: () => {
//       let startTime : any
//       let animationFrame : any

//       const animate = (timestamp : any) => {
//         if (!startTime ) startTime = timestamp
//         const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
//         setCount(Math.floor(progress * end))

//         if (progress < 1) {
//           animationFrame = requestAnimationFrame(animate)
//         }
//       }

//       animationFrame = requestAnimationFrame(animate)

//       return () => {
//         if (animationFrame) {
//           cancelAnimationFrame(animationFrame)
//         }
//       }
//     },
//   })

//   return <div ref={countRef}>{count}</div>
// }



const CountUp = ({ end, duration }: any) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let startTime: number | null = null;
          let animationFrame: number;

          const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));

            if (progress < 1) {
              animationFrame = requestAnimationFrame(animate);
            }
          };

          animationFrame = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 } // adjust as needed
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [duration, end]);

  return <div ref={countRef}>{count}</div>;
};



// Values section
const Values = () => {
  const values = [
    {
      title: "Innovation",
      description: "We constantly explore new technologies and approaches to deliver cutting-edge solutions.",
      icon: <Lightbulb className="h-6 w-6" />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    {
      title: "Excellence",
      description: "We are committed to delivering the highest quality work in everything we do.",
      icon: <Award className="h-6 w-6" />,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    },
    {
      title: "Collaboration",
      description: "We work closely with our clients to ensure their vision becomes reality.",
      icon: <Users className="h-6 w-6" />,
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    },
    {
      title: "Integrity",
      description: "We operate with honesty, transparency, and ethical business practices.",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {values.map((value, index) => (
        <motion.div
          key={value.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg"
        >
          <div className={`w-12 h-12 rounded-full ${value.color} flex items-center justify-center mb-4`}>
            {value.icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{value.title}</h3>
          <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
        </motion.div>
      ))}
    </div>
  )
}

// Main component
export default function AboutTimelinePage() {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], [0, 300])

  // Team members data
  const teamMembers = [
    {
      name: "John Smith",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=400&width=300",
      bio: "John has over 15 years of experience in the tech industry and founded NerdCrater with a vision to transform how businesses leverage technology.",
      socialLinks: [
        { url: "#", icon: <Twitter className="h-4 w-4" /> },
        { url: "#", icon: <Linkedin className="h-4 w-4" /> },
        { url: "#", icon: <Mail className="h-4 w-4" /> },
      ],
    },
    {
      name: "Sarah Johnson",
      role: "CTO",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Sarah leads our technical team and has a background in software architecture and cloud infrastructure. She ensures we deliver cutting-edge solutions.",
      socialLinks: [
        { url: "#", icon: <Twitter className="h-4 w-4" /> },
        { url: "#", icon: <Linkedin className="h-4 w-4" /> },
        { url: "#", icon: <Mail className="h-4 w-4" /> },
      ],
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Michael is an expert in full-stack development with a focus on performance optimization and scalable architecture.",
      socialLinks: [
        { url: "#", icon: <Twitter className="h-4 w-4" /> },
        { url: "#", icon: <Linkedin className="h-4 w-4" /> },
        { url: "#", icon: <Github className="h-4 w-4" /> },
      ],
    },
    {
      name: "Emily Rodriguez",
      role: "UX/UI Designer",
      image: "/placeholder.svg?height=400&width=300",
      bio: "Emily creates beautiful, intuitive interfaces that enhance user experience and drive engagement for our clients' products.",
      socialLinks: [
        { url: "#", icon: <Twitter className="h-4 w-4" /> },
        { url: "#", icon: <Linkedin className="h-4 w-4" /> },
        { url: "#", icon: <Dribbble className="h-4 w-4" /> },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
                NerdCrater
              </Link>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link href="/about" className="text-blue-600 dark:text-blue-400 font-medium">
                About
              </Link>
              <Link
                href="/services"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Services
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Blog
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" className="text-gray-600 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=20&width=20')] bg-[length:30px_30px] opacity-10"></div>

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Our Journey
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-blue-100 mb-8"
            >
              From our humble beginnings to becoming a leading IT solutions provider, discover the story behind
              NerdCrater.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                Our History
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">The NerdCrater Timeline</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Follow our journey from a small startup to a global IT solutions provider.
              </p>
            </div>

            <Timeline />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                Our Achievements
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">NerdCrater in Numbers</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                We're proud of what we've accomplished over the years.
              </p>
            </div>

            <Stats />
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                Our Values
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">What Drives Us</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our core values shape everything we do and how we work with our clients.
              </p>
            </div>

            <Values />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-block px-4 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">
                Our Team
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet the Experts</h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Our talented team of professionals is dedicated to delivering exceptional results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <TeamMember
                  key={member.name}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                  socialLinks={member.socialLinks}
                />
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                View All Team Members
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to Work With Us?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-xl text-blue-100 mb-8"
            >
              Let's discuss how we can help your business grow with our innovative IT solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">NerdCrater</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Innovative IT solutions for forward-thinking businesses.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/services/web-development"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/mobile-app-development"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Mobile App Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ui-ux-design"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    UI/UX Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/cloud-solutions"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    Cloud Solutions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services/ai-development"
                    className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    AI Development
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">123 Tech Street, San Francisco, CA 94107</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">info@nerdcrater.com</span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <span className="text-gray-600 dark:text-gray-300">+1 (555) 123-4567</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                © {new Date().getFullYear()} NerdCrater. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-of-service"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
                <Link
                  href="/sitemap"
                  className="text-gray-600 dark:text-gray-400 text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Sitemap
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
