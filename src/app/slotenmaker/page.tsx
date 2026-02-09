import type { Metadata } from 'next'
import Link from 'next/link'
import locaties from '@/data/locaties.json'

export const metadata: Metadata = {
  title: 'Slotenmaker in elke gemeente van Oost-Vlaanderen',
  description:
    'Vind uw slotenmaker in Oost-Vlaanderen. Wij zijn actief in alle 58 gemeenten. 24/7 service, snel ter plaatse.',
}

export default function SlotenmakersOverview() {
  const gemeentes = locaties.filter((l) => !('isDeelgemeente' in l))
  const deelgemeentes = locaties.filter(
    (l) => 'isDeelgemeente' in l && l.isDeelgemeente
  )

  return (
    <main className="mx-auto max-w-6xl px-6 py-20">
      <h1 className="mb-6 text-4xl font-bold">
        Slotenmaker in <span className="text-[#4668b0]">Oost-Vlaanderen</span>
      </h1>
      <p className="mb-12 max-w-2xl text-lg text-slate-400">
        Kristof PONNET is uw slotenmaker voor gans Oost-Vlaanderen. Kies uw
        gemeente voor meer info over onze diensten bij u in de buurt.
      </p>

      <h2 className="mb-4 text-2xl font-bold">Gemeenten</h2>
      <div className="mb-12 grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {gemeentes.map((l) => (
          <Link
            key={l.slug}
            href={`/slotenmaker/${l.slug}`}
            className="rounded-lg border border-slate-800 bg-[#111827] p-4 transition hover:border-[#4668b0]"
          >
            <span className="font-bold">{l.naam}</span>
            <span className="ml-2 text-sm text-slate-500">{l.postcode}</span>
          </Link>
        ))}
      </div>

      {deelgemeentes.length > 0 && (
        <>
          <h2 className="mb-4 text-2xl font-bold">Deelgemeenten</h2>
          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {deelgemeentes.map((l) => (
              <Link
                key={l.slug}
                href={`/slotenmaker/${l.slug}`}
                className="rounded-lg border border-slate-800 bg-[#111827] p-4 transition hover:border-[#4668b0]"
              >
                <span className="font-bold">{l.naam}</span>
                <span className="ml-2 text-sm text-slate-500">
                  {l.postcode}
                </span>
              </Link>
            ))}
          </div>
        </>
      )}
    </main>
  )
}
