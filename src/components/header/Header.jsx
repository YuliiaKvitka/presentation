import Button from '../button/Button'
import Logo from '../logo/Logo'
import MenuList from '../menuList/MenuList'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div ><Logo/></div>
                     <div ><MenuList/></div>
                     <div ><Button title='Purchase'/></div>
    </div>
  )
}

export default Header
