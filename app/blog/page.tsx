"use client"
import { blogPosts } from "@/lib/data"
import BlogCard from "@/components/blog-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { FadeIn, StaggerContainer, HoverAnimation } from "@/components/animations"

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#030E4F] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center py-20">
          <FadeIn>
            <Badge className="mb-4 bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">Our Blog</Badge>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Tech <span className="text-[#F49F1C]">Insights</span> & News
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay updated with the latest tech trends, insights, and news from our experts. Discover best practices,
              tutorials, and industry analysis.
            </p>
          </FadeIn>
        </section>

        {/* Search Section */}
        <section className="mb-16">
          <FadeIn>
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                className="pl-10 bg-[#020B3F] border-[#F49F1C]/30 focus:border-[#F49F1C] text-white"
              />
            </div>
          </FadeIn>
        </section>

        {/* Featured Article */}
        <section className="mb-20">
          <FadeIn>
            <div className="bg-[#020B3F] rounded-2xl p-8 border border-[#F49F1C]/20">
              <Badge className="mb-4 bg-[#F49F1C]/20 text-[#F49F1C] border-[#F49F1C]/30">Featured</Badge>
              <h2 className="text-3xl font-bold mb-4">The Future of Web Development: Trends to Watch in 2024</h2>
              <p className="text-gray-300 mb-6">
                Explore the latest trends shaping the future of web development, from AI integration to progressive web
                apps and beyond.
              </p>
              <div className="flex items-center gap-4">
                <HoverAnimation type="scale">
                  <Button className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">Read Article</Button>
                </HoverAnimation>
                <span className="text-sm text-gray-400">5 min read • Dec 15, 2023</span>
              </div>
            </div>
          </FadeIn>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-20">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-12 text-center">Latest Articles</h2>
          </FadeIn>
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <HoverAnimation key={post.id} type="lift">
                <BlogCard
                  title={post.title}
                  date={post.date}
                  category={post.category}
                  excerpt={post.excerpt}
                  image={post.image}
                  slug={post.slug}
                />
              </HoverAnimation>
            ))}
          </StaggerContainer>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-gradient-to-r from-[#030E4F] via-[#1E3A8A] to-[#F49F1C]/20 rounded-2xl text-center">
          <FadeIn>
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss the latest tech insights and updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                placeholder="Your email address"
                className="bg-[#020B3F] border-[#F49F1C]/30 focus:border-[#F49F1C] text-white"
              />
              <HoverAnimation type="scale">
                <Button className="bg-[#F49F1C] hover:bg-[#E8890B] text-[#030E4F] font-semibold">Subscribe</Button>
              </HoverAnimation>
            </div>
          </FadeIn>
        </section>
      </div>
    </div>
  )
}
