import { FiArrowRight, FiMail } from 'react-icons/fi'
import { GiWheat } from 'react-icons/gi'
import styles from './welcome.module.css'
import {Link} from 'react-router-dom'

function Welcome() {
  return (
    <section className={styles.nawanWelcome} id="home">
      <div className={`container ${styles.nawanWelcomeInner}`}>
        <div className={styles.nawanWelcomeContent}>
          <h1 className={`font-display ${styles.nawanWelcomeTitle}`}>
            Nawan
          </h1>
          <p className={styles.nawanWelcomeLede}>
            A farming village in Punjab, where mornings start over wheat
            fields and evenings end on rooftop charpais. This is home to
            generations who still know each other by name.
          </p>

          <div className={styles.nawanWelcomeActions}>
            <Link to ="/about" className={`${styles.nawanBtn} ${styles.nawanBtnPrimary}`}>
             Explore
              <FiArrowRight aria-hidden="true" />
            </Link>
            <a href="#contact" className={`${styles.nawanBtn} ${styles.nawanBtnOutline}`}>
              Contact Us
              <FiMail aria-hidden="true" />
            </a>
          </div>

          <div className={styles.nawanWelcomeStats}>
            {/* <div className={styles.nawanStat}>
              <span className={`nawan-stat-num font-display ${styles.nawanStatNum}`}>60+</span>
              <span className={`nawan-stat-label ${styles.nawanStatLabel}`}>Families</span>
            </div>
            <div className={styles.nawanStat}>
              <span className={`nawan-stat-num font-display ${styles.nawanStatNum}`}>1890</span>
              <span className={`nawan-stat-label ${styles.nawanStatLabel}`}>Founded</span>
            </div>
            <div className={styles.nawanStat}>
              <span className={`nawan-stat-num font-display ${styles.nawanStatNum}`}>3,200</span>
              <span className={`nawan-stat-label ${styles.nawanStatLabel}`}>Acres farmed</span>
            </div>  */}
          </div>
        </div>

        <div className={styles.nawanWelcomeVisual}>
          <div className={styles.nawanVisualRing}>
            <GiWheat aria-hidden="true" className={styles.nawanVisualIcon} />
          </div>
          <div className={styles.nawanVisualChip}>Punjab, Pakistan</div>
        </div>
      </div>
    </section>
  )
}

export default Welcome;