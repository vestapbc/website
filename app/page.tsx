"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("applicants")

  return (
    <div className="min-h-screen">
      {/* Hero Section - Keep cream background */}
      <section className="py-20 md:py-32 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair mb-6">
                Get an ITIN & Build Your Financial Future
              </h1>
              <p className="text-lg mb-8">
                We guide you through every step of the ITIN application process, making it simple, secure, and
                stress-free.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/check-eligibility"
                  className="bg-black hover:bg-black-soft text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
                >
                  CHECK YOUR ELIGIBILITY
                </Link>
                <Link
                  href="https://calendly.com/darren-mms/30-minute-itin?month=2025-03"
                  className="bg-black hover:bg-black-soft text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
                >
                  Schedule a Call
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative w-[280px] h-[560px] mx-auto">
                {/* Phone Frame */}
                <div className="absolute inset-0 bg-black rounded-[50px] shadow-xl"></div>
                {/* Screen Content */}
                <div className="absolute inset-[8px] bg-white rounded-[42px] overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/app9-aD3wBd1CYCfer5HEDK41A1lw00pw2O.png"
                    alt="ITIN Enrollment Dashboard"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section - Changed to white background */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Get Started Today</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ITIN Services Panel */}
            <div className="border border-gray-200 p-8 flex flex-col justify-between min-h-[500px]">
              <div>
                <p className="text-sm uppercase mb-2">SERVICES</p>
                <h3 className="text-3xl font-mono mb-4">ITIN Applications Made Simple</h3>
                <p className="text-sm mb-6">Keep your passport while applying for your ITIN.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>5-minute eligibility check</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>Guided document preparation</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>Secure submission process</span>
                  </li>
                </ul>
              </div>
              <Link href="/itin-services" className="text-sm border-b border-black inline-block pb-1 hover:opacity-80">
                Learn More
              </Link>
            </div>

            {/* Partner Panel */}
            <div className="border border-gray-200 p-8 flex flex-col justify-between min-h-[500px]">
              <div>
                <h3 className="text-3xl font-mono mb-4">For Partners</h3>
                <p className="text-sm mb-6">
                  Provide ITIN services to your community or employees. Enhance your impact and support for immigrant
                  clients.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>Dedicated partner portal</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>Training and resources</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>Customized solutions</span>
                  </li>
                </ul>
              </div>
              <Link href="/for-partners" className="text-sm border-b border-black inline-block pb-1 hover:opacity-80">
                Partner With Us
              </Link>
            </div>

            {/* Resources Panel */}
            <div className="border border-gray-200 p-8 flex flex-col justify-between min-h-[500px]">
              <div>
                <p className="text-sm uppercase mb-2">COMING SOON</p>
                <h3 className="text-3xl font-mono mb-4">For Small Business Owners</h3>
                <p className="text-sm mb-6">
                  Retirement programs designed specifically for small businesses that employ cash earners with or
                  needing ITINs.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>Retirement planning</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>Financial education</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>Early access to new programs</span>
                  </li>
                </ul>
              </div>
              <Link
                href="/join-mailing-list"
                className="text-sm border-b border-black inline-block pb-1 hover:opacity-80"
              >
                Join Mailing List
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section - Changed to white background */}
      <section className="py-16 px-4 md:px-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-4">How It Works</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Get an ITIN secure, simple and stress-free, whether you're an individual applicant or a partner
            organization.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab("applicants")}
              className={`px-6 py-2 text-sm mr-4 transition-colors ${
                activeTab === "applicants" ? "bg-primary text-white" : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              For ITIN Applicants
            </button>
            <button
              onClick={() => setActiveTab("partners")}
              className={`px-6 py-2 text-sm transition-colors ${
                activeTab === "partners" ? "bg-primary text-white" : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              For Partners
            </button>
          </div>

          {/* ITIN Application Process */}
          {activeTab === "applicants" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
                <div className="text-sm border-b border-black inline-block pb-1 mb-6">1</div>
                <div>
                  <h3 className="text-2xl font-playfair mb-4">Check Eligibility</h3>
                  <p className="text-sm">
                    Complete our simple eligibility questionnaire to determine if you qualify for an ITIN.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
                <div className="text-sm border-b border-black inline-block pb-1 mb-6">2</div>
                <div>
                  <h3 className="text-2xl font-playfair mb-4">Prepare Documents</h3>
                  <p className="text-sm">
                    Our system guides you through gathering and preparing all necessary documentation.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
                <div className="text-sm border-b border-black inline-block pb-1 mb-6">3</div>
                <div>
                  <h3 className="text-2xl font-playfair mb-4">Submit & Track</h3>
                  <p className="text-sm">
                    Submit your application securely and track its progress through our dashboard.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Partner Process */}
          {activeTab === "partners" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
                <div className="text-sm border-b border-black inline-block pb-1 mb-6">1</div>
                <div>
                  <h3 className="text-2xl font-playfair mb-4">Schedule a demo</h3>
                  <p className="text-sm">
                    See Vesta's platform in action with a demo tailored to your organization's needs.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
                <div className="text-sm border-b border-black inline-block pb-1 mb-6">2</div>
                <div>
                  <h3 className="text-2xl font-playfair mb-4">Review a customized proposal</h3>
                  <p className="text-sm">
                    Receive a detailed plan and straightforward set up - no complex IT integrations required.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
                <div className="text-sm border-b border-black inline-block pb-1 mb-6">3</div>
                <div>
                  <h3 className="text-2xl font-playfair mb-4">Launch a Six-Month Pilot</h3>
                  <p className="text-sm">
                    Bring simplified ITIN enrollment to your clients. Track application progress, generate reports and
                    track client financial outcomes.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Trust & Credibility Section - Changed to white background */}
      <section className="py-16 px-4 md:px-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Trusted by Community Member</h2>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 p-6 rounded-sm">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-3">✨</div>
                <div>
                  <h4 className="font-medium">New Dreamer, Queens, NY</h4>
                  <p className="text-sm text-gray-600">First-Time ITIN Holder</p>
                </div>
              </div>
              <p className="text-sm">
                "Vesta made the ITIN application process so simple. I was able to get my ITIN in just a few weeks
                without any stress."
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-sm">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-3">⭐</div>
                <div>
                  <h4 className="font-medium">Future Builder, Miami, FL</h4>
                  <p className="text-sm text-gray-600">Entrepreneur</p>
                </div>
              </div>
              <p className="text-sm">
                "Thanks to Vesta, I was able to get an ITIN and start my business properly. Their guidance was
                invaluable."
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-sm">
              <div className="flex items-start mb-4">
                <div className="text-2xl mr-3">💫</div>
                <div>
                  <h4 className="font-medium">Community Guide, Atlanta, GA</h4>
                  <p className="text-sm text-gray-600">Nonprofit Leader</p>
                </div>
              </div>
              <p className="text-sm">
                "Our partnership with Vesta has allowed us to help hundreds of community members obtain their ITINs
                efficiently."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section - Changed to white background */}
      <section className="py-16 px-4 md:px-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-6 max-w-3xl mx-auto mb-8">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-playfair mb-2">What is an ITIN?</h3>
              <p className="text-sm">
                An Individual Taxpayer Identification Number (ITIN) is issued by the Internal Revenue Service (IRS) for
                individuals who are required to file taxes, but do not have a Social Security Number.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-playfair mb-2">Who needs an ITIN?</h3>
              <p className="text-sm">
                ITINs are generally needed by those living in the US, earning income and not eligible for a Social
                Security Number. Also, dependents or spouses of U.S. citizens or ITIN holders who lack a Social Security
                Number. Those not living in the US, but with a requirement to file taxes in the US are also eligible for
                an ITIN.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-playfair mb-2">How long does the ITIN application process take?</h3>
              <p className="text-sm">
                With Vesta's streamlined process, most applications are prepared within 1-2 days. Once submitted to the
                IRS, processing typically takes 4-6 weeks from June - December, and 7-10 weeks January - April.
              </p>
            </div>
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-playfair mb-2">What documents do I need for an ITIN application?</h3>
              <p className="text-sm">
                You'll need a completed Form W-7, a tax return, and documents to verify your identity and presence in
                the US. Our eligibility check will provide you with a personalized document checklist.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-2">Is my information secure with Vesta?</h3>
              <p className="text-sm">
                Yes, we implement bank-level security measures to protect your personal information. All data is
                encrypted, and we adhere to strict confidentiality protocols.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/faqs" className="text-primary hover:text-primary-dark text-sm font-medium">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Changed to white background */}
      <section className="py-16 border-t border-gray-200 px-4 md:px-10">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-playfair mb-4">Stay Updated</h2>
          <p className="text-sm mb-6">
            Join our mailing list to receive updates on ITIN regulations, financial resources, and our upcoming
            retirement programs.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button type="submit" className="bg-black text-white px-4 py-2 text-sm uppercase tracking-wider">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

