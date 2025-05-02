"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { X, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

interface MobileMenuProps {
  activePage?: "home" | "services" | "about" | "faq" | "contact"
}

export function MobileMenu({ activePage = "home" }: MobileMenuProps) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <Link href="/" onClick={() => setOpen(false)}>
              <Image src="/logo.svg" alt="Vesta Logo" width={120} height={40} className="h-8 w-auto" />
            </Link>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </Button>
          </div>
          <nav className="flex-1 overflow-auto py-6 px-4">
            <ul className="space-y-6">
              <li>
                <Link
                  href="/"
                  onClick={() => setOpen(false)}
                  className={`text-lg font-normal ${
                    activePage === "home" ? "text-orange-500" : "text-black hover:text-orange-500"
                  } transition-colors`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  onClick={() => setOpen(false)}
                  className={`text-lg font-normal ${
                    activePage === "services" ? "text-orange-500" : "text-black hover:text-orange-500"
                  } transition-colors`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  onClick={() => setOpen(false)}
                  className={`text-lg font-normal ${
                    activePage === "about" ? "text-orange-500" : "text-black hover:text-orange-500"
                  } transition-colors`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  onClick={() => setOpen(false)}
                  className={`text-lg font-normal ${
                    activePage === "faq" ? "text-orange-500" : "text-black hover:text-orange-500"
                  } transition-colors`}
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className={`text-lg font-normal ${
                    activePage === "contact" ? "text-orange-500" : "text-black hover:text-orange-500"
                  } transition-colors`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t">
            <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={() => setOpen(false)}>
              Get Started
              <span className="ml-1 border-b border-white"></span>
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
