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
    title: `Slotenmaker ${loc.naam} — 24/7 Spoedservice`,
    description: `Slotenmaker in ${loc.naam} (${loc.postcode}). Slot vervangen, deur openen, inbraakbeveiliging. 24/7 beschikbaar. Bel ${bedrijfsinfo.telefoon}.`,
  }
}

export default function StadPage({ params }: Props) {
  const loc = locaties.find((l) => l.slug === params.stad)
  if (!loc) notFound()

  // Get nearby cities (same postcode range ±100)
  const postNum = parseInt(loc.postcode)
  const nearby = locaties
    .filter((l) => l.slug !== loc.slug && !('isDeelgemeente' in l) && Math.abs(parseInt(l.postcode) - postNum) <= 200)
    .slice(0, 8)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: bedrijfsinfo.bedrijfsnaam,
    description: `Slotenmaker in ${loc.naam}, Oost-Vlaanderen`,
    telephone: bedrijfsinfo.telefoon,
    email: bedrijfsinfo.email,
    url: `${bedrijfsinfo.website}/slotenmaker/${loc.slug}`,
    areaServed: { '@type': 'City', name: loc.naam, postalCode: loc.postcode },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '€€',
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative px-4 pb-16 pt-20 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1629] to-[#0a0e1a]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link href="/slotenmaker" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 no-underline hover:text-white">
            ← Alle gemeenten
          </Link>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            24/7 Beschikbaar in {loc.naam}
          </div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">
            Slotenmaker {loc.naam} <span className="text-slate-500">({loc.postcode})</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-400">
            Bent u op zoek naar een betrouwbare slotenmaker in {loc.naam}? Kristof PONNET uit Wetteren staat dag en nacht voor u klaar.
            Of het nu gaat om een slot vervangen, een deur openen of inbraakbeveiliging — wij zijn snel ter plaatse in {loc.naam} en omgeving.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-2xl font-bold">Onze diensten in {loc.naam}</h2>
          <div className="mb-12 grid gap-4 sm:grid-cols-2">
            {diensten.map((d) => (
              <Link key={d.slug} href={`/${d.slug}`} className="card-hover group no-underline">
                <span className="mb-3 block text-3xl">{d.icon}</span>
                <h3 className="mb-1 font-bold text-white">{d.naam}</h3>
                <p className="text-sm text-slate-400">{d.shortDesc}</p>
                <span className="mt-2 block text-sm font-medium text-blue-400 group-hover:text-blue-300">Meer info →</span>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="mb-12 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">
              Slotenmaker nodig in {loc.naam}?
            </h2>
            <p className="mb-6 text-blue-100">
              Bel ons nu — wij zijn 24/7 bereikbaar en snel ter plaatse.
            </p>
            <a href="tel:0468113399" className="inline-flex items-center gap-3 rounded-xl bg-white px-10 py-4 text-xl font-bold text-blue-600 transition hover:bg-slate-100">
              📞 0468 11 33 99
            </a>
          </div>

          {/* Nearby */}
          {nearby.length > 0 && (
            <div>
              <h2 className="mb-4 text-xl font-bold">Slotenmaker in de buurt</h2>
              <div className="flex flex-wrap gap-2">
                {nearby.map((n) => (
                  <Link key={n.slug} href={`/slotenmaker/${n.slug}`} className="rounded-full border border-slate-700/50 bg-slate-800/30 px-4 py-1.5 text-sm text-slate-300 no-underline transition hover:border-blue-500/50 hover:text-white">
                    {n.naam}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
