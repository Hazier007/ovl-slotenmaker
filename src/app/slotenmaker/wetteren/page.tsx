import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '../../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Slotenmaker Wetteren — 24/7 Spoedservice | Kristof PONNET',
  description: 'Slotenmaker in Wetteren, Erpe-Mere en Wichelen. Kristof PONNET — schadevrij openen van deuren, slot vervangen, inbraakbeveiliging. Bel 0468 11 33 99.',
}

export default function WetterenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Slotenmaker Kristof PONNET',
    description: 'Slotenmaker in Wetteren — de bekendste slotenmaker van de driehoek Wetteren-Aalst-Dendermonde.',
    telephone: '0468 11 33 99',
    email: 'info@ovl-slotenmaker.be',
    url: 'https://ovl-slotenmaker.be/slotenmaker/wetteren',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Koningin Astridlaan 54A',
      postalCode: 'B-9230',
      addressLocality: 'Wetteren',
      addressCountry: 'BE',
    },
    areaServed: { '@type': 'City', name: 'Wetteren', postalCode: '9230' },
    openingHours: 'Mo-Su 00:00-23:59',
    priceRange: '€€',
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-24 lg:px-8">
        <Image src="/images/Slotenmaker-Oost-Vlaanderen.jpg" alt="Slotenmaker Wetteren" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/85 to-[#0a0e1a]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <Link href="/slotenmaker" className="transition hover:text-white">Slotenmaker</Link>
            <span>/</span>
            <span className="text-white">Wetteren</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            24/7 Beschikbaar in Wetteren
          </div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Slotenmaker <span className="gradient-text">Wetteren</span>{' '}
            <span className="text-slate-500 text-3xl md:text-4xl">(9230)</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Kristof PONNET is uw aanspreekpartner in Wetteren, Erpe-Mere en Wichelen. De bekendste slotenmaker van de driehoek Wetteren-Aalst-Dendermonde.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="tel:0468113399" className="btn-primary">📞 Bel Nu: 0468 11 33 99</a>
            <Link href="/contact" className="btn-secondary">Gratis Offerte Aanvragen</Link>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-bold">Schadevrij openen van deuren in Wetteren</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Slotenmaker Kristof PONNET is gevestigd in Wetteren en is de <strong>bekendste slotenmaker van de driehoek Wetteren-Aalst-Dendermonde</strong>. Vanuit onze vestiging aan de Koningin Astridlaan 54A bedienen wij Wetteren en alle omliggende gemeenten.
              </p>
              <p>
                Wij zijn enkel actief in Oost-Vlaanderen en dat maakt ons een echte <strong>lokale slotenmaker</strong>. Mondelinge reclame is onze belangrijkste vorm van reclame — tevreden klanten vertellen het door en dat is het mooiste compliment dat wij kunnen krijgen.
              </p>
              <p>
                Bent u buitengesloten in Wetteren? Of heeft u nood aan het vervangen of herstellen van uw sloten? Wij zijn <strong>24/7 bereikbaar via ons noodnummer 0468/11.33.99</strong>.
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
              <h2 className="text-3xl font-bold">Slotenmaker diensten in Wetteren</h2>
            </div>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: '🔒', naam: 'Veiligheidscilinders', slug: '/slot-vervangen', desc: 'Gecertificeerde veiligheidscilinders van DOM en ABUS.' },
              { icon: '🔧', naam: 'Meerpuntsluitingen', slug: '/slot-vervangen-voordeur', desc: 'Meerpuntsvergrendelingen voor extra beveiliging.' },
              { icon: '🛡️', naam: 'Veiligheidsbeslag', slug: '/inbraakbeveiliging', desc: 'Anti-kerntrek veiligheidsbeslag van HOPPE.' },
              { icon: '🪟', naam: 'Raambeveiliging', slug: '/raambeveiliging-kiepraam', desc: 'ABUS raamsloten en kierstandbegrenzers.' },
              { icon: '🚪', naam: 'Deur Openen', slug: '/deur-openen', desc: 'Buitengesloten? Schadevrije deuropening, 24/7.' },
              { icon: '🔨', naam: 'Inbraakschade Herstellen', slug: '/inbraakschade-herstellen', desc: 'Snel herstel van alle schade na inbraak.' },
            ].map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 80}>
                <Link href={d.slug} className="card-hover group flex h-full gap-4 no-underline">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-3xl transition-colors group-hover:bg-blue-500/20">{d.icon}</span>
                  <div>
                    <h3 className="mb-1 font-bold text-white">{d.naam}</h3>
                    <p className="mb-2 text-sm text-slate-400">{d.desc}</p>
                    <span className="text-sm font-medium text-blue-400 group-hover:text-blue-300">Meer info →</span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eerlijke prijsgarantie */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-bold">Eerlijke prijsgarantie</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Bij Slotenmaker PONNET weet u altijd vooraf wat de kosten zijn. Wij hanteren <strong>eerlijke, transparante prijzen</strong> zonder verborgen kosten of verrassingen achteraf.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                { icon: '💰', title: 'Eerlijke prijsafspraken', desc: 'Geen verrassingen. Prijs vooraf besproken.' },
                { icon: '🏆', title: 'Kwaliteitsvol materiaal', desc: 'Gecertificeerde merken: DOM, ABUS, HOPPE.' },
                { icon: '💳', title: 'Veilig betalen', desc: 'Bancontact, Maestro, Visa, Mastercard.' },
              ].map((item) => (
                <div key={item.title} className="card-hover text-center">
                  <span className="mb-3 block text-4xl">{item.icon}</span>
                  <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Warning */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-8">
              <h2 className="mb-4 text-2xl font-bold text-yellow-400">⚠️ Opgelet voor malafide slotenmakers</h2>
              <p className="text-lg text-slate-300">
                Kies altijd voor een lokale, betrouwbare slotenmaker met een vast adres en BTW-nummer. Slotenmaker Kristof PONNET is gevestigd aan de Koningin Astridlaan 54A in Wetteren (BTW BE 0698.958.244) en staat garant voor eerlijke prijzen en kwaliteitsvol werk.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Photos */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-2xl font-bold">Ons werk in beeld</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { src: '/images/Slotenmaker-PONNET-inbraakbeveiliging.jpg', alt: 'Inbraakbeveiliging Wetteren' },
              { src: '/images/Veiligheidscilinders-1.png', alt: 'Veiligheidscilinders' },
              { src: '/images/HOPPE-veiligheidsbeslag-kerntrekbeveiliging-1.jpg', alt: 'HOPPE veiligheidsbeslag' },
            ].map((photo, i) => (
              <ScrollReveal key={photo.src} delay={i * 150}>
                <div className="img-zoom relative h-64 overflow-hidden rounded-2xl border border-slate-800">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Business info */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8">
              <h3 className="mb-4 text-xl font-bold">Contactgegevens</h3>
              <div className="grid gap-4 sm:grid-cols-2 text-slate-300">
                <div className="space-y-2">
                  <p>📍 Koningin Astridlaan 54A, B-9230 Wetteren</p>
                  <p>📞 Tel: <a href="tel:093354756" className="text-blue-400 hover:text-blue-300">09/335 47 56</a></p>
                  <p>🚨 Noodnummer: <a href="tel:0468113399" className="text-blue-400 hover:text-blue-300 font-bold">0468 11 33 99</a></p>
                </div>
                <div className="space-y-2">
                  <p>📧 <a href="mailto:info@ovl-slotenmaker.be" className="text-blue-400 hover:text-blue-300">info@ovl-slotenmaker.be</a></p>
                  <p>🏢 BTW: BE 0698.958.244</p>
                  <p>🕐 24/7 bereikbaar</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-2xl font-bold">Slotenmaker in de buurt van Wetteren</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { naam: 'Melle', slug: 'melle' },
                { naam: 'Laarne', slug: 'laarne' },
                { naam: 'Sint-Lievens-Houtem', slug: 'sint-lievens-houtem' },
                { naam: 'Erpe-Mere', slug: 'erpe-mere' },
                { naam: 'Wichelen', slug: 'wichelen' },
                { naam: 'Aalst', slug: 'aalst' },
                { naam: 'Dendermonde', slug: 'dendermonde' },
                { naam: 'Gent', slug: 'gent' },
              ].map((city) => (
                <Link key={city.slug} href={`/slotenmaker/${city.slug}`} className="rounded-full border border-slate-700/50 bg-slate-800/30 px-5 py-2 text-sm text-slate-300 no-underline transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white">
                  Slotenmaker {city.naam}
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
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Slotenmaker nodig in Wetteren?</h2>
            <p className="mb-8 text-lg text-blue-100">Bel ons nu — wij zijn 24/7 bereikbaar. Gevestigd in Wetteren, altijd dichtbij.</p>
            <a href="tel:0468113399" className="animate-pulse-glow inline-flex items-center gap-3 rounded-2xl bg-white px-12 py-6 text-2xl font-bold text-blue-600 shadow-2xl transition-all duration-300 hover:scale-105">
              📞 0468 11 33 99
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
