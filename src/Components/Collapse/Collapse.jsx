import React, { useState } from 'react';
import './collapse.scss';
import { useParams } from 'react-router-dom';
import Data from '../../Utils/data.json';
import Arrow from '../../assets/arrow_back_ios-24px 2.png';

export default function Collapse() {
  const { id } = useParams();
  const item = Data.find((item) => item.id === id) || {}; // Trouve l'élément correspondant à l'ID ou utilise un objet vide par défaut
  const { description, equipments } = item;
  const [descriptionShow, setDescriptionShow] = useState(false);
  const [equipmentsShow, setEquipmentsShow] = useState(false);
  const toggleDescription = () => {
    setDescriptionShow(!descriptionShow);
  };
  const toggleEquipments = () => {
    setEquipmentsShow(!equipmentsShow);
  };
  return (
    <div className="collapse">
      <div className="collapse_global">
        <div className="collapse_button" onClick={toggleDescription}>
          <h3>Description</h3>
          <img
            className={`collapse_arrow ${descriptionShow ? 'rotate' : ''}`}
            src={Arrow}
            alt={'Arrow'}
          ></img>
        </div>
        {descriptionShow && <p>{description}</p>}
      </div>
      <div className="collapse_global">
        <div className="collapse_button" onClick={toggleEquipments}>
          <h3>Equipements</h3>
          <img
            className={`collapse_arrow ${equipmentsShow ? 'rotate' : ''}`}
            src={Arrow}
            alt={'Arrow'}
          ></img>{' '}
        </div>
        {equipmentsShow && (
          <ul>
            {equipments.map((equipement, index) => (
              <li key={index}>{equipement}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
// {
/* <div className="collapse_button">
        <h3>Equipements</h3>
        <p>{equipements}</p>
        <img className="collapse_arrow" src={Arrow} alt={'Arrow'}></img>
      </div> */
// }
