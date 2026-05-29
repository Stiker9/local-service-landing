import { businessData } from '../data/businessData.js'

function WorkSteps() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-extrabold text-teal-700">
            Как проходит работа
          </p>
          <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Простая схема от заявки до ремонта
          </h2>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {businessData.workSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-3xl border border-stone-200 bg-stone-50 p-5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-extrabold text-white">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkSteps
