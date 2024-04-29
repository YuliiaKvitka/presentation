import Image from 'next/image'
import styles from './HeroSlide.module.css'

const HeroSlide = (props) => {
  return (
    <div className={styles.wrapper}>
                    
      <Image src={props.src} srcSet={props.srcSet} alt={props.alt} width={670} height={620} />
    </div>
  )
}

export default HeroSlide
