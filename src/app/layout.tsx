import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Slotenmaker Oost-Vlaanderen — 24/7 Service | Kristof PONNET',
    template: '%s | Slotenmaker Kristof PONNET',
  },
  description:
    'Slotenmaker voor gans Oost-Vlaanderen. Slot vervangen, deur openen, inbraakbeveiliging. 24/7 beschikbaar. Bel 0468 11 33 99.',
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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        <ChatBot />
      </body>
    </html>
  )
}
