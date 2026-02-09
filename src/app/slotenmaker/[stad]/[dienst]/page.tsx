import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import locaties from '@/data/locaties.json'
import diensten from '@/data/diensten.json'

type Props = { params: { stad: string; dienst: string } }

export function generateStaticParams() {
  const params: { stad: string; dienst: string }[] = []
  for (const locatie of locaties) {
    for (const dienst of diensten) {
      params.push({ stad: locatie.slug, dienst: dienst.slug })
    }
  }
  return params
}

export function generateMetadata({ params }: Props): Metadata {
  const loc = locaties.find((l) => l.slug === params.stad)
  const dienst = diensten.find((d) => d.slug === params.dienst)
  if (!loc || !dienst) return {}
  return {
    title: `${dienst.naam} in ${loc.naam} | Slotenmaker PONNET`,
    description: `${dienst.naam} in ${loc.naam} (${loc.postcode}) door Slotenmaker Kristof PONNET. Vakkundig, snel en betrouwbaar. 24/7 beschikbaar in heel Oost-Vlaanderen. Bel 0468 11 33 99.`,
  }
}

export default function StadDienstPage({ params }: Props) {
  const loc = locaties.find((l) => l.slug === params.stad)
  const dienst = diensten.find((d) => d.slug === params.dienst)
  if (!loc || !dienst) notFound()

  const postNum = parseInt(loc.postcode)
  const nearby = locaties
    .filter((l) => l.slug !== loc.slug && !('isDeelgemeente' in l) && Math.abs(parseInt(l.postcode) - postNum) <= 200)
    .slice(0, 6)

  const otherDiensten = diensten.filter((d) => d.slug !== dienst.slug)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${dienst.naam} in ${loc.naam}`,
    description: `${dienst.naam} door Slotenmaker PONNET in ${loc.naam}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Slotenmaker PONNET',
      telephone: '+32468113399',
      url: 'https://ovl-slotenmaker.be',
    },
    areaServed: {
      '@type': 'City',
      name: loc.naam,
      postalCode: loc.postcode,
      addressCountry: 'BE',
    },
    serviceType: dienst.naam,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-gray-900/60 to-gray-900/80" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center animate-fade-in-up">
          {/* Breadcrumbs */}
          <nav className="flex justify-center items-center gap-2 text-sm text-gray-400 mb-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/slotenmaker" className="hover:text-white transition-colors">Slotenmaker</Link>
            <span>/</span>
            <Link href={`/slotenmaker/${loc.slug}`} className="hover:text-white transition-colors">{loc.naam}</Link>
            <span>/</span>
            <span className="text-white">{dienst.naam}</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">{dienst.naam}</span> in {loc.naam}
          </h1>
          <p className="text-xl text-gray-300">
            Professionele {dienst.naam.toLowerCase()} in {loc.naam} en omgeving door Slotenmaker PONNET
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="glass rounded-2xl p-8 md:p-12 animate-fade-in-up">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Bent u op zoek naar een betrouwbare slotenmaker voor {dienst.naam.toLowerCase()} in {loc.naam}? 
              Slotenmaker PONNET is uw specialist in {loc.naam} ({loc.postcode}) en de ruimere regio Oost-Vlaanderen. 
              Met jarenlange ervaring en vakmanschap zorgen wij ervoor dat u snel en professioneel geholpen wordt.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Of u nu te maken heeft met een dringend probleem of preventief wilt laten werken — onze slotenmaker 
              Kristof komt snel bij u langs in {loc.naam}. Wij werken uitsluitend met kwalitatieve materialen van 
              merken als DOM, ABUS en HOPPE, zodat u verzekerd bent van een duurzaam resultaat.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Slotenmaker PONNET is 24/7 bereikbaar, ook tijdens weekends en feestdagen. Inwoners van {loc.naam} kunnen 
              steeds rekenen op een eerlijke prijs zonder verrassingen achteraf. Neem vandaag nog contact op voor een 
              vrijblijvend advies of spoedinterventie.
            </p>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16 px-4 bg-gray-900/50">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-3xl font-bold text-center mb-10">
            Waarom Slotenmaker PONNET voor{' '}
            <span className="gradient-text">{dienst.naam.toLowerCase()}</span> in {loc.naam}?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: '⚡', title: 'Snel ter plaatse', desc: `Doorgaans binnen het uur in ${loc.naam} en omgeving.` },
              { icon: '🏆', title: 'Vakkundig & gecertificeerd', desc: 'Professioneel werk met A-merken zoals DOM en ABUS.' },
              { icon: '💰', title: 'Eerlijke prijzen', desc: 'Transparante tarieven, geen verrassingen achteraf.' },
              { icon: '🕐', title: '24/7 beschikbaar', desc: `Ook 's nachts en in het weekend bereikbaar in ${loc.naam}.` },
            ].map((usp) => (
              <div key={usp.title} className="glass rounded-xl p-6 card-hover">
                <div className="text-3xl mb-3">{usp.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{usp.title}</h3>
                <p className="text-gray-400">{usp.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other services in this city */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h2 className="text-2xl font-bold mb-8 text-center">
            Andere diensten in <span className="gradient-text">{loc.naam}</span>
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {otherDiensten.map((d) => (
              <Link
                key={d.slug}
                href={`/slotenmaker/${loc.slug}/${d.slug}`}
                className="glass rounded-xl p-4 card-hover text-center"
              >
                <span className="text-2xl block mb-2">{d.icon}</span>
                <span className="text-white font-medium">{d.naam}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Same service in nearby cities */}
      {nearby.length > 0 && (
        <section className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h2 className="text-2xl font-bold mb-8 text-center">
              <span className="gradient-text">{dienst.naam}</span> in de buurt
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {nearby.map((l) => (
                <Link
                  key={l.slug}
                  href={`/slotenmaker/${l.slug}/${dienst.slug}`}
                  className="glass rounded-full px-5 py-2 card-hover text-gray-300 hover:text-white transition-colors"
                >
                  {l.naam}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center animate-fade-in-up">
          <div className="glass rounded-2xl p-10">
            <h2 className="text-3xl font-bold mb-4">
              {dienst.naam} nodig in {loc.naam}?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Bel ons nu voor een snelle interventie of vrijblijvend advies. Wij zijn 24/7 bereikbaar.
            </p>
            <a
              href="tel:0468113399"
              className="inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white text-xl font-bold px-8 py-4 rounded-full transition-all hover:scale-105"
            >
              📞 0468 11 33 99
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
