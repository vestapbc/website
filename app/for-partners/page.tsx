import Link from "next/link"
import { CheckCircle, Users, Building, Briefcase } from "lucide-react"

export default function ForPartnersPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair mb-8">Partner With Us</h1>
        <p className="text-xl max-w-3xl mb-12">
          Join forces with Vesta to provide essential ITIN services to your community or employees, enhancing your
          impact and support.
        </p>

        {/* Partner Types */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="border border-gray-200 p-8 rounded-sm">
            <Users className="text-primary mb-4" size={40} />
            <h2 className="text-2xl font-playfair mb-4">For Nonprofit Organizations</h2>
            <p className="text-sm mb-6">
              Partner with Vesta to expand your service offerings and provide valuable ITIN application assistance to
              your community members.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm">
                <CheckCircle className="text-primary mr-2" size={16} />
                <span>Co-branded ITIN application portal</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="text-primary mr-2" size={16} />
                <span>Training for your staff</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="text-primary mr-2" size={16} />
                <span>Educational resources for your community</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="text-primary mr-2" size={16} />
                <span>Dedicated partner support</span>
              </li>
            </ul>
            <Link
              href="/nonprofit-partners"
              className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium"
            >
              Learn More
            </Link>
          </div>

          <div className="border border-gray-200 p-8 rounded-sm">
            <Building className="text-primary mb-4" size={40} />
            <h2 className="text-2xl font-playfair mb-4">For Employers</h2>
            <p className="text-sm mb-6">
              Support your workforce by providing access to ITIN services, enabling them to properly file taxes and
              access financial services.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center text-sm">
                <CheckCircle className="text-primary mr-2" size={16} />
                <span>Employer-specific ITIN portal</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="text-primary mr-2" size={16} />
                <span>Bulk application processing</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="text-primary mr-2" size={16} />
                <span>Employee financial education resources</span>
              </li>
              <li className="flex items-center text-sm">
                <CheckCircle className="text-primary mr-2" size={16} />
                <span>Dedicated account manager</span>
              </li>
            </ul>
            <Link
              href="/employer-partners"
              className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Partner Benefits */}
        <div className="bg-cream p-8 rounded-sm mb-16">
          <h2 className="text-3xl font-playfair mb-8 text-center">Partner Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Briefcase className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-playfair mb-3">Expanded Services</h3>
              <p className="text-sm">
                Offer valuable ITIN services to your community or employees without additional infrastructure.
              </p>
            </div>
            <div className="text-center">
              <Users className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-playfair mb-3">Increased Impact</h3>
              <p className="text-sm">
                Help more individuals access tax benefits, financial services, and build economic stability.
              </p>
            </div>
            <div className="text-center">
              <Building className="text-primary mx-auto mb-4" size={40} />
              <h3 className="text-xl font-playfair mb-3">Dedicated Support</h3>
              <p className="text-sm">Receive training, resources, and ongoing support from our team of ITIN experts.</p>
            </div>
          </div>
        </div>

        {/* Partner Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair mb-8 text-center">What Our Partners Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-6 rounded-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-medium">Elena Torres</h4>
                  <p className="text-sm text-gray-600">Community Outreach Director, Immigrant Support Network</p>
                </div>
              </div>
              <p className="text-sm">
                "Our partnership with Vesta has transformed how we serve our community. We've been able to help hundreds
                of individuals obtain their ITINs, opening doors to financial services and tax benefits they couldn't
                access before."
              </p>
            </div>
            <div className="border border-gray-200 p-6 rounded-sm">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                <div>
                  <h4 className="font-medium">Marcus Johnson</h4>
                  <p className="text-sm text-gray-600">HR Director, Harvest Farms</p>
                </div>
              </div>
              <p className="text-sm">
                "As an agricultural employer, we wanted to support our workforce by helping them obtain ITINs. Vesta
                made the process incredibly simple for both our HR team and our employees. The dedicated support has
                been invaluable."
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-black text-white p-8 rounded-sm text-center">
          <h2 className="text-3xl font-playfair mb-4">Become a Partner Today</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Join our network of partners making a difference in their communities through accessible ITIN services.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/partner-application"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              Apply to Partner
            </Link>
            <Link
              href="https://calendly.com/darren-mms/30-minute-itin?month=2025-03"
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

