import { useState } from 'react'
import { businessData } from '../data/businessData'
import { ServiceIcons, CheckIcon } from './Icons'

function ServiceImage({ src, serviceId }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div className="service-card-img-placeholder">
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0.25,
          zIndex: 1,
        }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="0.8">
            <rect x="2" y="3" width="20" height="14" rx="2"/>
            <line x1="8" y1="21" x2="16" y2="21"/>
            <line x1="12" y1="17" x2="12" y2="21"/>
          </svg>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt=""
      className="service-card-img"
      onError={() => setFailed(true)}
    />
  )
}

export default function Services() {
  const { services } = businessData

  return (
    <section
      className="section"
      id="services"
      style={{ background: 'var(--bg-page)' }}
    >
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <div className="section-label">Услуги</div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '0.75rem' }}>
            Что мы ремонтируем
          </h2>
          <p style={{
            color: 'var(--text-2)',
            fontSize: '1rem',
            maxWidth: '520px',
            lineHeight: 1.65,
          }}>
            От мелкой бытовой техники до редких устройств, которые другие мастера не берут.
          </p>
        </div>

        {/* Grid */}
        <div className="services-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          {services.map((service) => {
            const Icon = ServiceIcons[service.id]
            return (
              <div
                key={service.id}
                className="service-card"
                style={{
                  background: 'var(--bg-card)',
                  transition: 'background 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--bg-elevated)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'var(--bg-card)'
                }}
              >
                {/* Card image */}
                <ServiceImage src={service.image} serviceId={service.id} />

                {/* Card content */}
                <div style={{ padding: '1.5rem' }}>
                  {/* Icon + Title */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                  }}>
                    <div style={{
                      color: 'var(--amber)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}>
                      {Icon && <Icon size={22} />}
                    </div>
                    <div>
                      <h3 style={{
                        fontFamily: 'var(--font-display)',
                        fontWeight: 700,
                        fontSize: '1.05rem',
                        letterSpacing: '0.01em',
                        color: 'var(--text-1)',
                        lineHeight: 1.15,
                        marginBottom: '0.2rem',
                      }}>
                        {service.title}
                      </h3>
                      <span style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        color: service.id === 'tools' ? 'var(--amber)' : 'var(--text-3)',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                      }}>
                        {service.subtitle}
                      </span>
                    </div>
                  </div>

                  {/* Examples */}
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                    {service.examples.map((ex, i) => (
                      <li key={i} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.82rem',
                        color: 'var(--text-2)',
                        fontFamily: 'var(--font-body)',
                        lineHeight: 1.4,
                      }}>
                        <span style={{ color: 'var(--amber)', opacity: 0.6, flexShrink: 0 }}>
                          <CheckIcon size={11} />
                        </span>
                        {ex}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Photo credit note */}
        <p style={{
          marginTop: '1.5rem',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.6rem',
          color: 'var(--text-3)',
          letterSpacing: '0.04em',
          textAlign: 'center',
        }}>
          Фото используются в демо-макете. После согласования можно заменить на финальные материалы владельца.
        </p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .services-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
