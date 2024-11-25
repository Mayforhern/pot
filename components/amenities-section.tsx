'use client'

import Image from "next/image"
import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { Waves, Dumbbell, Coffee, Flame, TreePine } from 'lucide-react'

interface AmenityCard {
  title: string
  image: string
  description: string
  alt: string
  icon: string
}

const amenities: AmenityCard[] = [
  {
    title: "Pool and Jacuzzi",
    image: "/images/pool-jacuzzi.webp",
    description: "Relax and rejuvenate in our modern, luxurious pool and jacuzzi area",
    alt: "Luxurious pool and jacuzzi area with modern design",
    icon: "waves"
  },
  {
    title: "Fitness Studios",
    image: "/images/studios.webp",
    description: "Stay fit with our state-of-the-art studios for yoga and exercise classes",
    alt: "Spacious studio with people practicing yoga",
    icon: "dumbbell"
  },
  {
    title: "Lounge and Cafe",
    image: "/images/lounge-cafe.webp",
    description: "Unwind in our cozy lounge or enjoy a drink at our ambient cafe",
    alt: "Cozy lounge area with string lights and wooden decor",
    icon: "coffee"
  },
  {
    title: "Sauna",
    image: "/images/sauna.webp",
    description: "Detoxify and relax in our traditional wooden sauna",
    alt: "Traditional wooden sauna room interior",
    icon: "flame"
  },
  {
    title: "Outdoor Spaces",
    image: "/images/outdoor-spaces.webp",
    description: "Enjoy the fresh air in our beautifully landscaped outdoor areas",
    alt: "Outdoor terrace with comfortable seating and greenery",
    icon: "tree"
  }
]

const iconComponents = {
  waves: Waves,
  dumbbell: Dumbbell,
  coffee: Coffee,
  flame: Flame,
  tree: TreePine
}

const AmenityCardComponent = ({ amenity, index }: { amenity: AmenityCard; index: number }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)
  const IconComponent = iconComponents[amenity.icon as keyof typeof iconComponents]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-lg shadow-lg focus-within:ring-2 focus-within:ring-primary"
    >
      <div className="aspect-[16/9] relative bg-muted">
        {!hasError && (
          <Image
            src={amenity.image}
            alt={amenity.alt}
            fill
            className={`object-cover transition-transform duration-300 group-hover:scale-110 ${
              isLoading ? "opacity-0" : "opacity-100"
            }`}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => setHasError(true)}
            priority={index < 3}
          />
        )}
        {isLoading && !hasError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="sr-only">Loading...</span>
            <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          </div>
        )}
        {hasError && (
          <div className="absolute inset-0 flex items-center justify-center text-destructive">
            <p>Failed to load image</p>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/20 transition-opacity duration-300 group-hover:opacity-90" />
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-lg font-semibold text-primary-foreground flex items-center">
            <IconComponent className="w-5 h-5 mr-2" />
            {amenity.title}
          </h3>
        </div>
      </div>
      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
        <p className="text-primary-foreground text-center px-6 max-w-[80%] text-sm">
          {amenity.description}
        </p>
      </div>
    </motion.div>
  )
}

export default function AmenitiesSection() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <section className="w-full py-12 md:py-24 bg-background" aria-labelledby="amenities-title">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 id="amenities-title" className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Luxurious Amenities
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground mt-4 text-lg">
            Indulge in modern design and all-inclusive luxury. Our extensive range of amenities, 
            including sprawling outdoor terraces, offers an unparalleled experience in New York City.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <AmenityCardComponent key={amenity.title} amenity={amenity} index={index} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Toggle {theme === "dark" ? "Light" : "Dark"} Mode
          </button>
        </div>
      </div>
    </section>
  )
}
