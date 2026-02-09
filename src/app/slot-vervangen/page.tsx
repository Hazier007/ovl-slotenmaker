import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Slot Vervangen — Slotenmaker Kristof PONNET | Wetteren',
  description: 'Bent u op zoek naar een betrouwbare slotenmaker om uw slot te vervangen? Kristof Ponnet uit Wetteren plaatst nieuwe sloten voor een eerlijke prijs. 24/7 bereikbaar. Bel 0468 11 33 99.',
}

export default function SlotVervangenPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Slot Vervangen',
    description: 'Professionele slotvervanging door slotenmaker Kristof PONNET uit Wetteren.',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Slotenmaker Kristof PONNET',
      telephone: '0468 11 33 99',
      email: 'info@ovl-slotenmaker.be',
      url: 'https://ovl-slotenmaker.be',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Koningin Astridlaan 54A',
        postalCode: 'B-9230',
        addressLocality: 'Wetteren',
        addressCountry: 'BE',
      },
      vatID: 'BE 0698.958.244',
    },
    areaServed: { '@type': 'State', name: 'Oost-Vlaanderen' },
    url: 'https://ovl-slotenmaker.be/slot-vervangen',
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-24 lg:px-8">
        <Image src="/images/Veiligheidscilinders-1.png" alt="Slot vervangen door slotenmaker PONNET" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/85 to-[#0a0e1a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Slot Vervangen</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            24/7 Beschikbaar
          </div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            <span className="gradient-text">Slot Vervangen</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Bent u op zoek naar een betrouwbare en professionele slotenmaker om uw slot te vervangen? Bij Kristof Ponnet uit Wetteren begrijpen we hoe belangrijk het is om uw huis, kantoor of bedrijfspand te beveiligen.
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
            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
              <p>
                Bent u op zoek naar een betrouwbare en professionele slotenmaker om uw slot te vervangen? Bij Kristof Ponnet uit Wetteren begrijpen we hoe belangrijk het is om uw huis, kantoor of bedrijfspand te beveiligen. Zo kan u door ons nieuwe sloten laten plaatsen voor een eerlijke prijs. Bovendien geniet u van een snelle service en maken we eveneens gebruik van gecertificeerde en gekeurde materialen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Waarom wij */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-bold">Waarom wij de beste keuze zijn</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Ons team heeft al heel wat klanten geholpen met het vervangen van hun sloten. Wij zijn <strong>24/7 bereikbaar</strong>, ook in het weekend en op feestdagen. Of u nu een verouderd slot wilt laten vervangen of een dringend probleem heeft — wij staan altijd voor u klaar.
              </p>
              <p>
                Wij kunnen uw oud slot vervangen door een geavanceerd slot met een <strong>speciale veiligheidssleutel</strong>. Dit type slot biedt extra bescherming tegen inbraak. Bovendien beslist u als klant zelf wie uw sleutel mag laten bijmaken — de duplicatie van de sleutel is volledig onder uw controle.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { icon: '🔒', title: 'Geavanceerde sloten', desc: 'Vervanging door sloten met speciale veiligheidssleutel' },
                { icon: '🕐', title: '24/7 Beschikbaar', desc: 'Dag en nacht bereikbaar, ook in weekends' },
                { icon: '🔑', title: 'Sleutelcontrole', desc: 'U beslist wie uw sleutel mag dupliceren' },
                { icon: '✅', title: 'Gecertificeerd', desc: 'Uitsluitend gekeurde materialen van topmerken' },
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

      {/* 24/7 Bereikbaar */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-bold">24/7 Bereikbaar</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Naast het vervangen van sloten bieden wij ook <strong>vrijblijvend veiligheidsadvies</strong> aan. Wij bekijken samen met u de zwakke punten van uw woning of bedrijfspand en adviseren u over de beste oplossingen.
              </p>
              <p>
                Onze diensten omvatten onder meer:
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { icon: '🪟', title: 'Raambeveiliging', desc: 'Professionele raamsloten en kierstandbegrenzers van ABUS', link: '/raambeveiliging-kiepraam' },
                { icon: '🛡️', title: 'Veiligheidsbeslag', desc: 'Anti-kerntrek beslag van HOPPE voor maximale bescherming', link: '/inbraakbeveiliging' },
                { icon: '🔧', title: 'Slot vervangen', desc: 'Alle types sloten vakkundig vervangen met gecertificeerde cilinders', link: '/slot-vervangen-voordeur' },
              ].map((item) => (
                <Link key={item.title} href={item.link} className="card-hover block no-underline">
                  <span className="mb-3 block text-3xl">{item.icon}</span>
                  <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                  <span className="mt-2 block text-sm font-medium text-blue-400">Meer info →</span>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ontdek onze diensten */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-3xl font-bold">Ontdek onze vele diensten</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '🔑', naam: 'Sleutel Bijmaken', slug: '/sleutel-bijmaken', desc: 'Sleutel kwijt of extra nodig? Wij maken elke sleutel vakkundig bij.' },
              { icon: '🛡️', naam: 'Inbraakbeveiliging', slug: '/inbraakbeveiliging', desc: 'Bescherm uw woning of bedrijf met professionele inbraakbeveiliging.' },
              { icon: '🪟', naam: 'Raambeveiliging', slug: '/raambeveiliging-kiepraam', desc: 'Kiepramen en dakramen beveiligen tegen inbraak.' },
              { icon: '🚪', naam: 'Deur Openen', slug: '/deur-openen', desc: 'Buitengesloten? Wij openen uw deur schadevrij, 24/7.' },
              { icon: '🔨', naam: 'Inbraakschade Herstellen', slug: '/inbraakschade-herstellen', desc: 'Slachtoffer van inbraak? Wij herstellen alle schade.' },
              { icon: '🏠', naam: 'Voordeurslot Vervangen', slug: '/slot-vervangen-voordeur', desc: 'Uw voordeurslot vervangen door een veiligheidscilinder.' },
            ].map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 80}>
                <Link href={d.slug} className="card-hover group flex h-full gap-4 no-underline">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-3xl transition-colors group-hover:bg-blue-500/20">
                    {d.icon}
                  </span>
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

      {/* Photos */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-2xl font-bold">Ons werk in beeld</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { src: '/images/Veiligheidscilinders-1.png', alt: 'Veiligheidscilinders' },
              { src: '/images/Meerpuntsluitingen-1.png', alt: 'Meerpuntsluitingen' },
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

      {/* Trust & Business Info */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-3xl font-bold">Waarom klanten voor ons kiezen</h2>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: '💰', title: 'Eerlijke prijsafspraken', desc: 'Geen verrassingen achteraf. U weet altijd vooraf wat de kosten zijn.' },
              { icon: '🏆', title: 'Kwaliteitsvol materiaal', desc: 'Wij werken uitsluitend met gecertificeerde en gekeurde materialen van DOM, ABUS en HOPPE.' },
              { icon: '💳', title: 'Veilig betalen', desc: 'Betaal gemakkelijk en veilig met Bancontact, Maestro, Visa of Mastercard.' },
            ].map((item) => (
              <ScrollReveal key={item.title}>
                <div className="card-hover text-center">
                  <span className="mb-3 block text-4xl">{item.icon}</span>
                  <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-slate-400">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={300}>
            <div className="mt-12 rounded-2xl border border-slate-800 bg-[#111827] p-8">
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

      {/* City links */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-2xl font-bold">Slot vervangen in uw regio</h2>
            <p className="mb-6 text-slate-400">Wij vervangen sloten in heel Oost-Vlaanderen. Enkele van onze werkgebieden:</p>
            <div className="flex flex-wrap gap-3">
              {['aalst', 'dendermonde', 'wetteren', 'gent', 'lokeren', 'zele', 'sint-niklaas', 'hamme'].map((city) => (
                <Link key={city} href={`/slotenmaker/${city}`} className="rounded-full border border-slate-700/50 bg-slate-800/30 px-5 py-2 text-sm text-slate-300 no-underline transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white">
                  Slotenmaker {city.charAt(0).toUpperCase() + city.slice(1).replace('-', ' ')}
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
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Slot vervangen? Bel ons nu!</h2>
            <p className="mb-8 text-lg text-blue-100">Wij zijn 24/7 bereikbaar voor het vakkundig vervangen van uw slot. Eerlijke prijzen, gecertificeerde materialen.</p>
            <a href="tel:0468113399" className="animate-pulse-glow inline-flex items-center gap-3 rounded-2xl bg-white px-12 py-6 text-2xl font-bold text-blue-600 shadow-2xl transition-all duration-300 hover:scale-105">
              📞 0468 11 33 99
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
