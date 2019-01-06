import React from 'react';
import './tag.scss';

const Tag = (props) => {
  return (
    <span className="tag">
        {props.label}
    </span>
  )
}
export default Tag;