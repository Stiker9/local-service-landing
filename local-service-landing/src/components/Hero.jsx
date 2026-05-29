import { useState } from 'react'
import { businessData } from '../data/businessData.js'

function HeroImage() {
  const [hasError, setHasError] = useState(false)
  const { images } = businessData

  if (!images.heroImageUrl || hasError) {
    return (
      <div className="flex aspect-[4/3] min-h-72 flex-col justify-between rounded-[28px] border border-dashed border-cyan-300 bg-cyan-50 p-6">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-2xl font-black text-cyan-700 shadow-sm">
          М
        </div>
        <div>
          <p className="text-xl font-extrabold text-slate-950">
            {images.fallbackTitle}
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            {images.fallbackText}
          </p>
        </div>
      </div>
    )
  }

  return (
    <figure className="overflow-hidden rounded-[28px] border border-stone-200 bg-white shadow-2xl shadow-slate-200/80">
      <img
        src={images.heroImageUrl}
        alt={`${businessData.niche} на дому`}
        className="h-80 w-full object-cover sm:h-[440px]"
        loading="eager"
        onError={() => setHasError(true)}
      />
      <figcaption className="grid gap-3 bg-white p-4 sm:grid-cols-2">
        <div>
          <p className="text-sm font-bold text-slate-500">Район выезда</p>
          <p className="mt-1 font-extrabold text-slate-950">
            {businessData.district}
          </p>
        </div>
        <div className="rounded-2xl bg-emerald-50 px-4 py-3">
          <p className="text-2xl font-extrabold text-emerald-800">
            {businessData.rating}
          </p>
          <p className="text-sm font-bold text-emerald-900">
            {businessData.ratingSource}, {businessData.reviewsCount} отзывов
          </p>
        </div>
      </figcaption>
    </figure>
  )
}

function Hero() {
  return (
    <section id="top" className="overflow-hidden bg-stone-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-8 sm:px-6 md:grid-cols-[1fr_0.88fr] md:items-center lg:px-8 lg:pb-12 lg:pt-10">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-800 md:hidden">
            {businessData.badgeText}
          </span>
          <p className="mb-3 text-sm font-extrabold text-teal-700">
            {businessData.city}, {businessData.district}
          </p>
          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
            {businessData.headline}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            {businessData.subheadline}
          </p>

          <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
            <a
              href={businessData.whatsappUrl}
              className="rounded-full bg-emerald-600 px-6 py-3 text-center text-base font-extrabold text-white shadow-lg shadow-emerald-600/20 transition hover:bg-emerald-700"
            >
              Написать в WhatsApp
            </a>
            <a
              href={businessData.telegramUrl}
              className="rounded-full bg-cyan-600 px-6 py-3 text-center text-base font-extrabold text-white shadow-lg shadow-cyan-600/15 transition hover:bg-cyan-700"
            >
              Написать в Telegram
            </a>
            <a
              href={businessData.phoneHref}
              className="rounded-full border border-slate-300 bg-white px-6 py-3 text-center text-base font-extrabold text-slate-950 shadow-sm transition hover:border-slate-400"
            >
              {businessData.phoneDisplay}
            </a>
          </div>
          <p className="mt-3 text-xs font-semibold leading-5 text-slate-500">
            {businessData.heroDemoNote}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {businessData.serviceTags.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-white px-3 py-1.5 text-sm font-bold text-slate-700 shadow-sm ring-1 ring-stone-200"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <HeroImage />
      </div>
    </section>
  )
}

export default Hero
