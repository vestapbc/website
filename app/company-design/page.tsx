import Image from "next/image"

export default function CompanyDesign() {
  return (
    <div className="min-h-screen">
      <section className="py-16 px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-5xl md:text-7xl font-playfair mb-8">Company Design</h1>
            <p className="text-lg">
              We've distilled five decades of company building experience into a discipline we call Company Design. It's
              a framework we use to help founders start, build and scale enduring companies.
            </p>
          </div>
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Company Design Illustration"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-10 border-t border-gray-200">
        <h2 className="text-4xl font-mono uppercase mb-12">EDGE</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Foundational Knowledge"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="text-xl font-medium mb-4">Foundational Knowledge</h3>
            <p className="text-sm mb-4">Discover the principles that give your company a competitive edge.</p>
            <h4 className="text-lg mb-2">Founder Story</h4>
            <p className="text-sm">What's an experience from your childhood that shaped you as a person?</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-10 border-t border-gray-200">
        <h2 className="text-4xl font-mono uppercase mb-12">FOUNDATIONAL</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative aspect-square bg-black rounded-full flex items-center justify-center">
            <h3 className="text-white text-2xl">Studio sessions</h3>
          </div>
          <div className="bg-primary text-white p-8">
            <h3 className="text-xl font-medium mb-4">Ampersand Library</h3>
            <p className="text-sm mb-6">
              Developed by the best product and design minds at Vesta, Ampersand is a comprehensive and definitive
              library of frameworks and tools for building exceptional products and experiences.
            </p>
            <div className="space-y-2">
              <div className="bg-white/10 text-sm py-1 px-3 rounded-full">Product Strategy</div>
              <div className="bg-white/10 text-sm py-1 px-3 rounded-full">Building Creative Products</div>
              <div className="bg-white/10 text-sm py-1 px-3 rounded-full">User Research</div>
              <div className="bg-white/10 text-sm py-1 px-3 rounded-full">Roadmap to Product</div>
              <div className="bg-white/10 text-sm py-1 px-3 rounded-full">Designing for Growth</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-10 border-t border-gray-200">
        <h2 className="text-4xl font-mono uppercase mb-12">POWERFUL COMMUNITY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-square">
            <Image src="/placeholder.svg?height=600&width=600" alt="Community Member" fill className="object-cover" />
            <button className="absolute bottom-4 right-4 bg-white rounded-full w-8 h-8 flex items-center justify-center">
              <span className="sr-only">Add</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 0V12" stroke="black" strokeWidth="2" />
                <path d="M0 6H12" stroke="black" strokeWidth="2" />
              </svg>
            </button>
          </div>

          <div className="relative aspect-square">
            <Image src="/placeholder.svg?height=600&width=600" alt="Community Event" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/80">
              <h3 className="text-sm font-medium">Company Design in Action</h3>
              <p className="text-xs">January 2025, San Francisco</p>
            </div>
          </div>

          <div className="relative aspect-square bg-black text-white p-6 flex flex-col justify-between">
            <h3 className="text-xl">Ampersand Realtalk</h3>
            <p className="text-sm">Founders sharing insights and drive growth together.</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 md:px-10 border-t border-gray-200">
        <h2 className="text-4xl font-mono uppercase mb-12">OUTLIER MINDSET</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative aspect-square">
            <Image src="/placeholder.svg?height=600&width=600" alt="Outlier Mindset" fill className="object-cover" />
          </div>

          <div className="relative aspect-square">
            <Image
              src="/placeholder.svg?height=600&width=600"
              alt="Vision"
              fill
              className="object-cover rounded-full"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white">
                <h3 className="text-xl font-medium">Vision</h3>
                <h3 className="text-xl font-medium">Grit</h3>
                <h3 className="text-xl font-medium">Growth</h3>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-2">
            <div className="relative">
              <Image src="/placeholder.svg?height=200&width=200" alt="Founder 1" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/placeholder.svg?height=200&width=200" alt="Founder 2" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/placeholder.svg?height=200&width=200" alt="Founder 3" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/placeholder.svg?height=200&width=200" alt="Founder 4" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/placeholder.svg?height=200&width=200" alt="Founder 5" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/placeholder.svg?height=200&width=200" alt="Founder 6" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/placeholder.svg?height=200&width=200" alt="Founder 7" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/placeholder.svg?height=200&width=200" alt="Founder 8" fill className="object-cover" />
            </div>
            <div className="relative">
              <Image src="/placeholder.svg?height=200&width=200" alt="Founder 9" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

