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

const reviews = [
  { name: 'Gudrun Evertsz', text: 'Mezelf per ongeluk buitengesloten, Kristof heeft dit snel en vakkundig opgelost. Aanrader!' },
  { name: 'Katrien Ocquet', text: 'Correcte en snelle service.' },
  { name: 'Jurgen Vertongen', text: 'Snelle service. Uitgevoerd zonder schade te maken.' },
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0e1a]/95 via-[#0a0e1a]/80 to-[#0a0e1a]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-24 lg:flex-row lg:px-8">
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

            <p className="mb-8 animate-fade-in-up text-lg text-slate-400 delay-200 md:text-xl" style={{ animationFillMode: 'both' }}>
              Kristof Ponnet uit Wetteren — uw lokale meesterslotenmaker.
              24/7 bereikbaar voor spoedgevallen, slotwissel en inbraakbeveiliging.
            </p>

            <div className="mb-8 flex animate-fade-in-up flex-col items-center gap-4 delay-300 sm:flex-row lg:justify-start" style={{ animationFillMode: 'both' }}>
              <a href="tel:0468113399" className="btn-primary w-full sm:w-auto">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Bel Nu: 0468 11 33 99
              </a>
              <Link href="/contact" className="btn-secondary w-full sm:w-auto">
                Gratis Offerte
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start">
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

            {/* Google Reviews — IN de hero */}
            <div className="animate-fade-in-up delay-500" style={{ animationFillMode: 'both' }}>
              <div className="flex flex-col items-center gap-6 lg:flex-row lg:items-start">
                <div className="flex flex-shrink-0 flex-col items-center lg:items-start">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="h-5 w-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                    ))}
                  </div>
                  <span className="mt-1 text-xs text-slate-500"><strong className="text-slate-300">319 reviews</strong> op Google</span>
                </div>
                <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                  {reviews.map((r, i) => (
                    <div key={i} className="max-w-[220px] rounded-lg border border-slate-700/40 bg-slate-800/40 px-3 py-2.5 backdrop-blur-sm">
                      <div className="mb-1 flex items-center gap-1.5">
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/20 text-[10px] font-bold text-blue-400">{r.name.charAt(0)}</div>
                        <span className="text-xs font-medium text-slate-300">{r.name}</span>
                        <div className="flex gap-0.5">{[...Array(5)].map((_, j) => (<svg key={j} className="h-2.5 w-2.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>))}</div>
                      </div>
                      <p className="text-[11px] leading-snug text-slate-400">&ldquo;{r.text}&rdquo;</p>
                    </div>
                  ))}
                </div>
              </div>
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
                <Link href={`/${d.slug}`} className="card-hover group relative block h-full overflow-hidden rounded-2xl border border-slate-800 bg-[#111827] no-underline transition-all">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={serviceImages[d.slug] || '/images/Slotenmaker-Oost-Vlaanderen.jpg'}
                      alt={d.naam}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-[#111827]/40 to-transparent" />
                    <span className="absolute bottom-3 left-4 text-4xl drop-shadow-lg">{d.icon}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="mb-2 text-lg font-bold text-white">{d.naam}</h3>
                    <p className="mb-3 text-sm text-slate-400">{d.shortDesc}</p>
                    <span className="text-sm font-medium text-blue-400 transition group-hover:text-blue-300">
                      Meer info →
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section bg-[#111827]/30">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal>
            <div className="mb-16 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Hoe werkt het</p>
              <h2 className="text-3xl font-bold md:text-5xl">In 3 Stappen Geholpen</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-400">Van telefoontje tot oplossing — snel, efficiënt en professioneel.</p>
            </div>
          </ScrollReveal>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { step: '01', title: 'Bel Ons', desc: 'Neem contact op via telefoon of het contactformulier. We zijn 24/7 bereikbaar, ook in het weekend en op feestdagen. Beschrijf kort uw probleem.', icon: '📞' },
              { step: '02', title: 'Wij Komen Langs', desc: 'Onze slotenmaker is meestal binnen 30 minuten ter plaatse. We bekijken de situatie, geven een eerlijke prijsinschatting en gaan direct aan de slag.', icon: '🚗' },
              { step: '03', title: 'Probleem Opgelost', desc: 'Wij lossen uw slotprobleem vakkundig op met gecertificeerde materialen. U betaalt pas na afloop. Contant, Bancontact of overschrijving.', icon: '✅' },
            ].map((item, i) => (
              <ScrollReveal key={item.step} delay={i * 150}>
                <div className="group relative rounded-2xl border border-slate-800 bg-[#111827]/80 p-8 text-center transition-all hover:border-blue-500/30 hover:bg-[#111827]">
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white shadow-lg shadow-blue-500/30">
                      {item.step}
                    </div>
                  </div>
                  <div className="mb-4 mt-4 text-5xl">{item.icon}</div>
                  <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{item.desc}</p>
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
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-blue-500/5 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-800">
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

            <ScrollReveal direction="right">
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Over ons</p>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">Waarom Slotenmaker PONNET?</h2>
                <p className="mb-4 text-slate-400">
                  Kristof PONNET is uw betrouwbare slotenmaker, gevestigd in Wetteren en actief in heel Oost-Vlaanderen.
                  Met jarenlange ervaring en een passie voor veiligheid bieden wij een complete service: van spoedopeningen tot
                  professionele inbraakbeveiliging.
                </p>
                <p className="mb-8 text-slate-400">
                  Wij werken uitsluitend met gecertificeerde materialen van topmerken als DOM, ABUS en HOPPE. 
                  Onze vakmannen zijn opgeleid om elk slotprobleem op te lossen — van een simpele sleutelduplicatie 
                  tot het beveiligen van een volledig bedrijfspand. Kwaliteit en klanttevredenheid staan bij ons altijd voorop.
                </p>
                <div className="mb-8 grid grid-cols-2 gap-4">
                  {[
                    '24/7 beschikbaar',
                    'Gecertificeerde materialen',
                    'Lokaal uit Wetteren',
                    'Eerlijke prijzen',
                    'Schadevrije openingen',
                    'Snelle interventie',
                    'BTW-geregistreerd',
                    '319 Google reviews',
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

      {/* ===== EMERGENCY SECTION ===== */}
      <section className="section bg-[#111827]/30">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <ScrollReveal>
              <div>
                <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-red-400">Spoedgeval?</p>
                <h2 className="mb-6 text-3xl font-bold md:text-4xl">Buitengesloten? <span className="gradient-text">Geen Paniek.</span></h2>
                <p className="mb-4 text-slate-400">
                  Uzelf buitengesloten? Sleutel verloren? Slot geblokkeerd na een inbraakpoging? 
                  Onze spoedservice is 24 uur per dag, 7 dagen per week beschikbaar. 
                  Ook op feestdagen en in het weekend.
                </p>
                <p className="mb-6 text-slate-400">
                  Wij garanderen een aankomsttijd van gemiddeld <strong className="text-white">30 minuten</strong> in heel Oost-Vlaanderen. 
                  Onze slotenmakers openen uw deur schadevrij met professioneel gereedschap. 
                  Geen beschadigd deurkozijn, geen gebroken slot — gewoon vakwerk.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a href="tel:0468113399" className="btn-primary">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    Bel Nu: 0468 11 33 99
                  </a>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '🕐', title: '30 min', desc: 'Gemiddelde aankomsttijd' },
                  { icon: '🔧', title: 'Schadevrij', desc: 'Professionele opening' },
                  { icon: '💳', title: 'Bancontact', desc: 'Betaal hoe u wilt' },
                  { icon: '📋', title: 'Factuur', desc: 'BTW-conforme facturen' },
                ].map((item) => (
                  <div key={item.title} className="rounded-xl border border-slate-800 bg-[#111827]/80 p-5 text-center">
                    <div className="mb-2 text-3xl">{item.icon}</div>
                    <div className="text-lg font-bold text-white">{item.title}</div>
                    <div className="text-xs text-slate-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="section">
        <div className="mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Veelgestelde vragen</p>
              <h2 className="text-3xl font-bold md:text-5xl">FAQ</h2>
            </div>
          </ScrollReveal>
          <div className="space-y-4">
            {[
              { q: 'Hoe snel kan een slotenmaker ter plaatse zijn?', a: 'Wij zijn gemiddeld binnen 30 minuten bij u ter plaatse, afhankelijk van uw locatie in Oost-Vlaanderen. Bij spoedgevallen geven wij altijd prioriteit.' },
              { q: 'Wat kost het om een deur te laten openen?', a: 'De kosten hangen af van het type slot en de complexiteit. Wij geven altijd vooraf een eerlijke prijsinschatting. Geen verborgen kosten, geen verrassingen achteraf.' },
              { q: 'Zijn jullie ook in het weekend beschikbaar?', a: 'Ja, wij zijn 24 uur per dag, 7 dagen per week beschikbaar. Ook op feestdagen kunt u ons bereiken voor spoedgevallen.' },
              { q: 'Kunnen jullie een deur openen zonder schade?', a: 'In de meeste gevallen openen wij uw deur volledig schadevrij met professioneel gereedschap. Mocht een destructieve opening nodig zijn, bespreken wij dit altijd eerst met u.' },
              { q: 'Welke merken gebruiken jullie?', a: 'Wij werken met gerenommeerde merken als DOM, ABUS en HOPPE. Dit zijn Europese topmerken op het gebied van slotenmakerij en beveiliging. Zo bent u verzekerd van de beste kwaliteit.' },
              { q: 'Plaatsen jullie ook inbraakbeveiliging?', a: 'Absoluut. Naast het openen en vervangen van sloten, zijn wij gespecialiseerd in inbraakbeveiliging: veiligheidscilinders, meerpuntsluitingen, raambeveiliging en meer.' },
            ].map((faq, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <details className="group rounded-xl border border-slate-800 bg-[#111827]/50 p-6 transition-all hover:border-blue-500/30">
                  <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-white">
                    {faq.q}
                    <svg className="h-5 w-5 flex-shrink-0 text-blue-400 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                  </summary>
                  <p className="mt-4 text-slate-400">{faq.a}</p>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICE AREA ===== */}
      <section className="section relative overflow-hidden bg-[#111827]/30">
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
