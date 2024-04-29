import Slide from '../Slide/Slide'
import styles from './Authentification.module.css'
import Img11x from './../../../public/assets/slides/auth-1@1x.jpeg'
import Img12x from './../../../public/assets/slides/auth-1@2x.jpeg'
import Img21x from './../../../public/assets/slides/auth-2@1x.jpeg'
import Img22x from './../../../public/assets/slides/auth-2@2x.jpeg'

const Authentification = () => {
  return (
    <div id='demos' className={styles.section}>
        <div className={styles.wrapper}>
              <div className={styles.title}><h2 className={styles.heading2}>Authentication</h2></div>
              <div className={styles.content}>
                  <div className={styles.slide}>
                      <Slide src={Img11x} srcSet={Img12x} alt='' />
                      <h5 className={styles.heading5}>Sign Up</h5>
                  </div>
                  <div className={styles.slide}>
                      <Slide src={Img21x} srcSet={Img22x} alt='' />
                       <h5 className={styles.heading5}>Sign In</h5>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Authentification
