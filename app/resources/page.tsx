import Link from "next/link"
import { FileText, Book, Video, Download, ArrowRight } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-playfair text-center mb-8">Resources</h1>
        <p className="text-xl text-center max-w-3xl mx-auto mb-16">
          Access our comprehensive library of guides, tools, and educational materials to help you navigate your
          financial journey.
        </p>

        {/* Featured Resources */}
        <section className="mb-16">
          <h2 className="text-3xl font-playfair mb-8">Featured Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-sm p-6">
              <FileText className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-playfair mb-2">ITIN Application Guide</h3>
              <p className="text-sm mb-4">
                A step-by-step guide to understanding and completing your ITIN application successfully.
              </p>
              <Link
                href="/guides/itin-application"
                className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium"
              >
                Read Guide <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="border border-gray-200 rounded-sm p-6">
              <Book className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-playfair mb-2">Financial Education Series</h3>
              <p className="text-sm mb-4">Learn about banking, credit building, and financial planning basics.</p>
              <Link
                href="/education/financial-basics"
                className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium"
              >
                Start Learning <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="border border-gray-200 rounded-sm p-6">
              <Video className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-playfair mb-2">Video Tutorials</h3>
              <p className="text-sm mb-4">Watch our video series on document preparation and financial literacy.</p>
              <Link
                href="/tutorials"
                className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium"
              >
                Watch Videos <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Document Templates */}
        <section className="mb-16">
          <h2 className="text-3xl font-playfair mb-8">Document Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-cream p-6 rounded-sm">
              <Download className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-playfair mb-2">Document Checklist</h3>
              <p className="text-sm mb-4">
                A comprehensive checklist of all documents needed for your ITIN application.
              </p>
              <Link
                href="/downloads/document-checklist.pdf"
                className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium"
              >
                Download PDF <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="bg-cream p-6 rounded-sm">
              <Download className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-playfair mb-2">Sample W-7 Form</h3>
              <p className="text-sm mb-4">
                View a sample completed W-7 form with detailed annotations and explanations.
              </p>
              <Link
                href="/downloads/sample-w7.pdf"
                className="inline-flex items-center text-primary hover:text-primary-dark text-sm font-medium"
              >
                Download PDF <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* Educational Content */}
        <section className="mb-16">
          <h2 className="text-3xl font-playfair mb-8">Educational Content</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Financial Basics */}
            <div className="space-y-4">
              <h3 className="text-xl font-playfair">Financial Basics</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/education/banking-basics" className="text-sm hover:text-primary">
                    Understanding Banking Basics
                  </Link>
                </li>
                <li>
                  <Link href="/education/credit-building" className="text-sm hover:text-primary">
                    Building Credit with an ITIN
                  </Link>
                </li>
                <li>
                  <Link href="/education/savings-strategies" className="text-sm hover:text-primary">
                    Savings Strategies
                  </Link>
                </li>
                <li>
                  <Link href="/education/budgeting" className="text-sm hover:text-primary">
                    Creating a Budget
                  </Link>
                </li>
              </ul>
            </div>

            {/* Tax Information */}
            <div className="space-y-4">
              <h3 className="text-xl font-playfair">Tax Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/education/tax-basics" className="text-sm hover:text-primary">
                    Tax Basics for ITIN Holders
                  </Link>
                </li>
                <li>
                  <Link href="/education/tax-credits" className="text-sm hover:text-primary">
                    Available Tax Credits
                  </Link>
                </li>
                <li>
                  <Link href="/education/filing-requirements" className="text-sm hover:text-primary">
                    Filing Requirements
                  </Link>
                </li>
                <li>
                  <Link href="/education/self-employment" className="text-sm hover:text-primary">
                    Self-Employment Taxes
                  </Link>
                </li>
              </ul>
            </div>

            {/* Business Resources */}
            <div className="space-y-4">
              <h3 className="text-xl font-playfair">Business Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/education/business-formation" className="text-sm hover:text-primary">
                    Business Formation Guide
                  </Link>
                </li>
                <li>
                  <Link href="/education/business-banking" className="text-sm hover:text-primary">
                    Business Banking Options
                  </Link>
                </li>
                <li>
                  <Link href="/education/business-credit" className="text-sm hover:text-primary">
                    Building Business Credit
                  </Link>
                </li>
                <li>
                  <Link href="/education/retirement-planning" className="text-sm hover:text-primary">
                    Retirement Planning
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Tools and Calculators */}
        <section className="mb-16">
          <h2 className="text-3xl font-playfair mb-8">Tools and Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/tools/tax-calculator"
              className="border border-gray-200 p-4 rounded-sm hover:border-primary transition-colors"
            >
              <h3 className="font-medium mb-2">Tax Calculator</h3>
              <p className="text-sm text-gray-600">Estimate your tax obligations</p>
            </Link>
            <Link
              href="/tools/savings-calculator"
              className="border border-gray-200 p-4 rounded-sm hover:border-primary transition-colors"
            >
              <h3 className="font-medium mb-2">Savings Calculator</h3>
              <p className="text-sm text-gray-600">Plan your savings goals</p>
            </Link>
            <Link
              href="/tools/retirement-calculator"
              className="border border-gray-200 p-4 rounded-sm hover:border-primary transition-colors"
            >
              <h3 className="font-medium mb-2">Retirement Calculator</h3>
              <p className="text-sm text-gray-600">Plan for retirement</p>
            </Link>
            <Link
              href="/tools/budget-planner"
              className="border border-gray-200 p-4 rounded-sm hover:border-primary transition-colors"
            >
              <h3 className="font-medium mb-2">Budget Planner</h3>
              <p className="text-sm text-gray-600">Create a personal budget</p>
            </Link>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-cream p-8 rounded-sm">
          <div className="max-w-xl mx-auto text-center">
            <h2 className="text-2xl font-playfair mb-4">Stay Informed</h2>
            <p className="text-sm mb-6">
              Subscribe to our newsletter for updates on ITIN regulations, financial tips, and new resources.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-2 text-sm uppercase tracking-wider transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </div>
    </div>
  )
}

