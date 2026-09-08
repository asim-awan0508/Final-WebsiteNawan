import styles from './Heroes.module.css'
import drIrfan from '../assets/dr_irfan.jpeg'
import fasial from '../assets/fasial.jpg'
import khan from '../assets/khan.jpg'
import faheem from '../assets/faheem.jpg'
import haroon from '../assets/haroon.jpg'
import zeeshan from '../assets/zeeshan.png'
// TODO: no "malik-rafiq.jpg" exists in src/assets — add a real photo for
// Malik Rafiq / the other placeholder entries below and swap it in.
import rafiqPic from '../assets/rafiq.jpg'
import ibrarPic from '../assets/ibrar.jpg'
<<<<<<< HEAD
=======
import akmalPic from '../assets/malikakmal.jpeg'
>>>>>>> 40dd150 (Add new team images and update Heroe/vite config)



const HEROES = [
  {
    image: rafiqPic,
    role: 'Community Elder & Community Leader',
    name: 'Malik Rafiq',
    bio: 'Malik Rafiq Sahib is one of the most respected and senior members of Nawan. At more than 80 years of age, he continues to play an important role in the development and progress of the village. He works with different communities and helps bring people together for important community projects.',
    quote: 'He plays a major role in supporting community projects, communicating with different communities, helping arrange funds, and bringing people together for the development of Nawan.',
    points: [
      'A respected elder of Nawan with more than 80 years of life experience',
      'Supports different development projects in the village',
      'Works with different communities to help arrange funds and support',
    ],
  },
  {
    image: drIrfan,
    role: 'Eye Specialist & Community Leader',
    name: 'Dr. Irfan',
    bio: 'Dr. Irfan Sahib is an eye specialist and one of the hardworking and respected members of Nawan. He is known for his kind nature and his commitment to the development of the community. He has played a leading role in important projects, including the Water Supply Project and Tree Plantation Project.',
    quote: 'He has provided leadership and support for community development projects and has worked with other members of Nawan to improve the village and its environment.',
    points: [
      'Eye specialist and respected member of the community',
      'Played a leading role in the Water Supply Project',
      'Led the Tree Plantation Project',
      'Known for his kindness and dedication to Nawan',
    ],
  },
  {
    image: rafiqPic,
    role: 'Eye Specialist & Community Figure',
    name: 'Dr. Amir Awan',
    bio: 'Dr. Amir Awan is an eye specialist and the elder brother of Dr. Irfan Sahib. He is a respected member of Nawan and is also connected with Jaba Farmhouse, one of the special places associated with the community and its social life.',
    quote: 'Through his professional work and connection with the community, he contributes to the identity and development of Nawan. He and his family are also associated with Jaba Farmhouse, a popular gathering and tourist place for the people of Nawan.',
    points: [
      'Eye specialist',
      'Elder brother of Dr. Irfan Sahib',
      'Associated with Jaba Farmhouse',
      'A respected member of the Nawan community',
    ],
  },
  {
    image: fasial,
    role: 'Community Supporter & Cricket Legend',
    name: 'Malik Faisal Awan',
    bio: 'Malik Faisal Awan Sahib is a strong and highly respected supporter of Nawan. He has always stood with the people of the village and has played an important role in supporting community projects. Whether a project needs financial support, resources, or encouragement, Malik Faisal Awan Sahib is known for helping the community whenever he can. He is also respected as a cricket legend and an important figure in the sporting culture of Nawan.',
    quote: 'His continuous support for community projects, sports, and the people of Nawan has made him an important and respected figure in the village. His generosity and commitment have encouraged many community activities and development efforts.',
    points: [
      'Strong supporter of Nawan community projects',
      'Provides financial and other support for development activities',
     'Supports sports and local players',
      'Respected as a cricket legend of Nawan',
    ],
  },
  {
<<<<<<< HEAD
    image: rafiqPic,
=======
    image: akmalPic,
>>>>>>> 40dd150 (Add new team images and update Heroe/vite config)
    role: 'Eye Specialist & Community Figure',
    name: 'Dr. Akmal Awan',
    bio: 'Dr. Akmal Awan Sahib is an eye specialist who belongs to Nawan and currently lives in Jawabad. He is a hardworking professional who continues to serve people through his field and remains connected with his community and country.',
    quote: 'Through his professional career and service to people, Dr. Akmal Awan Sahib represents the hardworking and professional spirit of Nawan.',
    points: [
    'Eye specialist',
    'Belongs to Nawan',
    'Currently lives and works in Jawabad',
    'Known for his professional service and dedication',
    ],
  },
  {
    image: khan,
    role: 'King of Volleyball & International Player',
    name: 'Haji Muhammad Khan Awan',
    bio: 'Haji Muhammad Khan Awan Sahib is proudly known as the King of Volleyball of Nawan. He is an international-level volleyball player who has represented Pakistan. His achievements and dedication to volleyball have brought great pride to Nawan and inspired younger players in the community.',
    quote: `He has helped build Nawan’s reputation in volleyball and continues to represent the sporting talent and passion of the village.`,
    points: [
    'Known as the King of Volleyball',
    'International-level volleyball player',
    'Represented Pakistan',
    'A source of pride and inspiration for young players of Nawan',
    ],
  },
  {
    image: faheem,
    role: 'Gold Medalist & DevOps and Cloud Engineer',
    name: 'Muhammad Faheem Khan',
    bio: 'Muhammad Faheem Khan is a proud son of Nawan and a graduate of Namal University. He completed his BS Electrical Engineering in 2021 and has achieved several academic honors throughout his educational journey. He is a Gold Medalist and has built his professional career in DevOps and Cloud Engineering.',
    quote: 'Faheem Khan represents the academic, technical, and professional excellence of Nawan. His outstanding achievements and dedication to education and technology make him an inspiration for the young generation of the village.',
    points: [
      'Namal Education Foundation Gold Medalist Award',
    'Best FYP Award',
    `Dean's Honor List Award`,
    'Student of the Year Award 2021',
    'Student of the Year Award 2020',
    'Student of the Year Award 2019',
    'Student of the Year Award 2018',
    'Graduation with Honors',
    ],
  },
  {
    image: ibrarPic,
    role: 'PhD in Chemistry',
    name: 'Muhammad Ibrar Hussain',
    bio: 'Muhammad Ibrar Hussain is a hardworking and ambitious professional from Nawan who is associated with Italy and has completed a PhD in Chemistry. His academic journey and dedication represent the educational achievements and potential of the people of Nawan.',
    quote: 'Muhammad Ibrar Hussain is a hardworking and ambitious professional from Nawan who is associated with Italy and has completed a PhD in Chemistry. His academic journey and dedication represent the educational achievements and potential of the people of Nawan.',
    points: [
      'PhD in Chemistry',
        'Associated with Italy',
        'Hardworking and academically ambitious',
        'Represents the educational achievements of Nawan',
    ],
  },
  {
    image: haroon,
    role: 'Senior Software Engineer',
    name: 'Haroon Rasheed',
    bio: 'Haroon Rasheed is a Senior Software Engineer known for his professional excellence, leadership, and technology expertise. Coming from a humble background, he built his career through education, perseverance, and continuous development while remaining committed to his village community.',
    quote: 'He actively supports community development and is a notable supporter and generous donor of the village water supply initiative, along with other welfare and development projects.',
    points: [
      'Senior Software Engineer in the IT industry',
    'Recognized for professional excellence and leadership',
    'Supporter and donor of the village water supply initiative',
    'Contributed to community welfare and development projects',
    'Committed to the progress and well-being of his village',
    ],
  },
  {
    image: zeeshan,
    role: 'Senior Software Engineer',
    name: 'Muhammad Zeeshan',
    bio: 'Muhammad Zeeshan completed Software Engineering from Virtual University (2015–2019) and began his career in web development. He has worked with companies across Canada, Australia, and the USA, managing remote projects from Pakistan. After moving to Germany, he continued his career and now works in Hamburg for a leading Human Resources company.',
    quote: 'He has built expertise in web-based solutions, international collaboration, and remote project management, gaining professional experience in Lahore, Pakistan, and Germany.',
    points: [
    'Software Engineering graduate, Virtual University (2015–2019)',
    'Expertise in web development and web-based solutions',
    'Worked with companies across Canada, Australia, and the USA',
    'Managed international remote projects from Pakistan',
    'Currently working in Hamburg, Germany, in the HR sector',
    ],
  },
]

const Heroes =() => {
    return(
     <>
     <section>
        <div className={styles.container} id="about">
              <div className={styles.aboutContainer}>
                 <div >
                    <span className={styles.kgSpan} >Remembered With Respect</span>
                     <h2 className={styles.handing}>Heroes of Nawan</h2>
                 </div>
             </div>
        </div>
        <div className={styles.headingSection}>
                <div className={styles.headingInner}>
                    <span className={styles.kgSpan}>Their legacy</span>
                    <h1 className={styles.title}>
                       People Who Shaped Nawan
                    </h1>
                    <p className={styles.subtitle}>
                    The educators, elders and mentors whose work helped build the Nawan we know today.
                    </p>
                </div>
        </div>

        <div className={styles.list}>
          {HEROES.map((hero) => (
            <div className={styles.card} key={hero.name}>
              <div className={styles.imageWrap}>
                <img
                  src={hero.image}
                  alt={hero.name}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.body}>
                <span className={styles.role}>{hero.role}</span>
                <h2 className={styles.name}>{hero.name}</h2>
                <p className={styles.bio}>{hero.bio}</p>

                {hero.quote && (
                  <blockquote className={styles.quote}>
                    {hero.quote}
                  </blockquote>
                )}

                {hero.points && hero.points.length > 0 && (
                  <ul className={styles.points}>
                    {hero.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
     </section>
     </>
    )
}
export default Heroes
