import { useState, useEffect } from 'react'
import { businessData } from '../data/businessData'
import { WhatsAppIcon, PhoneIcon } from './Icons'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', handle, { passive: true })
    return () => window.removeEventListener('scroll', handle)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 200,
        padding: '0.875rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: scrolled ? 'rgba(13, 12, 10, 0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px) saturate(1.6)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(240,237,230,0.07)' : '1px solid transparent',
        transition: 'background-color 0.35s ease, border-color 0.35s ease, backdrop-filter 0.35s ease',
      }}
    >
      {/* Brand */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
        <div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.4rem',
            letterSpacing: '0.025em',
            color: 'var(--text-1)',
            lineHeight: 1,
          }}>
            {businessData.businessName}
          </div>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            color: 'var(--text-3)',
            letterSpacing: '0.02em',
            marginTop: '0.2rem',
          }}>
            {businessData.descriptor}
          </div>
        </div>
        <span className="tag-demo">{businessData.badgeText}</span>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
        <a
          href={businessData.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-whatsapp"
          style={{ padding: '0.55rem 1.1rem', fontSize: '0.82rem' }}
        >
          <WhatsAppIcon size={14} />
          <span>WhatsApp</span>
        </a>
        <a
          href={businessData.phoneHref}
          className="btn btn-ghost"
          style={{
            padding: '0.55rem 1.1rem',
            fontSize: '0.82rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <PhoneIcon size={13} />
          <span className="phone-label">{businessData.phoneDisplay}</span>
        </a>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .phone-label { display: none; }
        }
      `}</style>
    </header>
  )
}
