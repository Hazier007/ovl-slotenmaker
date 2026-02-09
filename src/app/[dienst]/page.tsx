import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import diensten from '@/data/diensten.json'
import bedrijfsinfo from '@/data/bedrijfsinfo.json'
import locaties from '@/data/locaties.json'
import ScrollReveal from '../components/ScrollReveal'

type Props = { params: { dienst: string } }

export function generateStaticParams() {
  return diensten.map((d) => ({ dienst: d.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const d = diensten.find((d) => d.slug === params.dienst)
  if (!d) return {}
  return { title: d.metaTitle, description: d.metaDescription }
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

const servicePhotos: Record<string, Array<{ src: string; alt: string }>> = {
  'slot-vervangen': [
    { src: '/images/Veiligheidscilinders-1.png', alt: 'Veiligheidscilinders' },
    { src: '/images/Meerpuntsluitingen-1.png', alt: 'Meerpuntsluitingen' },
  ],
  'sleutel-bijmaken': [
    { src: '/images/dom-sleutelservice-sleutels-mobile.jpg', alt: 'DOM sleutelservice' },
    { src: '/images/Veiligheidscilinders-1.png', alt: 'Veiligheidscilinders' },
  ],
  'inbraakbeveiliging': [
    { src: '/images/Inbraakbeveiliging-1.jpg', alt: 'Inbraakbeveiliging' },
    { src: '/images/Veiligheidsbeslag-1.jpg', alt: 'Veiligheidsbeslag' },
    { src: '/images/Meerpuntsluitingen-1.png', alt: 'Meerpuntsluitingen' },
  ],
  'raambeveiliging-kiepraam': [
    { src: '/images/ABUS-DF88_Toepassing-dakramen.jpg', alt: 'ABUS dakraam beveiliging' },
    { src: '/images/Inbraakbeveiliging-1.jpg', alt: 'Raambeveiliging' },
  ],
  'deur-openen': [
    { src: '/images/Slotenmaker-PONNET-inbraakbeveiliging.jpg', alt: 'Deur openen service' },
    { src: '/images/Slotenmaker_Ponnet-600px.jpg', alt: 'Kristof Ponnet aan het werk' },
  ],
  'inbraakschade-herstellen': [
    { src: '/images/Slotenmaker-herstellen-schade-1.jpg', alt: 'Inbraakschade herstellen' },
    { src: '/images/Inbraakbeveiliging-1.jpg', alt: 'Beveiliging na inbraak' },
  ],
  'slot-vervangen-voordeur': [
    { src: '/images/HOPPE-veiligheidsbeslag-kerntrekbeveiliging-1.jpg', alt: 'HOPPE veiligheidsbeslag' },
    { src: '/images/Veiligheidscilinders-1.png', alt: 'Veiligheidscilinders' },
    { src: '/images/Veiligheidsbeslag-1.jpg', alt: 'Veiligheidsbeslag' },
  ],
}

const serviceFaqs: Record<string, Array<{ q: string; a: string }>> = {
  'slot-vervangen': [
    { q: 'Hoe lang duurt het om een slot te vervangen?', a: 'Een standaard slotvervanging duurt 30 tot 60 minuten, afhankelijk van het type slot en de complexiteit.' },
    { q: 'Welke slotmerken gebruikt u?', a: 'Wij werken uitsluitend met gecertificeerde merken: DOM, ABUS en HOPPE voor maximale veiligheid.' },
    { q: 'Kan ik mijn slot laten vervangen zonder afspraak?', a: 'Bij spoedgevallen komen wij direct langs. Voor niet-dringende vervangingen maken we graag een afspraak op een moment dat u past.' },
    { q: 'Wat kost een slot vervangen?', a: 'Prijzen starten vanaf €129 inclusief een veiligheidscilinder. De exacte prijs hangt af van het type slot en cilinder.' },
  ],
  'sleutel-bijmaken': [
    { q: 'Hoe snel kan een sleutel bijgemaakt worden?', a: 'Een standaard sleutel bijmaken kan meestal ter plaatse binnen 15 minuten. Beveiligde sleutels worden binnen enkele werkdagen geleverd.' },
    { q: 'Kan ik een beveiligde sleutel laten bijmaken?', a: 'Ja, als gecertificeerd partner van DOM en ABUS kunnen wij ook beveiligde sleutels bijmaken met het juiste certificaat.' },
    { q: 'Moet ik mijn originele sleutel meebrengen?', a: 'Idealiter wel. Maar als u uw enige sleutel kwijt bent, kunnen wij in veel gevallen een nieuwe sleutel maken op basis van het slotnummer.' },
    { q: 'Wat kost een sleutel bijmaken?', a: 'Prijzen variëren van €15 voor een eenvoudige sleutel tot €80+ voor gecertificeerde veiligheidssleutels.' },
  ],
  'inbraakbeveiliging': [
    { q: 'Wat houdt een beveiligingsscan in?', a: 'Wij inspecteren alle toegangspunten van uw woning en adviseren over de zwakke punten en mogelijke beveiligingsoplossingen.' },
    { q: 'Is inbraakbeveiliging duur?', a: 'Preventie is altijd goedkoper dan herstel na inbraak. Basisbeveiligingspakketten starten al vanaf €250.' },
    { q: 'Welke beveiligingsmerken gebruikt u?', a: 'Wij werken met DOM cilinders, ABUS raambeveiliging en HOPPE veiligheidsbeslag — allen Europees gecertificeerd.' },
    { q: 'Komt u ook voor bedrijfspanden?', a: 'Ja, wij beveiligen zowel woningen als kantoren, winkels en bedrijfspanden in heel Oost-Vlaanderen.' },
  ],
  'raambeveiliging-kiepraam': [
    { q: 'Waarom zijn kiepramen kwetsbaar?', a: 'Kiepramen op een kier kunnen door inbrekers in seconden worden opengewrikt. Zelfs gesloten kiepramen zonder extra slot vormen een risico.' },
    { q: 'Welke raambeveiliging plaatst u?', a: 'Wij plaatsen ABUS raamsloten en kierstandbegrenzers die uw ramen vergrendelen, ook in kiepstand.' },
    { q: 'Kan ik nog ventileren met raambeveiliging?', a: 'Ja! De ABUS kierstandbegrenzers staan ventilatie toe terwijl het raam vergrendeld blijft tegen openbreken.' },
    { q: 'Hoeveel kost raambeveiliging per raam?', a: 'Raambeveiliging start vanaf €45 per raam, inclusief montage. Vraag een offerte aan voor uw volledige woning.' },
  ],
  'deur-openen': [
    { q: 'Opent u de deur zonder schade?', a: 'In meer dan 95% van de gevallen openen wij uw deur volledig schadevrij met professionele openingstechnieken.' },
    { q: 'Hoe snel kunt u ter plaatse zijn?', a: 'Bij spoedgevallen zijn wij doorgaans binnen 30 tot 60 minuten bij u, afhankelijk van uw locatie in Oost-Vlaanderen.' },
    { q: 'Wat kost het om een deur te openen?', a: 'Een spoedopening start vanaf €89. De prijs is afhankelijk van het type slot en het tijdstip.' },
    { q: "Kan ik ook bellen in het weekend of 's nachts?", a: "Ja, wij zijn 24/7 bereikbaar — ook 's nachts, in het weekend en op feestdagen." },
  ],
  'inbraakschade-herstellen': [
    { q: 'Hoe snel kunt u na een inbraak langskomen?', a: 'Na een inbraak komen wij zo snel mogelijk, doorgaans binnen het uur. Bel ons direct na de politie.' },
    { q: 'Vergoedt de verzekering de kosten?', a: 'In veel gevallen worden de kosten voor herstel na inbraak (deels) vergoed door uw inboedelverzekering. U ontvangt altijd een factuur.' },
    { q: 'Wat herstelt u precies na een inbraak?', a: 'Wij herstellen of vervangen beschadigde sloten, cilinders, deurbeslag, anti-inbraakstrippen en kozijnen.' },
    { q: 'Plaatst u ook betere beveiliging na een inbraak?', a: 'Absoluut. Wij adviseren en plaatsen direct betere beveiliging om herhaling te voorkomen.' },
  ],
  'slot-vervangen-voordeur': [
    { q: 'Waarom zou ik mijn voordeurslot upgraden?', a: 'Veel standaard cilinders zijn in seconden te openen met simpele inbraaktechnieken. Een veiligheidscilinder biedt anti-boor, anti-trek en anti-pick bescherming.' },
    { q: 'Welke voordeursloten plaatst u?', a: 'Wij plaatsen DOM en ABUS veiligheidscilinders in combinatie met HOPPE veiligheidsbeslag voor maximale bescherming.' },
    { q: 'Hoe lang duurt het vervangen van een voordeurslot?', a: 'Het vervangen van uw voordeurslot is doorgaans binnen een uur afgerond, inclusief opmeten en nieuwe sleutels.' },
    { q: 'Moet ik de hele deur vervangen?', a: 'Nee, in vrijwel alle gevallen volstaat het om de cilinder en het beslag te vervangen. Uw deur blijft behouden.' },
  ],
}

export default function DienstPage({ params }: Props) {
  const dienst = diensten.find((d) => d.slug === params.dienst)
  if (!dienst) notFound()

  const otherDiensten = diensten.filter((d) => d.slug !== dienst.slug)
  const photos = servicePhotos[dienst.slug] || []
  const faqs = serviceFaqs[dienst.slug] || []
  const heroImage = serviceImages[dienst.slug] || '/images/Slotenmaker-Oost-Vlaanderen.jpg'
  const popularSteden = locaties.filter((l) => !('isDeelgemeente' in l)).slice(0, 16)

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

  const faqJsonLd = faqs.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  } : null

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {faqJsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />}

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-24 lg:px-8">
        <Image src={heroImage} alt={dienst.naam} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/85 to-[#0a0e1a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Breadcrumbs */}
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">{dienst.naam}</span>
          </nav>

          <div className="mb-4 text-6xl">{dienst.icon}</div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            <span className="gradient-text">{dienst.naam}</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">{dienst.shortDesc}</p>

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

      {/* Content */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="space-y-6 text-lg leading-relaxed text-slate-300">
                  {dienst.beschrijving.split('\n\n').map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Photos */}
              {photos.length > 0 && (
                <ScrollReveal>
                  <div className="mt-12 grid gap-4 sm:grid-cols-2">
                    {photos.map((photo) => (
                      <div key={photo.src} className="img-zoom relative h-64 overflow-hidden rounded-2xl border border-slate-800">
                        <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                      </div>
                    ))}
                  </div>
                </ScrollReveal>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <ScrollReveal direction="right">
                <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
                  <h3 className="mb-4 text-lg font-bold">Waarom Slotenmaker PONNET?</h3>
                  <div className="space-y-3">
                    {[
                      '24/7 beschikbaar',
                      'Gecertificeerd (DOM, ABUS, HOPPE)',
                      'Lokaal uit Wetteren',
                      'Eerlijke prijzen',
                      'Snel ter plaatse',
                      'Schadevrije service',
                    ].map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="mt-0.5 text-blue-400">✓</span>
                        <span className="text-sm text-slate-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={150}>
                <div className="rounded-2xl border border-blue-500/20 bg-gradient-to-b from-blue-500/10 to-transparent p-6 text-center">
                  <p className="mb-2 text-sm text-blue-400">Direct hulp nodig?</p>
                  <a href="tel:0468113399" className="text-2xl font-bold text-white transition hover:text-blue-400">
                    0468 11 33 99
                  </a>
                  <p className="mt-2 text-xs text-slate-400">24/7 bereikbaar</p>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="right" delay={300}>
                <div className="rounded-2xl border border-slate-800 bg-[#111827] p-6">
                  <h3 className="mb-4 text-lg font-bold">Onze merken</h3>
                  <div className="flex flex-wrap gap-3">
                    {['DOM', 'ABUS', 'HOPPE'].map((m) => (
                      <span key={m} className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-bold text-white">{m}</span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="section bg-[#111827]/50">
          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <div className="mb-12 text-center">
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">FAQ</p>
                <h2 className="text-3xl font-bold">Veelgestelde vragen over {dienst.naam.toLowerCase()}</h2>
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
      )}

      {/* City links */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-2 text-2xl font-bold">{dienst.naam} in uw regio</h2>
            <p className="mb-6 text-slate-400">Wij bieden {dienst.naam.toLowerCase()} aan in heel Oost-Vlaanderen. Selecteer uw gemeente:</p>
            <div className="flex flex-wrap gap-2">
              {popularSteden.map((l) => (
                <Link key={l.slug} href={`/slotenmaker/${l.slug}`} className="rounded-full border border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm text-slate-300 no-underline transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white">
                  {l.naam}
                </Link>
              ))}
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
              {dienst.naam} nodig?
            </h2>
            <p className="mb-8 text-lg text-blue-100">
              Bel ons nu — wij zijn 24/7 bereikbaar voor een snelle interventie.
            </p>
            <a href="tel:0468113399" className="animate-pulse-glow inline-flex items-center gap-3 rounded-2xl bg-white px-12 py-6 text-2xl font-bold text-blue-600 shadow-2xl transition-all duration-300 hover:scale-105">
              📞 0468 11 33 99
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* Other Services */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-2xl font-bold">Andere Diensten</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherDiensten.map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 80}>
                <Link href={`/${d.slug}`} className="card-hover block h-full no-underline">
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
