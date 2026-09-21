import styles from './Gallery.module.css'
import rianpic from '../assets/rianpic.jpg'
import mosque from '../assets/mosque.png'
import boyschool from '../assets/Boyschool.png'
import girlschool from '../assets/Girlschool.jpg'
import nawan from '../assets/Nawan.png'
import elder from '../assets/elder.jpg'
import nawan2 from '../assets/Nawan2.png'
import nawan1 from '../assets/Nawan1.png'
import nawanlack from '../assets/Nawanlack.png'
import heroPic from '../assets/hero.png'

const GALLERY_ITEMS = [
  {
    image: rianpic,
    title: 'Nawan After Rain',
    subtitle:'Village Environment',
    text: 'After rainfall, Nawan takes on a refreshing and peaceful atmosphere, with greener surroundings, fresh air, and a beautiful natural charm.',
  },
  {
    image: mosque,
    title: 'Beautiful Masjids of Nawan',
    subtitle:'Masjids',
    text: 'The main mosque where the community gathers for Friday prayers.',
  },
  {
    // TODO: no "street.jpg" file exists in src/assets — add a real photo of the
    // main road and swap it in here. Using hero.png as a placeholder for now.
    image: heroPic,
    title: 'Main Road',
    text: 'The road connecting Nawan to the highway, lined with old trees.',
  },
  {
    image: boyschool,
    title: 'Government School',
    subtitle:'Boy School Nawan',
    text: 'The boys school of Nawan provides local children with education and opportunities to build a brighter future for themselves and their community.',
  },
  {
    image: girlschool,
    title: 'Government School',
    subtitle:'Girls School Nawan',
    text: 'The girls school of Nawan plays an important role in educating young girls and empowering the next generation through knowledge and learning.',
  },
  {
    image: nawan,
    title: 'The Historic Pipal Tree',
    subtitle:'Pipal',
    text: 'The old Pipal tree of Nawan is a cherished landmark believed to date back to the British era and stands as a living reminder of the village’s history..',
  },
  {
    image: elder,
    title: 'Village Elders',
    text: 'A gathering of elders, discussing matters of the community.',
  },
  {
    image: nawan2,
    title: 'Tailor',
    subtitle:'Mani Tailor',
    text: 'Mani Tailor is a trusted local tailoring shop where skilled craftsmanship and traditional clothing come together for the people of Nawan.',
  },
  {
    image: nawan1,
    title: 'Barber ',
    subtitle:'Faisal Barber',
    text: 'Faisal Barber is a familiar local business in Nawan, providing grooming and traditional barbering services to the people of the village..',
  },
  {
    image: nawanlack,
    title: 'Lake',
    subtitle:'Lake of Nawan',
    text: 'The old lake of Nawan is a memorable part of the village landscape, reflecting the natural beauty and history of the local community.',
  },
  
]

const Gallery = () => {
  return (
    <section className={styles.GalleryContaineer}>
      {/* Banner */}
      <section className={styles.section} id="gallery">
        <div className={styles.container}>
          {/* Heading */}
          <span className={styles.eyebrow}>Nawan Gallery</span>

          <h1 className={styles.title}>Glimpses of Nawan</h1>

          <p className={styles.subtitle}>
            Photos from around the village — fields, gatherings, and
            everyday life.
          </p>
        </div>
      </section>

      {/* Photo grid */}
              <div className={styles.list}>
          {GALLERY_ITEMS.map((item, index) => (
            <div
              className={`${styles.card} ${index % 2 === 1 ? styles.reverse : ''}`}
              key={item.title}
            >
              <div className={styles.imageWrap}>
                <img
                  src={item.image}
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.body}>
                <span className={styles.label}>{item.title}</span>
                <h2 className={styles.cardTitle}>{item.subtitle}</h2>
                <p className={styles.cardText}>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Gallery