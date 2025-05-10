"use client"

import { useState } from "react"
import QuoteCard from "@/components/quote-card"
import CategoryButtons from "@/components/category-buttons"
import { quotes } from "@/lib/data"
import type { Quote } from "@/lib/types"

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [currentQuote, setCurrentQuote] = useState<Quote | null>(null)

  // Filter quotes by category or show all if no category is selected
  const filteredQuotes = selectedCategory
    ? quotes.filter((quote) => quote.categories.includes(selectedCategory))
    : quotes

  // Get a random quote from the filtered quotes
  const getRandomQuote = () => {
    if (filteredQuotes.length === 0) return
    const randomIndex = Math.floor(Math.random() * filteredQuotes.length)
    setCurrentQuote(filteredQuotes[randomIndex])
  }

  // Set a random quote when category changes or on initial load
  useState(() => {
    getRandomQuote()
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-4xl space-y-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 dark:text-white">myQuotes</h1>

        <CategoryButtons
          selectedCategory={selectedCategory}
          setSelectedCategory={(category) => {
            setSelectedCategory(category)
            // Reset current quote when category changes
            setCurrentQuote(null)
            setTimeout(getRandomQuote, 100)
          }}
        />

        {currentQuote && <QuoteCard quote={currentQuote} onNewQuote={getRandomQuote} />}
      </div>
    </main>
  )
}
