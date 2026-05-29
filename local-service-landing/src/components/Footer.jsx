import { business } from '../data/businessData'
import { WhatsAppIcon, TelegramIcon, PhoneIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-400 py-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-6">
          <div>
            <p className="font-bold text-white text-base mb-1">{business.businessName}</p>
            <p className="text-sm text-stone-500">{business.niche}</p>
            <p className="text-xs text-stone-600 mt-1">
              {business.district} · {business.city} · {business.metro}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="w-10 h-10 rounded-lg bg-stone-800 hover:bg-brand-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>
            <a
              href={business.telegramUrl}
              aria-label="Telegram"
              className="w-10 h-10 rounded-lg bg-stone-800 hover:bg-sky-600 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <TelegramIcon className="w-5 h-5" />
            </a>
            <a
              href={business.phoneHref}
              aria-label="Позвонить"
              className="w-10 h-10 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-stone-600">
            © 2026 {business.businessName}. {business.address}
          </p>
          <p className="text-xs text-stone-500">
            {business.workingHours}, {business.appointment}
          </p>
        </div>
      </div>
    </footer>
  )
}
