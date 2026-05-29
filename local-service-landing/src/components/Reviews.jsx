import { business } from '../data/businessData'
import { StarIcon } from './Icons'

export default function Reviews() {
  return (
    <section className="bg-warm-50 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="mb-10">
          <p className="text-brand-600 text-sm font-bold uppercase tracking-widest mb-2">Отзывы</p>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-2">
                Что говорят клиенты
              </h2>
              {/* Aggregate rating — Faire style */}
              <div className="flex items-center gap-3">
                <span className="font-display font-bold text-3xl text-stone-900">{business.rating}</span>
                <div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-stone-400 text-xs mt-0.5">{business.reviewsCount} отзывов · {business.ratingSource}</p>
                </div>
              </div>
            </div>
            <a
              href={business.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-600 hover:text-brand-700 text-sm font-semibold transition-colors shrink-0"
            >
              Смотреть в 2ГИС →
            </a>
          </div>
        </div>

        {/* Demo notice — styled like an editorial callout */}
        <div className="flex items-start gap-3 bg-amber-50 border border-amber-200/80 rounded-xl px-5 py-4 mb-8">
          <span className="text-amber-500 shrink-0 mt-0.5">⚠</span>
          <p className="text-amber-800 text-sm leading-relaxed">{business.reviewsNote}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {business.reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 p-6 flex flex-col gap-4"
              style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.04)' }}
            >
              {/* Top: stars + source badge */}
              <div className="flex items-center justify-between">
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                  ))}
                </div>
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-stone-100 text-stone-500">
                  {review.source}
                </span>
              </div>

              {/* Review text */}
              <p className="text-stone-600 text-sm leading-relaxed flex-1">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Bottom: label */}
              <div className="flex items-center gap-2 pt-2 border-t border-stone-100">
                <div className="w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-xs text-stone-400 font-bold shrink-0">
                  ?
                </div>
                <span className="text-xs text-stone-400 font-medium italic">{review.label}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
