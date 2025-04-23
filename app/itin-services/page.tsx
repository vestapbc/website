import Link from "next/link"
import { FileText, RefreshCcw, Shield, Activity } from "lucide-react"

export default function ITINServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-8">ITIN Services</h1>
          <p className="text-xl max-w-3xl">
            We provide ITIN application services to help individuals obtain their Individual Taxpayer Identification
            Number securly, quickly and efficiently.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-sm">
              <FileText className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-playfair mb-4">ITIN Application Assistance</h3>
              <p className="text-sm mb-6">
                Support for your new ITIN application, from document preparation to submission.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Form W-7 preparation</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>ID verification</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Application submission</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm">
              <RefreshCcw className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-playfair mb-4">ITIN Renewal</h3>
              <p className="text-sm mb-6">
                Assistance with renewing your existing ITIN if it has expired or is about to expire.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Expiration verification</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Renewal application</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Status tracking</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm">
              <Shield className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-playfair mb-4">Document Certification</h3>
              <p className="text-sm mb-6">
                As an IRS-certified Acceptance Agent, we can certify your identity documents.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Passport verification</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Identity document review</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Official certification</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm">
              <Activity className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-playfair mb-4">Application Tracking</h3>
              <p className="text-sm mb-6">
                Monitor the status of your ITIN application through our secure online portal.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Real-time updates</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Secure online dashboard</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Email notifications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vesta */}
      <section className="py-16 px-4 md:px-10 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair mb-12">Why Choose Vesta for Your ITIN Needs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-playfair mb-3">Expert Guidance</h3>
              <p className="text-sm">
                Our team of ITIN specialists has helped thousands of individuals successfully obtain their ITINs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-3">Streamlined Process</h3>
              <p className="text-sm">
                Our digital platform simplifies the ITIN application process, reducing paperwork and saving you time.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-3">Secure & Confidential</h3>
              <p className="text-sm">
                Your personal information is protected with bank-level security and strict confidentiality protocols.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ITIN Application Process */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-4">The ITIN Application Process</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Our streamlined process makes obtaining an ITIN simple and stress-free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
              <div className="text-sm border-b border-black inline-block pb-1 mb-6">1</div>
              <div>
                <h3 className="text-2xl font-playfair mb-4">Check Eligibility</h3>
                <p className="text-sm">
                  Complete our simple eligibility questionnaire to determine if you qualify for an ITIN.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
              <div className="text-sm border-b border-black inline-block pb-1 mb-6">2</div>
              <div>
                <h3 className="text-2xl font-playfair mb-4">Prepare Documents</h3>
                <p className="text-sm">
                  Our system guides you through gathering and preparing all necessary documentation.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
              <div className="text-sm border-b border-black inline-block pb-1 mb-6">3</div>
              <div>
                <h3 className="text-2xl font-playfair mb-4">Submit Application</h3>
                <p className="text-sm">
                  We review your documents and submit your application to the IRS on your behalf.
                </p>
              </div>
            </div>
            <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
              <div className="text-sm border-b border-black inline-block pb-1 mb-6">4</div>
              <div>
                <h3 className="text-2xl font-playfair mb-4">Receive Your ITIN</h3>
                <p className="text-sm">Track your application status and receive your ITIN once approved by the IRS.</p>
              </div>
            </div>
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

