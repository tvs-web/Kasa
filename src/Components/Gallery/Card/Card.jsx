import React from 'react';
// import data from '../../../Utils/data.json';
import './Card.scss';
export default function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt="cover" />
      <h2>{title}</h2>
    </div>
  );
}
