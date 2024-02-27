import React from 'react';
import './Tags.scss';
export default function Tags(props) {
  const { tags } = props;
  return (
    <div className="tags">
      {tags.map((tag, index) => (
        <button key={index}>{tag}</button>
      ))}
    </div>
  );
}
