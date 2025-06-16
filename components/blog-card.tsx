import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { formatDate } from "@/lib/utils"

interface BlogCardProps {
  title: string
  date: string
  category: string
  excerpt: string
  image: string
  slug: string
}

export default function BlogCard({ title, date, category, excerpt, image, slug }: BlogCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full group hover:shadow-lg transition-all duration-300 border-none shadow-md">
      <div className="relative h-56 overflow-hidden">
        <Image
          src={image || "/placeholder.svg?height=400&width=600"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-medium px-2 py-1 rounded-full bg-primary/80">{category}</span>
        </div>
      </div>
      <CardContent className="p-6 flex-grow">
        <div className="text-sm text-muted-foreground mb-2">{formatDate(date)}</div>
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{title}</h3>
        <p className="text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <Link href={`/blog/${slug}`} passHref className="w-full">
          <Button variant="outline" className="w-full group/button">
            <span>Read Article</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/button:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}
