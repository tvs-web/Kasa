import React, { useState } from 'react';
import './CollapseApartments.scss';
import Arrow from '../../assets/arrow_back_ios-24px 2.png';

export default function CollapseApartments(props) {
  const { DataTitle1, DataTitle2, DataDescription, DataEquipments } = props;
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleText1 = () => {
    setIsOpen1(!isOpen1); 
  };
  const toggleText2 = () => {
    setIsOpen2(!isOpen2); 
  };

  return (
    <div className="collapse">
      <div className="collapse_global">
        <div className="collapse_button" onClick={toggleText1}>
          <h3>{DataTitle1}</h3>
          <img
            className={`collapse_arrow ${isOpen1 ? 'rotate' : ''}`}
            src={Arrow}
            alt={'Arrow'}
          />
        </div>
        {isOpen1 && <p>{DataDescription}</p>}
      </div>
      <div className="collapse_global">
        <div className="collapse_button" onClick={toggleText2}>
          <h3>{DataTitle2}</h3>
          <img
            className={`collapse_arrow ${isOpen2 ? 'rotate' : ''}`}
            src={Arrow}
            alt={'Arrow'}
          />
        </div>
        {isOpen2 && (
          <ul>
            {DataEquipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
