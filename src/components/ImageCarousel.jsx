// components/ImageCarousel.jsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {images.map((src, i) => (
        <div key={i}>
          <img
            src={src}
            alt={`Thumb ${i + 1}`}
            className="rounded-lg w-full h-96 object-cover px-1 cursor-pointer"
          />
        </div>
      ))}
    </Slider>
  );
};

export default ImageCarousel;
