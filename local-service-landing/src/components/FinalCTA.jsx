import { businessData } from '../data/businessData.js'

const buttonStyles = {
  whatsapp: 'bg-emerald-500 text-white hover:bg-emerald-400',
  telegram: 'bg-cyan-500 text-white hover:bg-cyan-400',
  phone: 'border border-white/20 text-white hover:bg-white/10',
}

function FinalCTA() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-[28px] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-300 sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-extrabold text-emerald-300">
                Связаться с мастером
              </p>
              <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
                Опишите неисправность и удобное время выезда
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                {businessData.finalCtaText}
              </p>
              <p className="mt-3 text-sm font-semibold text-slate-400">
                {businessData.demoDisclaimer}
              </p>
            </div>
            <div className="grid gap-3">
              {businessData.contactButtons.map((button) => (
                <a
                  key={button.label}
                  href={button.href}
                  className={`rounded-full px-5 py-3 text-center font-extrabold transition ${buttonStyles[button.variant]}`}
                >
                  {button.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
