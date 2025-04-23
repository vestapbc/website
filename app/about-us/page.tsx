import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair mb-8">About Vesta</h1>
          <div className="max-w-3xl">
            <p className="text-xl mb-6">
              We believe everyone deserves a chance to build a happy life with money they can count on. We help people
              who might feel left out of the financial system.
            </p>
            <p className="text-xl mb-6">
              Our friendly website helps people get their ITINs (Individual Taxpayer Identification Numbers) and
              connects them to banks, tax helpers, and savings plans - making everything easy to understand!
            </p>
            <p className="text-xl">
              By removing barriers, we're helping people who work for cash or themselves build better lives and feel
              more secure about their money.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair mb-8">Meet Our Founders</h2>
          <p className="text-lg mb-12">
            Vesta was started in 2024 by Darren and Yanjaa, who both really care about helping people with their
            financial well-being!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-sm">
              <div className="flex items-start mb-6">
                <div className="relative w-24 h-24 mr-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Darren.png-LE1tPzxWFEj2zqTMMm0WA7Hctm5ont.jpeg"
                    alt="Darren Liddell"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair mb-1">Darren Liddell</h3>
                  <p className="text-primary font-medium mb-4">Co-Founder & CEO</p>
                </div>
              </div>
              <p className="text-sm">
                Darren is skilled at teaching people about money! He's helped thousands of families learn about
                financial management and build better lives. He knows a lot about taxes and how to explain complicated
                things in simple ways.
              </p>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm">
              <div className="flex items-start mb-6">
                <div className="relative w-24 h-24 mr-6">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yanjaa-JIGke43q35kTxgHTNNIHo2Aee9qvoj.jpeg"
                    alt="Yanjaa Munkhbat"
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair mb-1">Yanjaa Munkhbat</h3>
                  <p className="text-primary font-medium mb-4">Co-Founder & COO</p>
                </div>
              </div>
              <p className="text-sm">
                Yanjaa is excellent at making websites that are easy to use! She loves designing things that help real
                people. She makes sure our website is simple, friendly, and works great for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vesta Section */}
      <section className="py-16 px-4 md:px-10 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Why Choose Vesta</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-xl mb-2">Experience & Expertise</h3>
                  <p className="text-sm">
                    We've successfully helped thousands of individuals obtain their ITINs with our proven process.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-xl mb-2">Simplified Process</h3>
                  <p className="text-sm">
                    Our streamlined application system eliminates complexity and makes the entire process
                    straightforward.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-xl mb-2">Secure & Confidential</h3>
                  <p className="text-sm">
                    Your personal information is protected with industry-standard security measures and handled with
                    complete confidentiality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take the first step toward a better financial future. We're here to help!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              DO I NEED AN ITIN?
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              SCHEDULE A CALL
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

