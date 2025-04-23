import Link from "next/link"
import { FileText, RefreshCcw, Shield, Activity } from "lucide-react"

export default function ITINServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 px-4 md:px-10">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl mb-8">Your Special Tax Number</h1>
          <p className="text-xl max-w-3xl">
            We help you get something called an "ITIN" - it's just a special number that helps you with taxes. We make
            it super easy!
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border border-gray-200 p-8 rounded-sm">
              <FileText className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-playfair mb-4">Getting Your Special Number</h3>
              <p className="text-sm mb-6">We'll help you get your very own special tax number from start to finish!</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>We'll help you fill out the form</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>We'll check your ID (but you keep it!)</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>We'll send everything to the right place</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm">
              <RefreshCcw className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-playfair mb-4">Renewing Your Number</h3>
              <p className="text-sm mb-6">If your special number is getting old, we can help you get a fresh one!</p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>We'll check if your number needs updating</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>We'll help you with the renewal form</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>We'll let you know how it's going</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm">
              <Shield className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-playfair mb-4">Checking Your Papers</h3>
              <p className="text-sm mb-6">
                We're special helpers who can check your papers so you don't have to mail them away!
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>We can check your passport</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>We can check your ID cards</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>We'll make sure everything is right</span>
                </li>
              </ul>
            </div>

            <div className="border border-gray-200 p-8 rounded-sm">
              <Activity className="text-primary mb-4" size={40} />
              <h3 className="text-2xl font-playfair mb-4">Watching Your Progress</h3>
              <p className="text-sm mb-6">
                You can see how your special number is coming along on our easy-to-use website!
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>See updates right away</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Check from your computer or phone</span>
                </li>
                <li className="flex items-center text-sm">
                  <span className="w-4 h-4 rounded-full border border-primary mr-2 flex items-center justify-center">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                  </span>
                  <span>Get emails about important updates</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Vesta */}
      <section className="py-16 px-4 md:px-10 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair mb-12">Why People Like Our Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-playfair mb-3">We Know What We're Doing</h3>
              <p className="text-sm">
                We've helped thousands of people get their special tax numbers. We're really good at it!
              </p>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-3">We Make It Super Easy</h3>
              <p className="text-sm">Our website makes everything simple. No complicated forms or confusing steps!</p>
            </div>
            <div>
              <h3 className="text-xl font-playfair mb-3">We Keep Everything Safe</h3>
              <p className="text-sm">
                We protect all your information like a superhero. Your secrets are safe with us!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ITIN Application Process */}
      <section className="py-16 px-4 md:px-10 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-playfair text-center mb-4">How We Help You</h2>
          <p className="text-center max-w-2xl mx-auto mb-12">
            Getting your special tax number is as easy as 1-2-3-4 with our friendly helpers!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
              <div className="text-sm border-b border-black inline-block pb-1 mb-6">1</div>
              <div>
                <h3 className="text-2xl font-playfair mb-4">Do I Need One?</h3>
                <p className="text-sm">We'll ask you some easy questions to see if you need a special tax number.</p>
              </div>
            </div>
            <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
              <div className="text-sm border-b border-black inline-block pb-1 mb-6">2</div>
              <div>
                <h3 className="text-2xl font-playfair mb-4">Getting Your Papers Ready</h3>
                <p className="text-sm">We'll help you find all the papers you need. We'll explain everything!</p>
              </div>
            </div>
            <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
              <div className="text-sm border-b border-black inline-block pb-1 mb-6">3</div>
              <div>
                <h3 className="text-2xl font-playfair mb-4">Sending It All In</h3>
                <p className="text-sm">We'll check your papers and send everything to the right place for you.</p>
              </div>
            </div>
            <div className="border border-gray-200 p-8 flex flex-col min-h-[300px]">
              <div className="text-sm border-b border-black inline-block pb-1 mb-6">4</div>
              <div>
                <h3 className="text-2xl font-playfair mb-4">Getting Your Number</h3>
                <p className="text-sm">
                  You can check how it's going anytime, and we'll let you know when your special number arrives!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 md:px-10 bg-black text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-playfair mb-4">Ready To Get Started?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            We're here to help you every step of the way. Let's start your journey together!
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/check-eligibility"
              className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              DO I NEED AN ITIN?
            </Link>
            <Link
              href="/contact"
              className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-sm text-sm uppercase tracking-wider transition-colors"
            >
              SCHEDULE A CALL
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

