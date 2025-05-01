"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import {
  Copy,
  Check,
  Download,
  Search,
  Home,
  Palette,
  Type,
  ImageIcon,
  MessageSquare,
  FileText,
  DownloadIcon,
  Users,
} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

export default function BrandDashboard() {
  const [activeSection, setActiveSection] = useState("overview")
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string, colorName: string) => {
    navigator.clipboard.writeText(text)
    setCopiedColor(colorName)
    setTimeout(() => setCopiedColor(null), 2000)
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen bg-white flex">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b">
            <div className="p-4">
              <Image src="/logo.svg" alt="Vesta Logo" width={120} height={40} className="h-8 w-auto" />
              <div className="mt-2 text-sm text-gray-500">Brand System</div>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeSection === "overview"} onClick={() => setActiveSection("overview")}>
                  <Home className="h-5 w-5 mr-3" />
                  <span>Overview</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeSection === "logo"} onClick={() => setActiveSection("logo")}>
                  <ImageIcon className="h-5 w-5 mr-3" />
                  <span>Logo</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeSection === "colors"} onClick={() => setActiveSection("colors")}>
                  <Palette className="h-5 w-5 mr-3" />
                  <span>Colors</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "typography"}
                  onClick={() => setActiveSection("typography")}
                >
                  <Type className="h-5 w-5 mr-3" />
                  <span>Typography</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeSection === "imagery"} onClick={() => setActiveSection("imagery")}>
                  <ImageIcon className="h-5 w-5 mr-3" />
                  <span>Imagery</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeSection === "voice"} onClick={() => setActiveSection("voice")}>
                  <MessageSquare className="h-5 w-5 mr-3" />
                  <span>Voice & Tone</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "templates"}
                  onClick={() => setActiveSection("templates")}
                >
                  <FileText className="h-5 w-5 mr-3" />
                  <span>Templates</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton isActive={activeSection === "team"} onClick={() => setActiveSection("team")}>
                  <Users className="h-5 w-5 mr-3" />
                  <span>Team</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton
                  isActive={activeSection === "downloads"}
                  onClick={() => setActiveSection("downloads")}
                >
                  <DownloadIcon className="h-5 w-5 mr-3" />
                  <span>Downloads</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter className="border-t p-4">
            <div className="text-xs text-gray-500">
              <p>Vesta Brand System v1.0</p>
              <p>Last updated: April 2023</p>
            </div>
          </SidebarFooter>
        </Sidebar>

        <div className="flex-1 flex flex-col">
          <header className="border-b">
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center">
                <SidebarTrigger className="mr-4" />
                <h1 className="text-xl font-bold">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</h1>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                <Input placeholder="Search brand assets..." className="pl-8" />
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6">
            {activeSection === "overview" && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-normal">Brand Overview</h2>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Brand Guide PDF
                  </Button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                      <p className="text-gray-700 mb-4">
                        At Vesta, we believe that everyone deserves access to financial services, regardless of their
                        immigration status. Our mission is to simplify the pathway to financial inclusion for immigrants
                        by providing accessible, reliable, and hassle-free ITIN services.
                      </p>
                      <p className="text-gray-700">
                        We're committed to helping our clients navigate the complexities of tax identification,
                        empowering them to build credit, open bank accounts, and file taxes—essential steps toward
                        financial stability and success in the United States.
                      </p>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6">
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
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4">Brand Values</h3>
                <div className="grid md:grid-cols-3 gap-6">
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

                <h3 className="text-xl font-bold mt-8 mb-4">Quick Access</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickAccessItems.map((item, index) => (
                    <Card
                      key={index}
                      className="cursor-pointer hover:shadow-md transition-shadow"
                      onClick={() => setActiveSection(item.section)}
                    >
                      <CardContent className="p-4 flex flex-col items-center text-center">
                        <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-3">
                          {item.icon}
                        </div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {activeSection === "logo" && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-normal">Logo</h2>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download All Logo Files
                  </Button>
                </div>

                <Tabs defaultValue="usage">
                  <TabsList className="mb-6">
                    <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
                    <TabsTrigger value="versions">Logo Versions</TabsTrigger>
                    <TabsTrigger value="clearspace">Clear Space</TabsTrigger>
                    <TabsTrigger value="donts">Logo Don'ts</TabsTrigger>
                  </TabsList>

                  <TabsContent value="usage" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Primary Logo</h3>
                        <div className="border p-12 flex items-center justify-center bg-white mb-4">
                          <Image src="/logo.svg" alt="Vesta Logo" width={300} height={100} className="h-auto w-auto" />
                        </div>
                        <p className="text-gray-700 mb-4">
                          The Vesta logo represents our mission to connect immigrants to financial freedom. It should be
                          used as the primary identifier across all brand communications.
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            SVG
                          </Button>
                          <Button size="sm" variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            PNG
                          </Button>
                          <Button size="sm" variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            EPS
                          </Button>
                        </div>
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
                        <p className="text-gray-700 mb-4">
                          The reversed logo should be used on dark backgrounds to ensure visibility and brand
                          recognition.
                        </p>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            SVG
                          </Button>
                          <Button size="sm" variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            PNG
                          </Button>
                          <Button size="sm" variant="outline" className="flex items-center gap-2">
                            <Download className="h-4 w-4" />
                            EPS
                          </Button>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="versions" className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-video flex items-center justify-center bg-white mb-4">
                            <Image src="/logo.svg" alt="Vesta Logo" width={200} height={67} className="h-auto w-auto" />
                          </div>
                          <h4 className="font-bold mb-2">Full Color Logo</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Primary logo for use on white or light backgrounds
                          </p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-video flex items-center justify-center bg-black mb-4">
                            <Image
                              src="/logo-white.svg"
                              alt="Vesta Logo White"
                              width={200}
                              height={67}
                              className="h-auto w-auto"
                            />
                          </div>
                          <h4 className="font-bold mb-2">Reversed Logo</h4>
                          <p className="text-sm text-gray-600 mb-4">For use on dark backgrounds</p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-video flex items-center justify-center bg-gray-100 mb-4">
                            <div className="w-12 h-12 bg-orange-500 rounded-md"></div>
                          </div>
                          <h4 className="font-bold mb-2">Icon Only</h4>
                          <p className="text-sm text-gray-600 mb-4">For use in small spaces or as an app icon</p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="clearspace" className="space-y-6">
                    <div className="max-w-2xl mx-auto">
                      <h3 className="text-xl font-bold mb-4">Clear Space</h3>
                      <div className="border p-8 flex items-center justify-center bg-gray-50 mb-4">
                        <div className="relative">
                          <div className="absolute inset-0 border-2 border-dashed border-gray-300 -m-8"></div>
                          <Image src="/logo.svg" alt="Vesta Logo" width={300} height={100} className="h-auto w-auto" />
                        </div>
                      </div>
                      <p className="text-gray-700 mb-6">
                        Always maintain clear space around the logo equal to the height of the "V" in Vesta to ensure
                        visibility and impact. This space should be kept free from other graphic elements, text, or the
                        edge of the page/screen.
                      </p>
                      <h3 className="text-xl font-bold mb-4">Minimum Size</h3>
                      <div className="border p-8 flex items-center justify-center bg-gray-50 mb-4">
                        <Image src="/logo.svg" alt="Vesta Logo" width={120} height={40} className="h-auto w-auto" />
                      </div>
                      <p className="text-gray-700">
                        The logo should never be used smaller than 120px wide for digital applications or 1.5 inches for
                        print to maintain legibility.
                      </p>
                    </div>
                  </TabsContent>

                  <TabsContent value="donts" className="space-y-6">
                    <h3 className="text-xl font-bold mb-4">Logo Don'ts</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="border p-4 bg-gray-50 rounded-lg">
                        <div className="relative mb-2 aspect-video flex items-center justify-center">
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
                        <p className="text-sm text-gray-700 text-center">Don't change the logo colors</p>
                      </div>
                      <div className="border p-4 bg-gray-50 rounded-lg">
                        <div className="relative mb-2 aspect-video flex items-center justify-center">
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
                        <p className="text-sm text-gray-700 text-center">Don't distort the logo</p>
                      </div>
                      <div className="border p-4 bg-gray-50 rounded-lg">
                        <div className="relative mb-2 aspect-video flex items-center justify-center">
                          <div className="rotate-45 opacity-50">
                            <Image src="/logo.svg" alt="Vesta Logo" width={150} height={50} className="h-auto w-auto" />
                          </div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-full h-0.5 bg-red-500 rotate-45"></div>
                          </div>
                        </div>
                        <p className="text-sm text-gray-700 text-center">Don't rotate the logo</p>
                      </div>
                      <div className="border p-4 bg-gray-50 rounded-lg">
                        <div className="relative mb-2 aspect-video flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 p-2">
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
                        <p className="text-sm text-gray-700 text-center">Don't use on busy backgrounds</p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activeSection === "colors" && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-normal">Color Palette</h2>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Color Swatches
                  </Button>
                </div>

                <Tabs defaultValue="primary">
                  <TabsList className="mb-6">
                    <TabsTrigger value="primary">Primary Colors</TabsTrigger>
                    <TabsTrigger value="neutral">Neutral Colors</TabsTrigger>
                    <TabsTrigger value="usage">Color Usage</TabsTrigger>
                  </TabsList>

                  <TabsContent value="primary" className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="space-y-2">
                        <div
                          className="h-40 rounded-lg flex items-end p-3 cursor-pointer"
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
                        <div className="text-sm text-gray-700">RGB: 255, 84, 63</div>
                        <div className="text-sm text-gray-700">CMYK: 0, 67, 75, 0</div>
                      </div>
                      <div className="space-y-2">
                        <div
                          className="h-40 rounded-lg flex items-end p-3 cursor-pointer"
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
                        <div className="text-sm text-gray-700">RGB: 230, 74, 55</div>
                        <div className="text-sm text-gray-700">CMYK: 0, 68, 76, 10</div>
                      </div>
                      <div className="space-y-2">
                        <div
                          className="h-40 rounded-lg flex items-end p-3 cursor-pointer"
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
                        <div className="text-sm text-gray-700">RGB: 13, 62, 27</div>
                        <div className="text-sm text-gray-700">CMYK: 79, 0, 56, 76</div>
                      </div>
                      <div className="space-y-2">
                        <div
                          className="h-40 rounded-lg flex items-end p-3 cursor-pointer"
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
                        <div className="text-sm text-gray-700">RGB: 0, 0, 0</div>
                        <div className="text-sm text-gray-700">CMYK: 0, 0, 0, 100</div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="neutral" className="space-y-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div className="space-y-2">
                        <div
                          className="h-40 rounded-lg flex items-end p-3 cursor-pointer"
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
                        <div className="text-sm text-gray-700">RGB: 244, 243, 240</div>
                        <div className="text-sm text-gray-700">CMYK: 0, 0, 2, 4</div>
                      </div>
                      <div className="space-y-2">
                        <div
                          className="h-40 rounded-lg flex items-end p-3 cursor-pointer"
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
                        <div className="text-sm text-gray-700">RGB: 183, 182, 180</div>
                        <div className="text-sm text-gray-700">CMYK: 0, 1, 2, 28</div>
                      </div>
                      <div className="space-y-2">
                        <div
                          className="h-40 rounded-lg flex items-end p-3 cursor-pointer"
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
                        <div className="text-sm text-gray-700">RGB: 122, 122, 120</div>
                        <div className="text-sm text-gray-700">CMYK: 0, 0, 2, 52</div>
                      </div>
                      <div className="space-y-2">
                        <div
                          className="h-40 rounded-lg flex items-end p-3 cursor-pointer"
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
                        <div className="text-sm text-gray-700">RGB: 61, 61, 60</div>
                        <div className="text-sm text-gray-700">CMYK: 0, 0, 2, 76</div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="usage" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Primary Application</h3>
                        <p className="text-gray-700 mb-4">
                          Orange 500 (#ff543f) is our primary brand color and should be used for buttons, links, and key
                          highlights. It represents energy, warmth, and accessibility.
                        </p>
                        <p className="text-gray-700 mb-4">
                          Green 900 (#0d3e1b) provides a strong contrast and should be used sparingly for accents and
                          decorative elements.
                        </p>
                        <p className="text-gray-700">
                          Black is used for text and backgrounds, while our neutral grays provide supporting elements
                          and create visual hierarchy.
                        </p>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4">Color Combinations</h3>
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

                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Accessibility</h3>
                      <p className="text-gray-700 mb-4">
                        Always ensure sufficient contrast between text and background colors to maintain readability and
                        accessibility. Text should have a contrast ratio of at least 4.5:1 against its background.
                      </p>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                        <div className="p-4 rounded-lg" style={{ backgroundColor: "#ff543f" }}>
                          <p className="text-white font-bold mb-1">PASS</p>
                          <p className="text-white text-sm">White on Orange</p>
                        </div>
                        <div className="p-4 rounded-lg" style={{ backgroundColor: "#ff543f" }}>
                          <p className="text-black font-bold mb-1">FAIL</p>
                          <p className="text-black text-sm">Black on Orange</p>
                        </div>
                        <div className="p-4 rounded-lg bg-black">
                          <p className="text-white font-bold mb-1">PASS</p>
                          <p className="text-white text-sm">White on Black</p>
                        </div>
                        <div className="p-4 rounded-lg" style={{ backgroundColor: "#f4f3f0" }}>
                          <p className="text-gray-800 font-bold mb-1">PASS</p>
                          <p className="text-gray-800 text-sm">Gray 800 on Gray 50</p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activeSection === "typography" && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-normal">Typography</h2>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Font Files
                  </Button>
                </div>

                <Tabs defaultValue="typeface">
                  <TabsList className="mb-6">
                    <TabsTrigger value="typeface">Typeface</TabsTrigger>
                    <TabsTrigger value="scale">Type Scale</TabsTrigger>
                    <TabsTrigger value="usage">Usage Guidelines</TabsTrigger>
                  </TabsList>

                  <TabsContent value="typeface" className="space-y-6">
                    <div className="max-w-3xl">
                      <h3 className="text-xl font-bold mb-4">Inter</h3>
                      <p className="text-gray-700 mb-6">
                        Inter is our primary typeface. It's a clean, modern sans-serif font that embodies our values of
                        accessibility and clarity. Inter works well across digital and print applications and maintains
                        excellent readability at all sizes.
                      </p>

                      <div className="space-y-8 mt-8">
                        <div>
                          <p className="text-sm text-gray-500 mb-2">Regular (400)</p>
                          <p className="text-4xl" style={{ fontWeight: 400 }}>
                            Connecting immigrants to financial freedom
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-2">Medium (500)</p>
                          <p className="text-4xl" style={{ fontWeight: 500 }}>
                            Connecting immigrants to financial freedom
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500 mb-2">Bold (700)</p>
                          <p className="text-4xl" style={{ fontWeight: 700 }}>
                            Connecting immigrants to financial freedom
                          </p>
                        </div>
                      </div>

                      <div className="mt-8">
                        <h4 className="font-bold mb-3">Font Installation</h4>
                        <p className="text-gray-700 mb-4">
                          Inter is available for free through Google Fonts. You can download the font files or include
                          them in your web projects using the following methods:
                        </p>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <p className="font-bold mb-2">Web Import:</p>
                          <pre className="bg-gray-100 p-3 rounded text-sm overflow-x-auto">
                            {`<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet">`}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="scale" className="space-y-6">
                    <div className="space-y-8">
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
                        <p className="text-sm text-gray-500 mb-1">Heading 4 (1.5rem / 24px)</p>
                        <p className="text-2xl font-normal">Heading 4</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Body (1rem / 16px)</p>
                        <p className="text-base">
                          Body text should be easy to read and accessible. We use a clean, modern sans-serif font that
                          embodies our values of accessibility and clarity. The standard body text size is 16px with
                          appropriate line height to ensure readability.
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Small (0.875rem / 14px)</p>
                        <p className="text-sm">
                          Small text is used for captions, footnotes, and other secondary information. Even at this
                          smaller size, we maintain readability and accessibility standards.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="usage" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Headings</h3>
                        <p className="text-gray-700 mb-4">
                          Headings should use font weight 400 (normal) to maintain our approachable, accessible brand
                          voice. This creates a distinctive look that stands out from the bold headings commonly used by
                          other brands.
                        </p>
                        <div className="p-6 bg-gray-50 rounded-lg mt-4">
                          <p className="text-4xl font-normal mb-2">Our Services</p>
                          <p className="text-xl font-bold">Document Preparation</p>
                          <p className="text-gray-600 mt-2">We guide you through the required documentation</p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4">Body Text</h3>
                        <p className="text-gray-700 mb-4">
                          Body text should be set in 16px (1rem) with adequate line spacing to ensure readability. Use
                          font weight 400 for regular text and 700 for emphasis when needed.
                        </p>
                        <div className="p-6 bg-gray-50 rounded-lg mt-4">
                          <p className="mb-4">
                            At Vesta, we believe that everyone deserves access to financial services, regardless of
                            their immigration status.
                          </p>
                          <p>
                            Our mission is to{" "}
                            <span className="font-bold">simplify the pathway to financial inclusion</span> for
                            immigrants by providing accessible, reliable, and hassle-free ITIN services.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Typographic Hierarchy</h3>
                      <p className="text-gray-700 mb-6">
                        Establishing a clear typographic hierarchy helps guide users through content and emphasizes
                        important information. Here's how we use typography to create hierarchy:
                      </p>
                      <div className="p-6 bg-gray-50 rounded-lg">
                        <p className="text-4xl font-normal mb-4">ITIN Application Process</p>
                        <p className="text-2xl font-normal mb-3">Document Preparation</p>
                        <p className="text-xl font-bold mb-2">Required Documents</p>
                        <p className="mb-4">
                          To apply for an ITIN, you'll need to provide documentation that proves your identity and
                          foreign status. This typically includes your passport, birth certificate, or other official
                          identification documents.
                        </p>
                        <p className="text-sm text-gray-600">
                          Note: All documents must be either originals or certified copies from the issuing agency.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activeSection === "imagery" && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-normal">Imagery & Visual Elements</h2>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download Image Assets
                  </Button>
                </div>

                <Tabs defaultValue="photography">
                  <TabsList className="mb-6">
                    <TabsTrigger value="photography">Photography</TabsTrigger>
                    <TabsTrigger value="icons">Icons & Illustrations</TabsTrigger>
                    <TabsTrigger value="elements">Decorative Elements</TabsTrigger>
                  </TabsList>

                  <TabsContent value="photography" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Photography Style</h3>
                        <p className="text-gray-700 mb-4">
                          Our photography should feel authentic, warm, and human-centered. Images should showcase
                          diverse individuals and families in real-life situations, emphasizing connection, progress,
                          and financial empowerment.
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
                        <div className="relative h-[300px] rounded-lg overflow-hidden mb-4">
                          <Image src="/about-mission.jpg" alt="Photography example" fill className="object-cover" />
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="relative h-24 rounded-lg overflow-hidden">
                            <Image src="/avatars/maria.jpg" alt="Photography example" fill className="object-cover" />
                          </div>
                          <div className="relative h-24 rounded-lg overflow-hidden">
                            <Image src="/avatars/carlos.jpg" alt="Photography example" fill className="object-cover" />
                          </div>
                          <div className="relative h-24 rounded-lg overflow-hidden">
                            <Image src="/team/darren.jpg" alt="Photography example" fill className="object-cover" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-bold mb-4">Do's and Don'ts</h3>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-bold mb-3">Do</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>Use images that reflect diversity and inclusion</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>Show authentic, relatable situations</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>Feature images that convey empowerment and progress</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-green-500 mr-2">✓</span>
                              <span>Use high-quality, well-lit photography</span>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold mb-3">Don't</h4>
                          <ul className="space-y-2">
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>Use clichéd stock photography that feels inauthentic</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>Show people in stereotypical or disempowering situations</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>Use images with poor lighting or resolution</span>
                            </li>
                            <li className="flex items-start">
                              <span className="text-red-500 mr-2">✗</span>
                              <span>Feature overly corporate or staged imagery</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="icons" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Icon Style</h3>
                        <p className="text-gray-700 mb-4">
                          Our icons should be simple, clear, and consistent. We use a filled style with rounded corners
                          to convey approachability and clarity. Icons should be used to enhance understanding and guide
                          users through complex processes.
                        </p>
                        <div className="grid grid-cols-4 gap-4 mt-6">
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
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4">Icon Usage</h3>
                        <p className="text-gray-700 mb-4">
                          Icons should be used consistently throughout our communications to create visual cues that
                          help users navigate and understand our content. They should always be accompanied by text
                          labels to ensure clarity and accessibility.
                        </p>
                        <div className="p-6 bg-gray-50 rounded-lg mt-4">
                          <h4 className="font-bold mb-4">Service Icons</h4>
                          <div className="space-y-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                <Image src="/icons/document.png" alt="Document icon" width={24} height={24} />
                              </div>
                              <div>
                                <p className="font-bold">Document Preparation</p>
                                <p className="text-sm text-gray-600">We guide you through the required documentation</p>
                              </div>
                            </div>
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                                <Image src="/icons/search.png" alt="Search icon" width={24} height={24} />
                              </div>
                              <div>
                                <p className="font-bold">Application Tracking</p>
                                <p className="text-sm text-gray-600">Monitor your application status in real-time</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="elements" className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-xl font-bold mb-4">Decorative Elements</h3>
                        <p className="text-gray-700 mb-4">
                          Geometric shapes in our brand colors can be used as subtle decorative elements to add visual
                          interest without overwhelming content. These elements help create a distinctive visual
                          identity while maintaining a clean, professional appearance.
                        </p>
                        <div className="p-6 bg-gray-50 rounded-lg relative overflow-hidden mt-6 h-48">
                          <div className="absolute bottom-0 right-0 w-32 h-32 bg-green-900 rounded-tl-full"></div>
                          <div className="absolute bottom-0 right-32 w-12 h-12 bg-orange-500"></div>
                          <p className="relative z-10 max-w-xs">
                            Example of decorative elements used as background accents
                          </p>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-4">Patterns & Textures</h3>
                        <p className="text-gray-700 mb-4">
                          Subtle patterns and textures can be used to add depth and interest to backgrounds and
                          containers. These should be used sparingly and should never interfere with the readability of
                          text or the visibility of other content.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden relative">
                            <Image src="/symbol-pattern.svg" alt="Pattern" fill className="object-cover opacity-50" />
                          </div>
                          <div className="aspect-square bg-orange-500 rounded-lg overflow-hidden relative p-4">
                            <div className="absolute inset-0 opacity-10">
                              <Image src="/symbol-pattern.svg" alt="Pattern" fill className="object-cover" />
                            </div>
                            <p className="relative z-10 text-white">Pattern with brand color overlay</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activeSection === "voice" && (
              <div className="space-y-8">
                <h2 className="text-3xl font-normal">Voice & Tone</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Clear & Accessible</h3>
                      <p className="text-gray-700 mb-4">
                        We explain complex concepts in simple, straightforward language.
                      </p>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm font-bold mb-1">Example:</p>
                        <p className="text-sm italic">
                          "An ITIN helps you file taxes and access financial services, even without a Social Security
                          Number."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Empowering & Supportive</h3>
                      <p className="text-gray-700 mb-4">We use language that emphasizes agency and possibilities.</p>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm font-bold mb-1">Example:</p>
                        <p className="text-sm italic">
                          "Take the first step towards financial freedom with our ITIN services."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Warm & Human</h3>
                      <p className="text-gray-700 mb-4">We speak like real people, not corporations.</p>
                      <div className="p-4 bg-gray-50 rounded-lg">
                        <p className="text-sm font-bold mb-1">Example:</p>
                        <p className="text-sm italic">
                          "We understand this process can seem complex. Our team is here to help you every step of the
                          way."
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Tone Considerations</h3>
                  <p className="text-gray-700 mb-6">
                    While our voice remains consistent, our tone may shift based on context, audience, and medium.
                    Here's how to adjust tone appropriately:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
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
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Writing Guidelines</h3>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold mb-3">Do</h4>
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
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-3">Don't</h4>
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
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "templates" && (
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-normal">Templates</h2>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Download className="h-4 w-4" />
                    Download All Templates
                  </Button>
                </div>

                <Tabs defaultValue="digital">
                  <TabsList className="mb-6">
                    <TabsTrigger value="digital">Digital Templates</TabsTrigger>
                    <TabsTrigger value="print">Print Templates</TabsTrigger>
                    <TabsTrigger value="social">Social Media</TabsTrigger>
                  </TabsList>

                  <TabsContent value="digital" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-video bg-white border rounded-lg overflow-hidden mb-4">
                            <div className="p-4 border-b">
                              <Image src="/logo.svg" alt="Vesta Logo" width={120} height={40} className="h-8 w-auto" />
                            </div>
                            <div className="p-6">
                              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                              <div className="h-8 bg-orange-500 rounded w-32"></div>
                            </div>
                          </div>
                          <h4 className="font-bold mb-2">Website Header</h4>
                          <p className="text-sm text-gray-600 mb-4">Standard website header with logo and CTA button</p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Template
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-video bg-white border rounded-lg overflow-hidden mb-4">
                            <div className="p-6">
                              <div className="mb-4">
                                <Image
                                  src="/logo.svg"
                                  alt="Vesta Logo"
                                  width={120}
                                  height={40}
                                  className="h-8 w-auto"
                                />
                              </div>
                              <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                              <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                              <div className="h-8 bg-orange-500 rounded w-32"></div>
                            </div>
                          </div>
                          <h4 className="font-bold mb-2">Email Template</h4>
                          <p className="text-sm text-gray-600 mb-4">
                            Standard email template with logo and content area
                          </p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Template
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="print" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-[1.75/1] bg-white border rounded-lg overflow-hidden mb-4">
                            <div className="h-full flex flex-col justify-between p-4">
                              <div>
                                <Image
                                  src="/logo.svg"
                                  alt="Vesta Logo"
                                  width={100}
                                  height={33}
                                  className="h-6 w-auto"
                                />
                              </div>
                              <div>
                                <div className="h-3 bg-gray-200 rounded w-24 mb-1"></div>
                                <div className="h-3 bg-gray-200 rounded w-32 mb-2"></div>
                                <div className="h-px w-12 bg-orange-500 my-2"></div>
                                <div className="h-2 bg-gray-200 rounded w-24 mb-1"></div>
                                <div className="h-2 bg-gray-200 rounded w-20"></div>
                              </div>
                            </div>
                          </div>
                          <h4 className="font-bold mb-2">Business Card</h4>
                          <p className="text-sm text-gray-600 mb-4">Standard business card template</p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Template
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-[1/1.414] bg-white border rounded-lg overflow-hidden mb-4">
                            <div className="bg-orange-500 p-4 text-white">
                              <div className="h-4 bg-white bg-opacity-30 rounded w-3/4 mb-1"></div>
                              <div className="h-3 bg-white bg-opacity-30 rounded w-1/2"></div>
                            </div>
                            <div className="p-4">
                              <div className="flex items-center justify-between mb-4">
                                <Image
                                  src="/logo.svg"
                                  alt="Vesta Logo"
                                  width={100}
                                  height={33}
                                  className="h-6 w-auto"
                                />
                                <div className="h-px w-16 bg-orange-500"></div>
                              </div>
                              <div className="space-y-1">
                                <div className="h-2 bg-gray-200 rounded w-full"></div>
                                <div className="h-2 bg-gray-200 rounded w-full"></div>
                                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                              </div>
                            </div>
                          </div>
                          <h4 className="font-bold mb-2">Brochure Cover</h4>
                          <p className="text-sm text-gray-600 mb-4">Standard brochure cover template</p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Template
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-[1/1.414] bg-white border rounded-lg overflow-hidden mb-4">
                            <div className="p-4">
                              <div className="flex justify-between items-center mb-4">
                                <Image
                                  src="/logo.svg"
                                  alt="Vesta Logo"
                                  width={100}
                                  height={33}
                                  className="h-6 w-auto"
                                />
                                <div className="text-xs text-gray-400">Page 1</div>
                              </div>
                              <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
                              <div className="space-y-1 mb-4">
                                <div className="h-2 bg-gray-200 rounded w-full"></div>
                                <div className="h-2 bg-gray-200 rounded w-full"></div>
                                <div className="h-2 bg-gray-200 rounded w-full"></div>
                                <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                              </div>
                              <div className="h-20 bg-gray-100 rounded mb-4"></div>
                              <div className="space-y-1">
                                <div className="h-2 bg-gray-200 rounded w-full"></div>
                                <div className="h-2 bg-gray-200 rounded w-full"></div>
                                <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                              </div>
                            </div>
                          </div>
                          <h4 className="font-bold mb-2">Letterhead</h4>
                          <p className="text-sm text-gray-600 mb-4">Standard letterhead template</p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Template
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>

                  <TabsContent value="social" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-square bg-gray-50 rounded-lg overflow-hidden border relative mb-4">
                            <div className="absolute inset-0 p-6 flex flex-col">
                              <div className="mb-auto">
                                <Image src="/logo.svg" alt="Vesta Logo" width={80} height={27} className="h-5 w-auto" />
                              </div>
                              <div>
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                                <div className="h-3 bg-gray-200 rounded w-2/3 mb-2"></div>
                                <div className="h-1 w-12 bg-orange-500 mt-3"></div>
                              </div>
                            </div>
                          </div>
                          <h4 className="font-bold mb-2">Instagram Post</h4>
                          <p className="text-sm text-gray-600 mb-4">1:1 ratio for Instagram feed posts</p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Template
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-[16/9] bg-orange-500 rounded-lg overflow-hidden border relative mb-4">
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
                                <div className="h-4 bg-white bg-opacity-30 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-white bg-opacity-30 rounded w-full mb-2"></div>
                                <div className="h-3 bg-white bg-opacity-30 rounded w-2/3 mb-2"></div>
                                <div className="h-1 w-12 bg-white mt-3"></div>
                              </div>
                            </div>
                          </div>
                          <h4 className="font-bold mb-2">Twitter/X Post</h4>
                          <p className="text-sm text-gray-600 mb-4">16:9 ratio for Twitter/X image posts</p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Template
                          </Button>
                        </CardContent>
                      </Card>
                      <Card>
                        <CardContent className="p-6">
                          <div className="aspect-[9/16] bg-black rounded-lg overflow-hidden border relative mb-4">
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
                                <div className="h-4 bg-white bg-opacity-30 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-white bg-opacity-30 rounded w-full mb-2"></div>
                                <div className="h-3 bg-white bg-opacity-30 rounded w-2/3 mb-2"></div>
                              </div>
                            </div>
                          </div>
                          <h4 className="font-bold mb-2">Instagram Story</h4>
                          <p className="text-sm text-gray-600 mb-4">9:16 ratio for Instagram/Facebook stories</p>
                          <Button size="sm" variant="outline" className="w-full flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" />
                            Download Template
                          </Button>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            )}

            {activeSection === "team" && (
              <div className="space-y-8">
                <h2 className="text-3xl font-normal">Brand Team</h2>
                <p className="text-gray-700">
                  Meet the team responsible for maintaining and evolving the Vesta brand. Reach out to them with any
                  questions about brand usage or to request custom assets.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <Image
                            src="/team/darren.jpg"
                            alt="Darren Chen"
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg">Darren Chen</h3>
                        <p className="text-gray-600 mb-2">Brand Director</p>
                        <p className="text-sm text-gray-600 mb-4">
                          Oversees all brand strategy and implementation across the organization.
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          darren@growwithvesta.com
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <Image
                            src="/team/yanjaa.jpg"
                            alt="Yanjaa Wintersoul"
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg">Yanjaa Wintersoul</h3>
                        <p className="text-gray-600 mb-2">Creative Director</p>
                        <p className="text-sm text-gray-600 mb-4">
                          Leads the visual design and creative direction of the Vesta brand.
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          yanjaa@growwithvesta.com
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
                          <Image
                            src="/team/maria.jpg"
                            alt="Maria Rodriguez"
                            width={96}
                            height={96}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <h3 className="font-bold text-lg">Maria Rodriguez</h3>
                        <p className="text-gray-600 mb-2">Content Strategist</p>
                        <p className="text-sm text-gray-600 mb-4">
                          Develops and maintains the voice, tone, and messaging of the Vesta brand.
                        </p>
                        <Button size="sm" variant="outline" className="w-full">
                          maria@growwithvesta.com
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Brand Support</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div>
                          <h4 className="font-bold text-lg">Need help with the brand?</h4>
                          <p className="text-gray-600">
                            Our brand team is here to help you with any questions or requests related to the Vesta
                            brand.
                          </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-2">
                          <Button variant="outline">Request Assets</Button>
                          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Contact Brand Team</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {activeSection === "downloads" && (
              <div className="space-y-8">
                <h2 className="text-3xl font-normal">Downloads</h2>
                <p className="text-gray-700">
                  Download brand assets, templates, and guidelines for use in your projects. All assets are organized by
                  category for easy access.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Logo Package</h3>
                      <p className="text-gray-700 mb-4">
                        Complete logo package including all versions and formats (SVG, PNG, EPS).
                      </p>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download Logo Package
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Brand Guidelines PDF</h3>
                      <p className="text-gray-700 mb-4">
                        Comprehensive brand guidelines document for reference and sharing.
                      </p>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download Guidelines PDF
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Color Palette</h3>
                      <p className="text-gray-700 mb-4">Color swatches in various formats (Adobe, Sketch, Figma).</p>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download Color Swatches
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Icon Library</h3>
                      <p className="text-gray-700 mb-4">Complete icon set in various formats (SVG, PNG).</p>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download Icon Library
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Templates</h3>
                      <p className="text-gray-700 mb-4">All digital and print templates in editable formats.</p>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download Templates
                      </Button>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-4">Photography</h3>
                      <p className="text-gray-700 mb-4">Approved brand photography for use in marketing materials.</p>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                        <Download className="h-4 w-4 mr-2" />
                        Download Photography
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold mb-4">Usage Rights</h3>
                  <Card>
                    <CardContent className="p-6">
                      <p className="text-gray-700">
                        All Vesta brand assets are proprietary and should only be used for official Vesta communications
                        and marketing materials. These assets should not be altered, modified, or used in any way that
                        violates the brand guidelines. For questions about usage rights, please contact the brand team.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}

const quickAccessItems = [
  {
    title: "Logo Files",
    description: "Download logo variations",
    icon: <ImageIcon className="h-5 w-5 text-gray-700" />,
    section: "logo",
  },
  {
    title: "Color Palette",
    description: "Brand colors and codes",
    icon: <Palette className="h-5 w-5 text-gray-700" />,
    section: "colors",
  },
  {
    title: "Typography",
    description: "Fonts and text styles",
    icon: <Type className="h-5 w-5 text-gray-700" />,
    section: "typography",
  },
  {
    title: "Templates",
    description: "Ready-to-use templates",
    icon: <FileText className="h-5 w-5 text-gray-700" />,
    section: "templates",
  },
]
