import { useState } from 'react'
import { businessData } from '../data/businessData.js'

function ServiceImage() {
  const [hasError, setHasError] = useState(false)
  const { images } = businessData

  if (!images.serviceImageUrl || hasError) {
    return (
      <div className="flex min-h-64 items-end rounded-[28px] border border-dashed border-emerald-300 bg-emerald-50 p-6">
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
      <img
        src={images.serviceImageUrl}
        alt={images.serviceImageAlt}
        className="h-full min-h-64 w-full rounded-[28px] object-cover shadow-xl shadow-slate-200/70"
      loading="lazy"
      onError={() => setHasError(true)}
    />
  )
}

function GalleryImage({ image }) {
  const [hasError, setHasError] = useState(false)

  if (!image.url || hasError) {
    return (
      <div className="flex min-h-40 items-end rounded-3xl border border-dashed border-stone-300 bg-stone-100 p-4">
        <p className="text-sm font-bold text-slate-600">
          {businessData.images.fallbackTitle}
        </p>
      </div>
    )
  }

  return (
    <figure className="overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-lg shadow-slate-200/50">
      <img
        src={image.url}
        alt={image.alt}
        className="h-44 w-full object-cover"
        loading="lazy"
        onError={() => setHasError(true)}
      />
      <figcaption className="px-4 py-3 text-sm font-extrabold text-slate-700">
        {image.caption}
      </figcaption>
    </figure>
  )
}

function Services() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="text-sm font-extrabold text-teal-700">Услуги</p>
            <h2 className="mt-2 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Частые заявки по бытовой технике
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {businessData.shortNote}
            </p>
          </div>
          <ServiceImage />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {businessData.services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl border border-stone-200 bg-white p-5 shadow-lg shadow-slate-200/60"
            >
              <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-extrabold text-cyan-800">
                {service.tag}
              </span>
              <h3 className="mt-5 text-lg font-extrabold text-slate-950">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {service.description}
              </p>
            </article>
          ))}
        </div>

        {businessData.images.galleryImages?.length > 0 && (
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {businessData.images.galleryImages.map((image) => (
              <GalleryImage key={image.url} image={image} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

export default Services
