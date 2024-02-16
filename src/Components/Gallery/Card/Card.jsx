import React from 'react';
import { Link } from 'react-router-dom';

import './Card.scss';
export default function Card({ id, cover, title }) {
  return (
    <div className="card">
      <Link to={`/apartments/${id}`}>
        <img src={cover} alt="cover" />
      </Link>
      <h2>{title}</h2>
    </div>
  );
}
