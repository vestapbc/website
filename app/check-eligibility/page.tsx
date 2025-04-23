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
        <h1 className="text-4xl md:text-5xl font-playfair text-center mb-8">Do I Need A Special Tax Number?</h1>
        <p className="text-center mb-12">
          Let's answer a few easy questions to see if you need what's called an "ITIN"!
        </p>

        <div className="bg-white border border-gray-200 rounded-sm p-8">
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-playfair mb-6">Do you have a Social Security card?</h2>
              <p className="text-sm mb-8">
                This is a card with nine numbers that many people in America use for work and taxes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleAnswer("hasSSN", true)}
                  className="bg-white border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  Yes, I have one
                </button>
                <button
                  onClick={() => handleAnswer("hasSSN", false)}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  No, I don't have one
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-2xl font-playfair mb-6">
                Do you need to file taxes in America or get paid in America?
              </h2>
              <p className="text-sm mb-8">
                This means you earn money in the United States and might need to tell the government about it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleAnswer("needsToFile", true)}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  Yes, I do
                </button>
                <button
                  onClick={() => handleAnswer("needsToFile", false)}
                  className="bg-white border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  No, I don't
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-2xl font-playfair mb-6">Do you have an ID card or passport?</h2>
              <p className="text-sm mb-8">
                This is a special card or booklet with your picture that shows who you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => handleAnswer("hasValidID", true)}
                  className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  Yes, I have one
                </button>
                <button
                  onClick={() => handleAnswer("hasValidID", false)}
                  className="bg-white border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-sm text-sm transition-colors flex-1"
                >
                  No, I don't have one
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
                  <h2 className="text-2xl font-playfair mb-4">Yes! You Need A Special Tax Number!</h2>
                  <p className="text-sm mb-8">
                    Based on your answers, you would benefit from having an ITIN (that's the special tax number we help
                    with). We can help you get one!
                  </p>
                  <Link
                    href="/itin-services"
                    className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors inline-flex items-center"
                  >
                    Learn How We Can Help <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              ) : (
                <div>
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                      <AlertCircle className="text-amber-600" size={32} />
                    </div>
                  </div>
                  <h2 className="text-2xl font-playfair mb-4">We Need To Talk More!</h2>
                  <p className="text-sm mb-8">
                    Based on your answers, we need to chat a bit more to see if you need a special tax number. Our
                    friendly helpers would love to talk with you!
                  </p>
                  <Link
                    href="/contact"
                    className="bg-black hover:bg-black-soft text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors inline-block"
                  >
                    Talk To A Friendly Helper
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
                <span className="text-xs">Finish</span>
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

