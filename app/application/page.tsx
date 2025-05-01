import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ApplicationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-normal mb-6">ITIN Application</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Complete your ITIN application online in a few simple steps. Our secure process makes it easy to get
              started on your path to financial freedom.
            </p>
          </div>
        </section>

        {/* Application Form Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-4xl">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">ITIN Application Form</CardTitle>
                <CardDescription>
                  Please fill out all required fields. Your information is secure and protected.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="personal" className="w-full">
                  <TabsList className="grid grid-cols-3 mb-8">
                    <TabsTrigger value="personal">Personal Information</TabsTrigger>
                    <TabsTrigger value="documents">Documents</TabsTrigger>
                    <TabsTrigger value="review">Review & Submit</TabsTrigger>
                  </TabsList>

                  <TabsContent value="personal" className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="first-name">First Name (as it appears on your ID)</Label>
                        <Input id="first-name" placeholder="Enter your first name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="last-name">Last Name (as it appears on your ID)</Label>
                        <Input id="last-name" placeholder="Enter your last name" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="birth-date">Date of Birth</Label>
                        <Input id="birth-date" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="country-birth">Country of Birth</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select country" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="mexico">Mexico</SelectItem>
                            <SelectItem value="guatemala">Guatemala</SelectItem>
                            <SelectItem value="el-salvador">El Salvador</SelectItem>
                            <SelectItem value="honduras">Honduras</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Current U.S. Address</Label>
                      <Input id="address" placeholder="Street address" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input id="city" placeholder="City" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select state" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="ca">California</SelectItem>
                            <SelectItem value="ny">New York</SelectItem>
                            <SelectItem value="tx">Texas</SelectItem>
                            <SelectItem value="fl">Florida</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="zip">ZIP Code</Label>
                        <Input id="zip" placeholder="ZIP code" required />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input id="email" type="email" placeholder="Enter your email" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" required />
                      </div>
                    </div>

                    <div className="flex justify-end">
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Continue to Documents
                        <span className="ml-1 border-b border-white"></span>
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="documents" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Required Documents</h3>
                      <p className="text-gray-600">
                        Please upload clear, high-quality images or scans of the following documents:
                      </p>

                      <div className="space-y-4 border rounded-lg p-4">
                        <div className="space-y-2">
                          <Label htmlFor="passport">Passport (Main Page)</Label>
                          <div className="flex items-center gap-4">
                            <Input id="passport" type="file" className="flex-1" />
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
                              <Image src="/icons/document.png" alt="Document" width={24} height={24} />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="id-card">National ID Card (Front and Back)</Label>
                          <div className="flex items-center gap-4">
                            <Input id="id-card" type="file" className="flex-1" multiple />
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
                              <Image src="/icons/document.png" alt="Document" width={24} height={24} />
                            </div>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="birth-certificate">Birth Certificate</Label>
                          <div className="flex items-center gap-4">
                            <Input id="birth-certificate" type="file" className="flex-1" />
                            <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-md">
                              <Image src="/icons/document.png" alt="Document" width={24} height={24} />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Do you need translation services for your documents?</Label>
                        <RadioGroup defaultValue="no" className="flex space-x-4">
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="yes" id="translation-yes" />
                            <Label htmlFor="translation-yes">Yes</Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="no" id="translation-no" />
                            <Label htmlFor="translation-no">No</Label>
                          </div>
                        </RadioGroup>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" className="border-black hover:bg-gray-100">
                        Back to Personal Information
                      </Button>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Continue to Review
                        <span className="ml-1 border-b border-white"></span>
                      </Button>
                    </div>
                  </TabsContent>

                  <TabsContent value="review" className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Review Your Information</h3>
                      <p className="text-gray-600">
                        Please review your information carefully before submitting your application.
                      </p>

                      <div className="border rounded-lg p-4 space-y-4">
                        <div>
                          <h4 className="font-medium">Personal Information</h4>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <p className="text-gray-600">Name:</p>
                            <p>John Doe</p>
                            <p className="text-gray-600">Date of Birth:</p>
                            <p>01/01/1990</p>
                            <p className="text-gray-600">Country of Birth:</p>
                            <p>Mexico</p>
                            <p className="text-gray-600">Address:</p>
                            <p>123 Main St, New York, NY 10001</p>
                            <p className="text-gray-600">Email:</p>
                            <p>john.doe@example.com</p>
                            <p className="text-gray-600">Phone:</p>
                            <p>(555) 123-4567</p>
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium">Documents</h4>
                          <div className="grid grid-cols-2 gap-2 mt-2">
                            <p className="text-gray-600">Passport:</p>
                            <p>passport.jpg (Uploaded)</p>
                            <p className="text-gray-600">ID Card:</p>
                            <p>id_front.jpg, id_back.jpg (Uploaded)</p>
                            <p className="text-gray-600">Birth Certificate:</p>
                            <p>birth_certificate.jpg (Uploaded)</p>
                            <p className="text-gray-600">Translation Services:</p>
                            <p>No</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="terms" />
                          <Label htmlFor="terms" className="text-sm">
                            I certify that all information provided is true and correct to the best of my knowledge. I
                            understand that providing false information may result in penalties and rejection of my
                            application.
                          </Label>
                        </div>

                        <div className="flex items-start space-x-2">
                          <Checkbox id="privacy" />
                          <Label htmlFor="privacy" className="text-sm">
                            I have read and agree to the{" "}
                            <Link href="/privacy" className="text-orange-500 underline">
                              Privacy Policy
                            </Link>{" "}
                            and{" "}
                            <Link href="/terms" className="text-orange-500 underline">
                              Terms of Service
                            </Link>
                            .
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-between">
                      <Button variant="outline" className="border-black hover:bg-gray-100">
                        Back to Documents
                      </Button>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Submit Application
                        <span className="ml-1 border-b border-white"></span>
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter className="flex flex-col items-start border-t pt-6">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <div className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full">
                    <Image src="/icons/lock.png" alt="Secure" width={16} height={16} />
                  </div>
                  <p>Your information is encrypted and secure. We never share your data with third parties.</p>
                </div>
              </CardFooter>
            </Card>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-normal mb-12 text-center">What Happens Next?</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {nextSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-normal mb-12 text-center">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              {applicationFaqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-8 text-center">
              <Link href="/faq" className="text-orange-500 inline-flex items-center">
                View all FAQs <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-6">Need help with your application?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our ITIN specialists are available to assist you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-orange-500 hover:bg-gray-100">
                Contact Support
                <span className="ml-1 border-b border-orange-500"></span>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-orange-600">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const nextSteps = [
  {
    title: "Application Review",
    description: "Our team reviews your application and documents within 1-2 business days.",
  },
  {
    title: "Document Verification",
    description: "We verify your documents and prepare them for submission to the IRS.",
  },
  {
    title: "IRS Submission",
    description: "We submit your application to the IRS and provide you with a tracking number.",
  },
  {
    title: "ITIN Issuance",
    description: "The IRS processes your application and issues your ITIN (typically 7-11 weeks).",
  },
]

const applicationFaqs = [
  {
    question: "How long does the application process take?",
    answer:
      "The entire process typically takes 8-12 weeks from submission to receiving your ITIN. Our team reviews your application within 1-2 business days, and the IRS processing time is usually 7-11 weeks.",
  },
  {
    question: "What if I'm missing some of the required documents?",
    answer:
      "If you're missing any required documents, our team will contact you to discuss alternative documentation options. In some cases, we can help you obtain certified copies or suggest acceptable alternatives.",
  },
  {
    question: "Can I check the status of my application?",
    answer:
      "Yes, you can track the status of your application through our secure client portal. We also provide regular updates via email and text message as your application progresses through each stage.",
  },
  {
    question: "What if my application is rejected?",
    answer:
      "If your application is rejected, we'll work with you to address the reasons for rejection and resubmit at no additional cost. Our success rate is over 98%, and we're committed to helping you obtain your ITIN.",
  },
]

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ChevronRight } from "lucide-react"
