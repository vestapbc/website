import Link from "next/link"
import { FileText, CheckCircle, Download } from "lucide-react"

export default function ITINApplicationGuidePage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-playfair mb-6">ITIN Application Guide</h1>
          <p className="text-xl mb-6">
            Everything you need to know about applying for an Individual Taxpayer Identification Number (ITIN).
          </p>
          <div className="flex items-center text-sm text-gray-600">
            <FileText className="mr-2" size={16} />
            <span>Last updated: March 2025</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-cream p-6 rounded-sm mb-12">
          <h2 className="text-xl font-playfair mb-4">In This Guide</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li>
              <Link href="#what-is-itin" className="text-primary hover:text-primary-dark">
                What is an ITIN?
              </Link>
            </li>
            <li>
              <Link href="#eligibility" className="text-primary hover:text-primary-dark">
                Eligibility Requirements
              </Link>
            </li>
            <li>
              <Link href="#documents" className="text-primary hover:text-primary-dark">
                Required Documents
              </Link>
            </li>
            <li>
              <Link href="#application-process" className="text-primary hover:text-primary-dark">
                Application Process
              </Link>
            </li>
            <li>
              <Link href="#common-mistakes" className="text-primary hover:text-primary-dark">
                Common Mistakes to Avoid
              </Link>
            </li>
            <li>
              <Link href="#after-applying" className="text-primary hover:text-primary-dark">
                After You Apply
              </Link>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="prose max-w-none">
          <section id="what-is-itin" className="mb-12">
            <h2 className="text-3xl font-playfair mb-4">What is an ITIN?</h2>
            <p>
              An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the Internal
              Revenue Service (IRS). It's specifically for taxpayers who are not eligible to obtain a Social Security
              Number (SSN) but need to comply with U.S. tax laws.
            </p>
            <div className="bg-primary/10 p-6 rounded-sm my-6">
              <h3 className="text-xl font-playfair mb-3">Key Points About ITINs</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                  <span>Only used for federal tax reporting purposes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                  <span>Does not provide work authorization or immigration status</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                  <span>Valid for federal tax purposes only</span>
                </li>
              </ul>
            </div>
          </section>

          <section id="eligibility" className="mb-12">
            <h2 className="text-3xl font-playfair mb-4">Eligibility Requirements</h2>
            <p>You may need an ITIN if you are:</p>
            <ul className="list-disc pl-6 space-y-2 mb-6">
              <li>A nonresident alien required to file a U.S. tax return</li>
              <li>A U.S. resident alien filing a U.S. tax return</li>
              <li>A dependent or spouse of a U.S. citizen/resident alien</li>
              <li>A dependent or spouse of a nonresident alien visa holder</li>
            </ul>
          </section>

          <section id="documents" className="mb-12">
            <h2 className="text-3xl font-playfair mb-4">Required Documents</h2>
            <p className="mb-6">To apply for an ITIN, you'll need:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 p-6 rounded-sm">
                <h3 className="text-xl font-playfair mb-3">Identity Documents</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    <span>Passport (most common)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    <span>National ID card</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    <span>Birth certificate (for dependents)</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 p-6 rounded-sm">
                <h3 className="text-xl font-playfair mb-3">Supporting Documents</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    <span>Completed Form W-7</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    <span>Tax return (unless exception applies)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                    <span>Proof of foreign status</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section id="application-process" className="mb-12">
            <h2 className="text-3xl font-playfair mb-4">Application Process</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-playfair mb-2">Step 1: Prepare Your Documents</h3>
                <p>Gather all required documents and complete Form W-7.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-playfair mb-2">Step 2: Submit Your Application</h3>
                <p>Submit through Vesta's secure platform or mail to the IRS.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-playfair mb-2">Step 3: Track Your Application</h3>
                <p>Monitor the status through your Vesta dashboard.</p>
              </div>
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-xl font-playfair mb-2">Step 4: Receive Your ITIN</h3>
                <p>Usually takes 4-6 weeks during non-peak season.</p>
              </div>
            </div>
          </section>

          <section id="common-mistakes" className="mb-12">
            <h2 className="text-3xl font-playfair mb-4">Common Mistakes to Avoid</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">✕</span>
                <div>
                  <h3 className="font-medium mb-1">Submitting Incorrect Documents</h3>
                  <p className="text-sm">Ensure all documents meet IRS requirements and are current.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">✕</span>
                <div>
                  <h3 className="font-medium mb-1">Incomplete Form W-7</h3>
                  <p className="text-sm">Double-check all required fields are filled out correctly.</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-primary font-bold mr-2">✕</span>
                <div>
                  <h3 className="font-medium mb-1">Missing Tax Return</h3>
                  <p className="text-sm">Include your tax return unless you qualify for an exception.</p>
                </div>
              </li>
            </ul>
          </section>

          <section id="after-applying" className="mb-12">
            <h2 className="text-3xl font-playfair mb-4">After You Apply</h2>
            <p className="mb-6">Once your application is submitted:</p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                <span>Track your application status through your Vesta dashboard</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                <span>Receive notifications about your application progress</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-primary mr-2 mt-1" size={16} />
                <span>Get your ITIN number by mail once approved</span>
              </li>
            </ul>
          </section>
        </div>

        {/* Resources */}
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-3xl font-playfair mb-6">Additional Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/downloads/itin-checklist.pdf"
              className="flex items-center border border-gray-200 p-6 rounded-sm hover:border-primary transition-colors"
            >
              <Download className="text-primary mr-4" size={24} />
              <div>
                <h3 className="font-medium mb-1">ITIN Document Checklist</h3>
                <p className="text-sm text-gray-600">Download PDF checklist</p>
              </div>
            </Link>
            <Link
              href="/downloads/form-w7-sample.pdf"
              className="flex items-center border border-gray-200 p-6 rounded-sm hover:border-primary transition-colors"
            >
              <Download className="text-primary mr-4" size={24} />
              <div>
                <h3 className="font-medium mb-1">Sample Form W-7</h3>
                <p className="text-sm text-gray-600">View annotated sample</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-cream p-8 rounded-sm mt-12">
          <h2 className="text-2xl font-playfair mb-4">Need Help?</h2>
          <p className="mb-6">Our ITIN specialists are here to assist you with your application.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors text-center"
            >
              Contact Us
            </Link>
            <Link
              href="https://calendly.com/darren-mms/30-minute-itin?month=2025-03"
              className="bg-black hover:bg-black-soft text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors text-center"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

