import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Utils/data.json';
import Tags from '../Tags/Tags';
import Rating from '../Rating/Rating';
import './Description.scss';
import Collapse from '../CollapseApartments/CollapseApartments';

export default function Description() {
  const { id } = useParams();
  const item = Data.find((item) => item.id === id) || {}; // Trouve l'élément correspondant à l'ID ou utilise un objet vide par défaut
  const { title, host, location } = item;
  const name = host.name.split(' ');
  const hostPicture = host?.picture;
  return (
    <>
      <div className="descriptionApp">
        <div className="loc">
          <h1>{title}</h1>
          <p> {location}</p>
          <div className="tagsrate">
            <Tags />
          </div>
        </div>
        <div className="host_global">
          <div className="host">
            <div className="name">
              <p> {name[0]}</p>
              <p> {name[1]}</p>
            </div>
            <img src={hostPicture} alt="Host" />
          </div>
          <div>
            <Rating />
          </div>
        </div>
      </div>

      <div>
        <Collapse />
      </div>
    </>
  );

  //   <p>Description: {description}</p>
  //   <p>Tags: {tags && tags.join(', ')}</p>
  //   <p>Rating: {rating}</p>
  //   <p>Equipments: {equipments && equipments.join(', ')}</p>
}
