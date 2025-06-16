import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Calendar, User, Tag, Twitter, Linkedin, Facebook } from "lucide-react"
import { blogPosts } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import { Card, CardContent } from "@/components/ui/card"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.title} | NerdCrater Blog`,
    description: post.excerpt,
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  // Find related posts (same category, excluding current post)
  const relatedPosts = blogPosts.filter((p) => p.category === post.category && p.id !== post.id).slice(0, 2)

  return (
    <div className="bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-background rounded-xl shadow-md overflow-hidden">
          <Link href="/blog" passHref>
            <Button variant="ghost" className="m-6 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Blog
            </Button>
          </Link>

          {post.image && (
            <div className="relative h-[400px] w-full">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>
          )}

          <div className="p-8">
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              <div className="flex items-center gap-1">
                <User className="h-4 w-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Tag className="h-4 w-4" />
                <span>{post.category}</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
            <p className="text-xl text-muted-foreground mb-8">{post.excerpt}</p>

            <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
              <p>{post.body}</p>
              <p>
                In the rapidly evolving landscape of technology, staying ahead of the curve is essential for businesses
                and developers alike. As we look toward the future, several key trends are emerging that will shape the
                way we build and interact with web applications.
              </p>
              <h2>The Rise of WebAssembly</h2>
              <p>
                WebAssembly (Wasm) is gaining significant traction as a powerful tool for bringing high-performance
                applications to the web. By allowing code written in languages like C++, Rust, and Go to run in the
                browser at near-native speed, Wasm is opening up new possibilities for web applications that were
                previously limited to desktop environments.
              </p>
              <h2>AI-Driven Development</h2>
              <p>
                Artificial intelligence is not just a feature we implement in our applications—it's becoming an integral
                part of the development process itself. AI-powered tools are helping developers write better code,
                identify bugs before they reach production, and even generate entire components based on simple
                descriptions.
              </p>
              <h2>The Evolution of Frontend Frameworks</h2>
              <p>
                Frontend frameworks continue to evolve, with a focus on performance, developer experience, and user
                experience. The trend toward server components, partial hydration, and islands architecture is making
                web applications faster and more efficient than ever before.
              </p>
              <h2>Conclusion</h2>
              <p>
                The future of web development is bright, with new technologies and methodologies emerging that will help
                us build better, faster, and more accessible applications. By staying informed and adaptable, developers
                can position themselves to take advantage of these exciting opportunities.
              </p>
            </div>

            <div className="border-t pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {post.author
                      .split(" ")
                      .map((name) => name[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-medium text-lg">{post.author}</p>
                    <p className="text-sm text-muted-foreground">Technical Writer & Developer</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground mr-2">Share:</span>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Twitter className="h-4 w-4" />
                    <span className="sr-only">Share on Twitter</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Linkedin className="h-4 w-4" />
                    <span className="sr-only">Share on LinkedIn</span>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Facebook className="h-4 w-4" />
                    <span className="sr-only">Share on Facebook</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Card key={relatedPost.id} className="overflow-hidden border-none shadow-md">
                  <div className="relative h-48">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">{formatDate(relatedPost.date)}</div>
                    <h3 className="text-xl font-bold mb-2 line-clamp-2">{relatedPost.title}</h3>
                    <p className="text-muted-foreground line-clamp-2 mb-4">{relatedPost.excerpt}</p>
                    <Link href={`/blog/${relatedPost.slug}`} passHref>
                      <Button variant="outline" className="w-full">
                        Read Article
                      </Button>
                    </Link>
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
