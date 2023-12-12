
import React from "react";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sliderItems from "./data";

const App = () => {
  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slider1, setSlider1] = useState(null);
  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  const settings = {
    dots: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: false,
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    autoplaySpeed: 3000,
    lazyLoad: true,
    asNavFor: ".slider-nav",
    focusOnSelect: true,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
            <svg stroke="black" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="next-slick-arrow rotate-180">
        <svg stroke="black" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256zm72 20v-40c0-6.6 5.4-12 12-12h116v-67c0-10.7 12.9-16 20.5-8.5l99 99c4.7 4.7 4.7 12.3 0 17l-99 99c-7.6 7.6-20.5 2.2-20.5-8.5v-67H140c-6.6 0-12-5.4-12-12z"></path></svg>
        </div>
      </div>
    ),
  };

  return (
   
    <div className="content">

      <div className="container">
        <Slider {...settings}
            asNavFor={nav1}
            ref={(slider) => setSlider1(slider)}
        >
          {sliderItems.map((item) => (
            <div  key={item.id}>
              <div className="img-body">
                <img src={`/images/${item.image}`} alt={item.title} />
              </div>
            </div>
          ))}
        </Slider>

        <div className="thumb-wrapper">
          {sliderItems.map((item, idx) => (
            <div 
              key={item.id} 
              className={currentSlide === idx ? "active": null} 
              onClick={() => {
                slider1?.slickGoTo(idx)
              }}>
              <img src={`/images/${item.image}`} alt={item.alt}/>
              {currentSlide}
            </div>
          ))}
        </div>
      </div>
    </div>
 
  );
};

export default App;
