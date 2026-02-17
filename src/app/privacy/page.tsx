import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Privacyverklaring | Slotenmaker PONNET',
  description:
    'Privacyverklaring van Slotenmaker Kristof PONNET. Hoe wij omgaan met uw persoonsgegevens conform de AVG/GDPR.',
}

export default function PrivacyPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-4 pb-12 pt-24 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-[#0a0e1a]/80 to-[#0a0e1a]/95" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <nav className="mb-8 flex items-center gap-2 text-sm text-slate-400">
            <Link href="/" className="transition hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Privacyverklaring</span>
          </nav>
          <h1 className="text-4xl font-extrabold md:text-5xl">
            <span className="gradient-text">Privacyverklaring</span>
          </h1>
        </div>
      </section>

      <section className="section">
        <div className="prose prose-invert prose-slate mx-auto max-w-3xl prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4 prose-p:text-slate-300 prose-p:leading-relaxed prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-li:text-slate-300">
          <p className="text-lg text-slate-300">
            <strong>Laatst bijgewerkt:</strong> februari 2026
          </p>

          <h2>1. Wie zijn wij?</h2>
          <p>
            Slotenmaker PONNET Kristof<br />
            Koningin Astridlaan 54A<br />
            B-9230 Wetteren<br />
            BTW BE 0698.958.244<br />
            Telefoon: 0468 11 33 99<br />
            E-mail: info@slotenmaker-ponnet.be
          </p>
          <p>
            Slotenmaker PONNET Kristof (hierna &ldquo;wij&rdquo;, &ldquo;ons&rdquo; of &ldquo;onze&rdquo;) is
            verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in deze
            privacyverklaring, in overeenstemming met de Algemene Verordening Gegevensbescherming
            (AVG/GDPR).
          </p>

          <h2>2. Welke gegevens verzamelen wij?</h2>
          <p>Wij kunnen de volgende persoonsgegevens verzamelen:</p>
          <ul>
            <li>Naam en voornaam</li>
            <li>Adresgegevens (voor interventies ter plaatse)</li>
            <li>Telefoonnummer</li>
            <li>E-mailadres</li>
            <li>BTW-nummer (bij bedrijven)</li>
            <li>Technische gegevens via cookies (zie ons <Link href="/cookies">cookiebeleid</Link>)</li>
          </ul>

          <h2>3. Waarvoor gebruiken wij uw gegevens?</h2>
          <p>Wij verwerken uw persoonsgegevens voor de volgende doeleinden:</p>
          <ul>
            <li>Het uitvoeren van onze diensten (deuropening, slotvervanging, inbraakbeveiliging)</li>
            <li>Het opmaken en versturen van facturen</li>
            <li>Communicatie over uw opdracht of offerte-aanvraag</li>
            <li>Het beantwoorden van uw vragen via telefoon, e-mail of contactformulier</li>
            <li>Wettelijke verplichtingen (boekhouding, BTW-aangifte)</li>
          </ul>

          <h2>4. Rechtsgrond</h2>
          <p>
            Wij verwerken uw gegevens op basis van: de uitvoering van een overeenkomst (wanneer u een
            dienst aanvraagt), uw toestemming (bij het invullen van een contactformulier), en onze
            wettelijke verplichtingen (facturatie en boekhouding).
          </p>

          <h2>5. Hoe lang bewaren wij uw gegevens?</h2>
          <p>
            Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk. Factuurgegevens
            worden conform de Belgische wetgeving 7 jaar bewaard. Contactgegevens worden verwijderd
            wanneer ze niet langer nodig zijn voor het doel waarvoor ze verzameld zijn.
          </p>

          <h2>6. Delen met derden</h2>
          <p>
            Wij delen uw gegevens niet met derden, tenzij dit noodzakelijk is voor de uitvoering van
            onze diensten (bijvoorbeeld een leverancier die een onderdeel moet leveren) of wanneer wij
            hiertoe wettelijk verplicht zijn. Wij verkopen uw gegevens nooit aan derden.
          </p>

          <h2>7. Uw rechten</h2>
          <p>Op grond van de AVG heeft u de volgende rechten:</p>
          <ul>
            <li><strong>Recht op inzage</strong> — U mag opvragen welke gegevens wij van u bewaren.</li>
            <li><strong>Recht op rectificatie</strong> — U mag onjuiste gegevens laten corrigeren.</li>
            <li><strong>Recht op verwijdering</strong> — U mag vragen om uw gegevens te verwijderen.</li>
            <li><strong>Recht op beperking</strong> — U mag de verwerking laten beperken.</li>
            <li><strong>Recht op overdraagbaarheid</strong> — U mag uw gegevens in een gangbaar formaat opvragen.</li>
            <li><strong>Recht van bezwaar</strong> — U mag bezwaar maken tegen de verwerking.</li>
          </ul>
          <p>
            Om uw rechten uit te oefenen, kunt u contact opnemen via{' '}
            <a href="mailto:info@slotenmaker-ponnet.be">info@slotenmaker-ponnet.be</a> of
            bellen naar 0468 11 33 99.
          </p>

          <h2>8. Beveiliging</h2>
          <p>
            Wij nemen passende technische en organisatorische maatregelen om uw persoonsgegevens te
            beschermen tegen ongeoorloofde toegang, verlies of misbruik.
          </p>

          <h2>9. Klachten</h2>
          <p>
            Heeft u een klacht over de verwerking van uw persoonsgegevens? Neem dan eerst contact met
            ons op. U heeft ook het recht om een klacht in te dienen bij de Belgische
            Gegevensbeschermingsautoriteit (GBA):{' '}
            <a href="https://www.gegevensbeschermingsautoriteit.be" target="_blank" rel="noopener noreferrer">
              www.gegevensbeschermingsautoriteit.be
            </a>.
          </p>

          <h2>10. Wijzigingen</h2>
          <p>
            Wij behouden het recht om deze privacyverklaring te wijzigen. De meest actuele versie
            vindt u altijd op deze pagina.
          </p>
        </div>
      </section>
    </main>
  )
}
