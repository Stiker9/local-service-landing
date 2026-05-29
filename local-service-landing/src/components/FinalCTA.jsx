import { business } from '../data/businessData'
import { WhatsAppIcon, TelegramIcon, PhoneIcon } from './Icons'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" style={{ background: '#0c1f17' }}>
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(45,106,79,0.35) 0%, transparent 70%)' }} />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 hero-dots opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">

        <p className="text-brand-200 text-sm font-bold uppercase tracking-widest mb-5">
          Связаться с мастером
        </p>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Опишите проблему —<br className="hidden sm:block" />
          мастер свяжется с вами
        </h2>

        <p className="text-brand-200/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Напишите, что случилось с техникой, и укажите удобное время. Мастер ответит и согласует визит.
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto sm:max-w-none">
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-stone-100 text-brand-800 font-bold text-base transition-colors"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.20)' }}
          >
            <WhatsAppIcon className="w-5 h-5 text-green-600" />
            Написать в WhatsApp
          </a>
          <a
            href={business.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-base transition-colors"
          >
            <TelegramIcon className="w-5 h-5" />
            Telegram
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border-2 border-white/20 hover:border-white/40 text-white font-bold text-base transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            {business.phoneDisplay}
          </a>
        </div>

        <p className="mt-10 text-brand-200/40 text-xs">
          {business.district} · {business.address} · {business.metro}
        </p>

      </div>
    </section>
  )
}
