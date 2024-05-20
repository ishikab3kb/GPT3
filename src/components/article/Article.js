import React from 'react'
import './article.css'

const Article = ({imgUrl,date,title}) => {
  return (
    <div className='gpt3__blog-conatiner-article'>
      <div className='gpt3__blog-conatiner-article-image'>
        <img src={imgUrl} alt='article'></img>
      </div>
      <div className='gpt3__blog-conatiner-article-content'>
        <div>
          <p>{date}</p>
          <h3>{title}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  )
}

export default Article
