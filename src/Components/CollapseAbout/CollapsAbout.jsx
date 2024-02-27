import React, { useState } from 'react';
import Arrow from '../../assets/arrow_back_ios-24px 2.png';
import './CollapseAbout.scss';
export default function CollapseAbout(props) {
  const { about1Id, about1Title, about1Text } = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggleText1 = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse_about">
      <div className="collapse_global_about">
        <div
          className="collapse_button_about"
          onClick={() => toggleText1(about1Id)}
        >
          <h3>{about1Title}</h3>
          <img
            className={`collapse_arrow ${isOpen ? 'rotate' : ''}`}
            src={Arrow}
            alt={'Arrow'}
          ></img>
        </div>
        {isOpen && <p>{about1Text}</p>}
      </div>
    </div>
  );
}
