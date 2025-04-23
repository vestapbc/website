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
              At Vesta, we believe financial inclusion is the foundation for economic mobility. We're breaking down
              barriers to financial security by empowering immigrants and low-income workers with access to essential
              services.
            </p>
            <p className="text-xl mb-6">
              Our platform simplifies ITIN enrollment and connects individuals to banking, tax benefits, and retirement
              savings—making financial systems more accessible, efficient, and inclusive for everyone.
            </p>
            <p className="text-xl">
              By removing unnecessary hurdles, we're helping gig workers, freelancers, and cash earners build long-term
              prosperity and achieve financial stability.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair mb-8">Our Founders</h2>
          <p className="text-lg mb-12">
            Vesta was founded in 2024 by Darren Liddell (Co-Founder & CEO) and Yanjaa Munkhbat (Co-Founder & COO), both
            passionate about financial empowerment and inclusion.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-sm">
              <div className="flex items-start mb-6">
                <div className="relative w-24 h-24 mr-6">
                  <Image
                    src="/placeholder.svg?height=200&width=200"
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
                Darren brings years of expertise in financial coaching, nonprofit leadership, and policy advocacy, with
                deep connections to the IRS and U.S. Treasury. His work has helped thousands of low-income families
                navigate financial systems and build wealth.
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
                Yanjaa is a UX strategist and operations leader with a background in designing human-centered fintech
                solutions. With experience in nonprofit innovation and community-driven design, she ensures Vesta's
                platform is simple, effective, and built for real people.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Vesta Section */}
      <section className="py-16 px-4 md:px-10 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Why Vesta?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-xl mb-2">Hassle-Free ITIN Enrollment</h3>
                  <p className="text-sm">No need to mail passports, we streamline the process.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-xl mb-2">Retirement Savings Made Easy</h3>
                  <p className="text-sm">Flexible plans designed for gig and cash workers.</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-sm">
              <div className="flex items-start mb-4">
                <CheckCircle className="text-primary mr-3 mt-1" size={24} />
                <div>
                  <h3 className="font-medium text-xl mb-2">Trusted by Nonprofits & Employers</h3>
                  <p className="text-sm">Providing organizations with data-driven financial solutions.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-4">Join Us in Our Mission</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take the first step toward financial inclusion and long-term prosperity.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              Check Your Eligibility
            </Link>
            <Link
              href="https://calendly.com/darren-mms/30-minute-itin?month=2025-03"
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

