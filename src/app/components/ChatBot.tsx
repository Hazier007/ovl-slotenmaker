'use client'

import { useState, useRef, useEffect } from 'react'

type Step = 'welcome' | 'gemeente' | 'beschrijving' | 'contact' | 'done'

interface ChatMessage {
  from: 'bot' | 'user'
  text: string
}

interface LeadData {
  dienst: string
  gemeente: string
  beschrijving: string
  foto: File | null
  naam: string
  telefoon: string
  email: string
  timestamp: string
}

const services = [
  { label: '🔧 Slot Vervangen', value: 'Slot Vervangen' },
  { label: '🔑 Sleutel Bijmaken', value: 'Sleutel Bijmaken' },
  { label: '🛡️ Inbraakbeveiliging', value: 'Inbraakbeveiliging' },
  { label: '🪟 Raambeveiliging', value: 'Raambeveiliging' },
  { label: '🚪 Deur Openen', value: 'Deur Openen' },
  { label: '🔨 Inbraakschade', value: 'Inbraakschade' },
  { label: '🏠 Voordeurslot', value: 'Voordeurslot' },
  { label: '❓ Andere vraag', value: 'Andere vraag' },
]

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [step, setStep] = useState<Step>('welcome')
  const [messages, setMessages] = useState<ChatMessage[]>([
    { from: 'bot', text: '👋 Hallo! Ik ben de digitale assistent van Slotenmaker PONNET. Waarmee kan ik u helpen?' },
  ])
  const [data, setData] = useState<Partial<LeadData>>({})
  const [gemeente, setGemeente] = useState('')
  const [beschrijving, setBeschrijving] = useState('')
  const [naam, setNaam] = useState('')
  const [telefoon, setTelefoon] = useState('')
  const [email, setEmail] = useState('')
  const [foto, setFoto] = useState<File | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const addMessages = (...msgs: ChatMessage[]) => {
    setMessages((prev) => [...prev, ...msgs])
  }

  const selectService = (service: string) => {
    addMessages(
      { from: 'user', text: service },
      { from: 'bot', text: 'In welke gemeente heeft u onze dienst nodig?' },
    )
    setData((d) => ({ ...d, dienst: service }))
    setStep('gemeente')
  }

  const submitGemeente = () => {
    if (!gemeente.trim()) return
    addMessages(
      { from: 'user', text: gemeente },
      { from: 'bot', text: 'Kunt u het probleem kort beschrijven? Een foto is ook welkom!' },
    )
    setData((d) => ({ ...d, gemeente }))
    setStep('beschrijving')
  }

  const submitBeschrijving = () => {
    if (!beschrijving.trim()) return
    addMessages(
      { from: 'user', text: beschrijving + (foto ? ` 📎 ${foto.name}` : '') },
      { from: 'bot', text: 'Perfect! Om u zo snel mogelijk te helpen, hebben we uw contactgegevens nodig.' },
    )
    setData((d) => ({ ...d, beschrijving, foto }))
    setStep('contact')
  }

  const submitContact = () => {
    if (!naam.trim() || !telefoon.trim()) return
    const finalData: LeadData = {
      dienst: data.dienst || '',
      gemeente: data.gemeente || '',
      beschrijving: data.beschrijving || '',
      foto: data.foto || null,
      naam,
      telefoon,
      email,
      timestamp: new Date().toISOString(),
    }

    // TODO: Send to Kristof via email (Web3Forms) and/or WhatsApp API
    console.log('Lead data:', finalData)

    addMessages(
      { from: 'user', text: `${naam} — ${telefoon}${email ? ` — ${email}` : ''}` },
      { from: 'bot', text: `Bedankt ${naam}! Kristof of een collega neemt zo snel mogelijk contact met u op. Bij dringende gevallen, bel direct: 0468 11 33 99` },
    )
    setStep('done')
  }

  const reset = () => {
    setStep('welcome')
    setMessages([
      { from: 'bot', text: '👋 Hallo! Ik ben de digitale assistent van Slotenmaker PONNET. Waarmee kan ik u helpen?' },
    ])
    setData({})
    setGemeente('')
    setBeschrijving('')
    setNaam('')
    setTelefoon('')
    setEmail('')
    setFoto(null)
  }

  return (
    <>
      {/* Floating button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          style={{ animation: 'pulse-glow 2s ease-in-out infinite' }}
          aria-label="Open chat"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </button>
      )}

      {/* Chat panel */}
      {isOpen && (
        <div
          className="fixed bottom-0 right-0 sm:bottom-6 sm:right-6 z-50 w-full h-full sm:w-[400px] sm:h-[500px] sm:rounded-2xl overflow-hidden flex flex-col"
          style={{
            background: 'rgba(15, 23, 42, 0.95)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.1)',
            animation: 'slide-up 0.3s ease-out',
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-sm">🔐</div>
              <div>
                <div className="text-white font-semibold text-sm">Slotenmaker PONNET</div>
                <div className="text-green-400 text-xs">● Online</div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-white p-1" aria-label="Sluiten">
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm ${
                    msg.from === 'bot'
                      ? 'bg-blue-900/50 text-gray-200 rounded-bl-sm'
                      : 'bg-gray-700/80 text-white rounded-br-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div className="p-4 border-t border-white/10">
            {step === 'welcome' && (
              <div className="grid grid-cols-2 gap-2">
                {services.map((s) => (
                  <button
                    key={s.value}
                    onClick={() => selectService(s.value)}
                    className="text-left text-xs bg-blue-900/30 hover:bg-blue-800/50 text-gray-200 rounded-lg px-3 py-2 transition-colors border border-white/5"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            )}

            {step === 'gemeente' && (
              <form onSubmit={(e) => { e.preventDefault(); submitGemeente() }} className="flex gap-2">
                <input
                  type="text"
                  value={gemeente}
                  onChange={(e) => setGemeente(e.target.value)}
                  placeholder="Bijv. Gent, Aalst, ..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  autoFocus
                />
                <button type="submit" className="bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 text-sm transition-colors">→</button>
              </form>
            )}

            {step === 'beschrijving' && (
              <form onSubmit={(e) => { e.preventDefault(); submitBeschrijving() }} className="space-y-2">
                <textarea
                  value={beschrijving}
                  onChange={(e) => setBeschrijving(e.target.value)}
                  placeholder="Beschrijf kort uw situatie..."
                  rows={2}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 resize-none"
                  autoFocus
                />
                <div className="flex gap-2">
                  <label className="flex items-center gap-1 text-xs text-gray-400 cursor-pointer hover:text-gray-300">
                    📎 Foto
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => setFoto(e.target.files?.[0] || null)}
                    />
                  </label>
                  {foto && <span className="text-xs text-green-400">✓ {foto.name}</span>}
                  <button type="submit" className="ml-auto bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 text-sm transition-colors">→</button>
                </div>
              </form>
            )}

            {step === 'contact' && (
              <form onSubmit={(e) => { e.preventDefault(); submitContact() }} className="space-y-2">
                <input
                  type="text"
                  value={naam}
                  onChange={(e) => setNaam(e.target.value)}
                  placeholder="Uw naam *"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
                  autoFocus
                />
                <input
                  type="tel"
                  value={telefoon}
                  onChange={(e) => setTelefoon(e.target.value)}
                  placeholder="Telefoonnummer *"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-mail (optioneel)"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-white text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors">
                  Versturen
                </button>
              </form>
            )}

            {step === 'done' && (
              <div className="space-y-3">
                <a
                  href="tel:0468113399"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-500 text-white rounded-lg px-4 py-3 text-base font-bold transition-colors"
                >
                  📞 Bel nu: 0468 11 33 99
                </a>
                <button
                  onClick={reset}
                  className="w-full text-xs text-gray-500 hover:text-gray-300 transition-colors"
                >
                  Nieuw gesprek starten
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <style jsx global>{`
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 0 12px rgba(59, 130, 246, 0); }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  )
}
