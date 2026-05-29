import { businessData } from '../data/businessData'
import { StarIcon, UsersIcon, MessageIcon, CalendarIcon, WhatsAppIcon } from './Icons'

const iconMap = {
  star: StarIcon,
  users: UsersIcon,
  message: MessageIcon,
  calendar: CalendarIcon,
  chat: WhatsAppIcon,
}

export default function TrustBar() {
  const { trustItems } = businessData

  return (
    <div className="trust-bar">
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 2rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      }}>
        {trustItems.map((item, i) => {
          const Icon = iconMap[item.type] || StarIcon
          return (
            <div key={i} className="trust-item" style={{ flex: '1 1 180px' }}>
              <Icon size={18} style={{ color: 'var(--amber)', marginBottom: '0.5rem' }} />
              <div style={{
                color: i === 0 ? 'var(--amber-bright)' : 'var(--text-1)',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: i === 0 ? '1.5rem' : '1.15rem',
                letterSpacing: '0.02em',
                lineHeight: 1,
                marginBottom: '0.3rem',
                marginTop: '0.4rem',
              }}>
                {item.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                color: 'var(--text-3)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}>
                {item.label}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
