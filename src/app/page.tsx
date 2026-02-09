import Link from 'next/link'
import Image from 'next/image'
import diensten from '@/data/diensten.json'
import locaties from '@/data/locaties.json'
import ScrollReveal from './components/ScrollReveal'
import CounterAnimation from './components/CounterAnimation'

const serviceImages: Record<string, string> = {
  'slot-vervangen': '/images/Veiligheidscilinders-1.png',
  'sleutel-bijmaken': '/images/dom-sleutelservice-sleutels-mobile.jpg',
  'inbraakbeveiliging': '/images/Inbraakbeveiliging-1.jpg',
  'raambeveiliging-kiepraam': '/images/ABUS-DF88_Toepassing-dakramen.jpg',
  'deur-openen': '/images/Slotenmaker-PONNET-inbraakbeveiliging.jpg',
  'inbraakschade-herstellen': '/images/Slotenmaker-herstellen-schade-1.jpg',
  'slot-vervangen-voordeur': '/images/HOPPE-veiligheidsbeslag-kerntrekbeveiliging-1.jpg',
}

const galleryImages = [
  { src: '/images/Slotenmaker-PONNET-inbraakbeveiliging.jpg', alt: 'Inbraakbeveiliging door Slotenmaker PONNET', span: 'col-span-2 row-span-2' },
  { src: '/images/Inbraakbeveiliging-1.jpg', alt: 'Professionele inbraakbeveiliging', span: 'col-span-1 row-span-1' },
  { src: '/images/Kluis-DE-RAAT-PT1-met-sleutel.-450jpg.jpg', alt: 'DE RAAT kluis met sleutel', span: 'col-span-1 row-span-1' },
  { src: '/images/Slotenmaker-herstellen-schade-1.jpg', alt: 'Herstellen van inbraakschade', span: 'col-span-1 row-span-2' },
  { src: '/images/ABUS-DF88_Toepassing-dakramen.jpg', alt: 'ABUS dakraam beveiliging', span: 'col-span-1 row-span-1' },
  { src: '/images/Veiligheidscilinders-1.png', alt: 'Veiligheidscilinders', span: 'col-span-1 row-span-1' },
]

export default function HomePage() {
  const gemeentes = locaties.filter((l) => !('isDeelgemeente' in l))

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/Gevonden-sleutel-1300px-compr.jpg"
          alt="Slotenmaker achtergrond"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/80 to-[#0a0e1a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-32 lg:flex-row lg:px-8">
          {/* Text side */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
              24/7 Beschikbaar — ook in het weekend
            </div>

            <h1 className="mb-6 animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
              Uw Slotenmaker in{' '}
              <span className="gradient-text">Oost-Vlaanderen</span>
            </h1>

            <p className="mb-10 animate-fade-in-up text-lg text-slate-400 delay-200 md:text-xl" style={{ animationFillMode: 'both' }}>
              Kristof Ponnet uit Wetteren — uw lokale meesterslotenmaker.
              24/7 bereikbaar voor spoedgevallen, slotwissel en inbraakbeveiliging.
            </p>

            <div className="flex animate-fade-in-up flex-col items-center gap-4 delay-300 sm:flex-row lg:justify-start" style={{ animationFillMode: 'both' }}>
              <a href="tel:0468113399" className="btn-primary w-full sm:w-auto">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Bel Nu: 0468 11 33 99
              </a>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                Gratis Offerte
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              {[
                { icon: '🕐', text: '24/7 Service' },
                { icon: '🛡️', text: 'Schadevrij' },
                { icon: '✅', text: 'Gecertificeerd' },
                { icon: '⚡', text: 'Snelle Interventie' },
              ].map((badge, i) => (
                <div key={badge.text} className={`trust-badge animate-fade-in-up delay-${(i + 4) * 100}`} style={{ animationFillMode: 'both' }}>
                  <span>{badge.icon}</span>
                  <span>{badge.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Kristof photo */}
          <div className="hidden flex-shrink-0 lg:block">
            <div className="relative">
              <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent blur-2xl" />
              <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-blue-500/30 shadow-2xl">
                <Image
                  src="/images/Slotenmaker-Kristof-PONNET.jpg"
                  alt="Slotenmaker Kristof PONNET"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-blue-500 px-6 py-2 text-sm font-bold text-white shadow-lg">
                Kristof PONNET
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="animate-scroll-down flex flex-col items-center gap-2 text-slate-500">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7" /></svg>
          </div>
        </div>
      </section>

      {/* ===== GOOGLE REVIEWS ===== */}
      <section className="relative z-10 -mt-1 bg-gradient-to-b from-[#0a0e1a] to-[#0f1520] py-10">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-12">
            {/* Score */}
            <div className="flex flex-shrink-0 flex-col items-center text-center">
              <span className="text-lg font-extrabold uppercase tracking-wider text-white">Uitstekend</span>
              <div className="my-2 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <span className="text-sm text-slate-400">Gebaseerd op <strong className="text-white">319 recensies</strong></span>
              <svg className="mt-2 h-7" viewBox="0 0 272 92" xmlns="http://www.w3.org/2000/svg"><text x="0" y="70" fill="white" fontSize="72" fontFamily="Arial, sans-serif" fontWeight="bold">Google</text></svg>
            </div>

            {/* Reviews carousel */}
            <div className="flex flex-1 gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {[
                { name: 'Gudrun Evertsz', time: '3 weken geleden', text: 'Mezelf per ongeluk buitengesloten, Kristof heeft dit snel en vakkundig opgelost. Aanrader!', rating: 5 },
                { name: 'Katrien Ocquet', time: '3 weken geleden', text: 'Correcte en snelle service.', rating: 5 },
                { name: 'Jurgen Vertongen', time: '3 weken geleden', text: 'Snelle service. Uitgevoerd zonder schade te maken.', rating: 5 },
                { name: 'Marc De Wilde', time: '1 maand geleden', text: 'Zeer professioneel en vriendelijk. Slot vervangen binnen het uur. Top service!', rating: 5 },
                { name: 'Sofie Janssens', time: '1 maand geleden', text: 'Kristof was er binnen 20 minuten. Deur schadevrij geopend. Absolute aanrader.', rating: 5 },
              ].map((review, i) => (
                <div key={i} className="glass flex min-w-[280px] max-w-[300px] flex-shrink-0 flex-col gap-3 rounded-xl p-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/20 text-sm font-bold text-blue-400">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="flex items-center gap-1 text-xs text-slate-500">
                        {review.time}
                        <svg className="h-3.5 w-3.5 text-blue-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, j) => (
                      <svg key={j} className="h-4 w-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-300">&ldquo;{review.text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Wat wij doen</p>
              <h2 className="text-3xl font-bold md:text-5xl">Onze Diensten</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">Professionele slotenmaker-diensten met gecertificeerde materialen van DOM, ABUS en HOPPE.</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {diensten.map((d, i) => (
              <ScrollReveal key={d.slug} delay={i * 100}>
                <Link href={`/${d.slug}`} className="card-hover img-zoom group relative block h-full overflow-hidden no-underline">
                  <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg">
                    <Image
                      src={serviceImages[d.slug] || '/images/Slotenmaker-Oost-Vlaanderen.jpg'}
                      alt={d.naam}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] to-transparent" />
                    <span className="absolute bottom-3 left-3 text-4xl drop-shadow-lg">{d.icon}</span>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">{d.naam}</h3>
                  <p className="mb-4 text-sm text-slate-400">{d.shortDesc}</p>
                  <span className="text-sm font-medium text-blue-400 transition group-hover:text-blue-300">
                    Meer info →
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PHOTO GALLERY ===== */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Portfolio</p>
              <h2 className="text-3xl font-bold md:text-5xl">Ons Werk in Beeld</h2>
            </div>
          </ScrollReveal>
          <div className="grid auto-rows-[200px] grid-cols-2 gap-4 md:grid-cols-3 lg:auto-rows-[250px]">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={img.src} delay={i * 100} className={img.span}>
                <div className="img-zoom group relative h-full w-full overflow-hidden rounded-2xl">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/20 transition-colors duration-300 group-hover:bg-black/10" />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-sm font-medium text-white">{img.alt}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT / TRUST ===== */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Photo side */}
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-blue-500/5 blur-3xl" />
                <div className="img-zoom relative overflow-hidden rounded-3xl border border-slate-800">
                  <Image
                    src="/images/Slotenmaker_Ponnet-600px.jpg"
                    alt="Kristof Ponnet aan het werk"
                    width={600}
                    height={800}
                    className="h-auto w-full object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>

            {/* Text side */}
            <ScrollReveal direction="right">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Over ons</p>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">Waarom Slotenmaker PONNET?</h2>
                <p className="mb-8 text-lg text-slate-400">
                  Kristof PONNET is uw betrouwbare slotenmaker, gevestigd in Wetteren en actief in heel Oost-Vlaanderen.
                  Met jarenlange ervaring en een passie voor veiligheid bieden wij een complete service: van spoedopeningen tot
                  professionele inbraakbeveiliging.
                </p>
                <div className="mb-8 grid grid-cols-2 gap-4">
                  {[
                    '24/7 beschikbaar',
                    'Gecertificeerde materialen',
                    'Lokaal uit Wetteren',
                    'Eerlijke prijzen',
                    'Schadevrije openingen',
                    'Snelle interventie',
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <span className="mt-0.5 text-blue-400">✓</span>
                      <span className="text-sm text-slate-300">{item}</span>
                    </div>
                  ))}
                </div>

                {/* Brand logos */}
                <div className="flex flex-wrap items-center gap-6">
                  <Image src="/images/DOM-slotenmaker-PONNET.png" alt="DOM partner" width={120} height={50} className="h-12 w-auto opacity-80 transition hover:opacity-100" />
                  <Image src="/images/Merken.jpg" alt="Merken slotenmaker PONNET" width={200} height={50} className="h-12 w-auto rounded opacity-80 transition hover:opacity-100" />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Counters */}
          <div className="mt-20 grid grid-cols-2 gap-6 lg:grid-cols-4">
            {[
              { end: 500, suffix: '+', label: 'Tevreden Klanten' },
              { end: 24, suffix: '/7', label: 'Beschikbaarheid' },
              { end: 15, suffix: '+', label: 'Jaar Ervaring' },
              { end: 65, suffix: '+', label: 'Gemeenten' },
            ].map((stat) => (
              <ScrollReveal key={stat.label}>
                <div className="rounded-2xl border border-slate-800 bg-[#111827] p-8 text-center">
                  <div className="mb-2 text-4xl font-extrabold text-blue-400">
                    <CounterAnimation end={stat.end} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-slate-400">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#111827]/50 to-[#0a0e1a]" />
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Werkgebied</p>
              <h2 className="mb-4 text-3xl font-bold md:text-5xl">Actief in heel Oost-Vlaanderen</h2>
              <p className="mx-auto max-w-2xl text-slate-400">
                Van Gent tot Aalst, van Sint-Niklaas tot Oudenaarde — wij komen naar u toe.
                Snel ter plaatse in elke gemeente.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <div className="flex flex-wrap justify-center gap-2">
              {gemeentes.map((l) => (
                <Link
                  key={l.slug}
                  href={`/slotenmaker/${l.slug}`}
                  className="rounded-full border border-slate-700/50 bg-slate-800/30 px-4 py-2 text-sm text-slate-300 no-underline transition-all duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white hover:shadow-lg hover:shadow-blue-500/10"
                >
                  {l.naam}
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-800" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.3),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="mb-4 text-3xl font-bold text-white md:text-5xl">
              Dringend een slotenmaker nodig?
            </h2>
            <p className="mb-10 text-lg text-blue-100">
              Wij zijn 24/7 bereikbaar voor al uw slotenmaker-diensten in Oost-Vlaanderen.
              Snel ter plaatse, eerlijke prijzen.
            </p>
            <a
              href="tel:0468113399"
              className="animate-pulse-glow inline-flex items-center gap-3 rounded-2xl bg-white px-12 py-6 text-3xl font-bold text-blue-600 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-slate-50"
            >
              📞 0468 11 33 99
            </a>
            <p className="mt-6 text-sm text-blue-200">Gratis advies • Geen voorrijkosten • Binnen het uur ter plaatse</p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  )
}
