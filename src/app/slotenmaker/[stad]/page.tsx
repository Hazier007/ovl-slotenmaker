import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import locaties from '@/data/locaties.json'
import diensten from '@/data/diensten.json'
import bedrijfsinfo from '@/data/bedrijfsinfo.json'
import ScrollReveal from '../../components/ScrollReveal'

type Props = { params: { stad: string } }

export function generateStaticParams() {
  return locaties.map((l) => ({ stad: l.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = locaties.find((l) => l.slug === params.stad)
  if (!loc) return {}
  return {
    title: `Slotenmaker ${loc.naam} — 24/7 Spoedservice | Kristof PONNET`,
    description: `Slotenmaker in ${loc.naam} (${loc.postcode}). Slot vervangen, deur openen, inbraakbeveiliging. 24/7 beschikbaar. Bel ${bedrijfsinfo.telefoon}.`,
  }
}

const serviceIcons: Record<string, string> = {
  'slot-vervangen': '🔧',
  'sleutel-bijmaken': '🔑',
  'inbraakbeveiliging': '🛡️',
  'raambeveiliging-kiepraam': '🪟',
  'deur-openen': '🚪',
  'inbraakschade-herstellen': '🔨',
  'slot-vervangen-voordeur': '🏠',
}

const photoSections = [
  { src: '/images/Slotenmaker-PONNET-inbraakbeveiliging.jpg', alt: 'Inbraakbeveiliging installatie' },
  { src: '/images/Veiligheidscilinders-1.png', alt: 'Veiligheidscilinders' },
  { src: '/images/HOPPE-veiligheidsbeslag-kerntrekbeveiliging-1.jpg', alt: 'HOPPE veiligheidsbeslag' },
]

export default function StadPage({ params }: Props) {
  const loc = locaties.find((l) => l.slug === params.stad)
  if (!loc) notFound()

  const postNum = parseInt(loc.postcode)
  const nearby = locaties
    .filter((l) => l.slug !== loc.slug && !('isDeelgemeente' in l) && Math.abs(parseInt(l.postcode) - postNum) <= 200)
    .slice(0, 8)

  const faqs = [
    { q: `Hoe snel kan een slotenmaker in ${loc.naam} ter plaatse zijn?`, a: `Vanuit onze vestiging in Wetteren zijn wij doorgaans binnen 30 tot 60 minuten in ${loc.naam} (${loc.postcode}). Bij spoedgevallen doen wij er alles aan om zo snel mogelijk bij u te zijn.` },
    { q: `Wat kost een slotenmaker in ${loc.naam}?`, a: `De kosten hangen af van de dienst. Een deur openen start vanaf €89, een slot vervangen vanaf €129 inclusief cilinder. Wij geven altijd vooraf een prijsindicatie, zonder verborgen kosten.` },
    { q: `Is de slotenmaker 's nachts beschikbaar in ${loc.naam}?`, a: `Ja, wij zijn 24 uur per dag, 7 dagen per week bereikbaar — ook 's nachts, in het weekend en op feestdagen. Bel ${bedrijfsinfo.telefoon} voor directe hulp.` },
    { q: `Kan ik een factuur krijgen voor mijn verzekering?`, a: `Uiteraard. U ontvangt altijd een officiële factuur met ons BTW-nummer (${bedrijfsinfo.btw}). Deze kunt u indienen bij uw verzekering voor terugbetaling na inbraak of noodopening.` },
    { q: `Welke slotmerken plaatst u in ${loc.naam}?`, a: `Wij werken uitsluitend met gecertificeerde topmerken: DOM, ABUS en HOPPE. Deze merken staan garant voor maximale veiligheid en duurzaamheid.` },
  ]

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

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-24 lg:px-8">
        <Image
          src="/images/Slotenmaker-Oost-Vlaanderen.jpg"
          alt={`Slotenmaker ${loc.naam}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/85 to-[#0a0e1a]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/slotenmaker" className="transition hover:text-white">Slotenmaker</Link>
            <span>/</span>
            <span className="text-white">{loc.naam}</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            24/7 Beschikbaar in {loc.naam}
          </div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Slotenmaker <span className="gradient-text">{loc.naam}</span>{' '}
            <span className="text-slate-500 text-3xl md:text-4xl">({loc.postcode})</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Bent u op zoek naar een betrouwbare slotenmaker in {loc.naam}? Kristof PONNET uit Wetteren staat dag en nacht voor u klaar.
            Of het nu gaat om een slot vervangen, een deur openen of inbraakbeveiliging — wij zijn snel ter plaatse in {loc.naam} en omgeving.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="tel:0468113399" className="btn-primary">
              📞 Bel Nu: 0468 11 33 99
            </a>
            <Link href="/contact" className="btn-secondary">
              Gratis Offerte Aanvragen
            </Link>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-bold">Waarom een slotenmaker in {loc.naam}?</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Als inwoner van {loc.naam} wilt u kunnen rekenen op een slotenmaker die snel ter plaatse is wanneer het nodig is.
                Of u nu buitengesloten bent, uw slot defect is, of u uw woning beter wilt beveiligen — Slotenmaker PONNET
                is uw lokale aanspreekpunt voor alle slotenproblemen.
              </p>
              <p>
                Vanuit onze vestiging in Wetteren bedienen wij heel Oost-Vlaanderen, waaronder {loc.naam} ({loc.postcode}).
                Dankzij onze centrale ligging zijn wij doorgaans binnen 30 tot 60 minuten bij u aan de deur.
                Wij werken uitsluitend met gecertificeerde materialen van topmerken als DOM, ABUS en HOPPE.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Onze Diensten</p>
              <h2 className="text-3xl font-bold">Slotenmaker diensten in {loc.naam}</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {diensten.map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 80}>
                <Link href={`/${d.slug}`} className="card-hover group flex h-full gap-4 no-underline">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-3xl transition-colors group-hover:bg-blue-500/20">
                    {serviceIcons[d.slug] || d.icon}
                  </span>
                  <div>
                    <h3 className="mb-1 font-bold text-white">{d.naam}</h3>
                    <p className="mb-2 text-sm text-slate-400">{d.shortDesc}</p>
                    <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300">Meer info →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-2xl font-bold">Ons werk in beeld</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {photoSections.map((photo, i) => (
              <ScrollReveal key={photo.src} delay={i * 150}>
                <div className="img-zoom relative h-64 overflow-hidden rounded-2xl border border-slate-800">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">FAQ</p>
              <h2 className="text-3xl font-bold">Veelgestelde vragen over slotenmaker {loc.naam}</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
                  <h3 className="mb-3 text-lg font-bold text-white">{faq.q}</h3>
                  <p className="text-slate-400">{faq.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="flex items-center justify-center rounded-2xl border border-slate-800 bg-[#111827] p-16 text-center">
              <div>
                <span className="mb-4 block text-5xl">📍</span>
                <h3 className="mb-2 text-xl font-bold">Slotenmaker actief in {loc.naam} en omgeving</h3>
                <p className="text-slate-400">Wij komen naar u toe in {loc.naam} ({loc.postcode}) en alle omliggende gemeenten.</p>
              </div>
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
              Slotenmaker nodig in {loc.naam}?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Bel ons nu — wij zijn 24/7 bereikbaar en snel ter plaatse.
            </p>
            <a href="tel:0468113399" className="animate-pulse-glow inline-flex items-center gap-3 rounded-2xl bg-white px-12 py-6 text-2xl font-bold text-blue-600 shadow-2xl transition-all duration-300 hover:scale-105">
              📞 0468 11 33 99
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Nearby */}
      {nearby.length > 0 && (
        <section className="section">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <h2 className="mb-6 text-2xl font-bold">Slotenmaker in de buurt van {loc.naam}</h2>
              <div className="flex flex-wrap gap-3">
                {nearby.map((n) => (
                  <Link key={n.slug} href={`/slotenmaker/${n.slug}`} className="rounded-full border border-slate-700/50 bg-slate-800/30 px-5 py-2 text-sm text-slate-300 no-underline transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white">
                    Slotenmaker {n.naam}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
    </main>
  )
}
