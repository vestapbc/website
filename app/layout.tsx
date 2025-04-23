import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieBanner from "@/components/cookie-banner"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

// Remove the local font that's causing the error
// Instead, we'll use the font-family from CSS

export const metadata: Metadata = {
  title: "VESTA",
  description: "We help the daring build legendary companies.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow flex flex-col">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  )
}

