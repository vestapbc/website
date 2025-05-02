import Image from "next/image"

interface VestaIconProps {
  name: string
  size?: number
  className?: string
  alt?: string
}

export function VestaIcon({ name, size = 24, className = "", alt = "" }: VestaIconProps) {
  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      <Image
        src={`/icons/vesta-${name}.png`}
        alt={alt || `${name} icon`}
        width={size}
        height={size}
        className="object-contain"
      />
    </div>
  )
}
