import React from 'react';
import Tags from '../Tags/Tags';
import Rating from '../Rating/Rating';
import './Description.scss';

export default function Description(props) {
  const { id, title, host, location, rating, tags } = props;
  const name = host.name.split(' ');
  const hostPicture = host?.picture;
  return (
    <>
      <div className="descriptionApp">
        <div className="loc">
          <h1>{title}</h1>
          <p> {location}</p>
          <div className="tagsrate">
            <Tags tags={tags} />
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
            <Rating rating={rating} />
          </div>
        </div>
      </div>
    </>
  );
}
