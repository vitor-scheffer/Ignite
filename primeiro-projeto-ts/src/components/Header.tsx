import styles from './Header.module.css'
import igniteLogo from '../assets/ignite.svg'

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="" />
      <strong>Ignite Feed</strong>
    </header>
    
  )
}
export default Header