"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VestaIcon } from "./vesta-icon"
import Link from "next/link"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => {
    setOpen(false)
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white">
        <nav className="flex flex-col gap-6 mt-10">
          <Link
            href="#solution"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 text-lg font-medium hover:bg-gray-50 rounded-md"
          >
            <VestaIcon name="search" size={24} />
            Solution
          </Link>
          <Link
            href="#partners"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 text-lg font-medium hover:bg-gray-50 rounded-md"
          >
            <VestaIcon name="home" size={24} />
            For Partners
          </Link>
          <Link
            href="#testimonials"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 text-lg font-medium hover:bg-gray-50 rounded-md"
          >
            <VestaIcon name="pin" size={24} />
            Success Stories
          </Link>
          <Link
            href="#faq"
            onClick={handleLinkClick}
            className="flex items-center gap-3 px-4 py-3 text-lg font-medium hover:bg-gray-50 rounded-md"
          >
            <VestaIcon name="file" size={24} />
            FAQ
          </Link>
          <div className="border-t border-gray-200 my-4"></div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white w-full" onClick={handleLinkClick}>
            Partner With Us
            <VestaIcon name="arrow" size={16} className="ml-2" />
          </Button>
          <Button
            variant="outline"
            className="border-black hover:bg-gray-100 text-black w-full"
            onClick={handleLinkClick}
          >
            Schedule a Demo
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
