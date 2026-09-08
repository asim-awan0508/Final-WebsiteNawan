import styles from './About.module.css'
const About = () => {


    return (
        <>
        <section className={styles.container} id="about">
            <div className={styles.aboutContainer}>
                <div >
                    <h2 className={styles.handing}>History of Nawan</h2>
                </div>
            </div>
        </section>
        <section className={styles.History}>
            <div className={styles.HistoryBookContainer}>
                <div className={styles.HistoryBook}>
                    <span className={styles.HistoryBookindex}>01</span>
                    <div className={styles.content}>
                        <h3 className={styles.Book} >Nawan in the British Era</h3>
                        <p>Nawan is a very old and historic town with roots going back to the British era. During British rule in the region, English people also lived in and around Nawan. Their presence is remembered as an important part of the early history of our town. Nawan has continued to preserve its identity and community traditions through the generations.</p>
                    </div>
                </div>

                                <div className={styles.HistoryBook}>
                    <span className={styles.HistoryBookindex}>02</span>
                    <div>
                        <h3 className={styles.Book}>Nawan After the Creation of Pakistan</h3>
                        <p>After the creation of Pakistan in 1947, the British left the region and Muslim families became an important part of the growing community of Nawan. Over the years, the village continued to develop and its people worked together to build a stronger and more connected community. The history of Nawan is closely connected with the sacrifices, hard work, and achievements of its people.</p>
                    </div>
                </div>
                                <div className={styles.HistoryBook}>
                    <span className={styles.HistoryBookindex}>03</span>
                    <div>
                        <h3 className={styles.Book}>Our Heroes and Sacrifices</h3>
                        <p>Nawan remembers people who played an important role in the history and identity of the community. Baba Sadiq Baloch is remembered locally as a friend of Imran Khan, the former Prime Minister of Pakistan and former international cricketer. Baba Khadim Hussain Baloch is remembered for his sacrifice for Pakistan. When Bangladesh became a separate country, Baba Khadim Hussain remained in a jail in Bangladesh for approximately three months. His sacrifice is remembered with respect by the people of Nawan.</p>
                    </div>
                </div>
                                <div className={styles.HistoryBook}>
                    <span className={styles.HistoryBookindex}>04</span>
                    <div>
                        <h3 className={styles.Book}>Nawan Today</h3>
                        <p>Today, Nawan continues to grow while preserving the history and traditions of its people. The town is known for its cricket and volleyball culture, talented players, sports grounds, community events, and local markas. Nawan is also proud of its sporting talent, including Haji Muhammad Khan Awan, an international-level volleyball player who represented Pakistan. Nawan continues to build a story of courage, unity, sports, and progress..</p>
                    </div>
                </div>


            </div>
        </section>
        </>
    )

}
export default About;