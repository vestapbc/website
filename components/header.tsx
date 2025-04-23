"use client"

import { useState } from "react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="py-6 px-4 md:px-10 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <span className="font-serif text-3xl text-primary tracking-wide">Vesta</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/itin-services" className="nav-link">
            ITIN Services
          </Link>
          <Link href="/for-partners" className="nav-link">
            For Partners
          </Link>
          <Link href="/about-us" className="nav-link">
            Meet Us
          </Link>
        </nav>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden mt-4 py-4 border-t border-gray-200">
          <nav className="flex flex-col space-y-4">
            <Link href="/itin-services" className="nav-link">
              ITIN Services
            </Link>
            <Link href="/for-partners" className="nav-link">
              For Partners
            </Link>
            <Link href="/about-us" className="nav-link">
              Meet Us
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}

