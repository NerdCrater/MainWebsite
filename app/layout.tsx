import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
 import "./globals.css"
import { ThemeProvider as NextThemesProvider } from "@/components/theme-provider"
import { ThemeProvider } from "@/context/theme-context"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Head from "next/head"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NerdCrater - IT Solutions Agency | Web, App & AI Development",
  description:
    "NerdCrater is a cutting-edge IT solutions company offering web development, app development, AI integration, and design services. Let's build the future together.",
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>

<Head>
  <script src="https://assets.calendly.com/assets/external/widget.js" async></script>
</Head>
      <body className={inter.className}>
        <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ThemeProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ThemeProvider>
        </NextThemesProvider>/
      </body>
    </html>
  )
}
