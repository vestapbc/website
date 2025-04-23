import { CheckCircle, Users, Building, Briefcase } from "lucide-react"

export default function ForPartnersPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="py-12 px-4 md:px-10 flex-grow">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair mb-8">Let's Work Together!</h1>
          <p className="text-xl max-w-3xl mb-12">
            Do you help people in your community? We can team up to make getting special tax numbers easier for everyone
            you care about!
          </p>

          {/* Partner Types */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="border border-gray-200 p-8 rounded-sm">
              <Users className="text-primary mb-4" size={40} />
              <h2 className="text-2xl font-playfair mb-4">For Community Helpers</h2>
              <p className="text-sm mb-6">
                If you help people in your community, we can work together to help them get their special tax numbers
                too!
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  <span>Your own special website with your name on it</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  <span>We'll teach your team everything they need to know</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  <span>Helpful guides for the people you help</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  <span>A special helper just for your questions</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium"
              >
                Tell Me More
              </a>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm">
              <Building className="text-primary mb-4" size={40} />
              <h2 className="text-2xl font-playfair mb-4">For Workplaces</h2>
              <p className="text-sm mb-6">
                Help the people who work with you get their special tax numbers so they can file taxes and use banks!
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  <span>A special website just for your workplace</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  <span>Help lots of people at once</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  <span>Money lessons for your workers</span>
                </li>
                <li className="flex items-center text-sm">
                  <CheckCircle className="text-primary mr-2" size={16} />
                  <span>A special helper just for your company</span>
                </li>
              </ul>
              <a
                href="/contact"
                className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium"
              >
                Tell Me More
              </a>
            </div>
          </div>

          {/* Partner Benefits - Updated with friendly tone */}
          <div className="border border-gray-200 p-8 rounded-sm mb-16">
            <h2 className="text-3xl font-playfair mb-8 text-center">What You Get When We Team Up</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Briefcase className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-playfair mb-3">Do More Good Things</h3>
                <p className="text-sm">Help more people without needing more computers or special tools!</p>
              </div>
              <div className="text-center">
                <Users className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-playfair mb-3">Make A Bigger Difference</h3>
                <p className="text-sm">Help people get tax money back, use banks, and save for the future!</p>
              </div>
              <div className="text-center">
                <Building className="text-primary mx-auto mb-4" size={40} />
                <h3 className="text-xl font-playfair mb-3">We'll Help You Help Others</h3>
                <p className="text-sm">We'll teach you everything and be there when you have questions!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section - Full Bleed */}
      <div className="w-full bg-black text-white py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-10 text-center">
          <h2 className="text-4xl font-normal mb-4">Ready To Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            We're here to help you every step of the way. Let's start your journey together!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/check-eligibility"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              DO I NEED AN ITIN?
            </a>
            <a
              href="https://calendly.com/darren-mms/30-minute-itin?month=2025-04"
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              SCHEDULE A CALL
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

