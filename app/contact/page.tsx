"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="py-12 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair mb-8">Contact Us</h1>
          <p className="text-xl max-w-3xl mb-12">
            Have questions about our ITIN services or want to learn more about partnering with Vesta? We're here to
            help. Reach out to our team using the form below or contact us directly.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-10 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-playfair mb-6">Send Us a Message</h2>

              {isSubmitted ? (
                <div className="bg-primary/10 border border-primary p-6 rounded-sm">
                  <h3 className="text-xl font-medium text-primary mb-2">Thank You!</h3>
                  <p>Your message has been sent successfully. We'll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 text-primary hover:text-primary-dark font-medium"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                      placeholder="ITIN Application Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors flex items-center"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message <Send size={16} className="ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-playfair mb-6">Contact Information</h2>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Email Us</h3>
                    <p className="text-sm mb-1">General Inquiries:</p>
                    <a href="mailto:hello@growwithvesta.com" className="text-primary hover:text-primary-dark">
                      hello@growwithvesta.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Phone className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Call Us</h3>
                    <p className="text-sm mb-1">Customer Support:</p>
                    <a href="tel:+16469206771" className="text-primary hover:text-primary-dark">
                      +1 (646) 920-6771
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <MapPin className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Visit Us</h3>
                    <p className="text-sm">
                      150 Court Street
                      <br />
                      Brooklyn, NY
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <Clock className="text-primary" size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1">Business Hours</h3>
                    <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM (EST)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="font-medium mb-3">Connect With Us</h3>
                <div className="flex space-x-4">
                  <Link
                    href="https://twitter.com/vestaitin"
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </Link>
                  <Link
                    href="https://linkedin.com/company/vestaitin"
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </Link>
                  <Link
                    href="https://facebook.com/vestaitin"
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                  <Link
                    href="https://instagram.com/vestaitin"
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:border-primary transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-playfair mb-8 text-center">Find Us</h2>
          <div className="h-96 bg-gray-200 rounded-sm flex items-center justify-center">
            <p className="text-gray-500">Interactive map would be displayed here</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-10 bg-cream">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-playfair mb-8 text-center">Frequently Asked Questions</h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-playfair mb-2">What are your response times?</h3>
              <p className="text-sm">
                We aim to respond to all inquiries within 24-48 business hours. For urgent matters, please call our
                customer support line.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-playfair mb-2">Do you offer in-person consultations?</h3>
              <p className="text-sm">
                Yes, we offer in-person consultations at our San Francisco office. Please schedule an appointment
                through our online booking system or by calling our office.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-xl font-playfair mb-2">How can organizations partner with Vesta?</h3>
              <p className="text-sm">
                We offer partnership opportunities for nonprofits, employers, and community organizations. Please
                contact our partnership team at partners@vesta.com to discuss collaboration options.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/faqs" className="text-primary hover:text-primary-dark text-sm font-medium">
              View All FAQs
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Take the first step toward obtaining your ITIN and building your financial future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              Check Your Eligibility
            </Link>
            <Link
              href="https://calendly.com/darren-mms/30-minute-itin?month=2025-03"
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

