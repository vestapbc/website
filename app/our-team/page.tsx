import Image from "next/image"
import Link from "next/link"

// Sample team data
const team = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Managing Partner",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Leadership",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Partner",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Leadership",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Partner",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Leadership",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Partner",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Leadership",
  },
  {
    id: 5,
    name: "Emily Taylor",
    role: "Principal",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Investment",
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Principal",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Investment",
  },
  {
    id: 7,
    name: "Sophia Kim",
    role: "Principal",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Investment",
  },
  {
    id: 8,
    name: "Robert Garcia",
    role: "VP of Marketing",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Operations",
  },
  {
    id: 9,
    name: "Olivia Martinez",
    role: "VP of Finance",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Operations",
  },
  {
    id: 10,
    name: "Daniel Lee",
    role: "Head of Talent",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Operations",
  },
  {
    id: 11,
    name: "Ava Thompson",
    role: "Associate",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Investment",
  },
  {
    id: 12,
    name: "Noah Brown",
    role: "Associate",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Investment",
  },
]

export default function OurTeamPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <h1 className="text-5xl md:text-7xl font-playfair text-center mb-16">OUR TEAM</h1>

      {/* Filter tabs */}
      <div className="flex overflow-x-auto pb-4 mb-8 border-b border-gray-200">
        <button className="bg-primary text-white px-4 py-1 text-sm mr-4 whitespace-nowrap">All Team</button>
        <button className="text-sm mr-4 whitespace-nowrap">Leadership</button>
        <button className="text-sm mr-4 whitespace-nowrap">Investment</button>
        <button className="text-sm mr-4 whitespace-nowrap">Operations</button>
      </div>

      {/* Team grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {team.map((member) => (
          <Link href={`/our-team/${member.id}`} key={member.id} className="card aspect-square relative group">
            <div className="card-tag">{member.tag}</div>
            <div className="read-link">Read</div>
            <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-2xl font-playfair">{member.name}</h3>
              <p className="text-sm mt-1">{member.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

