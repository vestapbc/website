import Image from "next/image"
import Link from "next/link"

// Sample stories data
const stories = [
  {
    id: 1,
    title: "LangChain's Harrison Chase on AI Agents",
    type: "podcast",
    image: "/placeholder.svg?height=400&width=400",
    action: "listen",
    author: "Hosted by Sonya Huang and Pat Grady",
  },
  {
    id: 2,
    title: "AI's $600B Question",
    type: "perspective",
    image: "/placeholder.svg?height=400&width=400",
    action: "read",
    author: "By David Cahn",
  },
  {
    id: 3,
    title: "Generative AI's Act Two",
    type: "perspective",
    image: "/placeholder.svg?height=400&width=400",
    action: "read",
    author: "By Sonya Huang, Pat Grady and Carl S.L.",
  },
  {
    id: 4,
    title: "NVIDIA: An Overnight Success Story 30 Years in the Making",
    type: "podcast",
    image: "/placeholder.svg?height=400&width=400",
    action: "listen",
    author: "Crucible Moments: EP8",
  },
  {
    id: 5,
    title: "Watershed: Climate Awakenings at Scale",
    type: "spotlight",
    image: "/placeholder.svg?height=400&width=400",
    action: "read",
    author: "",
  },
  {
    id: 6,
    title: "Delivering Instacart's Next Chapter",
    type: "spotlight",
    image: "/placeholder.svg?height=400&width=400",
    action: "read",
    author: "Fidji Simo tackles the grocery shopping ecosystem",
  },
  {
    id: 7,
    title: "The Arc Product-Market Fit Framework",
    type: "perspective",
    image: "/placeholder.svg?height=400&width=400",
    action: "read",
    author: "",
  },
  {
    id: 8,
    title: "Replicate: Painting the Town AI",
    type: "spotlight",
    image: "/placeholder.svg?height=400&width=400",
    action: "read",
    author: "",
  },
  {
    id: 9,
    title: "An outsider's path to financial inclusion",
    type: "spotlight",
    image: "/placeholder.svg?height=400&width=400",
    action: "read",
    author: "",
  },
  {
    id: 10,
    title: "AI 50: Companies of the Future",
    type: "perspective",
    image: "/placeholder.svg?height=400&width=400",
    action: "read",
    author: "Konstantine Buhler on the 2024 AI list",
  },
  {
    id: 11,
    title: "Augmenting Human Intellect, No Code Required",
    type: "spotlight",
    image: "/placeholder.svg?height=400&width=400",
    action: "read",
    author: "Notion is growing an enduring business by nurturing the creative community",
  },
]

export default function StoriesPage() {
  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <h1 className="text-5xl md:text-7xl font-playfair text-center mb-16">STORIES</h1>

      {/* Filter tabs */}
      <div className="flex overflow-x-auto pb-4 mb-8 border-b border-gray-200">
        <button className="bg-primary text-white px-4 py-1 text-sm mr-4 whitespace-nowrap">All Stories</button>
        <button className="text-sm mr-4 whitespace-nowrap">Podcasts</button>
        <button className="text-sm mr-4 whitespace-nowrap">Spotlights</button>
        <button className="text-sm mr-4 whitespace-nowrap">Perspectives</button>
        <button className="text-sm mr-4 whitespace-nowrap">Arc</button>
      </div>

      {/* Stories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stories.map((story) => (
          <Link href={`/stories/${story.id}`} key={story.id} className="card relative group">
            <div className="card-tag">{story.type}</div>
            <div className="read-link">{story.action}</div>
            <div className="relative aspect-square">
              <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
                <h3 className="text-xl font-playfair">{story.title}</h3>
                {story.author && <p className="text-sm mt-1">{story.author}</p>}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Newsletter Section */}
      <section className="py-16 border-t border-gray-200 mt-16">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-playfair mb-4">Get the best stories from the Vesta community.</h2>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button type="submit" className="bg-black text-white px-4 py-2 text-sm uppercase tracking-wider">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}

