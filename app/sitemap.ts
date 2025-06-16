import type { MetadataRoute } from "next"
import { projects, blogPosts, services } from "@/lib/data"

export default function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://nerdcrater.com"

  // Blog posts
  const postUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
  }))

  // Projects
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/portfolio/${project.slug}`,
    lastModified: new Date(),
  }))

  // Services
  const serviceUrls = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
  }))

  // Static routes
  const routes = ["", "/about", "/services", "/portfolio", "/blog", "/contact"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }))

  return Promise.resolve([...routes, ...postUrls, ...projectUrls, ...serviceUrls])
}
