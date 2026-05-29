import { businessData } from '../data/businessData'
import { StarIcon } from './Icons'

export default function Reviews() {
  const { reviews, rating, ratingsCount, reviewsCount } = businessData

  return (
    <section
      className="section"
      id="reviews"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3rem',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <div>
            <div className="section-label">Отзывы клиентов из 2GIS</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}>
              Что говорят клиенты
            </h2>
          </div>

          {/* Rating summary */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            padding: '1rem 1.5rem',
          }}>
            <div>
              <div style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '2.5rem',
                color: 'var(--amber-bright)',
                lineHeight: 1,
              }}>
                {rating}
              </div>
              <div style={{
                display: 'flex',
                gap: '2px',
                marginTop: '0.3rem',
              }}>
                {[1,2,3,4,5].map(s => (
                  <StarIcon key={s} size={12} style={{ color: 'var(--amber-bright)' }} />
                ))}
              </div>
            </div>
            <div style={{
              borderLeft: '1px solid var(--border)',
              paddingLeft: '1rem',
            }}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--text-1)',
                fontWeight: 500,
              }}>
                {ratingsCount} оценок
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--text-3)',
                letterSpacing: '0.05em',
                marginTop: '0.2rem',
              }}>
                {reviewsCount} с описанием · 2GIS
              </div>
            </div>
          </div>
        </div>

        {/* Review cards grid */}
        <div className="reviews-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
        }}>
          {reviews.map((review, i) => (
            <div key={i} className="review-card">
              {/* Decorative quote mark */}
              <div className="review-quote">&ldquo;</div>

              {/* Text */}
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'var(--text-1)',
                lineHeight: 1.65,
                marginTop: '1.75rem',
                marginBottom: '1.5rem',
                position: 'relative',
                zIndex: 1,
              }}>
                {review.text}
              </p>

              {/* Footer */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '1rem',
                borderTop: '1px solid var(--border)',
              }}>
                <div className="review-initials">{review.initials}</div>
                <div>
                  <div style={{
                    display: 'flex',
                    gap: '2px',
                    marginBottom: '0.15rem',
                  }}>
                    {[1,2,3,4,5].map(s => (
                      <StarIcon key={s} size={10} />
                    ))}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    color: 'var(--text-3)',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}>
                    2GIS
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .reviews-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .reviews-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
