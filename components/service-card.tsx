import Image from "next/image"
import Link from "next/link"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  link: string
}

export function ServiceCard({ title, description, icon, link }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg group h-full">
      <div className="p-8 flex flex-col h-full">
        <div className="flex justify-start mb-6 transition-transform duration-300 group-hover:scale-110">
          <Image src={icon || "/placeholder.svg"} alt={title} width={64} height={64} />
        </div>
        <h3 className="text-2xl font-bold mb-3 text-left">{title}</h3>
        <p className="text-gray-700 mb-6 text-left flex-grow">{description}</p>
        <Link
          href={link}
          className="text-black font-medium inline-block group-hover:text-orange-500 transition-colors duration-300 mt-auto"
        >
          Learn more
          <span
            className="block h-0.5 bg-orange-500 mt-0.5 transition-all duration-300 group-hover:w-full"
            style={{ width: "80%" }}
          ></span>
        </Link>
      </div>
    </div>
  )
}
