import { businessData } from '../data/businessData'
import { MapPinIcon, ClockIcon, PhoneIcon, WhatsAppIcon, TelegramIcon } from './Icons'

function MapPlaceholder() {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      minHeight: '280px',
      background: 'var(--bg-elevated)',
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      {/* Grid lines */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(217,119,6,0.08) 1px, transparent 1px),
          linear-gradient(90deg, rgba(217,119,6,0.08) 1px, transparent 1px)
        `,
        backgroundSize: '36px 36px',
      }} />
      {/* Dot marker */}
      <div style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        <div style={{
          width: '48px', height: '48px',
          borderRadius: '50%',
          background: 'var(--amber-dim)',
          border: '2px solid var(--amber)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--amber)',
          boxShadow: '0 0 20px var(--amber-glow)',
        }}>
          <MapPinIcon size={22} />
        </div>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          color: 'var(--text-2)',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          textAlign: 'center',
        }}>
          Санкт-Петербург<br/>Днепропетровская, 33
        </div>
        <a
          href={businessData.mapUrl}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--amber)',
            letterSpacing: '0.06em',
            textDecoration: 'underline',
            opacity: 0.7,
          }}
        >
          Открыть в 2GIS →
        </a>
      </div>
    </div>
  )
}

export default function Location() {
  const {
    address, office, metro, metroWalk,
    workingHours, workingNote,
    phoneDisplay, phoneHref,
    whatsappUrl, telegramUrl,
    district,
  } = businessData

  const infoRows = [
    {
      icon: <MapPinIcon size={16} />,
      label: 'Адрес',
      value: `${address}, ${office}`,
      sub: `${district}`,
    },
    {
      icon: <MapPinIcon size={16} />,
      label: 'Метро',
      value: metro,
      sub: metroWalk,
    },
    {
      icon: <ClockIcon size={16} />,
      label: 'Режим работы',
      value: workingHours,
      sub: workingNote,
    },
    {
      icon: <PhoneIcon size={16} />,
      label: 'Телефон',
      value: phoneDisplay,
      href: phoneHref,
    },
  ]

  return (
    <section
      className="section"
      id="location"
      style={{ background: 'var(--bg-page)' }}
    >
      <div className="container">
        <div className="section-label">Как добраться</div>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)', marginBottom: '3rem' }}>
          Мастерская на Лиговке
        </h2>

        <div className="location-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          alignItems: 'stretch',
        }}>
          {/* Map placeholder */}
          <MapPlaceholder />

          {/* Info card */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}>
            {/* Info rows */}
            <div>
              {infoRows.map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    borderBottom: '1px solid var(--border)',
                    alignItems: 'flex-start',
                  }}
                >
                  <div style={{
                    color: 'var(--amber)',
                    marginTop: '2px',
                    flexShrink: 0,
                    opacity: 0.8,
                  }}>
                    {row.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.58rem',
                      color: 'var(--text-3)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.2rem',
                    }}>
                      {row.label}
                    </div>
                    {row.href ? (
                      <a href={row.href} style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--amber-bright)',
                        fontWeight: 500,
                        textDecoration: 'none',
                      }}>
                        {row.value}
                      </a>
                    ) : (
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--text-1)',
                        fontWeight: 500,
                      }}>
                        {row.value}
                      </div>
                    )}
                    {row.sub && (
                      <div style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.78rem',
                        color: 'var(--text-3)',
                        marginTop: '0.2rem',
                      }}>
                        {row.sub}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact section */}
            <div style={{ padding: '1.5rem' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--text-3)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '0.875rem',
              }}>
                Связь перед визитом
              </div>
              <div style={{ display: 'flex', gap: '0.625rem', flexWrap: 'wrap' }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ padding: '0.6rem 1.1rem', fontSize: '0.82rem' }}
                >
                  <WhatsAppIcon size={14} />
                  WhatsApp
                </a>
                <a
                  href={telegramUrl}
                  className="btn btn-telegram"
                  style={{ padding: '0.6rem 1.1rem', fontSize: '0.82rem' }}
                >
                  <TelegramIcon size={14} />
                  Telegram
                </a>
                <a
                  href={phoneHref}
                  className="btn btn-ghost"
                  style={{ padding: '0.6rem 1.1rem', fontSize: '0.82rem' }}
                >
                  <PhoneIcon size={13} />
                  Позвонить
                </a>
              </div>
              <p style={{
                marginTop: '1rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'var(--text-3)',
                lineHeight: 1.5,
              }}>
                Посещение офиса — по предварительной договорённости.
                Вход осуществляется по пропускам.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .location-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
