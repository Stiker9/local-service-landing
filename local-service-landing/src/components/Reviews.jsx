import { businessData } from '../data/businessData.js'

function Reviews() {
  return (
    <section className="bg-stone-50 py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-extrabold text-teal-700">Отзывы</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Как может выглядеть блок отзывов
            </h2>
          </div>
          <div className="rounded-2xl bg-white px-4 py-3 shadow-sm ring-1 ring-stone-200">
            <p className="text-2xl font-extrabold text-slate-950">
              {businessData.rating}
            </p>
            <p className="text-sm font-bold text-slate-500">
              {businessData.reviewsCount} отзывов, {businessData.ratingSource}
            </p>
          </div>
        </div>
        <p className="mt-5 max-w-3xl text-sm leading-6 text-slate-600">
          {businessData.reviewsIntro}
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {businessData.reviews.map((review) => (
            <article
              key={review.name}
              className="rounded-3xl border border-stone-200 bg-white p-5 shadow-lg shadow-slate-200/60"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-extrabold text-slate-950">{review.name}</h3>
                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-extrabold text-cyan-800">
                  {review.label}
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-slate-600">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Reviews
