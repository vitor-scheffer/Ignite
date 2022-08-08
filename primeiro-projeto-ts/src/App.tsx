import Header from './components/Header'
import styles from './App.module.css'

import './global.css'
import SideBar from './components/SideBar'
import Post from './components/Post'

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/vitor-scheffer.png',
      name: 'Vitor Scheffer',
      role: 'Front-end Developer'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date ('2022-08-06 20:00:00')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/diego3g.png',
      name: 'Diego Fernandes',
      role: 'CTO @Rocketseat'
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content: '👉 jane.design/doctorcare'}
    ],
    publishedAt: new Date ('2022-08-07 20:00:00')
  }
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>  
        <SideBar />
        <main>
          {posts.map(post => {
            return <Post key={post.id}
            author={post.author}
            content={post.content}
            publishedAt={post.publishedAt}
            />
          })
          }
        </main>

      </div>
    </div>
  )
}

export default App
