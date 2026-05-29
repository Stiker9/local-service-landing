import { business } from '../data/businessData'
import { StarIcon } from './Icons'

const stats = [
  {
    value: business.rating,
    suffix: (
      <div className="flex gap-0.5 mt-0.5">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-3.5 h-3.5 text-amber-400" />)}
      </div>
    ),
    label: 'Рейтинг в 2ГИС',
    sub: 'по данным карточки компании',
  },
  {
    value: String(business.scoresCount),
    suffix: null,
    label: 'Оценок клиентов',
    sub: `${business.reviewsCount} отзывов в 2ГИС`,
  },
  {
    value: '10:00–19:00',
    suffix: null,
    label: 'Часы работы',
    sub: 'по предварительной записи',
  },
  {
    value: 'Выезд',
    suffix: null,
    label: 'Возможен на дом',
    sub: 'по согласованию с мастером',
  },
]

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-stone-100">
          {stats.map((s) => (
            <div key={s.label} className="px-5 py-5 sm:px-6 sm:py-6">
              <div className="flex items-baseline gap-1 mb-1">
                <span className="font-display font-bold text-2xl sm:text-3xl text-brand-600 leading-none">
                  {s.value}
                </span>
              </div>
              {s.suffix && <div className="mb-1">{s.suffix}</div>}
              <p className="font-semibold text-stone-900 text-sm leading-tight">{s.label}</p>
              <p className="text-stone-400 text-xs mt-0.5 leading-tight">{s.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
