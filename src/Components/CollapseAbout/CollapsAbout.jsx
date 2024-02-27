import React, { useState } from 'react';
import Arrow from '../../assets/arrow_back_ios-24px 2.png';
import './CollapseAbout.scss';
export default function CollapseAbout(props) {
  const [openIds, setOpenIds] = useState({});
  const { about1Id, about1Title, about1Text } = props;
  const toggleText = (id) => {
    setOpenIds((prevOpenIds) => ({
      ...prevOpenIds,
      [id]: !prevOpenIds[id],
    }));
  };

  return (
    <div className="collapse_about">
      <div className="collapse_global_about">
        <div
          className="collapse_button_about"
          onClick={() => toggleText(about1Id)}
        >
          <h3>{about1Title}</h3>
          <img
            className={`collapse_arrow ${openIds[about1Id] ? 'rotate' : ''}`}
            src={Arrow}
            alt={'Arrow'}
          ></img>
        </div>
        {openIds[about1Id] && <p>{about1Text}</p>}
      </div>
    </div>
  );
}
