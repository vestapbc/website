"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { VestaIcon } from "./vesta-icon"
import { CheckCircle } from "lucide-react"

export function PartnerApplicationForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would send the form data to your backend
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
          Apply to Partner Program
          <VestaIcon name="arrow" size={16} className="ml-2" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        {!isSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-2xl">Partner Application</DialogTitle>
              <DialogDescription>
                Fill out the form below to apply to Vesta's partner program. Our team will review your application and
                contact you within 2 business days.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-6 py-4">
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="First Name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Last Name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organization">Organization Name</Label>
                  <Input id="organization" placeholder="Organization Name" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="website">Website</Label>
                  <Input id="website" type="url" placeholder="https://example.com" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="organizationType">Organization Type</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select organization type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="financial">Financial Institution</SelectItem>
                      <SelectItem value="community">Community Organization</SelectItem>
                      <SelectItem value="professional">Professional Services</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clientsServed">Estimated Number of Immigrant Clients Served Annually</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0-50">0-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="201-500">201-500</SelectItem>
                      <SelectItem value="501-1000">501-1,000</SelectItem>
                      <SelectItem value="1000+">1,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="interest">Why are you interested in partnering with Vesta?</Label>
                  <Textarea
                    id="interest"
                    placeholder="Tell us about your interest..."
                    className="min-h-[100px]"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hearAbout">How did you hear about Vesta?</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select option" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="search">Search Engine</SelectItem>
                      <SelectItem value="social">Social Media</SelectItem>
                      <SelectItem value="referral">Referral</SelectItem>
                      <SelectItem value="event">Event</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-orange-500 hover:bg-orange-600">
                  Submit Application
                </Button>
              </div>
            </form>
          </>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center text-center space-y-6">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-medium">Application Submitted!</h3>
              <p className="text-gray-600">
                Thank you for your interest in partnering with Vesta. Our team will review your application and contact
                you within 2 business days.
              </p>
            </div>
            <Button onClick={() => setOpen(false)} className="bg-orange-500 hover:bg-orange-600">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
