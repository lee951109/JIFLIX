import React from "react";
import styled from "styled-components";
import MovieCard from "./MovieCard";
import Slider from "react-slick";

const Carousel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    appendDots: (dots) => (
      <div
        style={{
          width: "100%",
          position: "absolute",
          bottom: "24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ul> {dots} </ul>
      </div>
    ),
    dotsClass: "dots_custom",
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
          movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </StyledSlider>
    </Container>
  );
};

export default Carousel;

// Styled

const Container = styled.div`
  overflow: hidden;
`;
const StyledSlider = styled(Slider)`
  .slick-slider div {
    outline: none;
  }
  .slick-list {
    padding: 20px 0 20px 40px;
    width: 100%;
  }
  .dots_custom {
    display: inline-block;
    vertical-align: middle;
    margin: auto 0;
    padding: 0;
  }
  .dots_custom ul {
    position: absolute;
    bottom: -48px;
  }

  .dots_custom li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    margin: 0 6px;
    padding: 0;
  }

  .dots_custom li button {
    border: none;
    background: #d1d1d1;
    color: transparent;
    cursor: pointer;
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    padding: 0;
  }

  .dots_custom li.slick-active button {
    background-color: #dc143c;
  }
`;
