import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './Rating.scss';
export default function Rating(props) {
  const { rating } = props;

  const stars = [];
  for (let i = 0; i < 5; i++) {
    const starClassName = i < rating ? 'red' : 'star';
    stars.push(
      <FontAwesomeIcon key={i} icon={faStar} className={starClassName} />
    );
  }
  return <div className="rating">{stars}</div>;
}
