import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronRight } from "lucide-react"

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-normal mb-6">ITIN Resources & Insights</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Stay informed with the latest news, tips, and resources about ITIN applications and financial inclusion
              for immigrants.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-normal mb-12">Featured Article</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Featured article"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>April 15, 2023</span>
                  <span>•</span>
                  <span>ITIN Updates</span>
                </div>
                <h3 className="text-2xl font-bold">2023 ITIN Updates: What You Need to Know</h3>
                <p className="text-gray-700">
                  The IRS has announced several important changes to the ITIN application process for 2023. These
                  updates aim to streamline the process and reduce processing times. Learn how these changes might
                  affect your application and what steps you should take to ensure a smooth experience.
                </p>
                <Link href="/blog/2023-itin-updates">
                  <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                    Read More
                    <span className="ml-1 border-b border-white"></span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Recent Articles */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-normal mb-12">Recent Articles</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {recentArticles.map((article, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden border border-gray-200">
                  <div className="relative h-48">
                    <Image
                      src={article.image || "/placeholder.svg?height=400&width=600"}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.category}</span>
                    </div>
                    <h3 className="text-xl font-bold">{article.title}</h3>
                    <p className="text-gray-700 line-clamp-3">{article.excerpt}</p>
                    <Link href={article.link} className="text-orange-500 inline-flex items-center">
                      Read more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <Button variant="outline" className="border-black hover:bg-gray-100">
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl font-normal mb-12">Browse by Category</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categories.map((category, index) => (
                <Link
                  key={index}
                  href={category.link}
                  className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                    <Image src={category.icon || "/placeholder.svg"} alt={category.name} width={32} height={32} />
                  </div>
                  <h3 className="font-bold">{category.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{category.count} articles</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-16 md:py-24 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates, tips, and resources about ITIN applications.
            </p>
            <div className="max-w-md mx-auto flex gap-2">
              <input type="email" placeholder="Enter your email" className="flex-1 px-4 py-2 rounded-md text-black" />
              <Button className="bg-black hover:bg-gray-800 text-white">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const recentArticles = [
  {
    title: "How to Prepare for Your ITIN Application: A Step-by-Step Guide",
    excerpt:
      "Preparing for your ITIN application can seem overwhelming, but with the right approach, it can be a smooth process. This guide walks you through each step, from gathering documents to submitting your application.",
    date: "March 28, 2023",
    category: "Application Tips",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/itin-application-guide",
  },
  {
    title: "5 Common ITIN Application Mistakes and How to Avoid Them",
    excerpt:
      "Many ITIN applications are delayed or rejected due to common mistakes that can easily be avoided. Learn about the five most frequent errors and get expert tips on how to ensure your application is processed smoothly.",
    date: "February 15, 2023",
    category: "Application Tips",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/common-itin-mistakes",
  },
  {
    title: "Financial Benefits of Having an ITIN: Beyond Tax Filing",
    excerpt:
      "While ITINs are primarily used for tax filing purposes, they offer numerous other financial benefits that many immigrants aren't aware of. Discover how an ITIN can open doors to banking services, credit building, and more.",
    date: "January 10, 2023",
    category: "Financial Inclusion",
    image: "/placeholder.svg?height=400&width=600",
    link: "/blog/itin-financial-benefits",
  },
]

const categories = [
  {
    name: "ITIN Updates",
    count: 12,
    icon: "/icons/bell.png",
    link: "/blog/category/itin-updates",
  },
  {
    name: "Application Tips",
    count: 8,
    icon: "/icons/document.png",
    link: "/blog/category/application-tips",
  },
  {
    name: "Financial Inclusion",
    count: 15,
    icon: "/icons/dollar.png",
    link: "/blog/category/financial-inclusion",
  },
  {
    name: "Success Stories",
    count: 6,
    icon: "/icons/gender.png",
    link: "/blog/category/success-stories",
  },
]
