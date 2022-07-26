import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    padding: 15px 0;
  }
`;

const Carousel = ({ movies }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
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
