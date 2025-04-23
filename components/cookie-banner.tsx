"use client"

import { useState, useEffect } from "react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem("cookiesAccepted")
    if (!hasAcceptedCookies) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 bg-black text-white p-4 max-w-sm rounded-sm shadow-lg z-50">
      <p className="text-sm mb-3">By navigating this website you agree to our cookie policy.</p>
      <div className="flex space-x-2">
        <button onClick={acceptCookies} className="bg-white text-black text-xs px-4 py-1 rounded-sm">
          Accept
        </button>
        <button onClick={declineCookies} className="border border-white text-white text-xs px-4 py-1 rounded-sm">
          Decline
        </button>
      </div>
    </div>
  )
}

