import { useState } from 'react'
import { businessData } from '../data/businessData'
import { WhatsAppIcon, PhoneIcon, TelegramIcon, StarIcon, MapPinIcon } from './Icons'

function HeroImage({ src }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        background: 'var(--bg-elevated)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {/* Technical grid pattern fallback */}
        <div style={{
          position: 'absolute', inset: 0,
          backgroundImage: `
            linear-gradient(rgba(217,119,6,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(217,119,6,0.07) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px',
        }} />
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse at center, rgba(217,119,6,0.06) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '1rem',
          opacity: 0.4,
        }}>
          <svg width="72" height="72" viewBox="0 0 24 24" fill="none" stroke="var(--amber)" strokeWidth="0.8">
            <circle cx="12" cy="12" r="10"/>
            <polyline points="12 6 12 12 16 14"/>
            <circle cx="12" cy="12" r="1" fill="var(--amber)"/>
          </svg>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.6rem', color: 'var(--amber)', letterSpacing: '0.1em' }}>
            ФОТО / ДЕМО
          </span>
        </div>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt="Мастерская — ремонт техники"
      onError={() => setFailed(true)}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: 'center',
        filter: 'brightness(0.72) saturate(0.85)',
        transition: 'filter 0.4s ease',
      }}
    />
  )
}

export default function Hero() {
  const { hero, rating, ratingsCount, phoneHref, whatsappUrl, telegramUrl, images } = businessData

  return (
    <section
      className="circuit-bg noise-layer"
      style={{
        minHeight: '100vh',
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Amber radial glow - top left */}
      <div style={{
        position: 'absolute',
        top: '-10%', left: '-5%',
        width: '50%', height: '70%',
        background: 'radial-gradient(ellipse, rgba(217,119,6,0.06) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div style={{
        display: 'flex',
        minHeight: '100vh',
        paddingTop: '80px',
        position: 'relative',
        zIndex: 1,
      }}>
        {/* Left — Text column */}
        <div style={{
          flex: '0 0 58%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '4rem 3.5rem 4rem 10vw',
          maxWidth: '700px',
          paddingLeft: 'max(2rem, calc((100vw - 1200px) / 2 + 2rem))',
        }}>

          {/* Tag */}
          <div style={{ marginBottom: '1.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="tag tag-amber">
              <span>⊙</span> Санкт-Петербург · Центральный район
            </span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(3rem, 6.5vw, 5.5rem)',
            lineHeight: 1.0,
            color: 'var(--text-1)',
            marginBottom: '1.75rem',
            letterSpacing: '-0.01em',
            whiteSpace: 'pre-line',
          }}>
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.95rem, 1.5vw, 1.05rem)',
            color: 'var(--text-2)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            maxWidth: '520px',
          }}>
            {hero.subheadline}
          </p>

          {/* CTA buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            marginBottom: '2.5rem',
          }}>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer"
              className="btn btn-whatsapp">
              <WhatsAppIcon size={16} />
              Написать в WhatsApp
            </a>
            <a href={phoneHref} className="btn btn-amber">
              <PhoneIcon size={15} />
              Позвонить
            </a>
            <a href={telegramUrl} className="btn btn-telegram">
              <TelegramIcon size={15} />
              Telegram
            </a>
          </div>

          {/* Trust badges */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.75rem',
            alignItems: 'center',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(245,158,11,0.1)',
              border: '1px solid rgba(245,158,11,0.2)',
              borderRadius: '3px',
              padding: '0.4rem 0.9rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              color: 'var(--amber-bright)',
            }}>
              <StarIcon size={13} />
              <span>{rating}</span>
              <span style={{ color: 'var(--text-3)', fontWeight: 400 }}>/ {ratingsCount} оценок {hero.ratingLabel}</span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.45rem',
              background: 'rgba(240,237,230,0.05)',
              border: '1px solid var(--border)',
              borderRadius: '3px',
              padding: '0.4rem 0.9rem',
              fontSize: '0.82rem',
              fontFamily: 'var(--font-body)',
              color: 'var(--text-2)',
            }}>
              <MapPinIcon size={13} />
              <span>{hero.locationLabel}</span>
            </div>
          </div>

          {/* Demo note */}
          <p style={{
            marginTop: '2.5rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--text-3)',
            letterSpacing: '0.04em',
            borderLeft: '2px solid var(--border)',
            paddingLeft: '0.75rem',
            lineHeight: 1.5,
            maxWidth: '480px',
          }}>
            {hero.demoNote}
          </p>
        </div>

        {/* Right — Image column */}
        <div style={{
          flex: 1,
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100%',
        }}>
          <HeroImage src={images.hero} />

          {/* Dark overlay gradients */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, var(--bg-base) 0%, transparent 30%)',
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(15,14,12,0.5) 0%, transparent 40%, rgba(15,14,12,0.6) 100%)',
            pointerEvents: 'none',
          }} />
          {/* Amber tint overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'radial-gradient(ellipse at 60% 40%, rgba(217,119,6,0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          }} />

          {/* Floating info card */}
          <div style={{
            position: 'absolute',
            bottom: '2.5rem', right: '2rem',
            background: 'rgba(15,14,12,0.88)',
            border: '1px solid var(--border)',
            backdropFilter: 'blur(10px)',
            borderRadius: '4px',
            padding: '1rem 1.25rem',
            maxWidth: '220px',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--amber)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.4rem',
            }}>
              Мастерская
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              color: 'var(--text-1)',
              fontWeight: 500,
              lineHeight: 1.4,
            }}>
              Днепропетровская, 33<br/>
              <span style={{ color: 'var(--text-2)', fontSize: '0.75rem', fontWeight: 400 }}>
                офис 212 · 2 этаж
              </span>
            </div>
            <div style={{
              marginTop: '0.6rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--text-3)',
            }}>
              10:00–19:00 · По записи
            </div>
          </div>
        </div>
      </div>

      {/* Mobile styles */}
      <style>{`
        @media (max-width: 900px) {
          .hero-split { flex-direction: column !important; }
        }
        @media (max-width: 768px) {
          .hero-img-col {
            display: none !important;
          }
        }
      `}</style>

      {/* Bottom fade to page */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: 0, right: 0,
        height: '80px',
        background: 'linear-gradient(to bottom, transparent, var(--bg-page))',
        pointerEvents: 'none',
      }} />
    </section>
  )
}
