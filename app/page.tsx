import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Building2, Users } from "lucide-react"
import { VestaIcon } from "@/components/vesta-icon"
import { MobileMenu } from "@/components/mobile-menu"
import { PartnerApplicationForm } from "@/components/partner-application-form"
import { RoiCalculator } from "@/components/roi-calculator"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <header className="py-4 px-4 md:px-6 border-b border-gray-200">
        <div className="container flex items-center justify-between">
          <div className="flex items-center">
            <Image src="/logo.svg" alt="Vesta Logo" width={120} height={40} className="h-8 w-auto" />
            <div className="ml-2 px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">BETA</div>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#solution" className="text-sm font-medium hover:text-orange-500">
              Solution
            </a>
            <a href="#partners" className="text-sm font-medium hover:text-orange-500">
              For Partners
            </a>
            <a href="#faq" className="text-sm font-medium hover:text-orange-500">
              FAQ
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white hidden md:flex">Partner With Us</Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 relative overflow-hidden bg-gray-50">
          <div className="absolute inset-0 opacity-5">
            <Image src="/symbol-pattern.svg" alt="" fill className="object-cover" />
          </div>

          <div className="container relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="inline-block px-3 py-1 bg-orange-500 bg-opacity-10 text-orange-500 text-sm font-medium rounded-full">
                  Now in Beta • Limited Partner Spots Available
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight leading-tight">
                  Connecting partners to immigrant financial freedom
                </h1>
                <p className="text-xl text-gray-800">
                  Partner with Vesta to offer fast, reliable ITIN services to your immigrant clients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Become a Partner
                    <VestaIcon name="arrow" size={16} className="ml-2" />
                  </Button>
                  <Button size="lg" variant="outline" className="border-black hover:bg-gray-100 text-black">
                    Schedule a Demo
                  </Button>
                </div>
                <div className="flex items-center text-sm text-gray-700">
                  <CheckCircle className="h-4 w-4 text-orange-500 mr-2" />
                  <span>No integration fees • Revenue sharing model</span>
                </div>
              </div>
              <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                <Image src="/hero-image.jpg" alt="Vesta helping immigrants" fill className="object-cover" priority />
                <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-40"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-90 p-4 rounded-lg">
                  <p className="font-bold text-gray-800">
                    Join 50+ organizations helping 5,000+ immigrants access financial services
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="py-10 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              <p className="text-sm font-medium text-gray-600">TRUSTED BY ORGANIZATIONS LIKE</p>
              <div className="flex justify-center items-center gap-12">
                <Image
                  src="/logos/robin-hood.png"
                  width={180}
                  height={60}
                  alt="Robin Hood Foundation Logo"
                  className="w-auto object-contain"
                  style={{ height: "48px" }}
                />
                <Image
                  src="/logos/john-jay.png"
                  width={180}
                  height={60}
                  alt="John Jay College of Criminal Justice Logo"
                  className="w-auto object-contain"
                  style={{ height: "48px" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 md:py-20 px-4 md:px-6 bg-orange-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/symbol-pattern.svg" alt="" fill className="object-cover" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-normal">The Problem We're Solving Together</h2>
              <p className="text-xl">
                12M+ undocumented immigrants must mail passports to the IRS just to file taxes, creating $2.8B in missed
                economic opportunity in the U.S.
              </p>
              <Button className="bg-white text-orange-500 hover:bg-gray-100">
                Learn How We Can Partner
                <VestaIcon name="arrow" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section id="solution" className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Our Solution</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                A seamless ITIN service platform for your organization to offer to clients
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Building2 className="mr-2 h-5 w-5 text-orange-500" />
                    For Your Organization
                  </h3>
                  <ul className="space-y-4">
                    {partnerBenefits.map((benefit, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="h-5 w-5 text-green-900 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-6 flex items-center">
                    <Users className="mr-2 h-5 w-5 text-orange-500" />
                    For Your Clients
                  </h3>
                  <ul className="space-y-4">
                    {clientBenefits.map((benefit, index) => (
                      <li key={index} className="flex">
                        <CheckCircle className="h-5 w-5 text-green-900 mr-3 flex-shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="space-y-8">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <Image
                    src="/itin-tracking-dashboard.png"
                    alt="Vesta platform dashboard"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-4 left-4 right-4 p-4">
                    <p className="text-white font-bold">White-labeled dashboard for your organization</p>
                  </div>
                </div>
                <div className="text-center">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                    Request Platform Demo
                    <VestaIcon name="arrow" size={16} className="ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-gray-50 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <Image src="/symbol-pattern.svg" alt="" fill className="object-cover" />
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">How It Works</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Simple integration process to start offering ITIN services
              </p>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {partnerProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="mb-6">
                    <VestaIcon name={step.icon} size={48} className="text-orange-500 mx-auto" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Become a Partner Today
                <VestaIcon name="arrow" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Partner Types Section */}
        <section id="partners" className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Who Can Partner With Us</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Vesta works with various organizations serving immigrant communities
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {partnerTypes.map((type, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden h-full">
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex justify-start mb-6">
                      <VestaIcon name={type.icon} size={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-left">{type.title}</h3>
                    <p className="text-gray-700 mb-6 text-left flex-grow">{type.description}</p>
                    <div className="mt-auto">
                      <span className="text-orange-500 font-medium inline-flex items-center">
                        Learn more
                        <VestaIcon name="arrow" size={16} className="ml-1" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Explore Partnership Options
                <VestaIcon name="arrow" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-green-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/symbol-pattern.svg" alt="" fill className="object-cover" />
          </div>
          <div className="container relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">The Impact</h2>
              <p className="text-xl max-w-2xl mx-auto">Join our partner network and help create meaningful change</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white bg-opacity-10 p-8 rounded-lg">
                  <p className="text-5xl font-normal text-white mb-3">{stat.value}</p>
                  <p className="text-lg">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-white text-green-900 hover:bg-gray-100">
                Join Our Partner Network
                <VestaIcon name="arrow" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="py-16 md:py-24 px-4 md:px-6 bg-white">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Calculate Your Potential Revenue</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                See how partnering with Vesta can create a new revenue stream
              </p>
            </div>
            <div className="max-w-2xl mx-auto">
              <RoiCalculator />
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 md:py-24 px-4 md:px-6 bg-gray-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-normal mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Everything you need to know about partnering with Vesta
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {partnerFaqs.map((faq, index) => (
                  <AccordionItem key={index} value={`faq-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            <div className="mt-16 text-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Become a Partner
                <VestaIcon name="arrow" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 px-4 md:px-6 bg-orange-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/symbol-pattern.svg" alt="" fill className="object-cover" />
          </div>
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <div className="inline-block px-3 py-1 bg-white text-orange-500 text-sm font-medium rounded-full">
                Limited Time Offer
              </div>
              <h2 className="text-3xl md:text-4xl font-normal">Ready to expand your services?</h2>
              <p className="text-xl">
                Join our beta partner program today and receive premium features at no additional cost for 6 months.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <PartnerApplicationForm />
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:bg-opacity-10"
                >
                  Schedule a Demo
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-12 md:py-16 px-4 md:px-6 bg-white">
          <div className="container">
            <div className="max-w-xl mx-auto text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-normal">Stay updated on our progress</h2>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-10 px-4 md:px-6 bg-black text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <Image src="/logo-white.svg" alt="Vesta Logo" width={120} height={40} className="h-8 w-auto" />
              <div className="ml-2 px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded">BETA</div>
            </div>
            <div className="flex flex-wrap justify-center gap-8 mb-6 md:mb-0">
              <a href="#solution" className="text-sm text-gray-400 hover:text-white">
                Solution
              </a>
              <a href="#partners" className="text-sm text-gray-400 hover:text-white">
                For Partners
              </a>
              <a href="#faq" className="text-sm text-gray-400 hover:text-white">
                FAQ
              </a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">
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
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
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
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
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
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center md:text-left">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Vesta. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

const partnerProcess = [
  {
    title: "Apply",
    description: "Complete our simple partner application form",
    icon: "file",
  },
  {
    title: "Onboard",
    description: "Get trained on our platform and services",
    icon: "tablet",
  },
  {
    title: "Integrate",
    description: "Add ITIN services to your existing offerings",
    icon: "calendar",
  },
  {
    title: "Grow",
    description: "Expand your impact and generate new revenue",
    icon: "location",
  },
]

const partnerBenefits = [
  "New revenue stream with our revenue-sharing model",
  "White-labeled platform with your branding",
  "Expand service offerings without additional staff",
  "Detailed analytics and reporting dashboard",
  "Marketing materials and support",
  "Dedicated partner success manager",
]

const clientBenefits = [
  "Fast and reliable ITIN application processing",
  "No need to mail original documents to the IRS",
  "Real-time application status tracking",
  "Multilingual support in 5+ languages",
  "Access to financial education resources",
  "Seamless integration with your existing services",
]

const partnerTypes = [
  {
    title: "Financial Institutions",
    description:
      "Banks, credit unions, and financial service providers looking to expand offerings to immigrant communities.",
    icon: "document",
  },
  {
    title: "Community Organizations",
    description: "Nonprofits, community centers, and advocacy groups serving immigrant populations.",
    icon: "home",
  },
  {
    title: "Professional Services",
    description: "Tax preparers, accountants, immigration attorneys, and other professional service providers.",
    icon: "file",
  },
]

const stats = [
  {
    value: "50+",
    label: "Partner organizations nationwide",
  },
  {
    value: "5,000+",
    label: "Successful ITIN applications processed",
  },
  {
    value: "98%",
    label: "Application approval rate",
  },
]

const partnerFaqs = [
  {
    question: "How does the partnership model work?",
    answer:
      "Our partnership model is based on revenue sharing. Partners can offer ITIN services to their clients through our white-labeled platform, and we split the revenue for each successful application. We provide all the technology, expertise, and support while you focus on serving your clients. There are no upfront costs or integration fees to get started.",
  },
  {
    question: "What kind of support do partners receive?",
    answer:
      "Partners receive comprehensive support including a dedicated partner success manager, training for your team, marketing materials, technical support, and regular performance reviews. We also provide educational resources about ITIN services that you can share with your clients.",
  },
  {
    question: "How long does it take to integrate Vesta's services?",
    answer:
      "Most partners are fully onboarded within 2-3 weeks. This includes platform training, marketing setup, and integration with your existing systems. Our team works closely with you throughout the process to ensure a smooth implementation.",
  },
  {
    question: "Can we customize the platform with our branding?",
    answer:
      "Yes, our platform is fully white-labeled and can be customized with your organization's branding, including logos, colors, and messaging. This ensures a seamless experience for your clients while maintaining your brand identity.",
  },
  {
    question: "What are the requirements to become a partner?",
    answer:
      "We look for partners who serve immigrant communities and are committed to expanding financial access. While there are no specific size requirements, partners should have an established client base and the capacity to promote ITIN services. During our beta period, we're particularly interested in partners who can provide feedback to help improve our platform.",
  },
]
