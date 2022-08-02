import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";
import Loading from "./Loading";

import MovieCard from "./MovieCard";

const Recommend = ({ id }) => {
  const dispatch = useDispatch();
  const { recommend, loading } = useSelector((state) => state.recommend);

  console.log(recommend);
  useEffect(() => {
    dispatch(movieAction.getMovieRecommend(id));
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <Container>
      <Title>추천 영화({recommend.results.length})</Title>

      {recommend.results &&
        recommend.results.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 50%;
  max-width: 350px;
`;

const Title = styled.h1`
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  color: red;
  font-size: 24px;
  margin-top: 20%;
  justify-content: center;
`;

MovieCard = styled.div`
  margin-bottom: 20px;
`;

export default Recommend;
