import styles from './PictureCard.module.css'

/**
 * Reusable card with a picture, an optional small label, a title, and text.
 *
 * Usage:
 *   <PictureCard
 *     image="/images/gallery/fields.jpg"
 *     label="Beautiful Masjids of Nawan"   // optional
 *     title="Masjids"
 *     text="Nawan is home to beautiful and historic masjids..."
 *   />
 */
function PictureCard({ image, label, title, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrap}>
        <img
          src={image}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        {label && <span className={styles.label}>{label}</span>}
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  )
}

export default PictureCard