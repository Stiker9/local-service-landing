import { business } from '../data/businessData'
import { StarIcon } from './Icons'

const items = [
  {
    icon: (
      <div className="flex gap-0.5">
        {[...Array(5)].map((_, i) => (
          <StarIcon key={i} className="w-4 h-4 text-amber-400" />
        ))}
      </div>
    ),
    label: `${business.rating} рейтинг`,
    sub: `в ${business.ratingSource}`,
  },
  {
    icon: <span className="text-xl">💬</span>,
    label: `${business.reviewsCount} отзывов`,
    sub: 'от клиентов',
  },
  {
    icon: <span className="text-xl">🏠</span>,
    label: 'Выезд на дом',
    sub: business.district,
  },
  {
    icon: <span className="text-xl">📱</span>,
    label: 'WhatsApp / Telegram',
    sub: 'удобный способ связи',
  },
  {
    icon: <span className="text-xl">🔖</span>,
    label: 'Демо-макет',
    sub: 'для согласования',
  },
]

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="flex overflow-x-auto gap-0 scrollbar-none py-1">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-4 shrink-0 border-r border-stone-100 last:border-r-0 first:pl-0 last:pr-0"
            >
              <div className="shrink-0">{item.icon}</div>
              <div className="min-w-0">
                <p className="font-semibold text-stone-900 text-sm whitespace-nowrap">{item.label}</p>
                <p className="text-stone-400 text-xs whitespace-nowrap">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
