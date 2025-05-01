import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChevronLeft, Calendar, User, Tag } from "lucide-react"

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // In a real application, you would fetch the blog post data based on the slug
  const post = {
    title: "2023 ITIN Updates: What You Need to Know",
    date: "April 15, 2023",
    author: "Maria Rodriguez",
    category: "ITIN Updates",
    image: "/placeholder.svg?height=800&width=1200",
    content: `
      <p>The IRS has announced several important changes to the ITIN application process for 2023. These updates aim to streamline the process and reduce processing times.</p>
      
      <h2>Key Changes for 2023</h2>
      
      <p>One of the most significant changes is the expansion of the Certified Acceptance Agent (CAA) program. The IRS has increased the number of authorized CAAs nationwide, making it easier for applicants to find local assistance with their ITIN applications.</p>
      
      <p>Additionally, the IRS has improved its online tools for tracking application status. Applicants can now check the status of their ITIN application online, providing greater transparency and reducing anxiety during the waiting period.</p>
      
      <h2>Document Requirements</h2>
      
      <p>The IRS has also clarified and simplified the document requirements for ITIN applications. While a passport remains the preferred identification document, the IRS now accepts a broader range of secondary documents to verify identity and foreign status.</p>
      
      <p>For applicants who cannot provide a passport, the following combinations of documents are now accepted:</p>
      
      <ul>
        <li>National ID card and birth certificate</li>
        <li>Foreign voter registration card and driver's license</li>
        <li>Civil birth certificate and medical records (for dependents under 6)</li>
        <li>School records and foreign military ID (for dependents under 18)</li>
      </ul>
      
      <h2>Processing Times</h2>
      
      <p>The IRS has committed to reducing processing times for ITIN applications. For applications submitted during non-peak periods (May through December), the IRS aims to process applications within 7 weeks, down from the previous 9-11 week timeframe.</p>
      
      <p>Applications submitted during the peak tax filing season (January through April) may still take 9-11 weeks to process due to higher volume.</p>
      
      <h2>Renewal Process</h2>
      
      <p>The IRS continues to require renewal for ITINs that have not been used on a federal tax return for three consecutive years, as well as ITINs with middle digits 70 to 88 that were issued before 2013.</p>
      
      <p>However, the renewal process has been simplified, and in many cases, only the ITIN holder needs to renew, rather than the entire family.</p>
      
      <h2>How Vesta Can Help</h2>
      
      <p>At Vesta, we stay up-to-date with all IRS changes and requirements. Our ITIN specialists can help you navigate these updates and ensure your application or renewal is processed as quickly and smoothly as possible.</p>
      
      <p>Contact us today to learn more about how we can assist with your ITIN needs in 2023.</p>
    `,
    relatedPosts: [
      {
        title: "How to Prepare for Your ITIN Application: A Step-by-Step Guide",
        slug: "itin-application-guide",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "5 Common ITIN Application Mistakes and How to Avoid Them",
        slug: "common-itin-mistakes",
        image: "/placeholder.svg?height=400&width=600",
      },
      {
        title: "Financial Benefits of Having an ITIN: Beyond Tax Filing",
        slug: "itin-financial-benefits",
        image: "/placeholder.svg?height=400&width=600",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-orange-500 mb-6">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to all articles
            </Link>
            <h1 className="text-4xl md:text-5xl font-normal mb-6">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                <span>{post.category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Blog Content */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <div className="relative h-[400px] rounded-lg overflow-hidden mb-12">
              <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
            </div>

            <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />

            <div className="mt-12 pt-12 border-t">
              <h3 className="text-2xl font-normal mb-6">Related Articles</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {post.relatedPosts.map((relatedPost, index) => (
                  <Link key={index} href={`/blog/${relatedPost.slug}`} className="group">
                    <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                      <Image
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h4 className="font-bold group-hover:text-orange-500 transition-colors">{relatedPost.title}</h4>
                  </Link>
                ))}
              </div>
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
