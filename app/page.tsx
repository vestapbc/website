"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("applicants")

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-playfair mb-6">
                Fast, reliable, and hassle-free ITIN services
              </h1>
              <p className="text-lg mb-8">
                The pathway to financial empowerment to help you navigate the complexities of tax identification. We'll
                hold your hand through every step, making it super easy and worry-free!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/check-eligibility"
                  className="bg-black hover:bg-black-soft text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
                >
                  DO I NEED AN ITIN?
                </Link>
                <Link
                  href="https://calendly.com/darren-mms/30-minute-itin?month=2025-04"
                  className="bg-black hover:bg-black-soft text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
                >
                  SCHEDULE A CALL
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
                    alt="Our friendly app that helps you get your special number"
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

      {/* Services Section */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">How We Can Help You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* ITIN Services Panel */}
            <div className="border border-gray-200 p-8 flex flex-col justify-between min-h-[500px]">
              <div>
                <p className="text-sm uppercase mb-2">FOR YOU</p>
                <h3 className="text-3xl font-mono mb-4">Getting Your Special Number</h3>
                <p className="text-sm mb-6">
                  We make it super easy! You don't even have to send away your important documents.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>A quick 5-minute check to see if you need one</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>We'll help you gather what you need</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>We'll keep everything safe and secure</span>
                  </li>
                </ul>
              </div>
              <Link href="/itin-services" className="text-sm border-b border-black inline-block pb-1 hover:opacity-80">
                Tell Me More
              </Link>
            </div>

            {/* Partner Panel */}
            <div className="border border-gray-200 p-8 flex flex-col justify-between min-h-[500px]">
              <div>
                <h3 className="text-3xl font-mono mb-4">For Partners</h3>
                <p className="text-sm mb-6">
                  Do you help others in your community? We can work together to make getting special tax numbers easier
                  for everyone!
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>Your own special helper dashboard</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>We'll teach you everything you need to know</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle className="text-primary mr-2" size={16} />
                    <span>Solutions made just for your group</span>
                  </li>
                </ul>
              </div>
              <Link href="/for-partners" className="text-sm border-b border-black inline-block pb-1 hover:opacity-80">
                Let's Work Together
              </Link>
            </div>

            {/* Small Business Owners Panel */}
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
              <Link href="#" className="text-sm border-b border-black inline-block pb-1 hover:opacity-80">
                Join Mailing List
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4 md:px-10 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-4">How We Help You</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            We make getting your special tax number as easy as 1-2-3! Just follow these simple steps.
          </p>

          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <button
              onClick={() => setActiveTab("applicants")}
              className={`px-6 py-2 text-sm mr-4 transition-colors ${
                activeTab === "applicants" ? "bg-primary text-white" : "border border-gray-300 hover:bg-gray-100"
              }`}
            >
              For ITIN
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
                  <h3 className="text-2xl font-playfair mb-4">Let's See If You Need One</h3>
                  <p className="text-sm">
                    We'll ask you a few super simple questions to see if you need a special tax number.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
                <div className="text-sm border-b border-black inline-block pb-1 mb-6">2</div>
                <div>
                  <h3 className="text-2xl font-playfair mb-4">Gather Your Papers</h3>
                  <p className="text-sm">
                    We'll help you find all the papers you need. Don't worry, we'll explain everything!
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
                <div className="text-sm border-b border-black inline-block pb-1 mb-6">3</div>
                <div>
                  <h3 className="text-2xl font-playfair mb-4">We'll Take Care Of The Rest</h3>
                  <p className="text-sm">
                    Send us your papers, and we'll handle everything else. You can check how it's going anytime!
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
                  <h3 className="text-2xl font-playfair mb-4">Let's Chat</h3>
                  <p className="text-sm">
                    We'll show you how our tools work and how they can help the people you care about.
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
                <div className="text-sm border-b border-black inline-block pb-1 mb-6">2</div>
                <div>
                  <h3 className="text-2xl font-playfair mb-4">We'll Make A Plan Just For You</h3>
                  <p className="text-sm">
                    We'll create a simple plan that works perfectly for your group. No complicated computer stuff
                    needed!
                  </p>
                </div>
              </div>
              <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
                <div className="text-sm border-b border-black inline-block pb-1 mb-6">3</div>
                <div>
                  <h3 className="text-2xl font-playfair mb-4">Let's Try It Out</h3>
                  <p className="text-sm">
                    We'll start with a 6-month trial to make sure everything works great for the people you help.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-4">Ready To Take The First Step?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We're here to help you every step of the way. Let's get started on your journey to a better financial
            future!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              DO I NEED AN ITIN?
            </Link>
            <Link
              href="https://calendly.com/darren-mms/30-minute-itin?month=2025-04"
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

