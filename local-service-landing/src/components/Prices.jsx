import { businessData } from '../data/businessData'
import { InfoIcon } from './Icons'

export default function Prices() {
  const { prices, priceNote } = businessData

  return (
    <section
      className="section"
      id="prices"
      style={{ background: 'var(--bg-base)' }}
    >
      <div className="container">
        <div className="prices-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
        }}>
          {/* Left — heading */}
          <div>
            <div className="section-label">Стоимость</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', marginBottom: '1.25rem' }}>
              Цены и оценка ремонта
            </h2>
            <p style={{
              color: 'var(--text-2)',
              fontSize: '0.95rem',
              lineHeight: 1.7,
              marginBottom: '2rem',
              maxWidth: '400px',
            }}>
              Стоимость большинства работ определяется после осмотра техники.
              Единственное исключение — ремонт электроинструмента: цена известна заранее.
            </p>

            {/* Note card */}
            <div style={{
              background: 'var(--amber-dim)',
              border: '1px solid var(--amber-border)',
              borderRadius: '4px',
              padding: '1.1rem 1.3rem',
              display: 'flex',
              gap: '0.75rem',
              alignItems: 'flex-start',
            }}>
              <div style={{ color: 'var(--amber)', marginTop: '1px', flexShrink: 0 }}>
                <InfoIcon size={15} />
              </div>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--text-2)',
                lineHeight: 1.6,
              }}>
                {priceNote}
              </p>
            </div>
          </div>

          {/* Right — price table */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {/* Table header */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '0.75rem 1.5rem',
              background: 'var(--bg-elevated)',
              borderBottom: '1px solid var(--border)',
            }}>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--text-3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Услуга
              </span>
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--text-3)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Стоимость
              </span>
            </div>

            {/* Rows */}
            {prices.map((row, i) => (
              <div
                key={i}
                className={`price-row${row.highlighted ? ' highlighted' : ''}`}
                style={{ borderBottom: i === prices.length - 1 ? 'none' : undefined }}
              >
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem',
                  color: row.highlighted ? 'var(--text-1)' : 'var(--text-2)',
                  fontWeight: row.highlighted ? 500 : 400,
                }}>
                  {row.service}
                </span>
                <span style={{
                  fontFamily: row.highlighted ? 'var(--font-display)' : 'var(--font-body)',
                  fontWeight: row.highlighted ? 700 : 400,
                  fontSize: row.highlighted ? '1rem' : '0.85rem',
                  color: row.highlighted ? 'var(--amber-bright)' : 'var(--text-3)',
                  letterSpacing: row.highlighted ? '0.02em' : 0,
                  whiteSpace: 'nowrap',
                  marginLeft: '1rem',
                }}>
                  {row.price}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .prices-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
