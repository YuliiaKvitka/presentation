import Link from 'next/link'
import styles from './MenuList.module.css'

const MenuList = () => {
  return (
    <ul className={styles.menuList}>
      <li className={styles.menuItem}><Link href='/'>Home</Link></li>
      <li className={styles.menuItem}><Link href='/#demos'>Demos</Link></li>
      <li className={styles.menuItem}><Link href='/#innerPages'>Inner Pages</Link></li>
      <li className={styles.menuItem}><Link href='/#utilities'>Utilities</Link></li>
      <li className={styles.menuItem}><Link href='/#authentications'>Authentications</Link></li>
    </ul>
  )
}

export default MenuList
