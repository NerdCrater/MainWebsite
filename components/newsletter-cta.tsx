import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FadeIn, PopIn } from "./animations"
import { Mail } from "lucide-react"

export default function NewsletterCTA() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn>
            <div className="inline-flex items-center justify-center p-2 bg-gray-800 rounded-full mb-6">
              <Mail className="h-5 w-5 text-primary mr-2" />
              <span className="text-sm font-medium text-gray-300">Stay Updated</span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Subscribe to Our Newsletter</h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Get the latest tech insights, development tips, and industry news delivered straight to your inbox.
            </p>
          </FadeIn>

          <PopIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white focus:border-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 text-gray-950">Subscribe</Button>
            </div>
          </PopIn>

          <FadeIn delay={0.4}>
            <p className="text-sm text-gray-500 mt-4">We respect your privacy. Unsubscribe at any time.</p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
