import React from 'react'
import './book.scss';

import Tag from '../tag'

const Book = (props) => {

  //checking if book is completed
  let metadata;
  if (props.complete) {
     metadata = <p>{'⭐'.repeat(props.rating)}</p>
  } else {
     metadata = <p><progress value={props.progress} max="100" /></p>
  }

  return (
    <article className="book">
      <picture className="picture">
        <img src={props.imageUrl} alt={props.title} />
      </picture>
      <h1>{props.title}</h1>
      <h2>{props.author}</h2>
      {metadata}
      <p>{props.tags.map(tag => (
        <Tag label={tag} />
      ))}</p>
    </article>
  )
}
export default Book;