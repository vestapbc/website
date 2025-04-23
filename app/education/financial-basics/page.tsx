import Link from "next/link"
import { Book, PlayCircle, Download, ArrowRight } from "lucide-react"

export default function FinancialBasicsPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-playfair mb-6">Financial Education Series</h1>
          <p className="text-xl max-w-3xl">
            Build a strong financial foundation with our comprehensive educational resources designed for ITIN holders.
          </p>
        </div>

        {/* Course Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Banking Basics */}
          <div className="border border-gray-200 rounded-sm p-6">
            <div className="flex items-start mb-4">
              <Book className="text-primary mr-3" size={24} />
              <div>
                <h2 className="text-xl font-playfair mb-2">Banking Basics</h2>
                <p className="text-sm text-gray-600 mb-4">Learn about banking services and account options.</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm">
                <PlayCircle className="text-primary mr-2" size={16} />
                <span>Types of Bank Accounts</span>
              </li>
              <li className="flex items-center text-sm">
                <PlayCircle className="text-primary mr-2" size={16} />
                <span>Opening Your First Account</span>
              </li>
              <li className="flex items-center text-sm">
                <PlayCircle className="text-primary mr-2" size={16} />
                <span>Online Banking Safety</span>
              </li>
            </ul>
            <Link
              href="/education/banking-basics"
              className="inline-flex items-center text-primary hover:text-primary-dark text-sm"
            >
              Start Learning <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* Credit Building */}
          <div className="border border-gray-200 rounded-sm p-6">
            <div className="flex items-start mb-4">
              <Book className="text-primary mr-3" size={24} />
              <div>
                <h2 className="text-xl font-playfair mb-2">Credit Building</h2>
                <p className="text-sm text-gray-600 mb-4">Understand credit and how to build it with an ITIN.</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm">
                <PlayCircle className="text-primary mr-2" size={16} />
                <span>Understanding Credit Scores</span>
              </li>
              <li className="flex items-center text-sm">
                <PlayCircle className="text-primary mr-2" size={16} />
                <span>Building Credit with an ITIN</span>
              </li>
              <li className="flex items-center text-sm">
                <PlayCircle className="text-primary mr-2" size={16} />
                <span>Credit Cards and Loans</span>
              </li>
            </ul>
            <Link
              href="/education/credit-building"
              className="inline-flex items-center text-primary hover:text-primary-dark text-sm"
            >
              Start Learning <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>

          {/* Financial Planning */}
          <div className="border border-gray-200 rounded-sm p-6">
            <div className="flex items-start mb-4">
              <Book className="text-primary mr-3" size={24} />
              <div>
                <h2 className="text-xl font-playfair mb-2">Financial Planning</h2>
                <p className="text-sm text-gray-600 mb-4">Plan for your financial future and set achievable goals.</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-sm">
                <PlayCircle className="text-primary mr-2" size={16} />
                <span>Budgeting Basics</span>
              </li>
              <li className="flex items-center text-sm">
                <PlayCircle className="text-primary mr-2" size={16} />
                <span>Saving Strategies</span>
              </li>
              <li className="flex items-center text-sm">
                <PlayCircle className="text-primary mr-2" size={16} />
                <span>Investment Options</span>
              </li>
            </ul>
            <Link
              href="/education/financial-planning"
              className="inline-flex items-center text-primary hover:text-primary-dark text-sm"
            >
              Start Learning <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-cream p-8 rounded-sm mb-16">
          <h2 className="text-3xl font-playfair mb-6">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link
              href="/downloads/financial-glossary.pdf"
              className="bg-white p-6 rounded-sm hover:shadow-md transition-shadow"
            >
              <Download className="text-primary mb-3" size={24} />
              <h3 className="font-medium mb-2">Financial Glossary</h3>
              <p className="text-sm text-gray-600">Essential financial terms explained</p>
            </Link>
            <Link
              href="/downloads/budget-template.xlsx"
              className="bg-white p-6 rounded-sm hover:shadow-md transition-shadow"
            >
              <Download className="text-primary mb-3" size={24} />
              <h3 className="font-medium mb-2">Budget Template</h3>
              <p className="text-sm text-gray-600">Excel spreadsheet for tracking expenses</p>
            </Link>
            <Link
              href="/downloads/savings-calculator.pdf"
              className="bg-white p-6 rounded-sm hover:shadow-md transition-shadow"
            >
              <Download className="text-primary mb-3" size={24} />
              <h3 className="font-medium mb-2">Savings Calculator</h3>
              <p className="text-sm text-gray-600">Plan your savings goals</p>
            </Link>
            <Link href="/tools" className="bg-white p-6 rounded-sm hover:shadow-md transition-shadow">
              <Download className="text-primary mb-3" size={24} />
              <h3 className="font-medium mb-2">Financial Tools</h3>
              <p className="text-sm text-gray-600">Interactive calculators and planners</p>
            </Link>
          </div>
        </div>

        {/* Upcoming Workshops */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair mb-6">Upcoming Workshops</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 p-6 rounded-sm">
              <div className="text-primary text-sm mb-2">VIRTUAL WORKSHOP</div>
              <h3 className="text-xl font-playfair mb-2">Introduction to Banking with an ITIN</h3>
              <p className="text-sm text-gray-600 mb-4">March 15, 2025 • 2:00 PM EST</p>
              <Link
                href="/workshops/intro-banking"
                className="inline-flex items-center text-primary hover:text-primary-dark text-sm"
              >
                Register Now <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
            <div className="border border-gray-200 p-6 rounded-sm">
              <div className="text-primary text-sm mb-2">IN-PERSON EVENT</div>
              <h3 className="text-xl font-playfair mb-2">Credit Building Workshop</h3>
              <p className="text-sm text-gray-600 mb-4">March 20, 2025 • 6:00 PM EST</p>
              <Link
                href="/workshops/credit-building"
                className="inline-flex items-center text-primary hover:text-primary-dark text-sm"
              >
                Register Now <ArrowRight size={16} className="ml-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="bg-black text-white p-8 rounded-sm">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-playfair mb-4">Stay Updated</h2>
            <p className="text-sm mb-6">
              Subscribe to our newsletter for financial tips, workshop announcements, and educational resources.
            </p>
            <form className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-sm text-black"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary-dark px-6 py-2 rounded-sm text-sm uppercase tracking-wider transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

