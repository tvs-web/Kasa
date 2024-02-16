import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Utils/data.json';
import './Caroussel.scss';
import ArrowRight from '../../assets/arrow right.png';
import ArrowLeft from '../../assets/arrow left.png';

export default function Carousel() {
  const { id } = useParams();
  const slides = Data.find((item) => item.id === id)?.pictures || [];
  console.log(slides);
  const [slideShow, setSlideShow] = useState(0);

  const nextSlide = () => {
    setSlideShow((previousSlide) => (previousSlide + 1) % slides.length);
    console.log(slides);
  };
  const beforeSlide = () => {
    setSlideShow((previousSlide) =>
      previousSlide === 0 ? slides.length - 1 : previousSlide - 1
    );
  };
  console.log(slideShow);
  return (
    <div className="caroussel">
      <img
        className="arrowright"
        src={ArrowRight}
        alt="next"
        onClick={nextSlide}
      />
      <img
        className="arrowleft"
        src={ArrowLeft}
        alt="previous"
        onClick={beforeSlide}
      />
      {slides.map((slides, index) => {
        console.log('Index:', index, 'Slide Show:', slideShow);
        return (
          <img
            key={index}
            src={slides}
            alt={`slides ${index}`}
            className={index === slideShow ? 'slider.active' : 'slider'}
            onClick={() => setSlideShow(index)}
          />
        );
      })}
    </div>
  );
}
