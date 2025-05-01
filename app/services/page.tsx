import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="services" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-normal mb-6 text-left">Our Services</h1>
              <p className="text-lg text-gray-700 text-left">
                We provide comprehensive ITIN services to help immigrants navigate the complexities of tax
                identification.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24 bg-black">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  link={service.link}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Services Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-normal mb-12 text-left">How We Help You</h2>
            <div className="grid md:grid-cols-2 gap-12">
              {detailedServices.map((service, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-gray-100 rounded-md shrink-0">
                    <Image src={service.icon || "/placeholder.svg"} alt={service.title} width={32} height={32} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-normal mb-3">{service.title}</h2>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2 mb-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-orange-500 mr-2 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href={service.link}>
                      <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                        Learn More
                        <span className="ml-1 border-b border-white"></span>
                      </Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-normal mb-12 text-left">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-left">
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-4 text-2xl font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Organizations */}
        <section className="py-16 md:py-24">
          <div className="container">
            <h2 className="text-3xl md:text-4xl font-normal mb-6 text-left">Our Partners</h2>
            <p className="text-lg text-gray-700 mb-12 text-left">
              We collaborate with trusted organizations across the country to provide comprehensive support for
              immigrants.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                    <Image src={partner.logo || "/placeholder.svg"} alt={partner.name} width={64} height={64} />
                  </div>
                  <h3 className="font-bold">{partner.name}</h3>
                  <p className="text-sm text-gray-600">{partner.type}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-black text-white">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-normal mb-6 text-left">Ready to get started?</h2>
              <p className="text-xl mb-8 text-left">
                Take the first step towards financial freedom with our ITIN services.
              </p>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                Get Started Now
                <span className="ml-1 border-b border-white"></span>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

const services = [
  {
    title: "Document Preparation",
    description: "We guide you through the required documentation",
    icon: "/icons/document.png",
    link: "/services/document-preparation",
  },
  {
    title: "Application Tracking",
    description: "Monitor your application status in real-time",
    icon: "/icons/search.png",
    link: "/services/application-tracking",
  },
  {
    title: "Expert Support",
    description: "Get assistance from our ITIN specialists",
    icon: "/icons/gender.png",
    link: "/services/expert-support",
  },
  {
    title: "Multilingual Service",
    description: "Support available in multiple languages",
    icon: "/icons/location.png",
    link: "/services/multilingual",
  },
]

const detailedServices = [
  {
    title: "ITIN Application Assistance",
    description:
      "We provide comprehensive support for your Individual Taxpayer Identification Number application process.",
    icon: "/icons/document.png",
    link: "/services/itin",
    features: [
      "Complete application preparation",
      "Document review and verification",
      "IRS submission assistance",
      "Status tracking and updates",
    ],
  },
  {
    title: "Document Preparation",
    description: "Our experts will help you prepare all necessary documentation for your ITIN application.",
    icon: "/icons/tablet.png",
    link: "/services/document",
    features: [
      "Document checklist and guidance",
      "Certified translations when needed",
      "Secure document handling",
      "Verification of document authenticity",
    ],
  },
  {
    title: "Application Tracking",
    description: "Monitor your application status in real-time through our secure portal.",
    icon: "/icons/search.png",
    link: "/services/tracking",
    features: [
      "Real-time status updates",
      "Secure online portal access",
      "Email and SMS notifications",
      "Direct communication with your case manager",
    ],
  },
  {
    title: "Multilingual Support",
    description:
      "Our team provides support in multiple languages to ensure clear communication throughout the process.",
    icon: "/icons/gender.png",
    link: "/services/multilingual",
    features: [
      "Support in Spanish, English, and more",
      "Translated materials and resources",
      "Multilingual customer service team",
      "Cultural sensitivity and understanding",
    ],
  },
]

const process = [
  {
    title: "Consultation",
    description: "We assess your situation and determine the best approach for your ITIN application.",
    icon: "/icons/gender.png",
  },
  {
    title: "Document Collection",
    description: "We help you gather and prepare all necessary documentation for your application.",
    icon: "/icons/document.png",
  },
  {
    title: "Application Submission",
    description: "We submit your application to the IRS and ensure all requirements are met.",
    icon: "/icons/arrow.png",
  },
  {
    title: "Tracking & Follow-up",
    description: "We track your application status and follow up with the IRS as needed.",
    icon: "/icons/search.png",
  },
]

const partners = [
  {
    name: "Financial Inclusion Network",
    type: "Non-profit Organization",
    logo: "/placeholder.svg",
  },
  {
    name: "Immigrant Legal Resource Center",
    type: "Legal Services",
    logo: "/placeholder.svg",
  },
  {
    name: "Community Credit Union",
    type: "Financial Institution",
    logo: "/placeholder.svg",
  },
  {
    name: "New Americans Alliance",
    type: "Advocacy Group",
    logo: "/placeholder.svg",
  },
]
