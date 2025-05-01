"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const [language, setLanguage] = useState("en")

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang)
    // In a real implementation, this would update the app's locale
    // and potentially redirect to a localized version of the current page
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className={`flex items-center gap-1 ${className}`}>
          <Globe className="h-4 w-4" />
          <span>{language === "en" ? "EN" : "ES"}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange("en")}>English</DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange("es")}>Español</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
