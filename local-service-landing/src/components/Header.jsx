import { businessData } from '../data/businessData.js'

function Header() {
  const whatsappButton = businessData.contactButtons.find(
    (button) => button.variant === 'whatsapp',
  )
  const phoneButton = businessData.contactButtons.find(
    (button) => button.variant === 'phone',
  )

  return (
    <header className="sticky top-0 z-30 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <a href="#top" className="min-w-0">
          <span className="block text-base font-extrabold text-slate-950">
            {businessData.businessName}
          </span>
          <span className="block max-w-48 truncate text-xs font-semibold text-slate-500 sm:max-w-none">
            {businessData.serviceLabel}
          </span>
        </a>

        <div className="flex shrink-0 items-center gap-2">
          <span className="hidden rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 md:inline-flex">
            {businessData.badgeText}
          </span>
          <a
            href={whatsappButton?.href ?? businessData.whatsappUrl}
            className="hidden rounded-full bg-emerald-600 px-4 py-2 text-sm font-extrabold text-white shadow-sm shadow-emerald-600/20 transition hover:bg-emerald-700 sm:inline-flex"
          >
            {whatsappButton?.label ?? 'WhatsApp'}
          </a>
          <a
            href={phoneButton?.href ?? businessData.phoneHref}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-extrabold text-white shadow-sm transition hover:bg-slate-800"
          >
            Позвонить
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
