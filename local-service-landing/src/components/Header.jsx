import { business } from '../data/businessData'
import { WhatsAppIcon, PhoneIcon } from './Icons'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-stone-200 shadow-sm">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-4">

        <div className="flex items-center gap-3 min-w-0">
          <div className="min-w-0">
            <p className="font-bold text-stone-900 text-base sm:text-lg leading-tight tracking-tight">
              {business.businessName}
            </p>
            <p className="hidden sm:block text-xs text-stone-400 truncate">
              {business.niche}
            </p>
          </div>
          <span className="hidden md:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200 whitespace-nowrap shrink-0">
            {business.badgeText}
          </span>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors"
            aria-label="Написать в WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4" />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
          <a
            href={business.phoneHref}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-stone-300 hover:border-stone-400 hover:bg-stone-50 text-stone-700 text-sm font-semibold transition-colors"
            aria-label="Позвонить"
          >
            <PhoneIcon className="w-4 h-4" />
            <span className="hidden sm:inline">Позвонить</span>
          </a>
        </div>

      </div>
    </header>
  )
}
