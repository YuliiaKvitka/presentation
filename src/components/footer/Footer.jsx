import Image from 'next/image'
import styles from './Footer.module.css'
import Img1x from './../../../public/assets/footer/img-1@1x.png'
import Img2x from './../../../public/assets/footer/img-1@2x.png'
import Button from '../button/Button'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3 className={styles.title}>Purchase Mannzai Today!</h3>
          <div className={styles.blockText}><p className={styles.text}>Give your business the proper boost it deserves. Buy Saaszai on Webflow today and get access to lifetime free updates and premium support,</p></div>
          <Button title='View Demos'/>
        </div>
        <div><Image src={Img1x} srcSet={Img2x} alt='' /></div>
        
      </div>
      <div className={styles.author}> <p className={styles.text}>Mannzai by Flowzai, Powered by Webflow</p></div>
    </div>
  )
}

export default Footer
