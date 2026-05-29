import { business } from '../data/businessData'

export default function Services() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="mb-12">
          <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-2">Услуги</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            {business.servicesTitle}
          </h2>
          <p className="text-stone-500 text-base max-w-lg">
            {business.servicesIntro}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {business.services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-warm-50 rounded-2xl p-6 border border-warm-200 hover:border-brand-200 hover:bg-white transition-all duration-200"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
            >
              {/* Icon circle */}
              <div className="w-11 h-11 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-xl mb-4 group-hover:bg-brand-100 transition-colors">
                {service.icon}
              </div>

              <h3 className="font-semibold text-stone-900 text-base mb-2 group-hover:text-brand-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-stone-500 text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-6 bg-brand-50 border border-brand-100 rounded-xl px-5 py-4">
          <p className="text-stone-600 text-sm leading-relaxed">
            {business.additionalServices}
          </p>
        </div>

      </div>
    </section>
  )
}
