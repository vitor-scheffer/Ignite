import styles from './Post.module.css'
import Comment from './Comment'
import Avatar from './Avatar'
import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { FormEvent, useState, ChangeEvent, InvalidEvent } from 'react'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Content[];
}

const Post = ({author, publishedAt, content}: PostProps) => {
  const [comments, setComments] = useState([
    'Post bacana, hein?'
  ])
  const [newComment, setNewComment] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR
  })

  const publishedDateToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  })

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault()
    setComments([...comments, newComment])
    
    setNewComment('')
  }

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('')
    setNewComment(event.target.value)
  }

  const deleteComment = (commentToDelete: string) => {
    const commentsWhitouthDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWhitouthDeleteOne)
  }

  const newCommentInvalid = (event: InvalidEvent<HTMLTextAreaElement>) => {
    event.target.setCustomValidity('Este campo é obrigatório!')
  }

  const isNewCommentEmpty = newComment.length === 0

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>  
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateToNow}</time>
      </header>

      <div className={styles.content}>
        {
          content.map(content => {
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