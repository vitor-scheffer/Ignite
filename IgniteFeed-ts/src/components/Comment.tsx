import styles from './Comment.module.css'
import { ThumbsUp, Trash } from 'phosphor-react'
import Avatar from './Avatar'
import { useState } from 'react'

interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void
}

const Comment = ({content, onDeleteComment}: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0)

  const handleLikeComment = () => {
    setLikeCount((state) => {
      return state + 1
    }) 
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/vitor-scheffer.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vitor Scheffer</strong>
              <time title="05 de agosto às 17:08h" dateTime="2022-05-11 08:13:30">Cerca de 1h atrás</time>
            </div>
            <button onClick={() => onDeleteComment(content)} title="Excluir comentário">
              <Trash size={24}/>
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>

    </div>
  )
}
export default Comment