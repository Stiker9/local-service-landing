import { business } from '../data/businessData'

export default function WorkSteps() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Как проходит работа
          </h2>
          <p className="text-stone-500 text-base max-w-lg mx-auto">
            Просто и понятно — от заявки до готового результата.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-10 left-[calc(12.5%+1rem)] right-[calc(12.5%+1rem)] h-px bg-brand-100 -z-0" />

          {business.workSteps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center relative">
              <div className="w-20 h-20 rounded-full bg-brand-50 border-2 border-brand-100 flex items-center justify-center mb-5 relative z-10">
                <span className="font-display font-bold text-brand-600 text-2xl leading-none">
                  {step.num}
                </span>
              </div>
              <h3 className="font-semibold text-stone-900 text-base mb-2">{step.title}</h3>
              <p className="text-stone-500 text-sm leading-relaxed max-w-[200px]">{step.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
