import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
const getCompany = (slug: string) => {
  return {
    slug,
    name: "NVIDIA",
    logo: "/placeholder.svg?height=100&width=100",
    description:
      "NVIDIA pioneered the art and science of visual computing. Its invention of the GPU transformed the PC from a tool for productivity into one for creativity and discovery. Enhanced visual graphics benefit everyone, from gamers and scientists to consumers and enterprise customers. NVIDIA is changing the way people work and play with modern technology.",
    milestones: [
      { year: "1993", event: "Founded" },
      { year: "1993", event: "Partnered" },
      { year: "1999", event: "IPO" },
    ],
    team: [
      { name: "Jensen Huang", role: "CEO" },
      { name: "Chris Malachowsky", role: "Co-founder" },
      { name: "Curtis Priem", role: "Co-founder" },
    ],
    content: [
      {
        type: "podcast",
        title: "NVIDIA: An Overnight Success Story 30 Years in the Making",
        subtitle: "Crucible Moments: EP8",
        image: "/placeholder.svg?height=400&width=400",
        link: "#",
      },
      {
        type: "podcast",
        title: "NVIDIA's Jim Fan on Robot Thinking",
        subtitle: "Hosted by Stephanie Zhan and Sonya Huang",
        image: "/placeholder.svg?height=400&width=400",
        link: "#",
      },
    ],
    tags: ["AI/ML", "ENTERPRISE"],
  }
}

export default function CompanyProfile({ params }: { params: { slug: string } }) {
  const company = getCompany(params.slug)

  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-6xl mx-auto">
        {/* Company Logo and Description */}
        <div className="mb-16">
          <Image src={company.logo || "/placeholder.svg"} alt={company.name} width={120} height={60} className="mb-8" />
          <h1 className="text-4xl md:text-5xl font-playfair mb-8">
            {company.name} pioneered the art and science of visual computing.
          </h1>
          <p className="text-xl max-w-3xl">{company.description}</p>
        </div>

        {/* External Links */}
        <div className="flex flex-wrap gap-4 mb-16">
          <Link
            href={`https://${company.slug.toLowerCase()}.com`}
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm"
          >
            {company.slug.toLowerCase()}.com
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 w-10 h-10"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </Link>
          <Link
            href="#"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 w-10 h-10"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </Link>
        </div>

        {/* Milestones and Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="uppercase text-sm font-medium mb-4">Milestones</h2>
            <ul className="space-y-2">
              {company.milestones.map((milestone, index) => (
                <li key={index} className="flex">
                  <span className="font-medium mr-2">Founded {milestone.year}</span>
                  <span>{milestone.event}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="uppercase text-sm font-medium mb-4">Team</h2>
            <ul className="space-y-2">
              {company.team.map((member, index) => (
                <li key={index}>
                  <Link href="#" className="hover:underline">
                    {member.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {company.content.map((item, index) => (
            <div key={index} className="card relative aspect-video">
              <div className="card-tag">{item.type}</div>
              <div className="read-link">Listen</div>
              <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-playfair">{item.title}</h3>
                <p className="text-sm mt-1">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-16">
          {company.tags.map((tag, index) => (
            <Link key={index} href="#" className="bg-black text-white text-xs px-4 py-2 rounded-full">
              {tag}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

