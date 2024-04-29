import Slide from '../Slide/Slide'
import styles from './Demos.module.css'
import Demos11x from './../../../public/assets/slides/demos-1@1x.jpeg'
import Demos12x from './../../../public/assets/slides/demos-1@2x.jpeg'
import Demos21x from './../../../public/assets/slides/demos-2@1x.jpeg'
import Demos22x from './../../../public/assets/slides/demos-2@2x.jpeg'

const Demos = () => {
  return (
    <div id='demos' className={styles.section}>
        <div className={styles.wrapper}>
              <div className={styles.title}><h2 className={styles.heading2}>Demos</h2></div>
              <div className={styles.content}>
                  <div className={styles.slide}>
                      <Slide src={Demos11x} srcSet={Demos12x} alt='' />
                      <h5 className={styles.heading5}>Home 1</h5>
                  </div>
                  <div className={styles.slide}>
                      <Slide src={Demos21x} srcSet={Demos22x} alt='' />
                       <h5 className={styles.heading5}>Home 2</h5>
                  </div>
              </div>
        </div>
    </div>
  )
}

export default Demos
