import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Utils/data.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Rating.scss';
export default function Rating() {
  const { id } = useParams();
  const item = Data.find((item) => item.id === id) || {}; // Trouve l'élément correspondant à l'ID ou utilise un objet vide par défaut
  const { rating } = item;
  console.log(rating);
  const stars = [];
  for (let i = 0; i < 5; i++) {
    // Détermine si l'étoile doit être colorée en rouge ou non
    const starClassName = i < rating ? 'red' : 'star';
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} className={starClassName} />
    );
  }
  return <div className="rating">{stars}</div>;
}
