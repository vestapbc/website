import Image from "next/image"
import Link from "next/link"
import { PlayCircle, Clock, Download } from "lucide-react"

export default function TutorialsPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-playfair mb-6">Video Tutorials</h1>
          <p className="text-xl max-w-3xl">
            Learn about ITIN applications, document preparation, and financial literacy through our comprehensive video
            series.
          </p>
        </div>

        {/* Featured Tutorial */}
        <div className="mb-16">
          <h2 className="text-2xl font-playfair mb-6">Featured Tutorial</h2>
          <div className="relative aspect-video rounded-sm overflow-hidden">
            <Image
              src="/placeholder.svg?height=720&width=1280"
              alt="ITIN Application Overview"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <PlayCircle className="text-white w-16 h-16" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white">
              <h3 className="text-2xl font-playfair mb-2">ITIN Application: Step-by-Step Guide</h3>
              <div className="flex items-center text-sm">
                <Clock className="mr-2" size={16} />
                <span>15 minutes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tutorial Categories */}
        <div className="mb-16">
          <h2 className="text-2xl font-playfair mb-6">Tutorial Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* ITIN Basics */}
            <div className="space-y-6">
              <h3 className="text-xl font-playfair">ITIN Basics</h3>
              <div className="space-y-4">
                <Link href="/tutorials/what-is-itin" className="block group">
                  <div className="relative aspect-video rounded-sm overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg?height=360&width=640"
                      alt="What is an ITIN?"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="text-white w-12 h-12" />
                    </div>
                  </div>
                  <h4 className="font-medium mb-1">What is an ITIN?</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2" size={14} />
                    <span>5 minutes</span>
                  </div>
                </Link>
                <Link href="/tutorials/who-needs-itin" className="block group">
                  <div className="relative aspect-video rounded-sm overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg?height=360&width=640"
                      alt="Who Needs an ITIN?"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="text-white w-12 h-12" />
                    </div>
                  </div>
                  <h4 className="font-medium mb-1">Who Needs an ITIN?</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2" size={14} />
                    <span>7 minutes</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Document Preparation */}
            <div className="space-y-6">
              <h3 className="text-xl font-playfair">Document Preparation</h3>
              <div className="space-y-4">
                <Link href="/tutorials/required-documents" className="block group">
                  <div className="relative aspect-video rounded-sm overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg?height=360&width=640"
                      alt="Required Documents"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="text-white w-12 h-12" />
                    </div>
                  </div>
                  <h4 className="font-medium mb-1">Required Documents</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2" size={14} />
                    <span>10 minutes</span>
                  </div>
                </Link>
                <Link href="/tutorials/form-w7-guide" className="block group">
                  <div className="relative aspect-video rounded-sm overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg?height=360&width=640"
                      alt="Form W-7 Guide"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="text-white w-12 h-12" />
                    </div>
                  </div>
                  <h4 className="font-medium mb-1">Form W-7 Guide</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2" size={14} />
                    <span>12 minutes</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Financial Literacy */}
            <div className="space-y-6">
              <h3 className="text-xl font-playfair">Financial Literacy</h3>
              <div className="space-y-4">
                <Link href="/tutorials/banking-basics" className="block group">
                  <div className="relative aspect-video rounded-sm overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg?height=360&width=640"
                      alt="Banking Basics"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="text-white w-12 h-12" />
                    </div>
                  </div>
                  <h4 className="font-medium mb-1">Banking Basics</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2" size={14} />
                    <span>8 minutes</span>
                  </div>
                </Link>
                <Link href="/tutorials/credit-building" className="block group">
                  <div className="relative aspect-video rounded-sm overflow-hidden mb-2">
                    <Image
                      src="/placeholder.svg?height=360&width=640"
                      alt="Credit Building"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <PlayCircle className="text-white w-12 h-12" />
                    </div>
                  </div>
                  <h4 className="font-medium mb-1">Credit Building</h4>
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="mr-2" size={14} />
                    <span>10 minutes</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Downloadable Resources */}
        <div className="bg-cream p-8 rounded-sm mb-16">
          <h2 className="text-2xl font-playfair mb-6">Downloadable Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/downloads/tutorial-workbook.pdf"
              className="bg-white p-6 rounded-sm hover:shadow-md transition-shadow"
            >
              <Download className="text-primary mb-3" size={24} />
              <h3 className="font-medium mb-2">Tutorial Workbook</h3>
              <p className="text-sm text-gray-600">Follow along with our video tutorials</p>
            </Link>
            <Link
              href="/downloads/document-checklist.pdf"
              className="bg-white p-6 rounded-sm hover:shadow-md transition-shadow"
            >
              <Download className="text-primary mb-3" size={24} />
              <h3 className="font-medium mb-2">Document Checklist</h3>
              <p className="text-sm text-gray-600">Comprehensive list of required documents</p>
            </Link>
            <Link
              href="/downloads/financial-glossary.pdf"
              className="bg-white p-6 rounded-sm hover:shadow-md transition-shadow"
            >
              <Download className="text-primary mb-3" size={24} />
              <h3 className="font-medium mb-2">Financial Glossary</h3>
              <p className="text-sm text-gray-600">Key terms and definitions</p>
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center">
          <h2 className="text-2xl font-playfair mb-4">Need Additional Help?</h2>
          <p className="text-sm mb-6">Our ITIN specialists are here to assist you with any questions.</p>
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

