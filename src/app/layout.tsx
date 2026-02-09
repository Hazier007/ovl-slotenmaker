import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Slotenmaker Oost-Vlaanderen — 24/7 Service | Kristof PONNET',
    template: '%s | Slotenmaker Kristof PONNET',
  },
  description:
    'Slotenmaker voor gans Oost-Vlaanderen. Slot vervangen, deur openen, inbraakbeveiliging. 24/7 beschikbaar. Bel 0494 44 07 00.',
  metadataBase: new URL('https://ovl-slotenmaker.be'),
  openGraph: {
    type: 'website',
    locale: 'nl_BE',
    siteName: 'Slotenmaker Kristof PONNET',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl-BE">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
