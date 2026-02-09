import Link from 'next/link'
import diensten from '@/data/diensten.json'

const popularSteden = [
  { slug: 'gent', naam: 'Gent' },
  { slug: 'aalst', naam: 'Aalst' },
  { slug: 'dendermonde', naam: 'Dendermonde' },
  { slug: 'sint-niklaas', naam: 'Sint-Niklaas' },
  { slug: 'wetteren', naam: 'Wetteren' },
  { slug: 'lokeren', naam: 'Lokeren' },
  { slug: 'zottegem', naam: 'Zottegem' },
  { slug: 'oudenaarde', naam: 'Oudenaarde' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#070b14]">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* Bedrijf */}
          <div>
            <h3 className="mb-4 flex items-center gap-2 text-lg font-bold">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500 text-sm">🔐</span>
              Slotenmaker PONNET
            </h3>
            <p className="mb-4 text-sm text-slate-400">Uw betrouwbare slotenmaker voor gans Oost-Vlaanderen. 24/7 beschikbaar voor spoedgevallen.</p>
            <div className="space-y-2 text-sm text-slate-400">
              <p>📞 <a href="tel:0468113399" className="text-blue-400 no-underline hover:text-blue-300">0468 11 33 99</a></p>
              <p>✉️ <a href="mailto:info@ovl-slotenmaker.be" className="text-blue-400 no-underline hover:text-blue-300">info@ovl-slotenmaker.be</a></p>
              <p>📍 Wetteren, Oost-Vlaanderen</p>
              <p>🏢 BTW: BE 0698.958.244</p>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Diensten</h3>
            <ul className="space-y-2">
              {diensten.map((d) => (
                <li key={d.slug}>
                  <Link href={`/${d.slug}`} className="text-sm text-slate-400 no-underline transition hover:text-white">{d.naam}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Steden */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Werkgebied</h3>
            <ul className="space-y-2">
              {popularSteden.map((s) => (
                <li key={s.slug}>
                  <Link href={`/slotenmaker/${s.slug}`} className="text-sm text-slate-400 no-underline transition hover:text-white">Slotenmaker {s.naam}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Merken & Info */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-400">Gecertificeerde Merken</h3>
            <div className="mb-6 flex gap-3">
              {['DOM', 'ABUS', 'HOPPE'].map((m) => (
                <span key={m} className="rounded-lg border border-slate-700 bg-slate-800/50 px-4 py-2 text-sm font-bold text-white">{m}</span>
              ))}
            </div>
            <p className="text-sm text-slate-500">Partner van Security Tools BV, Wetteren</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800/50 py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Slotenmaker Kristof PONNET — Alle rechten voorbehouden
      </div>
    </footer>
  )
}
