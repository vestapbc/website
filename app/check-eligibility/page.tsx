"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react"

export default function CheckEligibilityPage() {
  const [step, setStep] = useState(1)
  const [answers, setAnswers] = useState({
    hasSSN: null,
    needsToFile: null,
    hasValidID: null,
  })

  const handleAnswer = (question, answer) => {
    setAnswers({ ...answers, [question]: answer })
    setStep(step + 1)
  }

  const isEligible = answers.hasSSN === false && answers.needsToFile === true && answers.hasValidID === true

  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-8">Check Your ITIN Eligibility</h1>
        <p className="text-center mb-12">Answer a few simple questions to determine if you're eligible for an ITIN.</p>

        <div className="bg-white border border-gray-200 rounded-sm p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-playfair mb-6">Do you have a Social Security Number (SSN)?</h2>
              <p className="text-sm mb-8">
                If you have a valid Social Security Number, you don't need an ITIN. ITINs are for individuals who are
                not eligible for a Social Security Number.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleAnswer("hasSSN", true)}
                  className="bg-white border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  Yes, I have an SSN
                </button>
                <button
                  onClick={() => handleAnswer("hasSSN", false)}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  No, I don't have an SSN
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-playfair mb-6">
                Do you need to file a U.S. tax return or have U.S. income?
              </h2>
              <p className="text-sm mb-8">
                ITINs are primarily for individuals who need to file U.S. tax returns or have U.S. source income that
                requires tax reporting.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleAnswer("needsToFile", true)}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  Yes, I need to file taxes
                </button>
                <button
                  onClick={() => handleAnswer("needsToFile", false)}
                  className="bg-white border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  No, I don't need to file
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-playfair mb-6">Do you have a valid identification document?</h2>
              <p className="text-sm mb-8">
                To apply for an ITIN, you need a valid passport or other government-issued ID that verifies your
                identity and foreign status.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleAnswer("hasValidID", true)}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  Yes, I have valid ID
                </button>
                <button
                  onClick={() => handleAnswer("hasValidID", false)}
                  className="bg-white border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  No, I don't have valid ID
                </button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="text-center">
              {isEligible ? (
                <div>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="text-green-600" size={32} />
                    </div>
                  </div>
                  <h2 className="text-2xl font-playfair mb-4">You're Eligible for an ITIN!</h2>
                  <p className="text-sm mb-8">
                    Based on your answers, you're eligible to apply for an Individual Taxpayer Identification Number.
                    Let's get started with your application.
                  </p>
                  <Link
                    href="/itin-application"
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors inline-flex items-center"
                  >
                    Start Your Application <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              ) : (
                <div>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                      <AlertCircle className="text-amber-600" size={32} />
                    </div>
                  </div>
                  <h2 className="text-2xl font-playfair mb-4">Additional Information Needed</h2>
                  <p className="text-sm mb-8">
                    Based on your answers, we need more information to determine your eligibility. Please schedule a
                    call with one of our ITIN specialists for personalized assistance.
                  </p>
                  <Link
                    href="https://calendly.com/darren-mms/30-minute-itin?month=2025-03"
                    className="bg-black hover:bg-black-soft text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors inline-block"
                  >
                    Schedule a Call
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* Progress Indicator */}
          {step < 4 && (
            <div className="mt-8">
              <div className="flex justify-between mb-2">
                <span className="text-xs">Start</span>
                <span className="text-xs">Complete</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-primary h-2 rounded-full" style={{ width: `${(step / 3) * 100}%` }}></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

