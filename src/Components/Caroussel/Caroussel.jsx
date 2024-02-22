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
  const slidesTotal = slides.length;
  console.log(slidesTotal);
  const [slideShow, setSlideShow] = useState(0);
  const [slideCounter, setSlideCounter] = useState(1);
  const nextSlide = () => {
    setSlideShow((previousSlide) => (previousSlide + 1) % slides.length);
    setSlideCounter((count) => {
      if (count === slides.length) {
        return 1;
      } else {
        return count + 1;
      }
    });
    console.log(slides);
  };
  const beforeSlide = () => {
    setSlideShow((previousSlide) =>
      previousSlide === 0 ? slides.length - 1 : previousSlide - 1
    );
    setSlideCounter((count) => {
      if (count === 1) {
        return slides.length;
      } else {
        return count - 1;
      }
    });
  };
  console.log(slideShow);
  if (slides.length <= 1) {
    return (
      <div className="caroussel">
        <div className="counter">
          {slideCounter}/{slidesTotal}
        </div>
        {slides.map((slides, index) => {
          console.log('Index:', index, 'Slide Show:', slideShow);
          return (
            <img
              id="slideWidth"
              key={index}
              src={slides}
              alt={`slides ${index}`}
              className={index === slideShow ? 'active' : 'slider'}
              onClick={() => setSlideShow(index)}
            />
          );
        })}
      </div>
    );
  }

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

      {slides.map((slides, index) => {
        console.log('Index:', index, 'Slide Show:', slideShow);
        return (
          <img
            id="slideWidth"
            key={index}
            src={slides}
            alt={`slides ${index}`}
            className={index === slideShow ? 'active' : 'slider'}
            onClick={() => setSlideShow(index)}
          />
        );
      })}
    </div>
  );
}
//  return (
//     <div className="caroussel">
//       <img
//         className="arrowright"
//         src={ArrowRight}
//         alt="next"
//         onClick={nextSlide}
//       />
//       <img
//         className="arrowleft"
//         src={ArrowLeft}
//         alt="previous"
//         onClick={beforeSlide}
//       />
//       {slides.map((slides, index) => {
//         console.log('Index:', index, 'Slide Show:', slideShow);
//         return (
//           <img
//             id="slideWidth"
//             key={index}
//             src={slides}
//             alt={`slides ${index}`}
//             className={index === slideShow ? 'active' : 'slider'}
//             onClick={() => setSlideShow(index)}
//           />
//         );
//       })}
//     </div>
//   );
// }
