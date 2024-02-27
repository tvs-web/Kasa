import React from 'react';
import './Tags.scss';
export default function Tags(props) {
  const { tags } = props;
  return (
    <div className="tags">
      {/* <button>{tags[0]}</button>
      <button>{tags[1]}</button>
      <button>{tags[2]}</button> */}
      {tags.map((tag, index) => (
        <button key={index}>{tag}</button>
      ))}
    </div>
  );
}
