import React, { useState } from 'react';
import './Caroussel.scss';
import ArrowRight from '../../assets/arrow right.png';
import ArrowLeft from '../../assets/arrow left.png';

export default function Carousel({ pictures }) {
  const slides = pictures || [];
  const slidesTotal = slides.length;
  const [slideShow, setSlideShow] = useState(0);
  const [slideCounter, setSlideCounter] = useState(1);

  const nextSlide = () => {
    setSlideShow((previousSlide) => (previousSlide + 1) % slides.length);
    setSlideCounter((count) => (count % slidesTotal) + 1);
  };

  const beforeSlide = () => {
    setSlideShow((previousSlide) =>
      previousSlide === 0 ? slides.length - 1 : previousSlide - 1
    );
    setSlideCounter((count) =>
      count === 1 ? slidesTotal : (count - 1) % slidesTotal
    );
  };

  return (
    <div className="caroussel">
      <div className="counter">
        {slideCounter}/{slidesTotal}
      </div>
      <div className="arrow">
        <img
          className="arrow_right"
          src={ArrowRight}
          alt="next"
          onClick={nextSlide}
        />
        <img
          className="arrow_left"
          src={ArrowLeft}
          alt="previous"
          onClick={beforeSlide}
        />
      </div>

      {slides.map((slide, index) => (
        <img
          id="slideWidth"
          key={index}
          src={slide}
          alt={`slide ${index}`}
          className={index === slideShow ? 'active' : 'slider'}
          onClick={() => setSlideShow(index)}
        />
      ))}
    </div>
  );
}
