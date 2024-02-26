import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';
// export default function Card({ id, cover, title }) {
//   return (
//     <div className="card">
//       <Link to={`/apartments/${id}`}>
//         <img src={cover} alt="cover" />
//       </Link>
//       <h2>{title}</h2>
//     </div>
//   );v
// }
export default function Card(props) {
  const { cardId, cardTitle, cardCover, cardAlt } = props;
  return (
    <div className="card">
      <Link to={`/apartments/${cardId}`}>
        <img src={cardCover} alt={cardAlt} />
      </Link>
      <h2>{cardTitle}</h2>
    </div>
  );
}
