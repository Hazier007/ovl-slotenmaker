import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import locaties from '@/data/locaties.json'
import diensten from '@/data/diensten.json'
import bedrijfsinfo from '@/data/bedrijfsinfo.json'

type Props = { params: { stad: string } }

export function generateStaticParams() {
  return locaties.map((l) => ({ stad: l.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = locaties.find((l) => l.slug === params.stad)
  if (!loc) return {}
  return {
    title: `Slotenmaker ${loc.naam} — 24/7 Service`,
    description: `Slotenmaker in ${loc.naam} (${loc.postcode}). Slot vervangen, deur openen, inbraakbeveiliging. 24/7 beschikbaar. Bel ${bedrijfsinfo.telefoon}.`,
  }
}

export default function StadPage({ params }: Props) {
  const loc = locaties.find((l) => l.slug === params.stad)
  if (!loc) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: bedrijfsinfo.bedrijfsnaam,
    description: `Slotenmaker in ${loc.naam}, Oost-Vlaanderen`,
    telephone: bedrijfsinfo.telefoon,
    email: bedrijfsinfo.email,
    url: `${bedrijfsinfo.website}/slotenmaker/${loc.slug}`,
    areaServed: {
      '@type': 'City',
      name: loc.naam,
      postalCode: loc.postcode,
    },
    openingHours: 'Mo-Su 00:00-23:59',
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#4668b0]">
        24/7 Slotenmaker
      </p>
      <h1 className="mb-6 text-4xl font-bold">
        Slotenmaker {loc.naam}{' '}
        <span className="text-slate-500">({loc.postcode})</span>
      </h1>
      <p className="mb-12 text-lg text-slate-400">
        Bent u op zoek naar een betrouwbare slotenmaker in {loc.naam}? Kristof
        PONNET staat dag en nacht voor u klaar. Of het nu gaat om een slot
        vervangen, een deur openen of inbraakbeveiliging — wij zijn snel ter
        plaatse in {loc.naam} en omgeving.
      </p>

      <h2 className="mb-6 text-2xl font-bold">
        Onze diensten in {loc.naam}
      </h2>
      <div className="mb-12 grid gap-4 sm:grid-cols-2">
        {diensten.map((d) => (
          <div
            key={d.slug}
            className="rounded-xl border border-slate-800 bg-[#111827] p-5"
          >
            <span className="mb-2 block text-2xl">{d.icon}</span>
            <h3 className="mb-1 font-bold">{d.naam}</h3>
            <p className="text-sm text-slate-400">{d.shortDesc}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl bg-[#4668b0] p-8 text-center">
        <h2 className="mb-3 text-2xl font-bold text-white">
          Slotenmaker nodig in {loc.naam}?
        </h2>
        <p className="mb-5 text-blue-100">
          Bel ons nu — wij zijn 24/7 bereikbaar.
        </p>
        <a
          href={`tel:${bedrijfsinfo.telefoon.replace(/\s/g, '')}`}
          className="inline-block rounded-lg bg-white px-8 py-3 text-lg font-bold text-[#4668b0] transition hover:bg-slate-100"
        >
          {bedrijfsinfo.telefoon}
        </a>
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/slotenmaker"
          className="text-sm text-slate-500 hover:text-white"
        >
          ← Alle gemeenten
        </Link>
      </div>
    </main>
  )
}
