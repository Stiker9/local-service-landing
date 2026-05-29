import { business } from '../data/businessData'
import { WhatsAppIcon } from './Icons'

export default function Prices() {
  const half = Math.ceil(business.prices.length / 2)
  const col1 = business.prices.slice(0, half)
  const col2 = business.prices.slice(half)

  return (
    <section className="bg-warm-50 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-2">Стоимость</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Цены и оценка ремонта
          </h2>
          <p className="text-stone-500 text-base max-w-lg">
            Точная стоимость зависит от модели и состояния техники. Все суммы согласуются до начала ремонта.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden mb-5"
             style={{ boxShadow: '0 2px 16px rgba(0,0,0,0.05)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-stone-100">
            <div className="divide-y divide-stone-100">
              {col1.map((item) => (
                <PriceRow key={item.service} item={item} />
              ))}
            </div>
            <div className="divide-y divide-stone-100">
              {col2.map((item) => (
                <PriceRow key={item.service} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-brand-50 border border-brand-100 rounded-xl px-5 py-4 mb-6">
          <p className="text-stone-600 text-sm leading-relaxed">
            <span className="font-semibold text-brand-700">Важно: </span>
            {business.priceNote}
          </p>
        </div>

        <div className="text-center">
          <a
            href={business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-bold transition-colors"
            style={{ boxShadow: '0 4px 16px rgba(45,106,79,0.25)' }}
          >
            <WhatsAppIcon className="w-5 h-5" />
            Уточнить стоимость
          </a>
        </div>
      </div>
    </section>
  )
}

function PriceRow({ item }) {
  return (
    <div className="flex items-center justify-between px-5 py-4 gap-4 hover:bg-warm-50 transition-colors">
      <span className="text-stone-700 text-sm leading-snug">{item.service}</span>
      <span
        className="font-bold text-sm whitespace-nowrap shrink-0 px-2.5 py-1 rounded-lg text-brand-700"
        style={{ background: '#eef6f1' }}
      >
        {item.price}
      </span>
    </div>
  )
}
