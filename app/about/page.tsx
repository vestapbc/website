import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="about" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-normal mb-6 text-left">About Vesta</h1>
              <p className="text-lg text-gray-700 text-left">
                We're on a mission to connect immigrants to financial freedom through accessible ITIN services.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 md:py-24">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-normal mb-6 text-left">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-4 text-left">
                At Vesta, we believe that everyone deserves access to financial services, regardless of their
                immigration status. Our mission is to simplify the pathway to financial inclusion for immigrants by
                providing accessible, reliable, and hassle-free ITIN services.
              </p>
              <p className="text-lg text-gray-700 text-left">
                We're committed to helping our clients navigate the complexities of tax identification, empowering them
                to build credit, open bank accounts, and file taxes—essential steps toward financial stability and
                success in the United States.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/about-mission.jpg"
                alt="Vesta team members helping clients"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-normal mb-12 text-left">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-8 rounded-lg border border-gray-200">
                  <div className="w-16 h-16 rounded-full bg-orange-500 text-white flex items-center justify-center mb-6">
                    <Image src={value.icon || "/placeholder.svg"} alt={value.title} width={32} height={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600 mb-4">{value.description}</p>
                  <p className="text-gray-600">{value.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-orange-500 text-white">
          <div className="container">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-normal mb-6 text-left">Join our mission</h2>
              <p className="text-xl mb-8 text-left">
                Be part of the movement to simplify pathways to financial inclusion for all.
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
  )
}

const values = [
  {
    title: "Accessibility",
    description:
      "We believe financial services should be accessible to everyone, regardless of immigration status or background.",
    detail:
      "Our platform is designed to be intuitive and easy to use, with multilingual support and clear guidance at every step of the process.",
    icon: "/icons/home.png",
  },
  {
    title: "Transparency",
    description: "We maintain clear communication and honest pricing throughout the entire application process.",
    detail:
      "No hidden fees, no surprises. We provide regular updates and are always available to answer your questions about your application status.",
    icon: "/icons/circle.png",
  },
  {
    title: "Empowerment",
    description: "We empower our clients with the knowledge and tools they need to achieve financial independence.",
    detail:
      "Beyond just helping with ITIN applications, we provide resources and guidance to help immigrants build credit, open bank accounts, and achieve long-term financial stability.",
    icon: "/icons/arrow.png",
  },
]
