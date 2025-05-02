import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ServiceCard } from "@/components/service-card"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="relative min-h-screen flex flex-col">
        {/* Green decorative element */}
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-900 rounded-tl-full z-0"></div>

        {/* Orange decorative element */}
        <div className="absolute bottom-0 right-64 w-16 h-16 bg-orange-500 z-0"></div>

        <Header minimal={true} activePage="home" />

        <main className="flex-1 flex flex-col">
          {/* Hero Section */}
          <section className="flex-1 flex flex-col">
            <div className="container flex-1 grid md:grid-cols-2 gap-8 items-center py-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-tight text-left">
                  Connecting immigrants to financial freedom
                </h1>
              </div>
              <div className="space-y-6">
                <p className="text-xl text-gray-700 text-left">
                  Fast, reliable, and hassle-free ITIN services to help you navigate the complexities of tax
                  identification.
                </p>
                <Link href="/application" className="inline-block text-lg font-medium">
                  Get started
                  <span className="block h-0.5 bg-orange-500"></span>
                </Link>
              </div>
            </div>

            {/* Image Banner */}
            <div className="relative w-full h-64 mt-auto">
              <Image src="/hero-image.jpg" alt="Vesta helping immigrants" fill className="object-cover" priority />
            </div>
          </section>

          {/* Services Section */}
          <section className="py-16 md:py-24 bg-black">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-normal mb-12 text-white text-left">Our Services</h2>
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

          {/* Stats Section */}
          <section className="bg-gray-50 text-black py-16 md:py-24">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-normal mb-12 text-left">The Impact</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-left">
                    <p className="text-5xl font-normal text-orange-500 mb-2">{stat.value}</p>
                    <p className="text-lg">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Client Success Stories */}
          <section className="py-16 md:py-24">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-normal mb-6 text-left">Client Success Stories</h2>
              <p className="text-lg text-gray-700 mb-12 text-left">
                Read how Vesta has helped immigrants across the country achieve financial freedom through our ITIN
                services.
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                        <Image
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          width={48}
                          height={48}
                        />
                      </div>
                      <div>
                        <h3 className="font-bold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-600">{testimonial.location}</p>
                      </div>
                    </div>
                    <p className="text-gray-700 mb-3">{testimonial.quote}</p>
                    <p className="text-sm text-orange-500 font-medium">{testimonial.result}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-normal mb-12 text-left">Why Choose Vesta</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-left flex flex-col items-start">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center">
                      <Image src={feature.icon || "/placeholder.svg"} alt={feature.title} width={48} height={48} />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 md:py-24 bg-orange-500 text-white">
            <div className="container">
              <div className="max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-normal mb-6 text-left">Ready to get started?</h2>
                <p className="text-xl mb-8 text-left">
                  Take the first step towards financial freedom with our ITIN services.
                </p>
                <Button className="bg-white text-orange-500 hover:bg-gray-100">
                  Get Started Now
                  <span className="ml-1 border-b border-orange-500"></span>
                </Button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
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

const stats = [
  {
    value: "12M+",
    label: "Undocumented immigrants must mail passports to the IRS just to file taxes",
  },
  {
    value: "$2.8B",
    label: "In missed economic opportunity in the U.S.",
  },
  {
    value: "100+",
    label: "Partner organizations nationwide",
  },
]

const testimonials = [
  {
    name: "Maria Rodriguez",
    location: "New York, NY",
    quote:
      "Vesta made the ITIN application process so much easier than I expected. Their team guided me through every step and I received my ITIN in just a few weeks.",
    result: "Now able to open a bank account and build credit history",
    avatar: "/avatars/maria.jpg",
  },
  {
    name: "Carlos Mendez",
    location: "Los Angeles, CA",
    quote:
      "After struggling with my ITIN application for months, I found Vesta. Their expert support and clear guidance helped me finally get my ITIN and open my first bank account.",
    result: "Successfully filed taxes and received a refund for the first time",
    avatar: "/avatars/carlos.jpg",
  },
]

const features = [
  {
    title: "Secure Process",
    description: "Your personal information and documents are protected with enterprise-grade security.",
    icon: "/icons/lock.png",
  },
  {
    title: "Timely Updates",
    description: "Receive notifications about your application status every step of the way.",
    icon: "/icons/bell.png",
  },
  {
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden fees, making our services accessible to all.",
    icon: "/icons/dollar.png",
  },
  {
    title: "Nationwide Service",
    description: "We serve clients across all 50 states, with local support in major cities.",
    icon: "/icons/location.png",
  },
]
