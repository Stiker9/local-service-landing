import { business } from '../data/businessData'
import { WhatsAppIcon, PhoneIcon } from './Icons'

export default function MobileCTA() {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/97 backdrop-blur-md border-t border-stone-200 px-4 py-3 flex gap-2.5"
         style={{ boxShadow: '0 -4px 24px rgba(0,0,0,0.08)' }}>
      <a
        href={business.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-brand-600 active:bg-brand-700 text-white font-bold text-sm"
      >
        <WhatsAppIcon className="w-4 h-4" />
        WhatsApp
      </a>
      <a
        href={business.phoneHref}
        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-sky-500 active:bg-sky-600 text-white font-bold text-sm"
      >
        Позвонить
      </a>
      <a
        href={business.phoneHref}
        className="w-12 h-12 inline-flex items-center justify-center rounded-xl border-2 border-stone-200 active:bg-stone-50 text-stone-600 shrink-0"
        aria-label="Позвонить"
      >
        <PhoneIcon className="w-5 h-5" />
      </a>
    </div>
  )
}
