"use client"

import { useState } from "react"
import type { Quote } from "@/lib/types"
import { Heart, Share2, RefreshCw, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface QuoteCardProps {
  quote: Quote
  onNewQuote: () => void
}

export default function QuoteCard({ quote, onNewQuote }: QuoteCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glassmorphism effect with decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-xl blur-xl" />
      <div className="absolute -inset-0.5 bg-gradient-to-br from-purple-500/30 via-blue-500/30 to-pink-500/30 rounded-xl opacity-50" />

      {/* Main card */}
      <div className="relative backdrop-blur-md bg-white/70 dark:bg-gray-900/70 border border-white/20 dark:border-gray-700/30 rounded-xl p-8 shadow-xl">
        {/* Category tag */}
        {quote.categories[0] && (
          <Badge className="absolute top-4 left-4 bg-gradient-to-r from-purple-500 to-blue-500">
            {quote.categories[0]}
          </Badge>
        )}

        {/* Quote content */}
        <div className="flex flex-col items-center justify-center min-h-[200px] py-6 space-y-6">
          <p className="text-xl md:text-2xl text-center font-medium text-gray-800 dark:text-gray-100 leading-relaxed">
            "{quote.text}"
          </p>

          <p className="text-right w-full text-gray-600 dark:text-gray-400 italic">— {quote.author}</p>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center justify-between mt-6 pt-4 border-t border-gray-200 dark:border-gray-700/30">
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" onClick={() => setLiked(!liked)} className={liked ? "text-red-500" : ""}>
              <Heart className={`h-5 w-5 mr-1 ${liked ? "fill-red-500" : ""}`} />
              <span>{liked ? "Liked" : "Like"}</span>
            </Button>

            <Button variant="ghost" size="sm">
              <Share2 className="h-5 w-5 mr-1" />
              <span>Share</span>
            </Button>

            <Button variant="ghost" size="sm">
              <MessageSquare className="h-5 w-5 mr-1" />
              <span>Comment</span>
            </Button>
          </div>

          <Button
            onClick={onNewQuote}
            className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            New Quote
          </Button>
        </div>
      </div>
    </div>
  )
}
