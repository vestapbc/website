import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileMenu } from "./mobile-menu"
import { LanguageSwitcher } from "./language-switcher"

interface HeaderProps {
  activePage?: "home" | "services" | "about" | "faq" | "contact"
  minimal?: boolean
}

export function Header({ activePage = "home", minimal = false }: HeaderProps) {
  if (minimal) {
    return (
      <header className="py-4">
        <div className="container flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image src="/logo.svg" alt="Vesta Logo" width={180} height={60} className="h-10 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/services"
              className={`text-sm font-normal ${activePage === "services" ? "text-orange-500" : "hover:text-orange-500"} transition-colors`}
            >
              Services
            </Link>
            <Link
              href="/about"
              className={`text-sm font-normal ${activePage === "about" ? "text-orange-500" : "hover:text-orange-500"} transition-colors`}
            >
              About Us
            </Link>
            <Link
              href="/faq"
              className={`text-sm font-normal ${activePage === "faq" ? "text-orange-500" : "hover:text-orange-500"} transition-colors`}
            >
              FAQ
            </Link>
            <Link
              href="/application"
              className={`text-sm font-normal underline decoration-orange-500 decoration-2 underline-offset-4 font-medium`}
            >
              Get Started
            </Link>
          </nav>
          <MobileMenu activePage={activePage} />
        </div>
      </header>
    )
  }

  return (
    <header className="border-b border-gray-200">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image src="/logo.svg" alt="Vesta Logo" width={180} height={60} className="h-10 w-auto" />
        </Link>
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="/services"
            className={`text-sm font-normal ${activePage === "services" ? "text-orange-500" : "hover:text-orange-500"} transition-colors`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`text-sm font-normal ${activePage === "about" ? "text-orange-500" : "hover:text-orange-500"} transition-colors`}
          >
            About Us
          </Link>
          <Link
            href="/faq"
            className={`text-sm font-normal ${activePage === "faq" ? "text-orange-500" : "hover:text-orange-500"} transition-colors`}
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            className={`text-sm font-normal ${activePage === "contact" ? "text-orange-500" : "hover:text-orange-500"} transition-colors`}
          >
            Contact
          </Link>
          <LanguageSwitcher />
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Get Started
            <span className="ml-1 border-b border-white"></span>
          </Button>
        </nav>
        <MobileMenu activePage={activePage} />
      </div>
    </header>
  )
}
