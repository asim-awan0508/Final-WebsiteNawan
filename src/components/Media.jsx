import { FaFacebook, FaWhatsapp } from 'react-icons/fa'
import { FiArrowRight } from 'react-icons/fi'
import styles from './Media.module.css'

const MEDIA_LINKS = [
  {
    icon: <FaFacebook />,
    iconClass: styles.facebookIcon,
    title: 'Facebook Page',
    text: 'Follow Nawan Village for photos, news and updates.',
    linkLabel: 'Visit Page',
    href: 'https://www.facebook.com/NawanMianwali',
  },
  {
    icon: <FaWhatsapp />,
    iconClass: styles.whatsappIcon,
    title: 'WhatsApp Group',
    text: 'Join the community group for daily updates and announcements.',
    linkLabel: 'Join Group',
    href: 'https://chat.whatsapp.com/your-invite-link-here',
  },
]

function Media() {
  return (
    <section className={styles.section} id="media">
      <div className="container">
        <span className={styles.eyebrow}>Stay Connected</span>
        <h2 className={styles.title}>Join Us Online</h2>
        <p className={styles.subtitle}>
          Follow along or join the conversation — connect with Nawan on
          Facebook and WhatsApp.
        </p>

        <div className={styles.grid}>
          {MEDIA_LINKS.map((item) => (
            <div className={styles.card} key={item.title}>
              <div className={`${styles.icon} ${item.iconClass}`}>
                {item.icon}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardText}>{item.text}</p>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardLink}
                >
                  {item.linkLabel}
                  <FiArrowRight aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Media