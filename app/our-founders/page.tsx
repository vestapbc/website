import Link from "next/link"
import Image from "next/image"

// Sample founder data
const founders = [
  {
    id: 1,
    name: "Emma Chen",
    role: "NOVA",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Spotlight",
  },
  {
    id: 2,
    name: "Michael Rivera",
    role: "MATRIX",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Spotlight",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "ELEVATE",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Spotlight",
  },
  {
    id: 4,
    name: "James Wilson",
    role: "ZOOM",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Spotlight",
  },
  {
    id: 5,
    name: "Olivia Martinez",
    role: "PRISM",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Spotlight",
  },
  {
    id: 6,
    name: "Daniel Lee",
    role: "VANTA",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Spotlight",
  },
  {
    id: 7,
    name: "Sophia Kim",
    role: "IMAGINE SPACE",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Spotlight",
  },
  {
    id: 8,
    name: "Alex Thompson",
    role: "DOORWAY",
    image: "/placeholder.svg?height=400&width=400",
    tag: "Spotlight",
  },
]

export default function OurFounders() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <h1 className="text-5xl md:text-7xl font-playfair text-center mb-16">OUR FOUNDERS</h1>

      {/* Filter tabs */}
      <div className="flex overflow-x-auto pb-4 mb-8 border-b border-gray-200">
        <button className="bg-primary text-white px-4 py-1 text-sm mr-4 whitespace-nowrap">All Founders</button>
        <button className="text-sm mr-4 whitespace-nowrap">AI</button>
        <button className="text-sm mr-4 whitespace-nowrap">Consumer</button>
        <button className="text-sm mr-4 whitespace-nowrap">Deep Tech</button>
        <button className="text-sm mr-4 whitespace-nowrap">Enterprise</button>
        <button className="text-sm mr-4 whitespace-nowrap">Fintech</button>
        <button className="text-sm mr-4 whitespace-nowrap">Healthcare</button>
      </div>

      {/* Founders grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {founders.map((founder) => (
          <Link href={`/our-founders/${founder.id}`} key={founder.id} className="card aspect-square relative group">
            <div className="card-tag">{founder.tag}</div>
            <div className="read-link">Read</div>
            <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-2xl font-playfair">{founder.name}</h3>
              <p className="text-sm mt-1">{founder.role}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

