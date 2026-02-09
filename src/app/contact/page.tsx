import type { Metadata } from 'next'
import bedrijfsinfo from '@/data/bedrijfsinfo.json'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Neem contact op met slotenmaker Kristof PONNET. Bel ${bedrijfsinfo.telefoon} — 24/7 beschikbaar in Oost-Vlaanderen.`,
}

export default function ContactPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative px-4 pb-16 pt-20 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0f1629] to-[#0a0e1a]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">Contact</h1>
          <p className="max-w-2xl text-lg text-slate-400">
            Heeft u een slotenmaker nodig? Neem gerust contact met ons op.
            Wij zijn 24/7 bereikbaar — ook in het weekend en op feestdagen.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="mx-auto max-w-4xl">
          {/* Phone Big */}
          <div className="mb-10 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-400">Bel ons direct</p>
            <a href="tel:0468113399" className="block text-5xl font-extrabold text-white transition hover:text-blue-400 md:text-6xl">
              0468 11 33 99
            </a>
            <p className="mt-3 text-slate-400">24/7 bereikbaar — ook voor spoedgevallen</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="card-hover">
                <h2 className="mb-4 text-xl font-bold">Contactgegevens</h2>
                <dl className="space-y-4 text-slate-300">
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <dt className="text-sm text-slate-500">Telefoon</dt>
                      <dd><a href="tel:0468113399" className="font-bold text-blue-400 hover:text-blue-300">0468 11 33 99</a></dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">✉️</span>
                    <div>
                      <dt className="text-sm text-slate-500">E-mail</dt>
                      <dd><a href="mailto:info@ovl-slotenmaker.be" className="font-bold text-blue-400 hover:text-blue-300">info@ovl-slotenmaker.be</a></dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">📍</span>
                    <div>
                      <dt className="text-sm text-slate-500">Vestiging</dt>
                      <dd>Wetteren, Oost-Vlaanderen</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-xl">🌍</span>
                    <div>
                      <dt className="text-sm text-slate-500">Werkgebied</dt>
                      <dd>Heel Oost-Vlaanderen</dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="card-hover">
                <h2 className="mb-4 text-xl font-bold">Bedrijfsgegevens</h2>
                <dl className="space-y-3 text-slate-300">
                  <div>
                    <dt className="text-sm text-slate-500">Bedrijfsnaam</dt>
                    <dd className="font-medium">{bedrijfsinfo.bedrijfsnaam}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">BTW-nummer</dt>
                    <dd className="font-mono font-medium">{bedrijfsinfo.btw}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-slate-500">Beschikbaarheid</dt>
                    <dd className="font-medium">24 uur per dag, 7 dagen per week</dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Contact Form (visual) */}
            <div className="card-hover">
              <h2 className="mb-6 text-xl font-bold">Stuur ons een bericht</h2>
              <form className="space-y-5" onSubmit={undefined}>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Naam</label>
                  <input type="text" className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500" placeholder="Uw naam" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Telefoon</label>
                  <input type="tel" className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500" placeholder="Uw telefoonnummer" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">E-mail</label>
                  <input type="email" className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500" placeholder="uw@email.be" />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-300">Bericht</label>
                  <textarea rows={4} className="w-full rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-3 text-white placeholder-slate-500 outline-none transition focus:border-blue-500" placeholder="Beschrijf uw probleem of vraag..." />
                </div>
                <button type="button" className="btn-primary w-full">
                  Verstuur Bericht
                </button>
                <p className="text-xs text-slate-500">* Dit formulier is momenteel visueel. Bel ons voor directe hulp.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
