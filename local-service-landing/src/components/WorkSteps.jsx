import { business } from '../data/businessData'

export default function WorkSteps() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="mb-12">
          <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-2">Процесс</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Как проходит работа
          </h2>
          <p className="text-stone-500 text-base max-w-lg">
            От заявки до готового результата — просто и прозрачно.
          </p>
        </div>

        <div className="relative">
          {/* Connector line — desktop */}
          <div className="hidden lg:block absolute top-[2.25rem] left-[calc(12.5%+1.25rem)] right-[calc(12.5%+1.25rem)] h-px"
               style={{ background: 'linear-gradient(to right, #c8e6d4, #c8e6d4)' }} />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {business.workSteps.map((step, idx) => (
              <div key={idx} className="flex flex-col lg:items-center lg:text-center">
                {/* Number circle */}
                <div className="relative z-10 w-[4.5rem] h-[4.5rem] rounded-full bg-brand-600 flex items-center justify-center mb-5 shrink-0">
                  <span className="font-display font-bold text-white text-2xl leading-none">
                    {step.num}
                  </span>
                  {/* Arrow dot on mobile/tablet */}
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

      </div>
    </section>
  )
}
