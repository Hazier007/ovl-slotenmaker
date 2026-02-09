import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import diensten from '@/data/diensten.json'
import bedrijfsinfo from '@/data/bedrijfsinfo.json'

type Props = { params: { dienst: string } }

export function generateStaticParams() {
  return diensten.map((d) => ({ dienst: d.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const d = diensten.find((d) => d.slug === params.dienst)
  if (!d) return {}
  return {
    title: d.metaTitle,
    description: d.metaDescription,
  }
}

export default function DienstPage({ params }: Props) {
  const dienst = diensten.find((d) => d.slug === params.dienst)
  if (!dienst) notFound()

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: dienst.naam,
    description: dienst.shortDesc,
    provider: {
      '@type': 'LocalBusiness',
      name: bedrijfsinfo.bedrijfsnaam,
      telephone: bedrijfsinfo.telefoon,
      email: bedrijfsinfo.email,
      url: bedrijfsinfo.website,
      areaServed: { '@type': 'State', name: 'Oost-Vlaanderen' },
    },
    areaServed: { '@type': 'State', name: 'Oost-Vlaanderen' },
    url: `${bedrijfsinfo.website}/${dienst.slug}`,
  }

  const otherDiensten = diensten.filter((d) => d.slug !== dienst.slug)

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative px-4 pb-16 pt-20 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1629] to-[#0a0e1a]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link href="/" className="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 no-underline hover:text-white">
            ← Terug naar home
          </Link>
          <div className="mb-4 text-5xl">{dienst.icon}</div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-5xl">{dienst.naam}</h1>
          <p className="text-lg text-slate-400">{dienst.shortDesc}</p>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 space-y-6 text-lg leading-relaxed text-slate-300">
            {dienst.beschrijving.split('\n\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Why PONNET */}
          <div className="mb-12 rounded-2xl border border-slate-800 bg-[#111827] p-8">
            <h2 className="mb-6 text-2xl font-bold">Waarom kiezen voor Kristof PONNET?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                '24/7 beschikbaar, ook in het weekend',
                'Gecertificeerde materialen (DOM, ABUS, HOPPE)',
                'Lokale slotenmaker uit Wetteren',
                'Eerlijke, transparante prijzen',
                'Snel ter plaatse in heel Oost-Vlaanderen',
                'Vakkundige en schadevrije service',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 text-blue-400">✓</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Service Area */}
          <div className="mb-12 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8">
            <h2 className="mb-3 text-xl font-bold">Werkgebied</h2>
            <p className="text-slate-400">
              Wij bieden <strong className="text-white">{dienst.naam.toLowerCase()}</strong> aan in heel Oost-Vlaanderen.
              Van Gent tot Aalst, van Sint-Niklaas tot Dendermonde — wij komen naar u toe.
              Gevestigd in Wetteren, zijn wij snel ter plaatse.
            </p>
          </div>

          {/* CTA */}
          <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 p-10 text-center">
            <h2 className="mb-3 text-2xl font-bold text-white">
              {dienst.naam} nodig?
            </h2>
            <p className="mb-6 text-blue-100">
              Bel ons nu — wij zijn 24/7 bereikbaar voor een snelle interventie.
            </p>
            <a href="tel:0468113399" className="inline-flex items-center gap-3 rounded-xl bg-white px-10 py-4 text-xl font-bold text-blue-600 transition hover:bg-slate-100">
              📞 0468 11 33 99
            </a>
          </div>

          {/* Other Services */}
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold">Andere Diensten</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {otherDiensten.map((d) => (
                <Link key={d.slug} href={`/${d.slug}`} className="card-hover no-underline">
                  <span className="mb-2 block text-2xl">{d.icon}</span>
                  <h3 className="font-bold text-white">{d.naam}</h3>
                  <p className="mt-1 text-sm text-slate-400">{d.shortDesc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
