import React, { useState } from 'react';
import Arrow from '../../assets/arrow_back_ios-24px 2.png';
import './CollapseAbout.scss';
export default function CollapseAbout(props) {
  const { prestId, prestTitle, prestText } = props;

  const [isOpen, setIsOpen] = useState(false);
  const toggleText1 = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="collapse_about">
      <div className="collapse_global_about">
        <div
          className="collapse_button_about"
          onClick={() => toggleText1(prestId)}
        >
          <h3>{prestTitle}</h3>
          <img
            className={`collapse_arrow ${isOpen ? 'rotate' : ''}`}
            src={Arrow}
            alt={'Arrow'}
          ></img>
        </div>
        {isOpen && <p>{prestText}</p>}
      </div>
    </div>
  );
}
