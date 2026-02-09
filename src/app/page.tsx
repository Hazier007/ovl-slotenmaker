import Link from 'next/link'
import diensten from '@/data/diensten.json'
import bedrijfsinfo from '@/data/bedrijfsinfo.json'
import locaties from '@/data/locaties.json'

export default function HomePage() {
  const gemeentes = locaties.filter((l) => !('isDeelgemeente' in l))

  return (
    <main>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0e1a] via-[#111827] to-[#0a0e1a]" />
        <div className="relative z-10 max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#4668b0]">
            24/7 Beschikbaar
          </p>
          <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
            Slotenmaker voor gans{' '}
            <span className="text-[#4668b0]">Oost-Vlaanderen</span>
          </h1>
          <p className="mb-8 text-lg text-slate-400">
            Buitengesloten? Slot defect? Inbraakbeveiliging nodig? Kristof
            PONNET helpt u snel en vakkundig, dag en nacht.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`tel:${bedrijfsinfo.telefoon.replace(/\s/g, '')}`}
              className="rounded-lg bg-[#4668b0] px-8 py-4 text-lg font-bold text-white transition hover:bg-[#5b7fd4]"
            >
              Bel {bedrijfsinfo.telefoon}
            </a>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-600 px-8 py-4 text-lg font-bold text-white transition hover:border-[#4668b0]"
            >
              Contact
            </Link>
          </div>
        </div>
      </section>

      {/* Diensten */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-12 text-center text-3xl font-bold">Onze Diensten</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {diensten.map((d) => (
            <div
              key={d.slug}
              className="rounded-xl border border-slate-800 bg-[#111827] p-6 transition hover:border-[#4668b0]"
            >
              <span className="mb-3 block text-3xl">{d.icon}</span>
              <h3 className="mb-2 text-xl font-bold">{d.naam}</h3>
              <p className="text-slate-400">{d.shortDesc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Werkgebied */}
      <section className="bg-[#111827] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-6 text-center text-3xl font-bold">
            Actief in heel Oost-Vlaanderen
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-slate-400">
            Van Gent tot Aalst, van Sint-Niklaas tot Oudenaarde — wij komen naar
            u toe. Snel ter plaatse in elke gemeente.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {gemeentes.map((l) => (
              <Link
                key={l.slug}
                href={`/slotenmaker/${l.slug}`}
                className="rounded-full border border-slate-700 px-3 py-1 text-sm text-slate-300 transition hover:border-[#4668b0] hover:text-white"
              >
                {l.naam}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="mb-8 text-3xl font-bold">Waarom kiezen voor ons?</h2>
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="mb-2 text-4xl">🏢</p>
            <h3 className="mb-1 font-bold">Erkend vakman</h3>
            <p className="text-sm text-slate-400">BTW {bedrijfsinfo.btw}</p>
          </div>
          <div>
            <p className="mb-2 text-4xl">⏰</p>
            <h3 className="mb-1 font-bold">24/7 Beschikbaar</h3>
            <p className="text-sm text-slate-400">
              Dag en nacht, ook in het weekend
            </p>
          </div>
          <div>
            <p className="mb-2 text-4xl">🔒</p>
            <h3 className="mb-1 font-bold">Topmerken</h3>
            <p className="text-sm text-slate-400">
              {bedrijfsinfo.merken.join(' · ')}
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#4668b0] px-6 py-16 text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          Hulp nodig? Bel ons nu!
        </h2>
        <p className="mb-6 text-lg text-blue-100">
          Wij zijn 24/7 bereikbaar voor al uw slotenmaker-diensten in
          Oost-Vlaanderen.
        </p>
        <a
          href={`tel:${bedrijfsinfo.telefoon.replace(/\s/g, '')}`}
          className="inline-block rounded-lg bg-white px-10 py-4 text-xl font-bold text-[#4668b0] transition hover:bg-slate-100"
        >
          {bedrijfsinfo.telefoon}
        </a>
      </section>
    </main>
  )
}
