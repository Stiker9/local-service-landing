import { businessData } from '../data/businessData.js'

function Prices() {
  return (
    <section className="bg-stone-50 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
          <div>
            <p className="text-sm font-extrabold text-teal-700">Цены от</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Ориентиры по стоимости
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {businessData.pricesIntro}
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-xl shadow-slate-200/70">
            {businessData.prices.map((item) => (
              <div
                key={item.service}
                className="flex items-center justify-between gap-4 border-b border-stone-100 px-5 py-4 last:border-b-0"
              >
                <span className="text-sm font-bold text-slate-700 sm:text-base">
                  {item.service}
                </span>
                <span className="shrink-0 rounded-full bg-emerald-50 px-3 py-1.5 text-sm font-extrabold text-emerald-800">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Prices
