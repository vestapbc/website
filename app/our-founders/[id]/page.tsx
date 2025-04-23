import Link from "next/link"
import Image from "next/image"

// This would typically come from a database or API
const getFounder = (id: string) => {
  return {
    id,
    name: "Emma Chen",
    role: "SEED/EARLY",
    image: "/placeholder.svg?height=600&width=600",
    quote: '"Innovation is seeing what everybody has seen and thinking what nobody has thought."',
    backstory: `I learned from my parents, a scientist and an artist, a lot about creative problem-solving. I became fascinated with technology at an early age and built my first app when I was 15. After studying computer science at MIT, I worked at several startups before founding NOVA, a platform that uses AI to personalize educational content.

    While at university I spent a summer as a research assistant at a lab and realized that a lot of really interesting scientific discoveries were not making it to market. I remember seeing cutting-edge research just sitting on the shelf for lack of commercialization know-how.

    I didn't know at the time that this was my superpower: identifying these gaps between academic research and commercial applications. That's what got me here, the ability to bridge these worlds and build companies that transform theoretical breakthroughs into practical solutions.`,
    lookout: `I'm an entrepreneur at heart so I get really passionate about applications that can solve everyday problems in novel ways. That's what gets me excited to invest in companies like Quantum Health and Nexus.

    I'm quite excited about the highest density of AI talent in Europe which is the critical ingredient for the region to become a key player in this new paradigm. The ecosystem here is also really maturing and coming to understand that they need to be building on cutting-edge technology instead of playing catch-up with the US. And there is also a second generation of people who have seen the startup movie before and are really world class. I really enjoy bringing this expertise to entrepreneurs to help them compete on the world stage.

    If you are one of my founders and I ask you, "who really influenced your business?"—I want to be that person.`,
    personalSide: "PRIVATE PILOT / WEEKEND COOKING / SAILING / CLASSICAL MUSIC",
    companies: [
      {
        name: "NOVA",
        description: "NOVA is a platform that uses AI to personalize educational content for K-12 students.",
        stage: "Pre-seed/Seed",
        founders: "Emma Chen, Alex Thompson",
      },
    ],
  }
}

export default function FounderProfile({ params }: { params: { id: string } }) {
  const founder = getFounder(params.id)

  return (
    <div className="min-h-screen">
      <div className="py-12 px-4 md:px-10 border-b border-gray-200">
        <h1 className="text-5xl md:text-7xl font-playfair text-center">{founder.name.toUpperCase()}</h1>
        <p className="text-center uppercase tracking-wider mt-2">{founder.role}</p>

        <div className="flex justify-center mt-8 space-x-4">
          <Link
            href="https://linkedin.com"
            className="w-8 h-8 rounded-full border border-black flex items-center justify-center"
          >
            <span className="sr-only">LinkedIn</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
          <Link
            href="https://twitter.com"
            className="w-8 h-8 rounded-full border border-black flex items-center justify-center"
          >
            <span className="sr-only">Twitter</span>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 md:px-10">
        <div className="relative aspect-square">
          <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
        </div>

        <div className="flex items-center">
          <blockquote className="text-xl md:text-2xl font-playfair italic">{founder.quote}</blockquote>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 px-4 md:px-10 border-t border-gray-200">
        <div>
          <h2 className="uppercase text-sm font-medium mb-4">Backstory</h2>
          <div className="space-y-4">
            <p className="text-sm">{founder.backstory}</p>
          </div>
        </div>

        <div>
          <h2 className="uppercase text-sm font-medium mb-4">On the Lookout For</h2>
          <div className="space-y-4">
            <p className="text-sm">{founder.lookout}</p>
          </div>
        </div>
      </div>

      <div className="py-8 px-4 md:px-10 border-t border-gray-200 text-center">
        <h2 className="uppercase text-sm font-medium mb-4">Personal Side</h2>
        <p className="text-sm font-mono">{founder.personalSide}</p>
      </div>

      <div className="py-12 px-4 md:px-10 border-t border-gray-200">
        <h2 className="text-3xl font-playfair text-center mb-12">PRESS & MEDIA</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-primary text-white p-6 aspect-square flex flex-col justify-end">
            <h3 className="text-xl font-medium">NOVA raises $5.2M</h3>
            <p className="text-sm mt-2">led by Vesta to build AI-powered educational platform</p>
          </div>
        </div>
      </div>

      <div className="py-12 px-4 md:px-10 border-t border-gray-200">
        <h2 className="text-3xl font-playfair text-center mb-12">COMPANIES</h2>
        <h3 className="text-xl uppercase mb-6 text-center">CURRENT COMPANIES</h3>

        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 px-4 text-xs uppercase font-medium">Company Name</th>
              <th className="text-left py-2 px-4 text-xs uppercase font-medium">Short Description</th>
              <th className="text-left py-2 px-4 text-xs uppercase font-medium">Current Stage</th>
              <th className="text-left py-2 px-4 text-xs uppercase font-medium">Founders</th>
            </tr>
          </thead>
          <tbody>
            {founder.companies.map((company, index) => (
              <tr key={index} className="border-b border-gray-200">
                <td className="py-4 px-4 uppercase">{company.name}</td>
                <td className="py-4 px-4 text-sm">{company.description}</td>
                <td className="py-4 px-4 text-sm">{company.stage}</td>
                <td className="py-4 px-4 text-sm">{company.founders}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

