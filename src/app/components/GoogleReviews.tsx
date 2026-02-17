'use client'

import { useState, useEffect, useCallback } from 'react'

interface Review {
  author: string
  rating: number
  text: string
  date: string
  relativeDate: string
}

const reviews: Review[] = [
  {
    author: 'Patrick De Greef',
    rating: 5,
    text: 'Goede service en dito afwerking',
    date: '2026-01-30',
    relativeDate: 'januari 2026',
  },
  {
    author: 'Nancy Van De Walle',
    rating: 5,
    text: 'Kristof heeft ons snel en efficiÃ«nt geholpen met het juiste advies voor een correcte prijs.',
    date: '2026-01-29',
    relativeDate: 'januari 2026',
  },
  {
    author: 'Nick Van Eetvelde',
    rating: 5,
    text: 'Mooi werk gedaan en heel betrouwbaar',
    date: '2026-01-29',
    relativeDate: 'januari 2026',
  },
  {
    author: 'Mona Gabriel',
    rating: 5,
    text: 'Zeer vlugge service!',
    date: '2026-01-23',
    relativeDate: 'januari 2026',
  },
  {
    author: 'Koen Piro',
    rating: 5,
    text: 'Goede service. Vriendelijk en vakkundige uitleg',
    date: '2026-01-22',
    relativeDate: 'januari 2026',
  },
  {
    author: 'Griet De Latte',
    rating: 5,
    text: 'Heel tevreden! Snelle service en klantvriendelijk',
    date: '2026-01-21',
    relativeDate: 'januari 2026',
  },
  {
    author: 'Sidney De Kimpe',
    rating: 5,
    text: 'Topkwaliteit geleverd. Aangename man die zijn beloftes nakomt. Aanrader!!!',
    date: '2026-01-20',
    relativeDate: 'januari 2026',
  },
  {
    author: 'Luc Verstraeten',
    rating: 5,
    text: 'Uitstekende vakman. Snel ter plaatse en proper werk afgeleverd. Absolute aanrader!',
    date: '2025-12-15',
    relativeDate: 'december 2025',
  },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`h-5 w-5 ${i < rating ? 'text-yellow-400' : 'text-slate-600'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-full min-w-[300px] max-w-[350px] flex-shrink-0 flex-col rounded-xl border border-slate-700/50 bg-[#111827] p-6 transition-all hover:border-blue-500/30">
      {/* Header */}
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
          {review.author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-white">{review.author}</p>
          <p className="text-xs text-slate-400">{review.relativeDate}</p>
        </div>
      </div>

      {/* Stars */}
      <Stars rating={review.rating} />

      {/* Text */}
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
        &ldquo;{review.text}&rdquo;
      </p>

      {/* Google badge */}
      <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        <span>Google Review</span>
      </div>
    </div>
  )
}

export default function GoogleReviews() {
  const [scrollPos, setScrollPos] = useState(0)
  const [maxScroll, setMaxScroll] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const totalReviews = 327
  const avgRating = 4.9

  const scrollRef = useCallback((node: HTMLDivElement | null) => {
    if (node) {
      const updateMax = () => setMaxScroll(node.scrollWidth - node.clientWidth)
      updateMax()
      window.addEventListener('resize', updateMax)
      return () => window.removeEventListener('resize', updateMax)
    }
  }, [])

  // Auto-scroll
  useEffect(() => {
    if (!autoPlay) return
    const interval = setInterval(() => {
      setScrollPos((prev) => {
        if (prev >= maxScroll - 10) return 0
        return prev + 370
      })
    }, 4000)
    return () => clearInterval(interval)
  }, [autoPlay, maxScroll])

  // Apply scroll position
  useEffect(() => {
    const container = document.getElementById('reviews-scroll')
    if (container) {
      container.scrollTo({ left: scrollPos, behavior: 'smooth' })
    }
  }, [scrollPos])

  const scroll = (direction: 'left' | 'right') => {
    setAutoPlay(false)
    setScrollPos((prev) => {
      const delta = direction === 'left' ? -370 : 370
      return Math.max(0, Math.min(prev + delta, maxScroll))
    })
  }

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Slotenmaker PONNET Kristof',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avgRating.toString(),
      reviewCount: totalReviews.toString(),
      bestRating: '5',
      worstRating: '1',
    },
    review: reviews.slice(0, 5).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      datePublished: r.date,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: r.rating.toString(),
        bestRating: '5',
      },
      reviewBody: r.text,
    })),
  }

  return (
    <section className="section overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
          <div className="flex-1">
            <h2 className="mb-2 text-3xl font-extrabold md:text-4xl">
              Wat onze klanten zeggen
            </h2>
            <p className="text-slate-400">
              Echte reviews van echte klanten op Google
            </p>
          </div>

          {/* Rating summary */}
          <div className="flex items-center gap-4 rounded-xl border border-slate-700/50 bg-[#111827] px-6 py-4">
            <div className="text-center">
              <div className="text-4xl font-extrabold text-white">{avgRating}</div>
              <Stars rating={5} />
            </div>
            <div className="border-l border-slate-700 pl-4">
              <p className="text-2xl font-bold text-green-400">UITSTEKEND</p>
              <p className="text-sm text-slate-400">
                Gebaseerd op{' '}
                <a
                  href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 underline"
                >
                  {totalReviews} recensies
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Nav buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute -left-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-700 bg-[#0a0e1a]/90 p-2 text-white backdrop-blur transition hover:border-blue-500 md:block"
            aria-label="Vorige reviews"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-slate-700 bg-[#0a0e1a]/90 p-2 text-white backdrop-blur transition hover:border-blue-500 md:block"
            aria-label="Volgende reviews"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Scrollable container */}
          <div
            id="reviews-scroll"
            ref={scrollRef}
            className="scrollbar-hide flex gap-5 overflow-x-auto pb-4"
            onMouseEnter={() => setAutoPlay(false)}
            onMouseLeave={() => setAutoPlay(true)}
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {reviews.map((review, i) => (
              <div key={i} style={{ scrollSnapAlign: 'start' }}>
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a
            href="https://g.page/r/YOUR_GOOGLE_REVIEW_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-blue-400 transition hover:text-blue-300"
          >
            Bekijk alle {totalReviews} reviews op Google
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
