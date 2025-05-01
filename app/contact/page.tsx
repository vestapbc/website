import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="contact" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-normal mb-6 text-left">Contact Us</h1>
              <p className="text-lg text-gray-700 text-left">
                Have questions about our ITIN services? We're here to help. Reach out to our team for personalized
                assistance.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-normal mb-6 text-left">Get in Touch</h2>
                <p className="text-gray-600 mb-8 text-left">
                  Fill out the form below and one of our ITIN specialists will get back to you within 24 hours.
                </p>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First Name</Label>
                      <Input id="first-name" placeholder="Enter your first name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last Name</Label>
                      <Input id="last-name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="Enter your phone number" />
                  </div>

                  <div className="space-y-2">
                    <Label>Preferred Contact Method</Label>
                    <RadioGroup defaultValue="email" className="flex space-x-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-contact" />
                        <Label htmlFor="email-contact">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-contact" />
                        <Label htmlFor="phone-contact">Phone</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="itin-application">ITIN Application</SelectItem>
                        <SelectItem value="document-preparation">Document Preparation</SelectItem>
                        <SelectItem value="application-tracking">Application Tracking</SelectItem>
                        <SelectItem value="itin-renewal">ITIN Renewal</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us how we can help you" rows={5} />
                  </div>

                  <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Send Message
                    <span className="ml-1 border-b border-white"></span>
                  </Button>
                </form>
              </div>

              <div>
                <h2 className="text-3xl font-normal mb-6 text-left">Contact Information</h2>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
                      <Image src="/icons/location.png" alt="Location" width={32} height={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Our Office</h3>
                      <p className="text-gray-600">123 Financial District</p>
                      <p className="text-gray-600">New York, NY 10004</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
                      <Image src="/icons/circle.png" alt="Email" width={32} height={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Email</h3>
                      <p className="text-gray-600">info@growwithvesta.com</p>
                      <p className="text-gray-600">support@growwithvesta.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
                      <Image src="/icons/bell.png" alt="Phone" width={32} height={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">Phone</h3>
                      <p className="text-gray-600">(212) 555-7890</p>
                      <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Hours of Operation</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span className="text-gray-600">Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Saturday</span>
                      <span>10:00 AM - 2:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-gray-600">Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <Link
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-twitter"
                      >
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect width="4" height="12" x="2" y="9" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </Link>
                    <Link
                      href="#"
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
