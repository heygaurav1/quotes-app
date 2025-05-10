"use client"

import { Button } from "@/components/ui/button"
import { Heart, CloudRain, Moon, Rocket, Users } from "lucide-react"

interface CategoryButtonsProps {
  selectedCategory: string | null
  setSelectedCategory: (category: string | null) => void
}

export default function CategoryButtons({ selectedCategory, setSelectedCategory }: CategoryButtonsProps) {
  const categories = [
    { name: "Too Sad", icon: <CloudRain className="mr-2 h-4 w-4" /> },
    { name: "Emotional", icon: <Heart className="mr-2 h-4 w-4" /> },
    { name: "Dark", icon: <Moon className="mr-2 h-4 w-4" /> },
    { name: "Motivated", icon: <Rocket className="mr-2 h-4 w-4" /> },
    { name: "Relatable", icon: <Users className="mr-2 h-4 w-4" /> },
  ]

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <Button
          key={category.name}
          variant={selectedCategory === category.name ? "default" : "outline"}
          className={`
            rounded-full 
            ${
              selectedCategory === category.name
                ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white"
                : "hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-blue-500/10"
            }
          `}
          onClick={() => setSelectedCategory(selectedCategory === category.name ? null : category.name)}
        >
          {category.icon}
          {category.name}
        </Button>
      ))}
    </div>
  )
}
