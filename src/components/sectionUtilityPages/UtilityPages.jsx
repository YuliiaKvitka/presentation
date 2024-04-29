import Slide from '../Slide/Slide'
import styles from './UtilityPages.module.css'
import Utility11x from './../../../public/assets/slides/utility-1@1x.jpeg'
import Utility12x from './../../../public/assets/slides/utility-1@2x.jpeg'
import Utility21x from './../../../public/assets/slides/utility-2@1x.jpeg'
import Utility22x from './../../../public/assets/slides/utility-2@2x.jpeg'
import Utility31x from './../../../public/assets/slides/utility-3@1x.jpeg'
import Utility32x from './../../../public/assets/slides/utility-3@2x.jpeg'
import Utility41x from './../../../public/assets/slides/utility-4@1x.jpeg'
import Utility42x from './../../../public/assets/slides/utility-4@2x.jpeg'
import Utility51x from './../../../public/assets/slides/utility-5@1x.jpeg'
import Utility52x from './../../../public/assets/slides/utility-5@2x.jpeg'

const UtilityPages = () => {
  return (
    <div id='utilities' className={styles.section}>
        <div className={styles.wrapper}>
              <div className={styles.title}><h2 className={styles.heading2}>Utility Pages</h2></div>
              <div className={styles.content}>
                  <div className={styles.slide}>
                      <Slide src={Utility11x} srcSet={Utility12x} alt='' />
                      <h5 className={styles.heading5}>Style Guide</h5>
                  </div>
                  <div className={styles.slide}>
                      <Slide src={Utility21x} srcSet={Utility22x} alt='' />
                       <h5 className={styles.heading5}>License</h5>
                  </div>
        </div>
        <div className={styles.content}>
                  <div className={styles.slide}>
                      <Slide src={Utility31x} srcSet={Utility32x} alt='' />
                      <h5 className={styles.heading5}>Changelog</h5>
                  </div>
                  <div className={styles.slide}>
                      <Slide src={Utility41x} srcSet={Utility42x} alt='' />
                       <h5 className={styles.heading5}>Protected Password</h5>
                  </div>
        </div>
        <div className={styles.content1}>
                  <div className={styles.slide}>
                      <Slide src={Utility51x} srcSet={Utility52x} alt='' />
                      <h5 className={styles.heading5}>404</h5>
          </div>
        </div>
        </div>
    </div>
  )
}

export default UtilityPages
