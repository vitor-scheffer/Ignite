import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'

const Comment = () => {
  return (
    <div className={styles.comment}>
      <img src="https://github.com/vitor-scheffer.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Scheffer</strong>
              <time title="05 de agosto às 17:08h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button title="Excluir comentário">
              <Trash size={20}/>
            </button>
          </header>
          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>

    </div>
  )
}
export default Comment