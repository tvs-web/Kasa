import React from 'react';
import Card from './Card/Card';
import Data from '../../Utils/data.json';

import './Gallery.scss';
// export default function Gallery() {
//   return (
//     <div className="gallery">
//       {Data.map((data) => (
//         <Card
//           key={data.id}
//           id={data.id}
//           cover={data.cover}
//           title={data.title}
//         />
//       ))}
//     </div>
//   );
// }
export default function Gallery() {
  return (
    <div className="gallery">
      {Data.map(({ id, cover, title }) => (
        <Card
          key={id}
          cardId={id}
          cardCover={cover}
          cardTitle={title}
          cardAlt="cover"
        />
      ))}
    </div>
  );
}
