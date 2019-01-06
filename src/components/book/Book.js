import React from 'react'
import './book.scss';

const Book = (props) => {
  return (
    <article className="book">
      <picture className="picture">
        <img src={props.imageUrl} alt={props.title} />
      </picture>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      <p>{'⭐'.repeat(props.rating)}</p>
      <p><progress value={props.progress} max="100" /></p>
      <p>{props.tags.map(tag => (
        <span>{tag}</span>
      ))}</p>
    </article>
  )
}
export default Book;