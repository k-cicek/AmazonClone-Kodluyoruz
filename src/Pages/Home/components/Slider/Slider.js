import React, { useState } from "react";
import "./Slider.css";
import { topSellers } from "./itemList";
const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id="slider-card-container">
      <button className="left-arrow" onClick={prevSlide}>
        ＜
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        ＞
      </button>
      <div className="slider-header">
        <div>{topSellers[0].section}</div>
      </div>

      <div id="slider-container">
        {topSellers.map((slide, index) => {
          return (
            <div
              className={index === current ? "slide active" : "slide"}
              key={index}
            >
              {index === current && <img src={slide.image} className="image" />}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
