import { businessData } from '../data/businessData'

const icons = ['◈', '⊙', '★', '⊛', '◷', '⊕']

export default function WhyChooseUs() {
  const { advantages } = businessData

  return (
    <section
      className="section"
      id="why"
      style={{
        background: 'var(--bg-page)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle amber accent top-right */}
      <div style={{
        position: 'absolute',
        top: '-15%', right: '-10%',
        width: '40%', height: '80%',
        background: 'radial-gradient(ellipse, rgba(217,119,6,0.04) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        {/* Heading */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '3.5rem',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div>
            <div className="section-label">Почему выбирают нас</div>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)' }}>
              Что говорят клиенты
            </h2>
          </div>
          <div style={{
            fontFamily: 'var(--font-display)',
            fontSize: '3.5rem',
            fontWeight: 800,
            color: 'var(--amber)',
            opacity: 0.18,
            lineHeight: 1,
            letterSpacing: '0.02em',
          }}>
            5.0
          </div>
        </div>

        {/* Advantages grid */}
        <div className="why-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          background: 'var(--border)',
          borderRadius: '4px',
          overflow: 'hidden',
        }}>
          {advantages.map((adv, i) => (
            <div
              key={i}
              style={{
                background: 'var(--bg-card)',
                padding: '2rem',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--bg-elevated)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--bg-card)'
              }}
            >
              {/* Icon */}
              <div style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.6rem',
                color: 'var(--amber)',
                marginBottom: '1rem',
                opacity: 0.85,
                lineHeight: 1,
              }}>
                {icons[i]}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: '1rem',
                color: 'var(--text-1)',
                lineHeight: 1.2,
                marginBottom: '0.6rem',
                letterSpacing: '0.01em',
              }}>
                {adv.title}
              </h3>

              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--text-2)',
                lineHeight: 1.65,
              }}>
                {adv.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .why-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
