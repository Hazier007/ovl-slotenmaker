import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import ScrollReveal from '../components/ScrollReveal'

export const metadata: Metadata = {
  title: 'Inbraakbeveiliging | Slotenmaker Kristof PONNET',
  description: 'Professionele inbraakbeveiliging voor particulieren en bedrijven. Slotenmaker Kristof PONNET uit Wetteren — veiligheidssloten, cilinders, beslag en raambeveiliging. Bel 0468 11 33 99.',
}

export default function InbraakbeveiligingPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Inbraakbeveiliging',
    description: 'Professionele inbraakbeveiliging door slotenmaker Kristof PONNET uit Wetteren.',
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
    },
    areaServed: { '@type': 'State', name: 'Oost-Vlaanderen' },
    url: 'https://ovl-slotenmaker.be/inbraakbeveiliging',
  }

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pb-20 pt-24 lg:px-8">
        <Image src="/images/Inbraakbeveiliging-1.jpg" alt="Inbraakbeveiliging door slotenmaker PONNET" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/85 to-[#0a0e1a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto max-w-4xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Inbraakbeveiliging</span>
          </nav>

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            24/7 Beschikbaar
          </div>
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            <span className="gradient-text">Inbraakbeveiliging</span>
          </h1>
          <p className="max-w-2xl text-lg text-slate-300">
            Professionele inbraakbeveiliging voor particulieren, bedrijven en lokale besturen. Slotenmaker Kristof PONNET uit Wetteren beveiligt uw woning of pand met gecertificeerde materialen.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="tel:0468113399" className="btn-primary">📞 Bel Nu: 0468 11 33 99</a>
            <Link href="/contact" className="btn-secondary">Gratis Beveiligingsadvies</Link>
          </div>
        </div>
      </section>

      {/* Particulieren */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-bold">Inbraakbeveiliging voor particuliere klanten</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Veilig thuis zitten begint bij een goede beveiliging van uw deuren en ramen. Slotenmaker Kristof PONNET is uw specialist in mechanische inbraakbeveiliging voor particuliere woningen in Oost-Vlaanderen.
              </p>
              <p>
                Wij zijn leverancier van <strong>SECURITY TOOLS BV uit Wetteren</strong> en werken uitsluitend met gecertificeerde en gekeurde materialen. Of het nu gaat om veiligheidssloten, cilinders, veiligheidsbeslag of raambeveiliging — wij adviseren u over de beste oplossing voor uw situatie.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { src: '/images/Inbraakbeveiliging-1.jpg', alt: 'Inbraakbeveiliging installatie' },
                { src: '/images/Veiligheidsbeslag-1.jpg', alt: 'Veiligheidsbeslag' },
              ].map((photo) => (
                <div key={photo.src} className="img-zoom relative h-64 overflow-hidden rounded-2xl border border-slate-800">
                  <Image src={photo.src} alt={photo.alt} fill className="object-cover" />
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Bedrijven */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-bold">Inbraakbeveiliging voor bedrijven en lokale besturen</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Naast particulieren helpen wij ook <strong>bedrijven, zelfstandigen, gerechtsdeurwaarders, openbare besturen</strong> en <strong>politiediensten</strong> met professionele inbraakbeveiliging. Wij begrijpen dat elk pand andere beveiligingsnoden heeft en bieden dan ook oplossingen op maat.
              </p>
              <p>
                Van een klein kantoor tot een groot bedrijfspand — wij voeren een grondige inspectie uit en adviseren u over de meest geschikte beveiligingsmaatregelen. Onze ervaring met uiteenlopende klanten garandeert een deskundige aanpak.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150}>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {['Bedrijven & KMO\'s', 'Zelfstandigen', 'Gerechtsdeurwaarders', 'Openbare besturen', 'Politiediensten', 'Immokantoren'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-800 bg-[#111827] p-4">
                  <span className="text-blue-400">✓</span>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Over Kristof */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-3xl font-bold">Kristof PONNET — vaste waarde in mechanische beveiliging</h2>
            <div className="space-y-4 text-lg text-slate-300">
              <p>
                Kristof PONNET is ondertussen een <strong>vaste waarde in het mechanisch beveiligingslandschap</strong> van Oost-Vlaanderen. Wij zijn specialisten in veiligheidssloten, cilinders, beslag en raambeveiliging.
              </p>
              <p>
                Maximale klantentevredenheid is ons streefdoel. Niet voor niets is <strong>mondelinge reclame</strong> onze belangrijkste vorm van reclame. Tevreden klanten vertellen het door — en dat is het mooiste compliment dat wij kunnen krijgen.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tips */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-3xl font-bold">Tips om inbrekers buiten te houden</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: '💡', title: 'Verlichting', desc: 'Zorg voor voldoende verlichting rond uw woning. Inbrekers opereren het liefst in het donker. Gebruik bewegingsmelders en tijdschakelaars.' },
              { icon: '🏠', title: 'Maak geen etalage', desc: 'Laat geen waardevolle spullen zichtbaar liggen. Dure elektronica of sieraden die zichtbaar zijn vanuit de straat trekken inbrekers aan.' },
              { icon: '👀', title: 'Bewoonde indruk', desc: 'Laat uw woning er altijd bewoond uitzien, ook als u op vakantie bent. Gebruik tijdschakelaars voor verlichting en laat uw brievenbus legen.' },
              { icon: '🔒', title: 'Sluit ramen en deuren', desc: 'Sluit altijd alle ramen en deuren af als u weggaat, ook bij kort afwezigheid. Een kiepraam is voor inbrekers een open uitnodiging.' },
            ].map((tip, i) => (
              <ScrollReveal key={tip.title} delay={i * 100}>
                <div className="card-hover h-full">
                  <span className="mb-3 block text-4xl">{tip.icon}</span>
                  <h3 className="mb-2 font-bold text-white">{tip.title}</h3>
                  <p className="text-sm text-slate-400">{tip.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Warning malafide */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="rounded-2xl border border-yellow-500/30 bg-yellow-500/5 p-8">
              <h2 className="mb-4 text-2xl font-bold text-yellow-400">⚠️ Opgelet voor malafide slotenmakers</h2>
              <div className="space-y-4 text-lg text-slate-300">
                <p>
                  Helaas zijn er slotenmakers actief die onredelijke prijzen aanrekenen en slechte kwaliteit leveren. Zij adverteren vaak met lage instapprijzen maar rekenen achteraf torenhoge supplementen aan.
                </p>
                <p>
                  Kies altijd voor een <strong>lokale, betrouwbare slotenmaker</strong> met een vast adres en BTW-nummer. Slotenmaker Kristof PONNET is gevestigd aan de Koningin Astridlaan 54A in Wetteren (BTW BE 0698.958.244) en staat garant voor eerlijke prijzen en kwaliteitsvol werk.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Diensten links */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-8 text-3xl font-bold">Ontdek onze diensten</h2>
          </ScrollReveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '🔧', naam: 'Slot Vervangen', slug: '/slot-vervangen', desc: 'Defect slot of sleutel afgebroken? Wij vervangen elk type slot.' },
              { icon: '🔑', naam: 'Sleutel Bijmaken', slug: '/sleutel-bijmaken', desc: 'Sleutel kwijt of extra nodig? Wij maken elke sleutel bij.' },
              { icon: '🪟', naam: 'Raambeveiliging', slug: '/raambeveiliging-kiepraam', desc: 'Kiepramen en dakramen beveiligen met ABUS raamsloten.' },
              { icon: '🚪', naam: 'Deur Openen', slug: '/deur-openen', desc: 'Buitengesloten? Wij openen uw deur schadevrij, 24/7.' },
              { icon: '🔨', naam: 'Inbraakschade Herstellen', slug: '/inbraakschade-herstellen', desc: 'Alle schade aan sloten en deuren vakkundig hersteld.' },
              { icon: '🏠', naam: 'Voordeurslot Vervangen', slug: '/slot-vervangen-voordeur', desc: 'Upgrade naar een veiligheidscilinder voor uw voordeur.' },
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

      {/* City links */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="mb-6 text-2xl font-bold">Inbraakbeveiliging in uw regio</h2>
            <div className="flex flex-wrap gap-3">
              {[
                { naam: 'Aalst', slug: 'aalst' },
                { naam: 'Dendermonde', slug: 'dendermonde' },
                { naam: 'Wetteren', slug: 'wetteren' },
                { naam: 'Gent', slug: 'gent' },
                { naam: 'Lokeren', slug: 'lokeren' },
                { naam: 'Sint-Niklaas', slug: 'sint-niklaas' },
                { naam: 'Zele', slug: 'zele' },
                { naam: 'Hamme', slug: 'hamme' },
              ].map((city) => (
                <Link key={city.slug} href={`/slotenmaker/${city.slug}`} className="rounded-full border border-slate-700/50 bg-slate-800/30 px-5 py-2 text-sm text-slate-300 no-underline transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white">
                  Slotenmaker {city.naam}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Business info + CTA */}
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

      {/* CTA */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Inbraakbeveiliging nodig?</h2>
            <p className="mb-8 text-lg text-blue-100">Bel ons nu voor een vrijblijvend veiligheidsadvies. Wij zijn 24/7 bereikbaar.</p>
            <a href="tel:0468113399" className="animate-pulse-glow inline-flex items-center gap-3 rounded-2xl bg-white px-12 py-6 text-2xl font-bold text-blue-600 shadow-2xl transition-all duration-300 hover:scale-105">
              📞 0468 11 33 99
            </a>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
