"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { VestaIcon } from "./vesta-icon"

export function StickyCta() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show the button when scrolled down 500px
      const scrolled = window.scrollY > 500
      setIsVisible(scrolled)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
      }`}
    >
      <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg rounded-full px-6 py-6">
        Partner With Us
        <VestaIcon name="arrow" size={16} className="ml-2" />
      </Button>
    </div>
  )
}
