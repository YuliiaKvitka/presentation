import HeroSlide from '../heroSlide/HeroSlide'
import styles from './HeroSection.module.css'
import Slide11x from './../../../public/assets/slides/hero-slide-1@1x.png'
import Slide12x from './../../../public/assets/slides/hero-slide-1@2x.png'
import Slide21x from './../../../public/assets/slides/hero-slide-2@1x.png'
import Slide22x from './../../../public/assets/slides/hero-slide-2@2x.png'

const HeroSection = () => {
  return (
      <div className={styles.section}>
          <div className={styles.wrapper}>
              <div className={styles.title}><h1 className={styles.heading1}>Mannzai - Sass, Software, Technology Webflow Template</h1></div>

              
                 <div className={styles.content}>
                      <div className={styles.blockContent}>
            <div className={styles.block}> <HeroSlide src={Slide11x} srcSet={Slide12x } /></div>
                          <div className={styles.block}><HeroSlide src={Slide21x} srcSet={Slide22x }/></div>
                      </div>
                 </div>
                 
          </div>
      
    </div>
  )
}

export default HeroSection
