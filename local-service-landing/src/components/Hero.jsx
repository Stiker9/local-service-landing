import { useState } from 'react'
import { business } from '../data/businessData'
import { WhatsAppIcon, PhoneIcon, LocationIcon, StarIcon } from './Icons'

function HeroImage() {
  const [src, setSrc] = useState(business.images.hero)
  const [failed, setFailed] = useState(false)

  const handleError = () => {
    if (src === business.images.hero && business.images.heroFallback) {
      setSrc(business.images.heroFallback)
    } else {
      setFailed(true)
    }
  }

  if (failed) {
    return (
      <div className="w-full aspect-[4/3] rounded-2xl bg-warm-100 border-2 border-warm-200 flex flex-col items-center justify-center gap-3">
        <span className="text-6xl">●</span>
        <span className="text-stone-400 text-sm font-medium">Мастерская по ремонту техники</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt="Мастерская по ремонту бытовой и цифровой техники"
      onError={handleError}
      className="w-full aspect-[4/3] object-cover rounded-2xl"
      style={{ boxShadow: '0 8px 40px rgba(45,106,79,0.15)' }}
    />
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="absolute inset-0 hero-dots opacity-60 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-warm-50/80 via-warm-50/60 to-warm-50/95 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Text column ── */}
          <div className="order-2 md:order-1 hero-animate">

            {/* Location pill */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-semibold border border-brand-100 mb-6">
              <LocationIcon className="w-3.5 h-3.5" />
              {business.district} · {business.metro}
            </div>

            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-stone-900 leading-[1.1] mb-4">
              {business.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-stone-500 text-base sm:text-lg leading-relaxed mb-7 max-w-md">
              {business.subheadline}
            </p>

            {/* CTA buttons — clear hierarchy */}
            <div className="flex flex-col gap-3 mb-5">
              {/* Primary */}
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-brand-600 hover:bg-brand-700 active:bg-brand-800 text-white font-bold text-base transition-colors w-full sm:w-auto sm:self-start"
                style={{ boxShadow: '0 4px 20px rgba(45,106,79,0.32)' }}
              >
                <WhatsAppIcon className="w-5 h-5" />
                {business.heroCtas.whatsapp}
              </a>

              {/* Secondary row */}
              <div className="flex gap-2.5">
                <a
                  href={business.phoneHref}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-stone-300 hover:border-brand-600 hover:text-brand-700 text-stone-700 font-semibold text-sm transition-colors"
                >
                  <PhoneIcon className="w-4 h-4" />
                  {business.heroCtas.phone}
                </a>
                <a
                  href={business.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-semibold text-sm transition-colors"
                >
                  {business.heroCtas.appointment}
                </a>
              </div>
            </div>

            {/* Inline trust micro-row — Airtasker style */}
            <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
              {business.trustPoints.map((pt) => (
                <span key={pt} className="inline-flex items-center gap-1.5 text-xs text-stone-500">
                  <span className="w-4 h-4 rounded-full bg-brand-100 text-brand-600 flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                  {pt}
                </span>
              ))}
            </div>
          </div>

          {/* ── Image column ── */}
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-4 bg-brand-50 rounded-3xl -z-10" />
            <div className="absolute -bottom-2 -right-2 w-36 h-36 bg-brand-100/40 rounded-full -z-10 blur-2xl" />

            <HeroImage />

            {/* Floating rating card */}
            <div
              className="absolute -bottom-5 -left-4 bg-white rounded-2xl px-4 py-3 hidden sm:block"
              style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)', border: '1px solid #f0ece4' }}
            >
              <div className="flex gap-0.5 mb-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5 text-amber-400" />
                ))}
              </div>
              <p className="font-bold text-stone-900 text-sm leading-tight">{business.rating} из 5</p>
              <p className="text-stone-400 text-xs mt-0.5">{business.reviewsCount} отзывов · {business.ratingSource}</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
