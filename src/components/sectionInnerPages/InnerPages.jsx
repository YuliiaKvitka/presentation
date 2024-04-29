import Slide from '../Slide/Slide'
import styles from './InnerPages.module.css'
import InnerPage11x from './../../../public/assets/slides/innerpage-1@1x.jpeg'
import InnerPage12x from './../../../public/assets/slides/innerpage-1@2x.jpeg'
import InnerPage21x from './../../../public/assets/slides/innerpage-2@1x.jpeg'
import InnerPage22x from './../../../public/assets/slides/innerpage-2@2x.jpeg'
import InnerPage31x from './../../../public/assets/slides/innerpage-3@1x.jpeg'
import InnerPage32x from './../../../public/assets/slides/innerpage-3@2x.jpeg'
import InnerPage41x from './../../../public/assets/slides/innerpage-4@1x.jpeg'
import InnerPage42x from './../../../public/assets/slides/innerpage-4@2x.jpeg'
import InnerPage51x from './../../../public/assets/slides/innerpage-5@1x.jpeg'
import InnerPage52x from './../../../public/assets/slides/innerpage-5@2x.jpeg'
import InnerPage61x from './../../../public/assets/slides/innerpage-6@1x.jpeg'
import InnerPage62x from './../../../public/assets/slides/innerpage-6@2x.jpeg'
import InnerPage71x from './../../../public/assets/slides/innerpage-7@1x.jpeg'
import InnerPage72x from './../../../public/assets/slides/innerpage-7@2x.jpeg'
import InnerPage81x from './../../../public/assets/slides/innerpage-8@1x.jpeg'
import InnerPage82x from './../../../public/assets/slides/innerpage-8@2x.jpeg'
import InnerPage91x from './../../../public/assets/slides/innerpage-9@1x.jpeg'
import InnerPage92x from './../../../public/assets/slides/innerpage-9@2x.jpeg'
import InnerPage101x from './../../../public/assets/slides/innerpage-10@1x.jpeg'
import InnerPage102x from './../../../public/assets/slides/innerpage-10@2x.jpeg'
import InnerPage111x from './../../../public/assets/slides/innerpage-11@1x.jpeg'
import InnerPage112x from './../../../public/assets/slides/innerpage-11@2x.jpeg'
import InnerPage121x from './../../../public/assets/slides/innerpage-12@1x.jpeg'
import InnerPage122x from './../../../public/assets/slides/innerpage-12@2x.jpeg'
import InnerPage131x from './../../../public/assets/slides/innerpage-13@1x.jpeg'
import InnerPage132x from './../../../public/assets/slides/innerpage-13@2x.jpeg'

const InnerPage = () => {
  return (
    <div id='innerPages' className={styles.section}>
        <div className={styles.wrapper}>
              <div className={styles.title}><h2 className={styles.heading2}>Inner Pages</h2></div>
              <div className={styles.content}>
                  <div className={styles.slide}>
                      <Slide src={InnerPage11x} srcSet={InnerPage12x} alt='' />
                      <h5 className={styles.heading5}>About</h5>
                  </div>
                  <div className={styles.slide}>
                      <Slide src={InnerPage21x} srcSet={InnerPage22x} alt='' />
                       <h5 className={styles.heading5}>Career</h5>
                  </div>
        </div>
        <div className={styles.content}>
                  <div className={styles.slide}>
                      <Slide src={InnerPage31x} srcSet={InnerPage32x} alt='' />
                      <h5 className={styles.heading5}>Single Career</h5>
                  </div>
                  <div className={styles.slide}>
                      <Slide src={InnerPage41x} srcSet={InnerPage42x} alt='' />
                       <h5 className={styles.heading5}>Terms & Condition</h5>
                  </div>
        </div>
        <div className={styles.content}>
                  <div className={styles.slide}>
                      <Slide src={InnerPage51x} srcSet={InnerPage52x} alt='' />
                      <h5 className={styles.heading5}>Pricing</h5>
                  </div>
                  <div className={styles.slide}>
                      <Slide src={InnerPage61x} srcSet={InnerPage62x} alt='' />
                       <h5 className={styles.heading5}>Starter Plan</h5>
                  </div>
        </div>
        <div className={styles.content}>
                  <div className={styles.slide}>
                      <Slide src={InnerPage71x} srcSet={InnerPage72x} alt='' />
                      <h5 className={styles.heading5}>Blog</h5>
                  </div>
                  <div className={styles.slide}>
                      <Slide src={InnerPage81x} srcSet={InnerPage82x} alt='' />
                       <h5 className={styles.heading5}>Blog Single</h5>
                  </div>
        </div>
         <div className={styles.content}>
                  <div className={styles.slide}>
                      <Slide src={InnerPage91x} srcSet={InnerPage92x} alt='' />
                      <h5 className={styles.heading5}>Download</h5>
                  </div>
                  <div className={styles.slide}>
                      <Slide src={InnerPage101x} srcSet={InnerPage102x} alt='' />
                       <h5 className={styles.heading5}>Contact Us</h5>
                  </div>
        </div>
         <div className={styles.content}>
                  <div className={styles.slide}>
                      <Slide src={InnerPage111x} srcSet={InnerPage112x} alt='' />
                      <h5 className={styles.heading5}>Integration</h5>
                  </div>
                  <div className={styles.slide}>
                      <Slide src={InnerPage121x} srcSet={InnerPage122x} alt='' />
                       <h5 className={styles.heading5}>Single integration</h5>
                  </div>
        </div>
        <div className={styles.content1}>
                  <div className={styles.slide}>
                      <Slide src={InnerPage131x} srcSet={InnerPage132x} alt='' />
                      <h5 className={styles.heading5}>Book a Demo</h5>
                  </div>
                  
        </div>
        </div>
    </div>
  )
}

export default InnerPage
