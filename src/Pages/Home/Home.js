import React from "react";
import "./Home.css";
// Components
import BannerSlider from "./components/BannerSlider";
import TextBox from "./components/TextBox";
import SingleCard from "./components/SingleCard";
import QuartetImage from "./components/QuartetImage";
import Slider from "./components/Slider";
import Footer from "../../Components/Footer";
// Datas
import { sliderImagesList } from "./components/BannerSlider/sliderData";
import { topSellers } from "./components/Slider/itemList";
import { homeSingleCategories } from "./assets/homeData";
function Home() {
  return (
    <div className="home-container">
      <div className="top-side">
        <BannerSlider className="home-slider" slides={sliderImagesList} />
      </div>
      <TextBox className="text-box-container" />
      <div className="bottom-side">
        <section className="card-section">
          <SingleCard
            src={homeSingleCategories[0].image}
            alt={homeSingleCategories[0].value}
            text={homeSingleCategories[0].value}
          />
          <QuartetImage />
          <SingleCard
            src={homeSingleCategories[2].image}
            alt={homeSingleCategories[2].value}
            text={homeSingleCategories[2].value}
          />
          <QuartetImage />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <SingleCard />
          <Slider className="slider" slides={topSellers} />
          <QuartetImage />
          <QuartetImage />
          <SingleCard />
          <SingleCard />
          <Slider className="slider" slides={topSellers} />
          <Slider className="slider" slides={topSellers} />
          <QuartetImage />
          <SingleCard />
          <SingleCard />
          <QuartetImage />
          <QuartetImage />
          <SingleCard />
          <Slider className="slider" slides={topSellers} />
          <Footer />
        </section>
      </div>
    </div>
  );
}

export default Home;
