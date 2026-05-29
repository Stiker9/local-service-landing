import { useState } from 'react'
import { business } from '../data/businessData'
import { WhatsAppIcon, TelegramIcon, PhoneIcon, LocationIcon, StarIcon } from './Icons'

function HeroImage() {
  const [err, setErr] = useState(false)

  if (err) {
    return (
      <div className="w-full aspect-[4/3] rounded-2xl bg-warm-100 border border-warm-200 flex flex-col items-center justify-center gap-3">
        <span className="text-5xl">🔧</span>
        <span className="text-stone-400 text-sm">Ремонт бытовой техники</span>
      </div>
    )
  }

  return (
    <img
      src={business.images.hero}
      alt="Мастер по ремонту стиральных машин"
      onError={() => setErr(true)}
      className="w-full aspect-[4/3] object-cover rounded-2xl shadow-md"
    />
  )
}

export default function Hero() {
  return (
    <section className="bg-warm-50 pt-10 pb-16 sm:pt-14 sm:pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Text */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-50 text-brand-600 text-sm font-medium border border-brand-100 mb-5">
              <LocationIcon className="w-3.5 h-3.5" />
              {business.district} · {business.city}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-stone-900 leading-tight mb-4">
              {business.headline}
            </h1>

            <p className="text-stone-600 text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              {business.subheadline}
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 mb-5">
              <a
                href={business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-600 hover:bg-brand-700 text-white font-semibold shadow-sm hover:shadow-md transition-all text-base"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Написать в WhatsApp
              </a>
              <a
                href={business.telegramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-semibold shadow-sm hover:shadow-md transition-all text-base"
              >
                <TelegramIcon className="w-5 h-5" />
                Telegram
              </a>
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-stone-300 hover:border-brand-600 text-stone-700 hover:text-brand-700 font-semibold transition-colors text-base"
              >
                <PhoneIcon className="w-5 h-5" />
                Позвонить
              </a>
            </div>

            <p className="text-xs text-stone-400 italic">
              Демо-макет. Контакты, цены и фото можно заменить на реальные.
            </p>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="absolute -inset-3 bg-brand-50 rounded-3xl -z-10 opacity-70" />
            <HeroImage />
            {/* Floating rating badge */}
            <div className="absolute -bottom-4 -left-3 bg-white rounded-xl shadow-lg px-4 py-3 border border-stone-100 hidden sm:flex items-center gap-2.5">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                ))}
              </div>
              <div>
                <p className="font-bold text-stone-900 text-sm leading-none">{business.rating} в {business.ratingSource}</p>
                <p className="text-stone-400 text-xs mt-0.5">{business.reviewsCount} отзывов</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
