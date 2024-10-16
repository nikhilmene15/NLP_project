import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Homepage.scss";

function Homepage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="carousel-slide">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/Freestyle_1440x640_new1.jpg"
            alt="Freestyle Banner"
            className="carousel-image"
          />
          <div className="carousel-text">
            <h2>Freestyle</h2>
            <p>Explore the flexibility of Samsung's Freestyle projector.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/Galaxy_Book2_Series_banner_1440x6401.jpg"
            alt="Galaxy Book2 Banner"
            className="carousel-image"
          />
          <div className="carousel-text">
            <h2>Galaxy Book2 Series</h2>
            <p>Experience the power of Galaxy Book2 for all your work needs.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/11166_Dotcom_Windfree_AC_Banner_1440x6401.jpg"
            alt="Windfree AC Banner"
            className="carousel-image"
          />
          <div className="carousel-text">
            <h2>Windfree AC</h2>
            <p>Cool your room without the wind with Samsung Windfree AC.</p>
          </div>
        </div>
        <div className="carousel-slide">
          <img
            src="https://images.samsung.com/is/image/samsung/assets/in/11316-S22-Ultra-1TB_Banners_1440x640_updated_disclaimer.jpg"
            alt="S22 Ultra Banner"
            className="carousel-image"
          />
          <div className="carousel-text">
            <h2>Galaxy S22 Ultra</h2>
            <p>Capture the ultra clarity with Samsung Galaxy S22 Ultra.</p>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Homepage;
