import { business } from '../data/businessData'

export default function WorkSteps() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-2">Процесс</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Как проходит ремонт
          </h2>
          <p className="text-stone-500 text-base max-w-lg">
            Сначала мастер уточняет проблему, затем согласует осмотр, стоимость и удобное время записи.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute top-[2.25rem] left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] h-px"
               style={{ background: 'linear-gradient(to right, #c8e6d4, #c8e6d4)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {business.workSteps.map((step, idx) => (
              <div key={step.num} className="flex flex-col lg:items-center lg:text-center">
                <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full bg-brand-600 flex items-center justify-center mb-5 shrink-0">
                  <span className="font-display font-bold text-white text-2xl leading-none">
                    {step.num}
                  </span>
                  {idx < business.workSteps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-5 left-1/2 -translate-x-1/2 w-px h-4 bg-brand-200" />
                  )}
                </div>

                <h3 className="font-bold text-stone-900 text-base mb-2">{step.title}</h3>
                <p className="text-stone-500 text-sm leading-relaxed lg:max-w-[180px]">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {business.advantages.map((item) => (
            <div key={item} className="flex items-start gap-2 rounded-xl bg-warm-50 border border-warm-200 px-4 py-3">
              <span className="w-5 h-5 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">✓</span>
              <span className="text-sm text-stone-600 leading-snug">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
