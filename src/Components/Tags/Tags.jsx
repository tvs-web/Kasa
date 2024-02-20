import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Utils/data.json';
import './Tags.scss';
export default function Tags() {
  const { id } = useParams();
  const item = Data.find((item) => item.id === id) || {}; // Trouve l'élément correspondant à l'ID ou utilise un objet vide par défaut
  const { tags } = item;
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
