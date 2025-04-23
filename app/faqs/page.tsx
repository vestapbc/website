"use client"

import { useState } from "react"
import Link from "next/link"

// Define FAQ categories and their items
const faqCategories = {
  all: "All FAQs",
  basics: "ITIN Basics",
  application: "Application Process",
  documents: "Documents",
  submission: "After Submission",
  partners: "Partners",
}

// Define FAQ data with categories
const faqData = [
  {
    category: "basics",
    question: "What is an ITIN?",
    answer:
      "An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the Internal Revenue Service (IRS) for individuals who are required to have a U.S. taxpayer identification number but do not have, and are not eligible to obtain, a Social Security Number.",
  },
  {
    category: "basics",
    question: "Who needs an ITIN?",
    answer:
      "ITINs are generally needed by non-resident aliens who have income in the U.S., resident aliens who are not eligible for a Social Security Number, and dependents or spouses of U.S. citizens/resident aliens who cannot obtain a Social Security Number.",
  },
  {
    category: "basics",
    question: "What are the benefits of having an ITIN?",
    answer:
      "Having an ITIN allows you to: file tax returns and claim certain tax credits, open interest-bearing bank accounts, conduct business in the U.S., establish a credit history, and potentially qualify for state benefits.",
  },
  {
    category: "basics",
    question: "Does an ITIN expire?",
    answer:
      "Yes, ITINs that haven't been used on a federal tax return at least once in the last three consecutive years will expire. Additionally, ITINs issued before 2013 have been set to expire on a rolling basis. If your ITIN has expired, you'll need to renew it.",
  },
  {
    category: "application",
    question: "How do I apply for an ITIN with Vesta?",
    answer:
      "The process is simple: Complete our eligibility check, create an account and provide your information, upload your required documents, submit your application, and track your application status through our portal.",
  },
  {
    category: "application",
    question: "How long does the ITIN application process take?",
    answer:
      "With Vesta's streamlined process, most applications are prepared within 1-2 days. Once submitted to the IRS, processing typically takes 4-6 weeks during non-peak tax season, and 7-10 weeks during peak season.",
  },
  {
    category: "application",
    question: "Do I need to file a tax return with my ITIN application?",
    answer:
      "In most cases, yes. The IRS generally requires that an ITIN application be accompanied by a valid federal income tax return, unless you qualify for an exception. Our eligibility check will help determine if you need to file a tax return with your application.",
  },
  {
    category: "documents",
    question: "What documents do I need for an ITIN application?",
    answer:
      "You'll need: a completed Form W-7, a valid tax return (unless you qualify for an exception), and documents that prove your identity and foreign status. Our eligibility check will provide you with a personalized document checklist.",
  },
  {
    category: "documents",
    question: "Do I need to send original documents?",
    answer:
      "As an IRS-certified Acceptance Agent, Vesta can verify your identity and foreign status documents, which means you don't have to send original documents to the IRS in most cases. We can certify copies of your documents.",
  },
  {
    category: "submission",
    question: "How can I track my ITIN application?",
    answer:
      "Once you submit your application through Vesta, you can track its status through our secure online portal. You'll receive updates as your application progresses through the IRS review process.",
  },
  {
    category: "partners",
    question: "How can my organization partner with Vesta?",
    answer:
      "We offer partnership opportunities for nonprofits, employers, and community organizations. You can apply through our partner application page or schedule a call with our partnership team to discuss collaboration options.",
  },
]

export default function FAQsPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter FAQs based on active category
  const filteredFAQs = activeCategory === "all" ? faqData : faqData.filter((faq) => faq.category === activeCategory)

  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair text-center mb-16">Frequently Asked Questions</h1>

        {/* FAQ Categories */}
        <div className="flex overflow-x-auto pb-4 mb-8 border-b border-gray-200">
          {Object.entries(faqCategories).map(([key, label]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-4 py-1 text-sm mr-4 whitespace-nowrap transition-colors ${
                activeCategory === key ? "bg-primary text-white" : "hover:bg-gray-100"
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* FAQs */}
        <div className="space-y-8">
          {/* Group FAQs by category for display */}
          {activeCategory === "all" ? (
            // When showing all FAQs, group them by category
            Object.entries(faqCategories)
              .filter(([key]) => key !== "all")
              .map(([category, label]) => {
                const categoryFAQs = faqData.filter((faq) => faq.category === category)
                if (categoryFAQs.length === 0) return null

                return (
                  <div key={category}>
                    <h2 className="text-2xl font-playfair mb-6">{label}</h2>
                    <div className="space-y-6">
                      {categoryFAQs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4">
                          <h3 className="text-xl font-playfair mb-2">{faq.question}</h3>
                          <p className="text-sm">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })
          ) : (
            // When a specific category is selected, show only those FAQs
            <div>
              <h2 className="text-2xl font-playfair mb-6">{faqCategories[activeCategory]}</h2>
              <div className="space-y-6">
                {filteredFAQs.map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4">
                    <h3 className="text-xl font-playfair mb-2">{faq.question}</h3>
                    <p className="text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-playfair mb-4">Still Have Questions?</h2>
          <p className="text-sm mb-6">
            Our team is here to help. Contact us for personalized assistance with your ITIN questions.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="https://calendly.com/darren-mms/30-minute-itin?month=2025-03"
              className="bg-black hover:bg-black-soft text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

