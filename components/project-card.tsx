"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Card3D from "@/components/3d-card"
import GlowEffect from "@/components/glow-effect"

interface Project {
  id: number
  title: string
  slug: string
  description: string
  image: string
  tags: string[]
  link?: string
}

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card3D className="h-full">
      <GlowEffect className="h-full">
        <Card className="h-full border-none shadow-lg overflow-hidden bg-card/80 backdrop-blur-sm">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          <CardHeader className="relative -mt-8 bg-card/90 backdrop-blur-sm rounded-t-xl">
            <CardTitle className="text-xl">{project.title}</CardTitle>
            <CardDescription className="line-clamp-2">{project.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tags && project.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button asChild variant="ghost" className="p-0">
              <Link href={`/portfolio/${project.slug}`}>
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {project.link && (
              <Button asChild variant="outline" size="sm">
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  Visit
                </a>
              </Button>
            )}
          </CardFooter>
        </Card>
      </GlowEffect>
    </Card3D>
  )
}
