import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import locaties from '@/data/locaties.json'
import diensten from '@/data/diensten.json'
import bedrijfsinfo from '@/data/bedrijfsinfo.json'
import ScrollReveal from '../../../components/ScrollReveal'

type Props = { params: { stad: string; dienst: string } }

export function generateStaticParams() {
  const params: Array<{ stad: string; dienst: string }> = []
  for (const loc of locaties) {
    for (const d of diensten) {
      params.push({ stad: loc.slug, dienst: d.slug })
    }
  }
  return params
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = locaties.find((l) => l.slug === params.stad)
  const dienst = diensten.find((d) => d.slug === params.dienst)
  if (!loc || !dienst) return {}
  return {
    title: `${dienst.naam} in ${loc.naam} | Slotenmaker PONNET`,
    description: `${dienst.naam} in ${loc.naam} (${loc.postcode}). ${dienst.shortDesc} 24/7 beschikbaar. Bel ${bedrijfsinfo.telefoon}.`,
  }
}

const serviceImages: Record<string, string> = {
  'slot-vervangen': '/images/Veiligheidscilinders-1.png',
  'sleutel-bijmaken': '/images/dom-sleutelservice-sleutels-mobile.jpg',
  'inbraakbeveiliging': '/images/Inbraakbeveiliging-1.jpg',
  'raambeveiliging-kiepraam': '/images/ABUS-DF88_Toepassing-dakramen.jpg',
  'deur-openen': '/images/Slotenmaker-PONNET-inbraakbeveiliging.jpg',
  'inbraakschade-herstellen': '/images/Slotenmaker-herstellen-schade-1.jpg',
  'slot-vervangen-voordeur': '/images/HOPPE-veiligheidsbeslag-kerntrekbeveiliging-1.jpg',
}

export default function StadDienstPage({ params }: Props) {
  const loc = locaties.find((l) => l.slug === params.stad)
  const dienst = diensten.find((d) => d.slug === params.dienst)
  if (!loc || !dienst) notFound()

  const postNum = parseInt(loc.postcode)
  const nearby = locaties
    .filter((l) => l.slug !== loc.slug && !('isDeelgemeente' in l) && Math.abs(parseInt(l.postcode) - postNum) <= 200)
    .slice(0, 6)
  const otherDiensten = diensten.filter((d) => d.slug !== dienst.slug)
  const heroImage = serviceImages[dienst.slug] || '/images/Slotenmaker-Oost-Vlaanderen.jpg'

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${dienst.naam} in ${loc.naam}`,
    description: `${dienst.shortDesc} Beschikbaar in ${loc.naam} (${loc.postcode}), Oost-Vlaanderen.`,
    provider: {
      '@type': 'LocalBusiness',
      name: bedrijfsinfo.bedrijfsnaam,
      telephone: bedrijfsinfo.telefoon,
      email: bedrijfsinfo.email,
      url: bedrijfsinfo.website,
    },
    areaServed: {
      '@type': 'City',
      name: loc.naam,
      postalCode: loc.postcode,
      containedInPlace: { '@type': 'State', name: 'Oost-Vlaanderen' },
    },
    url: `${bedrijfsinfo.website}/slotenmaker/${loc.slug}/${dienst.slug}`,
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-24 lg:px-8">
        <Image src={heroImage} alt={`${dienst.naam} in ${loc.naam}`} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/85 to-[#0a0e1a]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/slotenmaker" className="transition hover:text-white">Slotenmaker</Link>
            <span>/</span>
            <Link href={`/slotenmaker/${loc.slug}`} className="transition hover:text-white">{loc.naam}</Link>
            <span>/</span>
            <span className="text-white">{dienst.naam}</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            24/7 Beschikbaar in {loc.naam}
          </div>

          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            <span className="gradient-text">{dienst.naam}</span> in {loc.naam}
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Op zoek naar een specialist voor {dienst.naam.toLowerCase()} in {loc.naam} ({loc.postcode})?
            Slotenmaker Kristof PONNET is 24/7 bereikbaar en snel ter plaatse.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="tel:0468113399" className="btn-primary">
              📞 Bel Nu: 0468 11 33 99
            </a>
            <Link href="/contact" className="btn-secondary">
              Gratis Offerte
            </Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              <p>
                Bent u in {loc.naam} en heeft u nood aan {dienst.naam.toLowerCase()}? Slotenmaker PONNET uit Wetteren
                bedient heel Oost-Vlaanderen, waaronder {loc.naam} en omliggende gemeenten. Dankzij onze centrale
                ligging zijn wij doorgaans binnen 30 tot 60 minuten bij u aan de deur.
              </p>
              <p>
                {dienst.beschrijving.split('\n\n')[0]}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Why PONNET */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal direction="left">
              <div className="img-zoom relative h-80 overflow-hidden rounded-2xl border border-slate-800">
                <Image src="/images/Slotenmaker_Ponnet-600px.jpg" alt="Kristof Ponnet" fill className="object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Uw specialist</p>
                <h2 className="mb-6 text-3xl font-bold">
                  Waarom kiezen voor PONNET in {loc.naam}?
                </h2>
                <div className="space-y-4">
                  {[
                    { icon: '🕐', title: '24/7 Beschikbaar', desc: `Dag en nacht bereikbaar voor ${dienst.naam.toLowerCase()} in ${loc.naam}, ook in het weekend.` },
                    { icon: '⚡', title: 'Snel Ter Plaatse', desc: `Vanuit Wetteren zijn wij binnen 30-60 minuten in ${loc.naam} (${loc.postcode}).` },
                    { icon: '🛡️', title: 'Gecertificeerde Materialen', desc: 'Uitsluitend topmerken: DOM, ABUS en HOPPE voor maximale veiligheid.' },
                    { icon: '💰', title: 'Eerlijke Prijzen', desc: 'Transparante tarieven zonder verborgen kosten. Vooraf een duidelijke prijsindicatie.' },
                  ].map((usp) => (
                    <div key={usp.title} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-xl">{usp.icon}</span>
                      <div>
                        <h3 className="font-bold text-white">{usp.title}</h3>
                        <p className="text-sm text-slate-400">{usp.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Service details */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-bold">Over {dienst.naam.toLowerCase()}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              {dienst.beschrijving.split('\n\n').slice(1).map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8">
              <h3 className="mb-3 text-xl font-bold">Werkgebied rond {loc.naam}</h3>
              <p className="text-slate-400">
                Wij bieden <strong className="text-white">{dienst.naam.toLowerCase()}</strong> aan in {loc.naam} ({loc.postcode})
                en alle omliggende gemeenten in Oost-Vlaanderen. Gevestigd in Wetteren, zijn wij altijd snel ter plaatse.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              {dienst.naam} nodig in {loc.naam}?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Bel ons nu — wij zijn 24/7 bereikbaar en snel ter plaatse in {loc.naam}.
            </p>
            <a href="tel:0468113399" className="animate-pulse-glow inline-flex items-center gap-3 rounded-2xl bg-white px-12 py-6 text-2xl font-bold text-blue-600 shadow-2xl transition-all duration-300 hover:scale-105">
              📞 0468 11 33 99
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Nearby cities with same service */}
      {nearby.length > 0 && (
        <section className="section">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="mb-6 text-2xl font-bold">{dienst.naam} in de buurt van {loc.naam}</h2>
              <div className="flex flex-wrap gap-3">
                {nearby.map((n) => (
                  <Link
                    key={n.slug}
                    href={`/slotenmaker/${n.slug}/${dienst.slug}`}
                    className="rounded-full border border-slate-700/50 bg-slate-800/30 px-5 py-2 text-sm text-slate-300 no-underline transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
                  >
                    {dienst.naam} {n.naam}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Other services in same city */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-2xl font-bold">Andere diensten in {loc.naam}</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherDiensten.map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 80}>
                <Link href={`/slotenmaker/${loc.slug}/${d.slug}`} className="card-hover block h-full no-underline">
                  <span className="mb-2 block text-2xl">{d.icon}</span>
                  <h3 className="font-bold text-white">{d.naam}</h3>
                  <p className="mt-1 text-sm text-slate-400">{d.shortDesc}</p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
