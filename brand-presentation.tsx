"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function BrandPresentation() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === totalSlides - 1 ? prev : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? prev : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="bg-black text-white py-4 px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo-white.svg" alt="Vesta Logo" width={120} height={40} className="h-8 w-auto" />
            <div className="ml-4 pl-4 border-l border-gray-600">
              <h1 className="text-lg font-normal">Brand System Presentation</h1>
            </div>
          </div>
          <p className="text-sm text-gray-400">2023</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 relative overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="h-full flex flex-col">
                <div className="flex-1 flex items-center justify-center p-8">
                  <div className="max-w-4xl w-full">{slide.content}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <div className="bg-gray-50 border-t py-4 px-6">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className="h-10 w-10"
            >
              <ChevronLeft className="h-6 w-6" />
              <span className="sr-only">Previous slide</span>
            </Button>

            <div className="flex items-center space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === index ? "w-8 bg-orange-500" : "w-2 bg-gray-300"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide === totalSlides - 1}
              className="h-10 w-10"
            >
              <ChevronRight className="h-6 w-6" />
              <span className="sr-only">Next slide</span>
            </Button>
          </div>
          <div className="mt-4 text-center text-gray-500">
            Slide {currentSlide + 1} of {totalSlides}
          </div>
        </div>
      </main>
    </div>
  )
}

const slides = [
  // Slide 1: Title
  {
    content: (
      <div className="text-center space-y-8">
        <Image src="/logo.svg" alt="Vesta Logo" width={300} height={100} className="h-auto w-auto mx-auto" />
        <h2 className="text-5xl font-normal">Brand System</h2>
        <p className="text-xl text-gray-600 max-w-lg mx-auto">
          Connecting immigrants to financial freedom through consistent, impactful brand experiences
        </p>
      </div>
    ),
  },
  // Slide 2: Brand Overview
  {
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-normal text-center mb-8">Brand Overview</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-700 mb-4">
              At Vesta, we believe that everyone deserves access to financial services, regardless of their immigration
              status. Our mission is to simplify the pathway to financial inclusion for immigrants by providing
              accessible, reliable, and hassle-free ITIN services.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Brand Personality</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <span className="font-bold">Accessible</span>
                  <p className="text-gray-700">We make complex processes simple and understandable for everyone.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <span className="font-bold">Trustworthy</span>
                  <p className="text-gray-700">We build confidence through transparency, expertise, and reliability.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                <div>
                  <span className="font-bold">Empowering</span>
                  <p className="text-gray-700">
                    We give our clients the tools and knowledge to achieve financial independence.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  // Slide 3: Logo
  {
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-normal text-center mb-8">Logo</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Primary Logo</h3>
            <div className="border p-12 flex items-center justify-center bg-white mb-4">
              <Image src="/logo.svg" alt="Vesta Logo" width={250} height={83} className="h-auto w-auto" />
            </div>
            <p className="text-gray-700">Use on white or light backgrounds</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Reversed Logo</h3>
            <div className="border p-12 flex items-center justify-center bg-black mb-4">
              <Image src="/logo-white.svg" alt="Vesta Logo White" width={250} height={83} className="h-auto w-auto" />
            </div>
            <p className="text-gray-700">Use on dark backgrounds</p>
          </div>
        </div>
      </div>
    ),
  },
  // Slide 4: Color Palette
  {
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-normal text-center mb-8">Color Palette</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="space-y-2">
            <div className="h-32 rounded-lg" style={{ backgroundColor: "#ff543f" }}></div>
            <div>
              <p className="font-bold">Orange 500</p>
              <p className="text-sm text-gray-600">#ff543f</p>
            </div>
            <p className="text-sm text-gray-700">Primary brand color for buttons, links, and highlights</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 rounded-lg" style={{ backgroundColor: "#e64a37" }}></div>
            <div>
              <p className="font-bold">Orange 600</p>
              <p className="text-sm text-gray-600">#e64a37</p>
            </div>
            <p className="text-sm text-gray-700">Used for hover states and secondary emphasis</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 rounded-lg" style={{ backgroundColor: "#0d3e1b" }}></div>
            <div>
              <p className="font-bold">Green 900</p>
              <p className="text-sm text-gray-600">#0d3e1b</p>
            </div>
            <p className="text-sm text-gray-700">Used for accents and decorative elements</p>
          </div>
          <div className="space-y-2">
            <div className="h-32 rounded-lg" style={{ backgroundColor: "#000000" }}></div>
            <div>
              <p className="font-bold">Black</p>
              <p className="text-sm text-gray-600">#000000</p>
            </div>
            <p className="text-sm text-gray-700">Used for text and backgrounds</p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-2">
          <div className="h-8 rounded-lg" style={{ backgroundColor: "#f4f3f0" }}></div>
          <div className="h-8 rounded-lg" style={{ backgroundColor: "#b7b6b4" }}></div>
          <div className="h-8 rounded-lg" style={{ backgroundColor: "#7a7a78" }}></div>
          <div className="h-8 rounded-lg" style={{ backgroundColor: "#3d3d3c" }}></div>
        </div>
        <p className="text-sm text-gray-700 text-center">Neutral grays for supporting elements and text</p>
      </div>
    ),
  },
  // Slide 5: Typography
  {
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-normal text-center mb-8">Typography</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Inter</h3>
            <p className="text-gray-700 mb-6">
              Our primary typeface is Inter, a clean and modern sans-serif font that embodies our values of
              accessibility and clarity.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-2">Heading 1 - Font Weight: 400 (Normal)</p>
              <p className="text-5xl font-normal">Connecting immigrants to financial freedom</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-2">Heading 2 - Font Weight: 400 (Normal)</p>
              <p className="text-3xl font-normal">Our Services</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-2">Body Text - Font Weight: 400 (Normal)</p>
              <p className="text-base">
                We believe that everyone deserves access to financial services, regardless of their immigration status.
                Our mission is to simplify the pathway to financial inclusion for immigrants.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-2">Emphasis - Font Weight: 700 (Bold)</p>
              <p className="text-base">
                Regular text with <span className="font-bold">bold emphasis</span> for important information.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // Slide 6: Imagery
  {
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-normal text-center mb-8">Imagery & Visual Elements</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-4">Photography Style</h3>
            <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
              <Image
                src="/about-mission.jpg"
                alt="Photography example"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                <span>Natural lighting with warm tones</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                <span>Diverse representation of people and cultures</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                <span>Authentic moments rather than overly posed shots</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Icons & Decorative Elements</h3>
            <div className="grid grid-cols-4 gap-4 mb-6">
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Image src="/icons/document.png" alt="Document icon" width={32} height={32} />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Image src="/icons/search.png" alt="Search icon" width={32} height={32} />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Image src="/icons/gender.png" alt="Person icon" width={32} height={32} />
              </div>
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
                <Image src="/icons/location.png" alt="Location icon" width={32} height={32} />
              </div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg relative overflow-hidden h-32">
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-900 rounded-tl-full"></div>
              <div className="absolute bottom-0 right-24 w-8 h-8 bg-orange-500"></div>
              <p className="relative z-10 max-w-xs">Geometric shapes in brand colors as decorative elements</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // Slide 7: Voice & Tone
  {
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-normal text-center mb-8">Voice & Tone</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Clear & Accessible</h3>
            <p className="text-gray-700 mb-4">We explain complex concepts in simple, straightforward language.</p>
            <div className="p-4 bg-white rounded border">
              <p className="text-sm font-bold mb-1">Example:</p>
              <p className="text-sm italic">
                "An ITIN helps you file taxes and access financial services, even without a Social Security Number."
              </p>
            </div>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Empowering & Supportive</h3>
            <p className="text-gray-700 mb-4">We use language that emphasizes agency and possibilities.</p>
            <div className="p-4 bg-white rounded border">
              <p className="text-sm font-bold mb-1">Example:</p>
              <p className="text-sm italic">"Take the first step towards financial freedom with our ITIN services."</p>
            </div>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Warm & Human</h3>
            <p className="text-gray-700 mb-4">We speak like real people, not corporations.</p>
            <div className="p-4 bg-white rounded border">
              <p className="text-sm font-bold mb-1">Example:</p>
              <p className="text-sm italic">
                "We understand this process can seem complex. Our team is here to help you every step of the way."
              </p>
            </div>
          </div>
        </div>
        <div className="p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center">Writing Guidelines</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-2">Do</h4>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Use active voice and direct address</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Break complex information into digestible chunks</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Emphasize benefits for the client</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Don't</h4>
              <ul className="space-y-1">
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Use complex financial or legal jargon</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Create unnecessarily long sentences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-2">✗</span>
                  <span>Use fear-based messaging</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // Slide 8: Applications
  {
    content: (
      <div className="space-y-8">
        <h2 className="text-4xl font-normal text-center mb-8">Brand Applications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Website</h3>
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-white p-4 border-b">
                <Image src="/logo.svg" alt="Vesta Logo" width={120} height={40} className="h-8 w-auto" />
              </div>
              <div className="bg-gray-50 p-6">
                <h5 className="text-2xl font-normal mb-3">Connecting immigrants to financial freedom</h5>
                <p className="text-gray-700 mb-4">
                  Fast, reliable, and hassle-free ITIN services to help you navigate the complexities of tax
                  identification.
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Get Started
                  <span className="ml-1 border-b border-white"></span>
                </Button>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Social Media</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-orange-500 rounded-lg overflow-hidden border relative">
                <div className="absolute inset-0 p-4 flex flex-col text-white">
                  <div className="mb-auto">
                    <Image src="/logo-white.svg" alt="Vesta Logo" width={80} height={27} className="h-5 w-auto" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold mb-2">ITIN Tip #3</h5>
                    <p className="text-xs">
                      Keep your original documents safe! In most cases, we can work with certified copies.
                    </p>
                    <div className="h-1 w-8 bg-white mt-2"></div>
                  </div>
                </div>
              </div>
              <div className="aspect-square bg-black rounded-lg overflow-hidden border relative">
                <div className="absolute inset-0 p-4 flex flex-col text-white">
                  <div className="mb-auto">
                    <Image src="/logo-white.svg" alt="Vesta Logo" width={80} height={27} className="h-5 w-auto" />
                  </div>
                  <div>
                    <h5 className="text-lg font-bold mb-2">Success Story</h5>
                    <p className="text-xs">
                      "After struggling for months, Vesta helped me get my ITIN and open my first bank account."
                    </p>
                    <p className="text-xs mt-1">- Carlos M.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  // Slide 9: Conclusion
  {
    content: (
      <div className="text-center space-y-8">
        <h2 className="text-4xl font-normal mb-6">Thank You</h2>
        <p className="text-xl text-gray-600 max-w-lg mx-auto mb-8">
          Together, we can build a strong, consistent brand that connects immigrants to financial freedom.
        </p>
        <div className="p-8 bg-gray-50 rounded-lg inline-block">
          <Image src="/logo.svg" alt="Vesta Logo" width={200} height={67} className="h-auto w-auto mx-auto" />
        </div>
        <p className="text-gray-500">
          For the complete brand guide and assets, please visit the brand portal or contact the marketing team.
        </p>
      </div>
    ),
  },
]
