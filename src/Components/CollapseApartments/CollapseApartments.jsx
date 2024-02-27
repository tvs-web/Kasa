import React, { useState } from 'react';
import './CollapseApartments.scss';
import Arrow from '../../assets/arrow_back_ios-24px 2.png';

export default function CollapseApartments(props) {
  const { description, equipments } = props;

  const [openDescription, setOpenDescription] = useState(false);
  const [openEquipments, setOpenEquipments] = useState(false);

  const toggleDescription = () => {
    setOpenDescription(!openDescription);
  };

  const toggleEquipments = () => {
    setOpenEquipments(!openEquipments);
  };

  return (
    <div className="collapse">
      <div className="collapse_global">
        <div className="collapse_button" onClick={toggleDescription}>
          <h3>Description</h3>
          <img
            className={`collapse_arrow ${openDescription ? 'rotate' : ''}`}
            src={Arrow}
            alt={'Arrow'}
          />
        </div>
        {openDescription && <p>{description}</p>}
      </div>
      <div className="collapse_global">
        <div className="collapse_button" onClick={toggleEquipments}>
          <h3>Equipements</h3>
          <img
            className={`collapse_arrow ${openEquipments ? 'rotate' : ''}`}
            src={Arrow}
            alt={'Arrow'}
          />
        </div>
        {openEquipments && (
          <ul>
            {equipments.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

// import React, { useState } from 'react';
// import './CollapseApartments.scss';
// import { useParams } from 'react-router-dom';
// import Data from '../../Utils/data.json';
// import Arrow from '../../assets/arrow_back_ios-24px 2.png';

// export default function Collapse(props) {
//   const { collapseId, description, equipments } = props;

//   const [openIds, setOpenIds] = useState({});

//   const toggleText = (id) => {
//     setOpenIds((prevOpenIds) => ({
//       ...prevOpenIds,
//       [id]: !prevOpenIds[id],
//     }));
//   };
//   return (
//     <div className="collapse">
//       <div className="collapse_global">
//         <div className="collapse_button" onClick={() => toggleText(collapseId)}>
//           <h3>Description</h3>

//           <img
//             className={`collapse_arrow ${openIds[collapseId] ? 'rotate' : ''}`}
//             src={Arrow}
//             alt={'Arrow'}
//           ></img>
//         </div>
//         {openIds[collapseId] && <p>{description}</p>}
//       </div>
//       <div className="collapse_global">
//         <div className="collapse_button" onClick={() => toggleText(collapseId)}>
//           <h3>Equipements</h3>
//           <img
//             className={`collapse_arrow ${openIds[collapseId] ? 'rotate' : ''}`}
//             src={Arrow}
//             alt={'Arrow'}
//           ></img>{' '}
//         </div>
//         {openIds[collapseId] && (
//           <ul>
//             {equipments.map((equipement, index) => (
//               <li key={index}>{equipement}</li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// }
