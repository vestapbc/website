"use client"

import { useState } from "react"
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
    <div className="min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair mb-8">Say Hello!</h1>
        <p className="text-xl max-w-3xl mb-12">
          Have questions? Want to chat? We'd love to hear from you! Our friendly team is here to help with anything you
          need.
        </p>

        {/* Contact Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-playfair mb-6">Send Us A Message</h2>

            {isSubmitted ? (
              <div className="bg-primary/10 border border-primary p-6 rounded-sm">
                <h3 className="text-xl font-medium text-primary mb-2">Thank You!</h3>
                <p>We got your message! We'll write back to you very soon!</p>
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
                    placeholder="What's your name?"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                    placeholder="Where can we email you back?"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    What's This About?
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                    placeholder="What do you want to talk about?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 focus:border-primary focus:outline-none"
                    placeholder="Tell us how we can help you!"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors flex items-center"
                >
                  {isSubmitting ? (
                    <>Sending your message...</>
                  ) : (
                    <>
                      Send Your Message <Send size={16} className="ml-2" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-playfair mb-6">How To Reach Us</h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Email Us</h3>
                  <p className="text-sm mb-1">We check our emails all day:</p>
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
                  <p className="text-sm mb-1">We love to chat on the phone:</p>
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
                    Our friendly office is at:
                    <br />
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
                  <h3 className="font-medium mb-1">When We're Here</h3>
                  <p className="text-sm">Monday - Friday: 9:00 AM - 6:00 PM (New York time)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

