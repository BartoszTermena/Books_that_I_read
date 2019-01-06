import React from 'react'
import './bookgrid.scss';

const BookGrid = (props) => {
  return (
    <div className="book_grid">
      {props.children}
    </div>
  )
}
export default BookGrid;