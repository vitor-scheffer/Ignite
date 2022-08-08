import styles from './Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { useState } from 'react'

const Post = ({post}) => {
  const [comments, setComments] = useState([])
  const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(post.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateToNow = formatDistanceToNow(post.publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleCreateNewComment = () => {
    event.preventDefault()
    setComments([...comments, newComment])
    
    setNewComment('')
  }

  const handleNewCommentChange = () => {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }

  const deleteComment = (commentToDelete) => {
    const commentsWhitouthDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWhitouthDeleteOne)
  }

  const newCommentInvalid = () => {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const isNewCommentEmpty = newComment.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={post.author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.role}</span>
          </div>  
        </div>
        <time title={publishedDateFormatted} dateTime={post.publishedAt.toISOString()}>{publishedDateToNow}</time>
      </header>

      <div className={styles.content}>
        {
          post.content.map(content => {
            if (content.type === 'paragraph') {
              return <p key={content.content}>{content.content}</p>
            }
            return <p key={content.content}><a href="#">{content.content}</a></p>
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          placeholder="Escreva um comentário..."
          onChange={handleNewCommentChange}
          value={newComment}
          onInvalid={newCommentInvalid}
          required
        />

        <footer>
          <button type="submit" disabled={isNewCommentEmpty} >Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map(comment => {
          return <Comment
          key={comment}
          content={comment}
          onDeleteComment={deleteComment} />
        })}

      </div>
    </article>
  )
}
export default Post