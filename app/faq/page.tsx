import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function FAQPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header activePage="faq" />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gray-50 py-16 md:py-24">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-normal mb-6">Frequently Asked Questions</h1>
            <p className="text-lg text-gray-700 max-w-2xl">
              Find answers to common questions about Individual Taxpayer Identification Numbers (ITINs), the application
              process, and our services.
            </p>
          </div>
        </section>

        {/* FAQ Categories Section */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {faqCategories.map((category, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 mb-4 flex items-center justify-center">
                    <Image src={category.icon || "/placeholder.svg"} alt={category.title} width={64} height={64} />
                  </div>
                  <h2 className="text-xl font-bold mb-2">{category.title}</h2>
                  <p className="text-gray-600">{category.description}</p>
                </div>
              ))}
            </div>

            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <h2 className="text-2xl font-normal mb-6">About ITINs</h2>
                {aboutITINs.map((faq, index) => (
                  <AccordionItem key={index} value={`about-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}

                <h2 className="text-2xl font-normal mt-12 mb-6">Application Process</h2>
                {applicationProcess.map((faq, index) => (
                  <AccordionItem key={index} value={`process-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}

                <h2 className="text-2xl font-normal mt-12 mb-6">Our Services</h2>
                {ourServices.map((faq, index) => (
                  <AccordionItem key={index} value={`services-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-orange-500 text-white">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-normal mb-6">Still have questions?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Our team is here to help. Contact us for personalized assistance with your ITIN application.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-white text-orange-500 hover:bg-gray-100">
                Contact Us
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

const faqCategories = [
  {
    title: "About ITINs",
    description: "Learn what an ITIN is and why you might need one.",
    icon: "/icons/search.png",
  },
  {
    title: "Application Process",
    description: "Understand the steps involved in obtaining an ITIN.",
    icon: "/icons/document.png",
  },
  {
    title: "Our Services",
    description: "Discover how Vesta can help you with your ITIN application.",
    icon: "/icons/gender.png",
  },
]

const aboutITINs = [
  {
    question: "What is an ITIN?",
    answer:
      "An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the Internal Revenue Service (IRS) to individuals who are required to have a U.S. taxpayer identification number but who do not have, and are not eligible to obtain, a Social Security Number (SSN).",
  },
  {
    question: "Who needs an ITIN?",
    answer:
      "ITINs are primarily issued to foreign nationals and others who have federal tax reporting or filing requirements but do not qualify for a Social Security Number. This includes nonresident aliens required to file a U.S. tax return, U.S. resident aliens filing tax returns, dependents or spouses of U.S. citizens/resident aliens, and dependents/spouses of nonresident alien visa holders.",
  },
  {
    question: "What are the benefits of having an ITIN?",
    answer:
      "Having an ITIN allows you to comply with U.S. tax laws and file income tax returns. It can also help you open a bank account, apply for loans or mortgages, claim tax treaty benefits, and claim dependent exemptions. Additionally, it serves as a step toward establishing a financial identity in the United States.",
  },
  {
    question: "How long is an ITIN valid?",
    answer:
      "ITINs that are not used on a federal tax return at least once in the last three consecutive years will expire. Additionally, ITINs issued before 2013 have been expiring on a rolling schedule. If your ITIN has expired, you'll need to renew it if you need to file a tax return.",
  },
]

const applicationProcess = [
  {
    question: "How do I apply for an ITIN?",
    answer:
      "You can apply for an ITIN by submitting Form W-7 (Application for IRS Individual Taxpayer Identification Number) along with your tax return and required documentation to the IRS. Our service assists you throughout this process, from document preparation to submission.",
  },
  {
    question: "What documents do I need to apply for an ITIN?",
    answer:
      "You'll need to provide documentation that proves your identity and foreign status. This typically includes your passport (original or certified copy), birth certificate, foreign driver's license, or other official identification documents. Our team will help you determine which documents are best for your specific situation.",
  },
  {
    question: "How long does it take to get an ITIN?",
    answer:
      "The IRS typically processes ITIN applications within 7 to 11 weeks. However, during peak tax filing season (January to April), it may take longer. With our expedited service, we ensure your application is properly prepared to avoid delays and provide tracking throughout the process.",
  },
  {
    question: "Can I renew my expired ITIN through Vesta?",
    answer:
      "Yes, we provide ITIN renewal services. If your ITIN has expired or is about to expire, we can help you complete Form W-7 for renewal and submit the necessary documentation to the IRS.",
  },
]

const ourServices = [
  {
    question: "How does Vesta help with the ITIN application process?",
    answer:
      "Vesta provides end-to-end support for your ITIN application. We help you determine if you need an ITIN, assist with completing Form W-7, review and prepare your documentation, submit your application to the IRS, and track the status of your application until you receive your ITIN.",
  },
  {
    question: "What makes Vesta different from other ITIN service providers?",
    answer:
      "Vesta stands out through our comprehensive approach, multilingual support, transparent pricing, and commitment to accessibility. We understand the unique challenges immigrants face and provide personalized guidance throughout the process. Our team includes ITIN specialists who stay updated on the latest IRS requirements and procedures.",
  },
  {
    question: "How much does Vesta's ITIN service cost?",
    answer:
      "Our service fees vary depending on the complexity of your case and the specific services you need. We offer transparent pricing with no hidden fees. Contact us for a personalized quote based on your situation. We're committed to making our services accessible and affordable for all clients.",
  },
  {
    question: "Do I need to mail my original documents to Vesta?",
    answer:
      "In most cases, we can work with certified copies of your documents rather than originals. However, the IRS may require original documents or certified copies from the issuing agency for some applications. Our team will guide you on the specific requirements for your situation and help you safely handle your important documents.",
  },
]
