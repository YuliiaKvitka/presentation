import Image from 'next/image'
import styles from './Slide.module.css'

const Slide = (props) => {
  return (
    <div className={styles.wrapper}>
                    
      <Image src={props.src} srcSet={props.srcSet} alt={props.alt} width={648} height={664} />
    </div>
  )
}

export default Slide
