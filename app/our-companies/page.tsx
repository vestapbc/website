import Link from "next/link"

// Sample companies data
const companies = [
  {
    id: "nvidia",
    name: "NVIDIA",
    description: "A leader in computing and graphics processing that powers AI and science.",
    color: "bg-black",
    textColor: "text-white",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "reddit",
    name: "reddit",
    description: "The front page of the internet.",
    color: "bg-red-600",
    textColor: "text-white",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "instacart",
    name: "Instacart",
    description: "Delivering groceries from your favorite stores.",
    color: "bg-white",
    textColor: "text-black",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "youtube",
    name: "YouTube",
    description: "The world's leading video platform.",
    color: "bg-blue-500",
    textColor: "text-white",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "apple",
    name: "Apple",
    description: "Revolutionized personal technology with the Mac, iPod, iPhone, and iPad.",
    color: "bg-gray-100",
    textColor: "text-black",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "dropbox",
    name: "Dropbox",
    description: "Simplifying the way people work together.",
    color: "bg-blue-600",
    textColor: "text-white",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "doordash",
    name: "DoorDash",
    description: "Connecting customers with their favorite local businesses.",
    color: "bg-red-500",
    textColor: "text-white",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "airbnb",
    name: "Airbnb",
    description: "A global travel community that offers magical end-to-end trips.",
    color: "bg-green-700",
    textColor: "text-white",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "linear",
    name: "Linear",
    description: "The issue tracking tool you'll enjoy using.",
    color: "bg-gray-900",
    textColor: "text-white",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "The faster, safer way to send and receive money online.",
    color: "bg-amber-500",
    textColor: "text-white",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "block",
    name: "Block",
    description: "Building accessible financial tools for everyone.",
    color: "bg-black",
    textColor: "text-white",
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    description: "The Data Cloud company.",
    color: "bg-black",
    textColor: "text-white",
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function OurCompaniesPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <h1 className="text-5xl md:text-7xl font-playfair text-center mb-16">OUR COMPANIES</h1>

      {/* Filter tabs */}
      <div className="flex overflow-x-auto pb-4 mb-8 border-b border-gray-200">
        <button className="bg-primary text-white px-4 py-1 text-sm mr-4 whitespace-nowrap">All Companies</button>
        <button className="text-sm mr-4 whitespace-nowrap">AI</button>
        <button className="text-sm mr-4 whitespace-nowrap">Consumer</button>
        <button className="text-sm mr-4 whitespace-nowrap">Enterprise</button>
        <button className="text-sm mr-4 whitespace-nowrap">Fintech</button>
        <button className="text-sm mr-4 whitespace-nowrap">Healthcare</button>
        <button className="text-sm mr-4 whitespace-nowrap">Crypto</button>
      </div>

      {/* Companies grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {companies.map((company) => (
          <Link
            href={`/our-companies/${company.id}`}
            key={company.id}
            className={`relative aspect-square ${company.color} ${company.textColor} p-6 flex flex-col justify-between group hover:opacity-90 transition-opacity`}
          >
            <div className="font-bold text-xl">{company.name}</div>
            <p className="text-sm">{company.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

