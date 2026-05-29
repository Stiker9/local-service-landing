import { businessData } from '../data/businessData'
import { WhatsAppIcon, PhoneIcon, TelegramIcon } from './Icons'

export default function FinalCTA() {
  const { whatsappUrl, phoneHref, telegramUrl, phoneDisplay } = businessData

  return (
    <section
      className="circuit-bg noise-layer"
      id="contact"
      style={{
        background: 'var(--bg-base)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Amber radial glow */}
      <div style={{
        position: 'absolute',
        bottom: '-20%', left: '20%',
        width: '60%', height: '100%',
        background: 'radial-gradient(ellipse, rgba(217,119,6,0.07) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container final-cta-grid" style={{
        position: 'relative',
        padding: '5rem 2rem',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '4rem',
        alignItems: 'center',
      }}>
        {/* Left — Headline */}
        <div>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>
            Связаться с мастером
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
            color: 'var(--text-1)',
            lineHeight: 1.05,
            marginBottom: '1.25rem',
          }}>
            Опишите неисправность — мастер подскажет следующий шаг
          </h2>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--text-2)',
            lineHeight: 1.7,
            maxWidth: '460px',
          }}>
            Напишите в WhatsApp или Telegram, приложите фото техники и кратко опишите проблему.
            Мастер уточнит возможность ремонта и согласует запись.
          </p>

          {/* Trust row */}
          <div style={{
            marginTop: '2rem',
            display: 'flex',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}>
            {['Рейтинг 5.0 в 2GIS', 'Работа по предварительной записи', '10:00–19:00'].map((t, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: 'var(--text-3)',
              }}>
                <span style={{ color: 'var(--amber)', fontSize: '0.7rem' }}>◈</span>
                {t}
              </div>
            ))}
          </div>
        </div>

        {/* Right — Actions card */}
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border)',
          borderRadius: '4px',
          padding: '2.5rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            color: 'var(--text-3)',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '1.5rem',
          }}>
            Выберите способ связи
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
              style={{
                width: '100%',
                padding: '0.875rem 1.5rem',
                fontSize: '0.95rem',
                justifyContent: 'flex-start',
              }}
            >
              <WhatsAppIcon size={18} />
              <div>
                <div>Написать в WhatsApp</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.75, fontWeight: 400 }}>Приложите фото техники</div>
              </div>
            </a>

            <a
              href={telegramUrl}
              className="btn btn-telegram"
              style={{
                width: '100%',
                padding: '0.875rem 1.5rem',
                fontSize: '0.95rem',
                justifyContent: 'flex-start',
              }}
            >
              <TelegramIcon size={18} />
              <div>
                <div>Написать в Telegram</div>
                <div style={{ fontSize: '0.7rem', opacity: 0.75, fontWeight: 400 }}>Опишите проблему текстом</div>
              </div>
            </a>

            <a
              href={phoneHref}
              className="btn btn-ghost"
              style={{
                width: '100%',
                padding: '0.875rem 1.5rem',
                fontSize: '0.95rem',
                justifyContent: 'flex-start',
                borderColor: 'var(--border-hover)',
              }}
            >
              <PhoneIcon size={18} />
              <div>
                <div>Позвонить</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-3)', fontWeight: 400 }}>{phoneDisplay}</div>
              </div>
            </a>
          </div>

          <div style={{
            marginTop: '1.5rem',
            padding: '1rem',
            background: 'var(--amber-dim)',
            borderRadius: '3px',
            border: '1px solid var(--amber-border)',
          }}>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              color: 'var(--text-2)',
              lineHeight: 1.55,
            }}>
              <span style={{ color: 'var(--amber)', fontWeight: 600 }}>Перед визитом</span> — свяжитесь заранее.
              Вход в офис 212 по пропускам, 2 этаж.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .final-cta-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  )
}
