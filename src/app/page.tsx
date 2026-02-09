import Link from 'next/link'
import diensten from '@/data/diensten.json'
import bedrijfsinfo from '@/data/bedrijfsinfo.json'
import locaties from '@/data/locaties.json'

export default function HomePage() {
  const gemeentes = locaties.filter((l) => !('isDeelgemeente' in l))

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[90vh] flex-col items-center justify-center px-4 text-center lg:px-8">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#0f1629] to-[#0a0e1a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_70%)]" />
        
        <div className="relative z-10 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400" />
            24/7 Beschikbaar — ook in het weekend
          </div>

          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Slotenmaker voor gans{' '}
            <span className="gradient-text">Oost-Vlaanderen</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400 md:text-xl">
            Kristof Ponnet uit Wetteren — uw lokale meesterslotenmaker.
            24/7 bereikbaar voor spoedgevallen, slotwissel en inbraakbeveiliging.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a href="tel:0468113399" className="btn-primary w-full sm:w-auto">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Bel Nu: 0468 11 33 99
            </a>
            <Link href="/contact" className="btn-secondary w-full sm:w-auto">
              Gratis Offerte
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {[
              { icon: '⏰', text: '24/7 Service' },
              { icon: '✅', text: 'Schadevrij' },
              { icon: '🏆', text: 'Gecertificeerd' },
              { icon: '⚡', text: 'Snelle Interventie' },
            ].map((badge) => (
              <div key={badge.text} className="trust-badge">
                <span>{badge.icon}</span>
                <span>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diensten Grid */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Wat wij doen</p>
            <h2 className="text-3xl font-bold md:text-4xl">Onze Diensten</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {diensten.map((d) => (
              <Link key={d.slug} href={`/${d.slug}`} className="card-hover group no-underline">
                <span className="mb-4 block text-4xl">{d.icon}</span>
                <h3 className="mb-2 text-xl font-bold text-white">{d.naam}</h3>
                <p className="mb-4 text-sm text-slate-400">{d.shortDesc}</p>
                <span className="text-sm font-medium text-blue-400 transition group-hover:text-blue-300">
                  Meer info →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Onze troeven</p>
            <h2 className="text-3xl font-bold md:text-4xl">Waarom Slotenmaker PONNET?</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: '🕐', title: '24/7 Spoedservice', desc: 'Dag en nacht bereikbaar, ook in het weekend en op feestdagen. Wij staan altijd voor u klaar.' },
              { icon: '🚪', title: 'Schadevrij Deur Openen', desc: 'Professionele openingstechnieken waarmee we uw deur openen zonder schade aan slot of kozijn.' },
              { icon: '🔒', title: 'Gecertificeerde Materialen', desc: 'Wij werken uitsluitend met topmerken: DOM, ABUS en HOPPE. Kwaliteit die u kunt vertrouwen.' },
              { icon: '📍', title: 'Lokaal uit Wetteren', desc: 'Gevestigd in Wetteren, snel ter plaatse in heel Oost-Vlaanderen. Korte aanrijtijden gegarandeerd.' },
              { icon: '👨‍🔧', title: 'Jarenlange Ervaring', desc: 'Vakmanschap en expertise opgebouwd door jarenlange ervaring in het slotenmakersvak.' },
              { icon: '💰', title: 'Eerlijke Prijzen', desc: 'Transparante tarieven zonder verborgen kosten. U weet vooraf waar u aan toe bent.' },
            ].map((usp) => (
              <div key={usp.title} className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-2xl">{usp.icon}</span>
                <div>
                  <h3 className="mb-1 font-bold">{usp.title}</h3>
                  <p className="text-sm text-slate-400">{usp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="section">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Werkgebied</p>
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Actief in heel Oost-Vlaanderen</h2>
            <p className="mx-auto max-w-2xl text-slate-400">
              Van Gent tot Aalst, van Sint-Niklaas tot Oudenaarde — wij komen naar u toe.
              Snel ter plaatse in elke gemeente.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {gemeentes.map((l) => (
              <Link
                key={l.slug}
                href={`/slotenmaker/${l.slug}`}
                className="rounded-full border border-slate-700/50 bg-slate-800/30 px-4 py-1.5 text-sm text-slate-300 no-underline transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white"
              >
                {l.naam}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Brands */}
      <section className="section bg-[#111827]/50">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Vertrouwd</p>
          <h2 className="mb-4 text-3xl font-bold">Officieel Erkende Slotenmaker</h2>
          <p className="mb-8 text-slate-400">
            Geregistreerd bedrijf met BTW-nummer {bedrijfsinfo.btw}. Partner van Security Tools BV, Wetteren.
          </p>
          <div className="mb-8 flex justify-center gap-6">
            {bedrijfsinfo.merken.map((m) => (
              <div key={m} className="glow flex h-20 w-28 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 text-xl font-black tracking-wider text-white">
                {m}
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-500">Wij werken uitsluitend met gecertificeerde materialen van Europese topmerken.</p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Dringend een slotenmaker nodig?
          </h2>
          <p className="mb-8 text-lg text-blue-100">
            Wij zijn 24/7 bereikbaar voor al uw slotenmaker-diensten in Oost-Vlaanderen.
            Snel ter plaatse, eerlijke prijzen.
          </p>
          <a
            href="tel:0468113399"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-10 py-5 text-2xl font-bold text-blue-600 shadow-2xl transition hover:bg-slate-100"
          >
            📞 0468 11 33 99
          </a>
        </div>
      </section>
    </main>
  )
}
