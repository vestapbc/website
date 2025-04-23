import Image from "next/image"
import Link from "next/link"

// This would typically come from a database or API
const getEvent = (slug: string) => {
  return {
    slug,
    title: "AI Ascent 2024",
    description: "Vesta convened leaders in AI for a day of conversations, talks and demos.",
    author: "Team Vesta",
    date: "Published March 27, 2023",
    content: `On March 20, we hosted our second AI Ascent event in San Francisco, bringing together 100 leading founders and researchers in AI to discuss what partner Pat Grady calls, "the single greatest value creation opportunity mankind has ever known."

Partner Sonya Huang set the stage for how the promise of Generative AI is morphing into concrete applications as productivity gains is starting to come into focus. And partner Konstantine Buhler looked at how AI will infuse the companies of the future.

Over the course of the day we chatted with AI leaders including Sam Altman, CEO and Co-Founder of OpenAI, Mustafa Suleyman, CEO and Co-Founder of Inflection, Dario Amodei of Anthropic, Andrew Ng of AI Fund, CJ Desai of ServiceNow and (currently) independent researcher Andrej Karpathy. The talks ranged from the merits of large and small models, the rise of reasoning agents, the future of compute and the evolving AI ecosystem.

Below is a selection of highlights from the event (some sessions were off the record):`,
    videos: [
      {
        title: "The AI opportunity: Vesta Capital's AI Ascent 2024 opening remarks",
        thumbnail: "/placeholder.svg?height=400&width=600",
        url: "#",
      },
      {
        title: "What's next in AI",
        thumbnail: "/placeholder.svg?height=400&width=600",
        url: "#",
      },
    ],
    relatedTopics: ["#AI"],
    relatedArticles: [
      {
        title: "Generative AI's Act Two",
        type: "perspective",
        image: "/placeholder.svg?height=300&width=300",
        url: "#",
      },
      {
        title: "AI's $200B Question",
        type: "perspective",
        image: "/placeholder.svg?height=300&width=300",
        url: "#",
      },
      {
        title: "Bringing Generative AI to Healthcare",
        type: "perspective",
        image: "/placeholder.svg?height=300&width=300",
        url: "#",
      },
      {
        title: "Developer Tools 2.0",
        type: "perspective",
        image: "/placeholder.svg?height=300&width=300",
        url: "#",
      },
    ],
  }
}

export default function EventPage({ params }: { params: { slug: string } }) {
  const event = getEvent(params.slug)

  return (
    <div className="min-h-screen py-12 px-4 md:px-10">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-playfair mb-8">{event.title}</h1>

        <div className="mb-12">
          <p className="text-lg mb-4">{event.description}</p>
          <div className="text-sm text-muted-foreground">
            <span>By {event.author}</span>
            <span className="mx-2">•</span>
            <span>{event.date}</span>
          </div>
        </div>

        <div className="prose max-w-none mb-12">
          <p className="text-xl first-letter:text-5xl first-letter:font-playfair first-letter:mr-1 first-letter:float-left">
            {event.content.split("\n\n")[0]}
          </p>

          {event.content
            .split("\n\n")
            .slice(1)
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-playfair mb-6">Videos from AI Ascent 2024</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {event.videos.map((video, index) => (
              <div key={index} className="relative aspect-video">
                <Image src={video.thumbnail || "/placeholder.svg"} alt={video.title} fill className="object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="text-white text-sm">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm mt-4">
            You can also watch the videos on the AI Ascent 2024{" "}
            <Link href="#" className="underline">
              YouTube playlist
            </Link>
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-sm uppercase font-medium mb-4">Share</h2>
          <div className="flex space-x-2">
            <Link href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              <span className="sr-only">Facebook</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </Link>
            <Link href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </Link>
            <Link href="#" className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              <span className="sr-only">Email</span>
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-sm uppercase font-medium mb-4">Related Topics</h2>
          <div className="flex flex-wrap gap-2">
            {event.relatedTopics.map((topic, index) => (
              <Link key={index} href="#" className="bg-amber-300 text-black text-sm px-4 py-1 rounded-full">
                {topic}
              </Link>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-playfair mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {event.relatedArticles.map((article, index) => (
              <Link key={index} href={article.url} className="group">
                <div className="relative aspect-square mb-2">
                  <div className="absolute top-2 left-2 bg-black text-white text-xs uppercase px-2 py-1 rounded-sm">
                    {article.type}
                  </div>
                  <div className="absolute top-2 right-2 text-white text-xs uppercase">Read</div>
                  <Image src={article.image || "/placeholder.svg"} alt={article.title} fill className="object-cover" />
                </div>
                <h3 className="text-sm font-medium group-hover:underline">{article.title}</h3>
              </Link>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-center text-xl font-playfair mb-4">Join our mailing list</h2>
          <p className="text-center mb-6">Get the best stories from the Vesta community.</p>
          <form className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-grow px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-primary"
            />
            <button type="submit" className="bg-black text-white px-4 py-2 text-sm uppercase tracking-wider">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

