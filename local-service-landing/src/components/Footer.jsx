import { businessData } from '../data/businessData'
import { MapPinIcon, ClockIcon, PhoneIcon } from './Icons'

export default function Footer() {
  const {
    businessName, descriptor,
    address, office, metro, metroWalk,
    workingHours, workingNote,
    phoneDisplay, phoneHref,
    district, badgeText,
  } = businessData

  return (
    <footer style={{
      background: 'var(--bg-base)',
      borderTop: '1px solid var(--border)',
      padding: '3rem 0 2rem',
    }}>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '2.5rem',
        }}>
          {/* Brand column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: '1.5rem',
              color: 'var(--text-1)',
              letterSpacing: '0.02em',
              marginBottom: '0.3rem',
            }}>
              {businessName}
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.82rem',
              color: 'var(--text-3)',
              marginBottom: '1.25rem',
            }}>
              {descriptor}
            </div>
            <span className="tag-demo">{badgeText}</span>
            <p style={{
              marginTop: '1.25rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--text-3)',
              lineHeight: 1.6,
              maxWidth: '280px',
            }}>
              Демо-макет сайта. Контакты и тексты можно заменить после согласования с владельцем.
            </p>
          </div>

          {/* Address column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--amber)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Адрес
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <MapPinIcon size={13} style={{ color: 'var(--text-3)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.5 }}>
                    {address}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)' }}>
                    {office}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '0.7rem', color: 'var(--text-3)', marginTop: '2px', flexShrink: 0 }}>М</span>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-2)' }}>
                  {metro}<br/>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-3)' }}>{metroWalk}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Hours + phone column */}
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              color: 'var(--amber)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '1rem',
            }}>
              Контакты
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                <ClockIcon size={13} style={{ color: 'var(--text-3)', marginTop: '2px', flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.82rem', color: 'var(--text-2)' }}>
                    {workingHours}
                  </div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.75rem', color: 'var(--text-3)' }}>
                    {workingNote}
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <PhoneIcon size={13} style={{ color: 'var(--text-3)', flexShrink: 0 }} />
                <a href={businessData.phoneHref} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--text-2)',
                  textDecoration: 'none',
                }}>
                  {phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--text-3)',
            letterSpacing: '0.05em',
          }}>
            © {new Date().getFullYear()} {businessName} · {district} · Демо-макет
          </div>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            color: 'var(--text-3)',
            letterSpacing: '0.05em',
          }}>
            Не является официальным сайтом
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </footer>
  )
}
