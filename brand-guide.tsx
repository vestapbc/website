"use client"

import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

export default function BrandGuide() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(colorName)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image src="/logo-white.svg" alt="Vesta Logo" width={180} height={60} className="h-10 w-auto" />
              <div className="ml-4 pl-4 border-l border-gray-600">
                <h1 className="text-xl font-normal">Brand System Guide</h1>
              </div>
            </div>
            <p className="text-sm text-gray-400">Version 1.0 | 2023</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid grid-cols-7 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="logo">Logo</TabsTrigger>
            <TabsTrigger value="colors">Colors</TabsTrigger>
            <TabsTrigger value="typography">Typography</TabsTrigger>
            <TabsTrigger value="imagery">Imagery</TabsTrigger>
            <TabsTrigger value="voice">Voice & Tone</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>

          {/* Overview Section */}
          <TabsContent value="overview" className="space-y-8">
            <section>
              <h2 className="text-3xl font-normal mb-6">Brand Overview</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                  <p className="text-gray-700 mb-4">
                    At Vesta, we believe that everyone deserves access to financial services, regardless of their
                    immigration status. Our mission is to simplify the pathway to financial inclusion for immigrants by
                    providing accessible, reliable, and hassle-free ITIN services.
                  </p>
                  <p className="text-gray-700">
                    We're committed to helping our clients navigate the complexities of tax identification, empowering
                    them to build credit, open bank accounts, and file taxes—essential steps toward financial stability
                    and success in the United States.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Brand Personality</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                      <div>
                        <span className="font-bold">Accessible</span>
                        <p className="text-gray-700">
                          We make complex processes simple and understandable for everyone.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                      <div>
                        <span className="font-bold">Trustworthy</span>
                        <p className="text-gray-700">
                          We build confidence through transparency, expertise, and reliability.
                        </p>
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
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                      <div>
                        <span className="font-bold">Inclusive</span>
                        <p className="text-gray-700">
                          We welcome and support people from all backgrounds and cultures.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Brand Values</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="overflow-hidden border-t-4 border-t-orange-500">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4">
                      <Image src="/icons/accessibility.svg" alt="Accessibility" width={24} height={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Accessibility</h4>
                    <p className="text-gray-600">
                      We believe financial services should be accessible to everyone, regardless of immigration status
                      or background.
                    </p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-t-4 border-t-orange-500">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4">
                      <Image src="/icons/transparency.svg" alt="Transparency" width={24} height={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Transparency</h4>
                    <p className="text-gray-600">
                      We maintain clear communication and honest pricing throughout the entire application process.
                    </p>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden border-t-4 border-t-orange-500">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4">
                      <Image src="/icons/empowerment.svg" alt="Empowerment" width={24} height={24} />
                    </div>
                    <h4 className="text-lg font-bold mb-2">Empowerment</h4>
                    <p className="text-gray-600">
                      We empower our clients with the knowledge and tools they need to achieve financial independence.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>
          </TabsContent>

          {/* Logo Section */}
          <TabsContent value="logo" className="space-y-8">
            <section>
              <h2 className="text-3xl font-normal mb-6">Logo</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Primary Logo</h3>
                  <div className="border p-12 flex items-center justify-center bg-white mb-4">
                    <Image src="/logo.svg" alt="Vesta Logo" width={300} height={100} className="h-auto w-auto" />
                  </div>
                  <p className="text-gray-700">
                    The Vesta logo represents our mission to connect immigrants to financial freedom. It should be used
                    as the primary identifier across all brand communications.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Reversed Logo</h3>
                  <div className="border p-12 flex items-center justify-center bg-black mb-4">
                    <Image
                      src="/logo-white.svg"
                      alt="Vesta Logo White"
                      width={300}
                      height={100}
                      className="h-auto w-auto"
                    />
                  </div>
                  <p className="text-gray-700">
                    The reversed logo should be used on dark backgrounds to ensure visibility and brand recognition.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-6">Logo Usage</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3">Clear Space</h4>
                  <div className="border p-8 flex items-center justify-center bg-gray-50 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 border-2 border-dashed border-gray-300 -m-8"></div>
                      <Image src="/logo.svg" alt="Vesta Logo" width={200} height={67} className="h-auto w-auto" />
                    </div>
                  </div>
                  <p className="text-gray-700">
                    Always maintain clear space around the logo equal to the height of the "V" in Vesta to ensure
                    visibility and impact.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Minimum Size</h4>
                  <div className="border p-8 flex items-center justify-center bg-gray-50 mb-4">
                    <Image src="/logo.svg" alt="Vesta Logo" width={120} height={40} className="h-auto w-auto" />
                  </div>
                  <p className="text-gray-700">
                    The logo should never be used smaller than 120px wide for digital applications or 1.5 inches for
                    print to maintain legibility.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Logo Don'ts</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="border p-4 bg-gray-50">
                  <div className="relative mb-2">
                    <Image
                      src="/logo.svg"
                      alt="Vesta Logo"
                      width={150}
                      height={50}
                      className="h-auto w-auto opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">Don't change the logo colors</p>
                </div>
                <div className="border p-4 bg-gray-50">
                  <div className="relative mb-2">
                    <Image
                      src="/logo.svg"
                      alt="Vesta Logo"
                      width={150}
                      height={50}
                      className="h-auto w-auto scale-x-75 scale-y-110 opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">Don't distort the logo</p>
                </div>
                <div className="border p-4 bg-gray-50">
                  <div className="relative mb-2">
                    <div className="rotate-45 opacity-50">
                      <Image src="/logo.svg" alt="Vesta Logo" width={150} height={50} className="h-auto w-auto" />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">Don't rotate the logo</p>
                </div>
                <div className="border p-4 bg-gray-50">
                  <div className="relative mb-2 bg-gradient-to-r from-purple-500 to-pink-500 p-2">
                    <Image
                      src="/logo.svg"
                      alt="Vesta Logo"
                      width={150}
                      height={50}
                      className="h-auto w-auto opacity-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700">Don't use on busy backgrounds</p>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Colors Section */}
          <TabsContent value="colors" className="space-y-8">
            <section>
              <h2 className="text-3xl font-normal mb-6">Color Palette</h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Primary Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div
                        className="h-32 rounded-lg flex items-end p-3 cursor-pointer"
                        style={{ backgroundColor: "#ff543f" }}
                        onClick={() => copyToClipboard("#ff543f", "Orange 500")}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-white font-bold">Orange 500</span>
                          {copiedColor === "Orange 500" ? (
                            <Check className="h-5 w-5 text-white" />
                          ) : (
                            <Copy className="h-5 w-5 text-white opacity-75" />
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">#ff543f</div>
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-32 rounded-lg flex items-end p-3 cursor-pointer"
                        style={{ backgroundColor: "#e64a37" }}
                        onClick={() => copyToClipboard("#e64a37", "Orange 600")}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-white font-bold">Orange 600</span>
                          {copiedColor === "Orange 600" ? (
                            <Check className="h-5 w-5 text-white" />
                          ) : (
                            <Copy className="h-5 w-5 text-white opacity-75" />
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">#e64a37</div>
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-32 rounded-lg flex items-end p-3 cursor-pointer"
                        style={{ backgroundColor: "#0d3e1b" }}
                        onClick={() => copyToClipboard("#0d3e1b", "Green 900")}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-white font-bold">Green 900</span>
                          {copiedColor === "Green 900" ? (
                            <Check className="h-5 w-5 text-white" />
                          ) : (
                            <Copy className="h-5 w-5 text-white opacity-75" />
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">#0d3e1b</div>
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-32 rounded-lg flex items-end p-3 cursor-pointer"
                        style={{ backgroundColor: "#000000" }}
                        onClick={() => copyToClipboard("#000000", "Black")}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-white font-bold">Black</span>
                          {copiedColor === "Black" ? (
                            <Check className="h-5 w-5 text-white" />
                          ) : (
                            <Copy className="h-5 w-5 text-white opacity-75" />
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">#000000</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Neutral Colors</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="space-y-2">
                      <div
                        className="h-32 rounded-lg flex items-end p-3 cursor-pointer"
                        style={{ backgroundColor: "#f4f3f0" }}
                        onClick={() => copyToClipboard("#f4f3f0", "Gray 50")}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-gray-800 font-bold">Gray 50</span>
                          {copiedColor === "Gray 50" ? (
                            <Check className="h-5 w-5 text-gray-800" />
                          ) : (
                            <Copy className="h-5 w-5 text-gray-800 opacity-75" />
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">#f4f3f0</div>
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-32 rounded-lg flex items-end p-3 cursor-pointer"
                        style={{ backgroundColor: "#b7b6b4" }}
                        onClick={() => copyToClipboard("#b7b6b4", "Gray 200")}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-gray-800 font-bold">Gray 200</span>
                          {copiedColor === "Gray 200" ? (
                            <Check className="h-5 w-5 text-gray-800" />
                          ) : (
                            <Copy className="h-5 w-5 text-gray-800 opacity-75" />
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">#b7b6b4</div>
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-32 rounded-lg flex items-end p-3 cursor-pointer"
                        style={{ backgroundColor: "#7a7a78" }}
                        onClick={() => copyToClipboard("#7a7a78", "Gray 600")}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-white font-bold">Gray 600</span>
                          {copiedColor === "Gray 600" ? (
                            <Check className="h-5 w-5 text-white" />
                          ) : (
                            <Copy className="h-5 w-5 text-white opacity-75" />
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">#7a7a78</div>
                    </div>
                    <div className="space-y-2">
                      <div
                        className="h-32 rounded-lg flex items-end p-3 cursor-pointer"
                        style={{ backgroundColor: "#3d3d3c" }}
                        onClick={() => copyToClipboard("#3d3d3c", "Gray 800")}
                      >
                        <div className="flex justify-between items-center w-full">
                          <span className="text-white font-bold">Gray 800</span>
                          {copiedColor === "Gray 800" ? (
                            <Check className="h-5 w-5 text-white" />
                          ) : (
                            <Copy className="h-5 w-5 text-white opacity-75" />
                          )}
                        </div>
                      </div>
                      <div className="text-sm text-gray-700">#3d3d3c</div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Color Usage</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3">Primary Application</h4>
                  <p className="text-gray-700 mb-4">
                    Orange 500 (#ff543f) is our primary brand color and should be used for buttons, links, and key
                    highlights. It represents energy, warmth, and accessibility.
                  </p>
                  <p className="text-gray-700">
                    Green 900 (#0d3e1b) provides a strong contrast and should be used sparingly for accents and
                    decorative elements.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Color Combinations</h4>
                  <div className="space-y-3">
                    <div className="flex overflow-hidden rounded-lg">
                      <div className="w-1/2 p-4" style={{ backgroundColor: "#ff543f" }}>
                        <p className="text-white">Orange 500</p>
                      </div>
                      <div className="w-1/2 p-4 bg-white">
                        <p className="text-gray-800">White</p>
                      </div>
                    </div>
                    <div className="flex overflow-hidden rounded-lg">
                      <div className="w-1/2 p-4 bg-black">
                        <p className="text-white">Black</p>
                      </div>
                      <div className="w-1/2 p-4" style={{ backgroundColor: "#ff543f" }}>
                        <p className="text-white">Orange 500</p>
                      </div>
                    </div>
                    <div className="flex overflow-hidden rounded-lg">
                      <div className="w-1/2 p-4" style={{ backgroundColor: "#f4f3f0" }}>
                        <p className="text-gray-800">Gray 50</p>
                      </div>
                      <div className="w-1/2 p-4" style={{ backgroundColor: "#0d3e1b" }}>
                        <p className="text-white">Green 900</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Typography Section */}
          <TabsContent value="typography" className="space-y-8">
            <section>
              <h2 className="text-3xl font-normal mb-6">Typography</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Primary Font: Inter</h3>
                  <p className="text-gray-700 mb-4">
                    Inter is our primary typeface. It's a clean, modern sans-serif font that embodies our values of
                    accessibility and clarity.
                  </p>
                  <div className="space-y-6 mt-8">
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Regular (400)</p>
                      <p className="text-3xl" style={{ fontWeight: 400 }}>
                        Connecting immigrants to financial freedom
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Medium (500)</p>
                      <p className="text-3xl" style={{ fontWeight: 500 }}>
                        Connecting immigrants to financial freedom
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-2">Bold (700)</p>
                      <p className="text-3xl" style={{ fontWeight: 700 }}>
                        Connecting immigrants to financial freedom
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Type Scale</h3>
                  <div className="space-y-6">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Heading 1 (4.5rem / 72px)</p>
                      <p className="text-7xl font-normal">Heading 1</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Heading 2 (3rem / 48px)</p>
                      <p className="text-5xl font-normal">Heading 2</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Heading 3 (2rem / 32px)</p>
                      <p className="text-3xl font-normal">Heading 3</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Body (1rem / 16px)</p>
                      <p className="text-base">
                        Body text should be easy to read and accessible. We use a clean, modern sans-serif font that
                        embodies our values of accessibility and clarity.
                      </p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Small (0.875rem / 14px)</p>
                      <p className="text-sm">
                        Small text is used for captions, footnotes, and other secondary information.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Typography Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3">Headings</h4>
                  <p className="text-gray-700 mb-4">
                    Headings should use font weight 400 (normal) to maintain our approachable, accessible brand voice.
                    This creates a distinctive look that stands out from the bold headings commonly used by other
                    brands.
                  </p>
                  <div className="p-6 bg-gray-50 rounded-lg mt-4">
                    <p className="text-4xl font-normal mb-2">Our Services</p>
                    <p className="text-xl font-bold">Document Preparation</p>
                    <p className="text-gray-600 mt-2">We guide you through the required documentation</p>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Body Text</h4>
                  <p className="text-gray-700 mb-4">
                    Body text should be set in 16px (1rem) with adequate line spacing to ensure readability. Use font
                    weight 400 for regular text and 700 for emphasis when needed.
                  </p>
                  <div className="p-6 bg-gray-50 rounded-lg mt-4">
                    <p className="mb-4">
                      At Vesta, we believe that everyone deserves access to financial services, regardless of their
                      immigration status.
                    </p>
                    <p>
                      Our mission is to <span className="font-bold">simplify the pathway to financial inclusion</span>{" "}
                      for immigrants by providing accessible, reliable, and hassle-free ITIN services.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Imagery Section */}
          <TabsContent value="imagery" className="space-y-8">
            <section>
              <h2 className="text-3xl font-normal mb-6">Imagery & Visual Elements</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Photography Style</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-4">
                    <Image
                      src="/about-mission.jpg"
                      alt="Photography example"
                      width={600}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-gray-700">
                    Our photography should feel authentic, warm, and human-centered. Images should showcase diverse
                    individuals and families in real-life situations, emphasizing connection, progress, and financial
                    empowerment.
                  </p>
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
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3"></span>
                      <span>Focus on positive emotions and empowerment</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Icons & Illustrations</h3>
                  <div className="grid grid-cols-4 gap-4 mb-4">
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
                  <p className="text-gray-700">
                    Our icons should be simple, clear, and consistent. We use a filled style with rounded corners to
                    convey approachability and clarity. Icons should be used to enhance understanding and guide users
                    through complex processes.
                  </p>
                  <h4 className="text-lg font-bold mt-6 mb-3">Decorative Elements</h4>
                  <div className="p-6 bg-gray-50 rounded-lg relative overflow-hidden">
                    <div className="absolute bottom-0 right-0 w-24 h-24 bg-green-900 rounded-tl-full"></div>
                    <div className="absolute bottom-0 right-24 w-8 h-8 bg-orange-500"></div>
                    <p className="relative z-10 max-w-xs">
                      Geometric shapes in our brand colors can be used as subtle decorative elements to add visual
                      interest without overwhelming content.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Voice & Tone Section */}
          <TabsContent value="voice" className="space-y-8">
            <section>
              <h2 className="text-3xl font-normal mb-6">Voice & Tone</h2>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Brand Voice</h3>
                  <p className="text-gray-700 mb-4">
                    Our brand voice is the consistent expression of our brand through words, both written and spoken. It
                    reflects our personality and values in all communications.
                  </p>
                  <div className="space-y-4 mt-6">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold mb-2">Clear & Accessible</h4>
                      <p className="text-gray-700">
                        We explain complex concepts in simple, straightforward language. We avoid jargon and technical
                        terms whenever possible, and when we must use them, we explain them clearly.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold mb-2">Empowering & Supportive</h4>
                      <p className="text-gray-700">
                        We use language that empowers our clients and emphasizes their agency. We focus on solutions and
                        possibilities rather than problems and limitations.
                      </p>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold mb-2">Warm & Human</h4>
                      <p className="text-gray-700">
                        We speak like real people, not corporations. Our tone is conversational, friendly, and
                        approachable, while maintaining professionalism and expertise.
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Tone Considerations</h3>
                  <p className="text-gray-700 mb-6">
                    While our voice remains consistent, our tone may shift based on context, audience, and medium.
                    Here's how to adjust tone appropriately:
                  </p>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold mb-2">Website & Marketing</h4>
                      <div className="flex space-x-4 mb-2">
                        <div className="w-1/2 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-3/4 h-full bg-orange-500"></div>
                        </div>
                        <span className="text-sm">Confident & Inspiring</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        "Take the first step towards financial freedom with our ITIN services."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Application Process</h4>
                      <div className="flex space-x-4 mb-2">
                        <div className="w-1/2 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-orange-500"></div>
                        </div>
                        <span className="text-sm">Clear & Instructional</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        "Please upload clear, high-quality images of your passport's main page."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Support & Communication</h4>
                      <div className="flex space-x-4 mb-2">
                        <div className="w-1/2 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-full h-full bg-orange-500"></div>
                        </div>
                        <span className="text-sm">Warm & Reassuring</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        "We understand this process can seem complex. Our team is here to help you every step of the
                        way."
                      </p>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Legal & Compliance</h4>
                      <div className="flex space-x-4 mb-2">
                        <div className="w-1/2 h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-orange-500"></div>
                        </div>
                        <span className="text-sm">Professional & Precise</span>
                      </div>
                      <p className="text-gray-700 text-sm">
                        "By submitting this application, you certify that all information provided is true and correct
                        to the best of your knowledge."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Writing Guidelines</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold mb-3">Do</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Use active voice and direct address ("you" and "we")</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Break complex information into digestible chunks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Emphasize benefits and outcomes for the client</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Use inclusive language that respects all backgrounds</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Provide clear next steps and calls to action</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-3">Don't</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Use complex financial or legal jargon without explanation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Create unnecessarily long sentences or paragraphs</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Use passive voice that obscures responsibility</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Make promises or guarantees about outcomes we can't control</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2">✗</span>
                      <span>Use fear-based messaging or negative framing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </TabsContent>

          {/* Applications Section */}
          <TabsContent value="applications" className="space-y-8">
            <section>
              <h2 className="text-3xl font-normal mb-6">Brand Applications</h2>
              <div className="space-y-12">
                <div>
                  <h3 className="text-xl font-bold mb-6">Digital Applications</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-3">Website</h4>
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
                      <h4 className="text-lg font-bold mb-3">Email</h4>
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-gray-50 p-6">
                          <div className="mb-4">
                            <Image src="/logo.svg" alt="Vesta Logo" width={120} height={40} className="h-8 w-auto" />
                          </div>
                          <h5 className="text-xl font-bold mb-3">Your ITIN Application Update</h5>
                          <p className="text-gray-700 mb-4">
                            Hello Maria,
                            <br />
                            <br />
                            We're pleased to inform you that your ITIN application has been successfully submitted to
                            the IRS. Here's what happens next...
                          </p>
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                            Track Your Application
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6">Print Applications</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-bold mb-3">Business Card</h4>
                      <div className="w-full aspect-[1.75/1] bg-white rounded-lg border overflow-hidden shadow-sm">
                        <div className="h-full flex flex-col justify-between p-4">
                          <div>
                            <Image src="/logo.svg" alt="Vesta Logo" width={100} height={33} className="h-6 w-auto" />
                          </div>
                          <div>
                            <p className="font-bold">Maria Rodriguez</p>
                            <p className="text-sm text-gray-600">ITIN Specialist</p>
                            <div className="h-px w-12 bg-orange-500 my-2"></div>
                            <p className="text-xs">maria@growwithvesta.com</p>
                            <p className="text-xs">(212) 555-7890</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-3">Brochure</h4>
                      <div className="border rounded-lg overflow-hidden">
                        <div className="bg-orange-500 p-6 text-white">
                          <h5 className="text-2xl font-normal mb-2">Your Path to Financial Freedom</h5>
                          <p>A guide to ITIN services with Vesta</p>
                        </div>
                        <div className="bg-white p-6">
                          <div className="flex items-center justify-between mb-4">
                            <Image src="/logo.svg" alt="Vesta Logo" width={100} height={33} className="h-6 w-auto" />
                            <div className="h-px w-16 bg-orange-500"></div>
                          </div>
                          <p className="text-gray-700 text-sm">
                            Inside this guide, you'll find everything you need to know about obtaining an Individual
                            Taxpayer Identification Number (ITIN) and how Vesta can help you through every step of the
                            process.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-6">Social Media</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border relative">
                        <div className="absolute inset-0 p-6 flex flex-col">
                          <div className="mb-auto">
                            <Image src="/logo.svg" alt="Vesta Logo" width={80} height={27} className="h-5 w-auto" />
                          </div>
                          <div>
                            <h5 className="text-xl font-bold mb-2">Did you know?</h5>
                            <p className="text-gray-700 text-sm">
                              An ITIN can help you open a bank account, build credit, and file taxes—essential steps
                              toward financial stability.
                            </p>
                            <div className="h-1 w-12 bg-orange-500 mt-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="aspect-square bg-orange-500 rounded-lg overflow-hidden border relative">
                        <div className="absolute inset-0 p-6 flex flex-col text-white">
                          <div className="mb-auto">
                            <Image
                              src="/logo-white.svg"
                              alt="Vesta Logo"
                              width={80}
                              height={27}
                              className="h-5 w-auto"
                            />
                          </div>
                          <div>
                            <h5 className="text-xl font-bold mb-2">ITIN Tip #3</h5>
                            <p className="text-sm">
                              Keep your original documents safe! In most cases, we can work with certified copies rather
                              than originals.
                            </p>
                            <div className="h-1 w-12 bg-white mt-3"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="aspect-square bg-black rounded-lg overflow-hidden border relative">
                        <div className="absolute inset-0 p-6 flex flex-col text-white">
                          <div className="mb-auto">
                            <Image
                              src="/logo-white.svg"
                              alt="Vesta Logo"
                              width={80}
                              height={27}
                              className="h-5 w-auto"
                            />
                          </div>
                          <div>
                            <h5 className="text-xl font-bold mb-2">Success Story</h5>
                            <p className="text-sm">
                              "After struggling with my ITIN application for months, Vesta helped me finally get my ITIN
                              and open my first bank account."
                            </p>
                            <p className="text-xs mt-2">- Carlos M., Los Angeles</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 py-8 border-t">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Vesta. This brand guide is confidential and proprietary.
          </p>
        </div>
      </footer>
    </div>
  )
}
