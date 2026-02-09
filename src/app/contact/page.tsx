import type { Metadata } from 'next'
import bedrijfsinfo from '@/data/bedrijfsinfo.json'

export const metadata: Metadata = {
  title: 'Contact',
  description: `Neem contact op met slotenmaker Kristof PONNET. Bel ${bedrijfsinfo.telefoon} — 24/7 beschikbaar in Oost-Vlaanderen.`,
}

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-6 text-4xl font-bold">Contact</h1>
      <p className="mb-12 text-lg text-slate-400">
        Heeft u een slotenmaker nodig? Neem gerust contact met ons op. Wij zijn
        24/7 bereikbaar.
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-[#111827] p-6">
          <h2 className="mb-4 text-xl font-bold">Bel ons</h2>
          <a
            href={`tel:${bedrijfsinfo.telefoon.replace(/\s/g, '')}`}
            className="text-2xl font-bold text-[#4668b0]"
          >
            {bedrijfsinfo.telefoon}
          </a>
          <p className="mt-2 text-sm text-slate-400">24/7 bereikbaar</p>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#111827] p-6">
          <h2 className="mb-4 text-xl font-bold">E-mail</h2>
          <a
            href={`mailto:${bedrijfsinfo.email}`}
            className="text-lg font-bold text-[#4668b0]"
          >
            {bedrijfsinfo.email}
          </a>
        </div>
      </div>

      <div className="mt-8 rounded-xl border border-slate-800 bg-[#111827] p-6">
        <h2 className="mb-4 text-xl font-bold">Bedrijfsgegevens</h2>
        <dl className="space-y-2 text-slate-400">
          <div>
            <dt className="inline font-semibold text-white">Naam: </dt>
            <dd className="inline">{bedrijfsinfo.bedrijfsnaam}</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-white">BTW: </dt>
            <dd className="inline">{bedrijfsinfo.btw}</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-white">Vestiging: </dt>
            <dd className="inline">{bedrijfsinfo.vestiging}</dd>
          </div>
          <div>
            <dt className="inline font-semibold text-white">Werkgebied: </dt>
            <dd className="inline">{bedrijfsinfo.regio}</dd>
          </div>
        </dl>
      </div>
    </main>
  )
}
