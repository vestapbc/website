"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { VestaIcon } from "./vesta-icon"

export function RoiCalculator() {
  const [clientsPerMonth, setClientsPerMonth] = useState(20)
  const [conversionRate, setConversionRate] = useState(70)
  const [revenuePerClient, setRevenuePerClient] = useState(150)
  const [partnerShare, setPartnerShare] = useState(25)

  // Calculate monthly and annual revenue
  const monthlyClients = Math.round(clientsPerMonth * (conversionRate / 100))
  const monthlyRevenue = monthlyClients * revenuePerClient * (partnerShare / 100)
  const annualRevenue = monthlyRevenue * 12

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
      <h3 className="text-xl font-bold mb-6 flex items-center">
        <VestaIcon name="dollar" size={24} className="mr-2" />
        Partner Revenue Calculator
      </h3>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="clients-per-month">Potential ITIN clients per month</Label>
            <span className="font-medium">{clientsPerMonth}</span>
          </div>
          <Slider
            id="clients-per-month"
            min={1}
            max={100}
            step={1}
            value={[clientsPerMonth]}
            onValueChange={(value) => setClientsPerMonth(value[0])}
            className="py-4"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="conversion-rate">Conversion rate (%)</Label>
            <span className="font-medium">{conversionRate}%</span>
          </div>
          <Slider
            id="conversion-rate"
            min={10}
            max={100}
            step={1}
            value={[conversionRate]}
            onValueChange={(value) => setConversionRate(value[0])}
            className="py-4"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="revenue-per-client">Revenue per client ($)</Label>
            <span className="font-medium">${revenuePerClient}</span>
          </div>
          <Slider
            id="revenue-per-client"
            min={50}
            max={300}
            step={10}
            value={[revenuePerClient]}
            onValueChange={(value) => setRevenuePerClient(value[0])}
            className="py-4"
          />
        </div>

        <div className="space-y-2">
          <div className="flex justify-between">
            <Label htmlFor="partner-share">Your revenue share (%)</Label>
            <span className="font-medium">{partnerShare}%</span>
          </div>
          <Slider
            id="partner-share"
            min={15}
            max={35}
            step={5}
            value={[partnerShare]}
            onValueChange={(value) => setPartnerShare(value[0])}
            className="py-4"
          />
        </div>

        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Monthly Revenue</p>
              <p className="text-2xl font-bold text-orange-500">${monthlyRevenue.toLocaleString()}</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="text-sm text-gray-600">Annual Revenue</p>
              <p className="text-2xl font-bold text-orange-500">${annualRevenue.toLocaleString()}</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">
            Schedule a Consultation
            <VestaIcon name="arrow" size={16} className="ml-2" />
          </Button>
        </div>
      </div>
    </div>
  )
}
