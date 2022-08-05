import styles from './SideBar.module.css'
import { PencilSimpleLine } from 'phosphor-react'

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/vitor-scheffer.png" alt="" />

        <strong>Vitor Scheffer</strong>
        <p>Front-end developer</p>
      </div>
      <footer>
        <a href="#">
          <PencilSimpleLine />
          Editar Perfil
        </a>
      </footer>
    </aside>
    )
}
export default SideBar