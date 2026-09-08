import { Link } from 'react-router-dom'
import { GiWheat } from 'react-icons/gi'
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiYoutube,
} from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './Footer.module.css'

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Community', to: '/community' },
]

const MORE_LINKS = [
  { label: 'Heroes', to: '/heroes' },
  { label: 'Grounds', to: '/grounds' },
  { label: 'Events', to: '/events' },
  { label: 'Project', to: '/project' },
    {label: 'Sports', to: '/sports'},
]

const SOCIAL_LINKS = [
  { icon: <FiFacebook />, label: 'Facebook', href: 'https://www.facebook.com/NawanMianwali' },
  { icon: <FaWhatsapp />, label: 'WhatsApp', href: 'https://chat.whatsapp.com/your-invite-link-here' },
  { icon: <FiInstagram />, label: 'Instagram', href: '#' },
  { icon: <FiYoutube />, label: 'YouTube', href: '#' },
]

function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        {/* Brand */}
        <div>
          <div className={styles.logoRow}>
            <span className={styles.logoMark}>
              <GiWheat aria-hidden="true" />
            </span>
            <div>
              <div className={styles.brandName}>Nawan</div>
              <div className={styles.brandSub}>Village, Punjab</div>
            </div>
          </div>
          <p className={styles.text}>
            A farming village rooted in tradition — this site is a home for
            its community, history, and everyday life.
          </p>
          <div className={styles.social}>
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div className={styles.linkContainer}>
          <h4 className={styles.heading}>Quick Links</h4>
          <ul className={styles.list}>
            {QUICK_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* More links */}
        <div className={styles.linkContainer}>
          <h4 className={styles.heading}>Explore</h4>
          <ul className={styles.list}>
            {MORE_LINKS.map((l) => (
              <li key={l.label}>
                <Link to={l.to}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className={styles.heading}>Contact</h4>
          <ul className={styles.list}>
            <li className={styles.contactItem}>
              <FiPhone /> +92 300 0000000
            </li>
            <li className={styles.contactItem}>
              <FiMail /> info@nawanvillage.pk
            </li>
            <li className={styles.contactItem}>
              <FiMapPin /> Nawan Village, Punjab, Pakistan
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className="container">
          &copy; {year} Nawan Village. Built with care for the community.
        </div>
      </div>
    </footer>
  )
}

export default Footer