import PictureCard from './PictureCard.jsx'
import styles from './Community.module.css'
import elderPic from '../assets/elder.jpg'
import mosquePic from '../assets/mosque.png'
import boyschoolPic from '../assets/Boyschool.png'
import nawanPic from '../assets/Nawan.png'
import plantPic from '../assets/plants.jpg'

// Edit this list to add, remove, or reorder committees/groups.
// Put a real photo path in `image` for each one.
// TODO: education-committee.jpg, mosque-committee.jpg, health-volunteers.jpg and
// welfare-fund.jpg never existed in src/assets — swap these placeholders for
// real photos when you have them.
const GROUPS = [
  {
    image: elderPic,
    label:'Jaba Farmhouse',
    title: 'Jaba Farmhouse — Night Gatheringl',
    text: 'A peaceful night gathering place at Jaba Farmhouse where friends and community members sit together, talk, share stories, and enjoy their time together.',
  },
  {
  image: plantPic,
  label: 'Jaba Farmhouse',
  title: 'Shajar Kari Muhim',
  text: 'Promotes tree plantation and encourages the community to plant and care for trees for a greener and healthier environment.',
},
  {
    image: mosquePic,
    label:'Jaba Farmhouse',
    title: 'Mosque Committee',
    text: 'Manages the two village mosques, Friday sermons, and Eid and Milad gatherings.',
  },
  {
    image: elderPic,
    label:'Jaba Farmhouse',
    title: 'Health Volunteers',
    text: 'Coordinates vaccination drives, first aid, and the monthly visiting-doctor camp.',
  },
  {
    image: nawanPic,
    label:'Jaba Farmhouse',
    title: 'Welfare Fund',
    text: 'A community-run fund that helps families with weddings, medical costs, and emergencies.',
  },
]

// Edit these figures to reflect real numbers for Nawan.
const STATS = [
  { num: '600+', label: 'Families' },
  { num: '5', label: 'Active Committees' },
  { num: '1890', label: 'Founded' },
  { num: '3,200', label: 'Acres Farmed' },
]

function Community() {
  return (
    <>
    <section className={styles.container} id="about">
         <div className={styles.aboutContainer}>
            <div >
                <h2 className={styles.handing}>Our Community</h2>
            </div>
        </div>
    </section>
    <section className={styles.headingSection}>
        <div className={styles.headingInner}>
            <h1 className={styles.title}>
                Who Keeps Nawan Running
            </h1>
            <p className={styles.subtitle}>
            Nawan is organised the way most Punjab villages are — through
            committees of neighbours who volunteer their time. Together they
            keep the village fed, educated, healthy, and looked after.
            </p>
        </div>
    </section>
    <section className={styles.CardContainer}>
            {/* Committee / group picture cards */}
        <div className={styles.grid}>
          {GROUPS.map((g) => (
            <PictureCard
              key={g.title}
              image={g.image}
              title={g.title}
              text={g.text}
              label={g.label}
            />
          ))}
        </div>

        {/* Stats strip */}
        <div className={styles.stats}>
          {STATS.map((s) => (
            <div className={styles.stat} key={s.label}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

    </section>
    </>
  )
}

export default Community