'use client'

import { useState } from 'react'
import Link from 'next/link'
import diensten from '@/data/diensten.json'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dienstenOpen, setDienstenOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/50 bg-[#0a0e1a]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-white no-underline">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500 text-lg">🔐</span>
          <span>Slotenmaker <span className="text-blue-400">PONNET</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/" className="text-sm font-medium text-slate-300 no-underline transition hover:text-white">Home</Link>
          
          {/* Diensten Dropdown */}
          <div className="relative" onMouseEnter={() => setDienstenOpen(true)} onMouseLeave={() => setDienstenOpen(false)}>
            <button className="flex items-center gap-1 text-sm font-medium text-slate-300 transition hover:text-white" onClick={() => setDienstenOpen(!dienstenOpen)}>
              Diensten
              <svg className={`h-4 w-4 transition ${dienstenOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
            {dienstenOpen && (
              <>
                {/* Invisible bridge to prevent mouseLeave gap */}
                <div className="absolute left-0 top-full h-2 w-64" />
                <div className="absolute left-0 top-full mt-2 w-64 rounded-xl border border-slate-700 bg-[#111827] py-2 shadow-2xl">
                  {diensten.map((d) => (
                    <Link key={d.slug} href={`/${d.slug}`} onClick={() => setDienstenOpen(false)} className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-300 no-underline transition hover:bg-slate-800 hover:text-white">
                      <span>{d.icon}</span>
                      <span>{d.naam}</span>
                    </Link>
                  ))}
                </div>
              </>
            )}
          </div>

          <Link href="/slotenmaker" className="text-sm font-medium text-slate-300 no-underline transition hover:text-white">Regio&apos;s</Link>
          <Link href="/contact" className="text-sm font-medium text-slate-300 no-underline transition hover:text-white">Contact</Link>
        </nav>

        {/* Phone CTA */}
        <a href="tel:0468113399" className="hidden items-center gap-2 rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-bold text-white no-underline transition hover:bg-blue-600 lg:flex">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          0468 11 33 99
        </a>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
          {mobileOpen ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-slate-800 bg-[#0a0e1a] px-4 pb-6 pt-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            <Link href="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-white no-underline hover:bg-slate-800">Home</Link>
            <p className="mt-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-500">Diensten</p>
            {diensten.map((d) => (
              <Link key={d.slug} href={`/${d.slug}`} onClick={() => setMobileOpen(false)} className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm text-slate-300 no-underline hover:bg-slate-800 hover:text-white">
                <span>{d.icon}</span> {d.naam}
              </Link>
            ))}
            <Link href="/slotenmaker" onClick={() => setMobileOpen(false)} className="mt-2 rounded-lg px-4 py-3 text-white no-underline hover:bg-slate-800">Regio&apos;s</Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="rounded-lg px-4 py-3 text-white no-underline hover:bg-slate-800">Contact</Link>
          </nav>
          <a href="tel:0468113399" className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-blue-500 py-3 text-center font-bold text-white no-underline">
            📞 Bel Nu: 0468 11 33 99
          </a>
        </div>
      )}
    </header>
  )
}
