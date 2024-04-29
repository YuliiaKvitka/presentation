import Image from 'next/image'
import styles from './Logo.module.css'
import LogoImg1x from './../../../public/assets/logo/logo@1x.png'
import LogoImg2x from './../../../public/assets/logo/logo@2x.png'

const Logo = () => {
  return (
    <div>
      <Image src={LogoImg1x} srcSet={LogoImg2x} alt='' width={160} height={42}/>
    </div>
  )
}

export default Logo
