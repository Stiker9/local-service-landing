import { business } from '../data/businessData'
import { WhatsAppIcon, TelegramIcon, PhoneIcon } from './Icons'

export default function FinalCTA() {
  return (
    <section className="bg-brand-800 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        <p className="text-brand-200 text-sm font-medium uppercase tracking-widest mb-4">
          Связаться с мастером
        </p>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
          Опишите проблему —<br className="hidden sm:block" />
          мастер свяжется с вами
        </h2>

        <p className="text-brand-200 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Напишите, что случилось с техникой, и укажите удобное время для выезда. Мастер ответит и согласует визит.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-white hover:bg-stone-100 text-brand-800 font-bold text-base transition-colors shadow-md hover:shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5 text-green-600" />
            Написать в WhatsApp
          </a>
          <a
            href={business.telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-base transition-colors shadow-md hover:shadow-lg"
          >
            <TelegramIcon className="w-5 h-5" />
            Telegram
          </a>
          <a
            href={business.phoneHref}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl border-2 border-white/30 hover:border-white/60 text-white font-bold text-base transition-colors"
          >
            <PhoneIcon className="w-5 h-5" />
            {business.phoneDisplay}
          </a>
        </div>

        <p className="mt-8 text-brand-200/60 text-xs">
          {business.district} · {business.address} · {business.metro}
        </p>

      </div>
    </section>
  )
}
