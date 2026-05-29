import { business } from '../data/businessData'
import { WhatsAppIcon } from './Icons'

export default function Prices() {
  return (
    <section className="bg-warm-50 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Примерные цены
          </h2>
          <p className="text-stone-500 text-base max-w-xl mx-auto">
            Цены ориентировочные. Точная стоимость — после осмотра мастера.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl border border-stone-200 overflow-hidden shadow-sm">
            {business.prices.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center justify-between px-6 py-4 gap-4 ${
                  idx < business.prices.length - 1 ? 'border-b border-stone-100' : ''
                } ${idx % 2 === 1 ? 'bg-warm-50/60' : ''}`}
              >
                <span className="text-stone-700 text-sm sm:text-base">{item.service}</span>
                <span className="font-bold text-brand-600 text-sm sm:text-base whitespace-nowrap shrink-0">
                  {item.price}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-5 bg-brand-50 border border-brand-100 rounded-xl px-5 py-4">
            <p className="text-stone-600 text-sm leading-relaxed">
              <span className="font-medium text-brand-700">Важно:</span> {business.priceNote}
            </p>
          </div>

          <div className="mt-6 text-center">
            <a
              href={business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold transition-colors shadow-sm"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Узнать стоимость в WhatsApp
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}
