import { business } from '../data/businessData'
import { StarIcon } from './Icons'

export default function Reviews() {
  return (
    <section className="bg-warm-50 py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        <div className="text-center mb-10">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-3">
            Отзывы клиентов
          </h2>
          <p className="text-stone-500 text-base max-w-lg mx-auto">
            Рейтинг {business.rating} · {business.reviewsCount} отзывов в {business.ratingSource}
          </p>
        </div>

        {/* Demo notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-5 py-3.5 mb-8 flex items-start gap-3">
          <span className="text-amber-500 text-lg shrink-0 mt-0.5">⚠️</span>
          <p className="text-amber-800 text-sm leading-relaxed">
            {business.reviewsNote}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {business.reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-stone-200 p-6 shadow-sm flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-0.5">
                {[...Array(review.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-600 text-sm leading-relaxed flex-1 italic">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Label */}
              <div className="border-t border-stone-100 pt-4 flex items-center justify-between">
                <span className="text-stone-400 text-xs font-medium">{review.label}</span>
                <span className="text-xs text-stone-300 bg-stone-100 px-2 py-0.5 rounded-full">
                  {review.source}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
