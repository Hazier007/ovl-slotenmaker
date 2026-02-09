'use client'

import { useEffect, useRef } from 'react'

interface ScrollRevealProps {
  children: React.ReactNode
  direction?: 'up' | 'left' | 'right'
  delay?: number
  className?: string
}

export default function ScrollReveal({ children, direction = 'up', delay = 0, className = '' }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add('visible')
          }, delay)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])

  const dirClass = direction === 'left' ? 'reveal-left' : direction === 'right' ? 'reveal-right' : 'reveal'

  return (
    <div ref={ref} className={`${dirClass} ${className}`}>
      {children}
    </div>
  )
}
