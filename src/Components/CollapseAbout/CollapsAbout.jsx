import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import About1 from '../../Utils/prestation.json';
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

  //   return (
  //     <div className="collapse_about">
  //       {About1.map((item) => (
  //         <div className="collapse_global_about" key={item.id}>
  //           <div
  //             className="collapse_button_about"
  //             onClick={() => toggleText(item.id)}
  //           >
  //             <h3>{item.title}</h3>
  //             <img
  //               className={`collapse_arrow ${openIds[item.id] ? 'rotate' : ''}`}
  //               src={Arrow}
  //               alt={'Arrow'}
  //             ></img>
  //           </div>
  //           {openIds[item.id] && <p>{item.text}</p>}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }
  // export default function CollapseAbout() {
  //   const [openIds, setOpenIds] = useState({});

  //   const toggleText = (id) => {
  //     setOpenId(id === openId ? null : id);
  //   };

  //   return (
  //     <div className="collapse_about">
  //       {About1.map((item) => (
  //         <div className="collapse_global_about" key={item.id}>
  //           <div
  //             className="collapse_button_about"
  //             onClick={() => toggleText(item.id)}
  //           >
  //             <h2>{item.title}</h2>
  //             <img
  //               className={`collapse_arrow ${item.id === openId ? 'rotate' : ''}`}
  //               src={Arrow}
  //               alt={'Arrow'}
  //             ></img>
  //           </div>
  //           {item.id === openId && <p>{item.text}</p>}
  //         </div>
  //       ))}
  //     </div>
  //   );
  // }

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
