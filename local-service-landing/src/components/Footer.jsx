import { businessData } from '../data/businessData.js'

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-stone-50">
      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-7 text-sm text-slate-500 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div>
          <p className="font-extrabold text-slate-900">
            {businessData.businessName}
          </p>
          <p>{businessData.serviceLabel}</p>
          <p>
            {businessData.city}, {businessData.district}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 md:justify-end">
          <a href={businessData.phoneHref} className="font-bold text-slate-800">
            {businessData.phoneDisplay}
          </a>
          <a href={businessData.whatsappUrl} className="font-bold text-emerald-700">
            WhatsApp
          </a>
          <a href={businessData.telegramUrl} className="font-bold text-cyan-700">
            Telegram
          </a>
          <a href={businessData.mapUrl} className="font-bold text-slate-800">
            Карта
          </a>
        </div>
        <p className="md:col-span-2">{businessData.demoDisclaimer}</p>
      </div>
    </footer>
  )
}

export default Footer
