import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import Slider from "react-slick";

const Container = styled.div`
  overflow: hidden;
`;
const StyledSlider = styled(Slider)`
  .slick-slider div {
    outline: none;
  }
  .slick-list {
    padding: 20px 15px;
    width: 100%;
  }
`;

const Carousel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <StyledSlider {...settings}>
        {movies.results &&
          movies.results.map((item) => <MovieCard key={item.id} item={item} />)}
      </StyledSlider>
    </Container>
  );
};

export default Carousel;
