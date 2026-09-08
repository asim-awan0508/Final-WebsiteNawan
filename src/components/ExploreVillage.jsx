import styles from './ExploreVillage.module.css'
import {Link, NavLink} from 'react-router-dom'

const explorePlaces = [
  {
    id: 1,
    title: 'History',
    description: 'Learn about the roots and growth of Nawan.',
    link: '/about',
  },
  {
    id: 2,
    title: 'Projects',
    description: 'Development projects shaping the village.',
    link: '/project',
  },
  {
    id: 3,
    title: 'Important Events',
    description: 'Festivals, gatherings and milestones.',
    link: '/events',
  },
  {
    id: 4,
    title: 'Players',
    description: 'Cricket and volleyball talent from Nawan.',
    link: '/players',
  },
  {
    id: 5,
    title: 'Grounds',
    description: 'Where Nawan plays and competes.',
    link: '/grounds',
  },
  {
    id: 6,
    title: 'Markets',
    description: 'The bazaars that keep the city moving.',
    link: '/markets',
  },
  {
    id: 7,
    title: 'Heroes',
    description: "People who shaped Nawan's story.",
    link: '/heroes',
  },
  {
    id: 8,
    title: 'Tourist Places',
    description: 'Sights worth the trip to Nawan.',
    link: '/tourist-places',
  },
]

function ExploreVillage() {
  return (
    <section className={styles.exploreSection}>

      <div className="container">

        {/* Heading */}
        <div className={styles.heading}>

          <p className={styles.subtitle}>
            Around the Village
          </p>

          <h2 className={styles.title}>
            Explore Our Village
          </h2>

          <p className={styles.description}>
            Nawan in one place, its history, its people, its games
            and its marks. Pick a page to start exploring.
          </p>

        </div>

        {/* Cards */}
        <div className="row g-3">

          {explorePlaces.map((place) => (

            <NavLink
              to={place.link}
              className={`${styles.cardLink} col-12 col-sm-6 col-lg-3`}
              key={place.id}
            >

              <div className={styles.card}>

                <h3 className={styles.cardTitle}>
                  {place.title}
                </h3>

                <p className={styles.cardDescription}>
                  {place.description}
                </p>

                {/* Link */}
                <Link
                
                  className={styles.cardLink}
                >
                  Visit page
                </Link>

              </div>

            </NavLink>

          ))}

        </div>

      </div>

    </section>
  )
}

export default ExploreVillage