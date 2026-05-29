import { business } from '../data/businessData'
import { WhatsAppIcon, TelegramIcon, PhoneIcon, LocationIcon } from './Icons'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24" style={{ background: '#0c1f17' }}>
      <div className="absolute inset-0 pointer-events-none"
           style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 100%, rgba(45,106,79,0.35) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 hero-dots opacity-[0.07] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-brand-200 text-sm font-bold uppercase tracking-widest mb-5">
          Связаться с мастером
        </p>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          {business.finalCta.headline}
        </h2>

        <p className="text-brand-200/80 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          {business.finalCta.text}
        </p>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-lg mx-auto sm:max-w-none mb-10">
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-stone-100 text-brand-800 font-bold text-base transition-colors"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.20)' }}
          >
            <WhatsAppIcon className="w-5 h-5 text-green-600" />
            WhatsApp
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border-2 border-white/20 hover:border-white/40 text-white font-bold text-base transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            Позвонить
          </a>
          <a
            href={business.telegramUrl}
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-base transition-colors"
          >
            <TelegramIcon className="w-5 h-5" />
            Telegram
          </a>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl bg-white/8 border border-white/10 px-5 py-5 text-left">
          <div className="flex items-start gap-3 mb-4">
            <LocationIcon className="w-5 h-5 text-brand-200 shrink-0 mt-0.5" />
            <div>
              <p className="text-white font-semibold">{business.city}, {business.address}</p>
              <p className="text-brand-200/70 text-sm mt-1">{business.addressDetails}</p>
              <p className="text-brand-200/70 text-sm">{business.metro}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <p className="rounded-xl bg-white/6 px-4 py-3 text-brand-100">
              {business.workingHours}<br />
              <span className="text-brand-200/60">{business.appointment}</span>
            </p>
            <p className="rounded-xl bg-white/6 px-4 py-3 text-brand-100">
              {business.phoneDisplay}<br />
              <span className="text-brand-200/60">WhatsApp и Telegram</span>
            </p>
            <p className="rounded-xl bg-white/6 px-4 py-3 text-brand-100">
              Оплата<br />
              <span className="text-brand-200/60">{business.payment.join(', ')}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
