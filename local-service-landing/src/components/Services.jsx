import { business } from '../data/businessData'

export default function Services() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Что мы ремонтируем
          </h2>
          <p className="text-stone-500 text-base max-w-xl mx-auto">
            Выезд по Фрунзенскому району. Диагностика — на месте, в удобное для вас время.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {business.services.map((service, idx) => (
            <div
              key={idx}
              className="bg-warm-50 rounded-2xl p-6 border border-warm-200 hover:border-brand-100 hover:shadow-md transition-all group"
            >
              <span className="text-3xl block mb-4">{service.icon}</span>
              <h3 className="font-semibold text-stone-900 text-base mb-2 group-hover:text-brand-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
