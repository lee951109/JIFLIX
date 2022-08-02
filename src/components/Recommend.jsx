import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";
import Loading from "./Loading";

import MovieCard from "./MovieCard";

const Recommend = ({ id }) => {
  const dispatch = useDispatch();
  const { recommend } = useSelector((state) => state.recommend);

  useEffect(() => {
    dispatch(movieAction.getMovieRecommend(id));
  }, []);

  return (
    <Container>
      <Title>추천 영화(1)</Title>
      {/* {recommend.results &&
        recommend.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))} */}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  color: red;
  font-size: 24px;
`;

export default Recommend;
