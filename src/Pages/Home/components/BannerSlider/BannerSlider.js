import React, { useState } from "react";
import { sliderImagesList } from "./sliderData";
import "./BannerSlider.css";
const BannerSlider = ({ slides }) => {
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
    <section className="slider ">
      <button className="left-arrow" onClick={prevSlide}>
        ＜
      </button>
      <button className="right-arrow" onClick={nextSlide}>
        ＞
      </button>
      {sliderImagesList.map((slide, index) => {
        return (
          <div
            key={index}
            className={index === current ? "slide active" : "slide"}
          >
            {index === current && (
              <img src={slide.image} alt={slide.alt} className="slider-image" />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default BannerSlider;
