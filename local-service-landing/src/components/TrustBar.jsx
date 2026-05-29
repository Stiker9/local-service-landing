import { business } from '../data/businessData'
import { StarIcon } from './Icons'

const stats = [
  {
    value: '5.0',
    suffix: (
      <div className="flex gap-0.5 mt-0.5">
        {[...Array(5)].map((_, i) => <StarIcon key={i} className="w-3.5 h-3.5 text-amber-400" />)}
      </div>
    ),
    label: 'Рейтинг в 2ГИС',
    sub: 'из 5.0 возможных',
  },
  {
    value: '20',
    suffix: null,
    label: 'Отзывов клиентов',
    sub: 'подтверждённых в 2ГИС',
  },
  {
    value: 'от 500 ₽',
    suffix: null,
    label: 'Диагностика',
    sub: 'цена до начала ремонта',
  },
  {
    value: 'Гарантия',
    suffix: null,
    label: 'На все работы',
    sub: 'письменно по договорённости',
  },
]

export default function TrustBar() {
  return (
    <div className="bg-white border-y border-stone-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-stone-100">
          {stats.map((s, idx) => (
            <div key={idx} className="px-5 py-5 sm:px-6 sm:py-6">
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
