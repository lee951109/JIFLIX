import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";
import Loading from "./Loading";

import MovieCard from "./MovieCard";

const Recommend = ({ id }) => {
  const dispatch = useDispatch();
  const { recommend, genres, loading } = useSelector(
    (state) => state.recommend
  );

  useEffect(() => {
    dispatch(movieAction.getMovieRecommend(id));
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <Container>
      <Title className="title">추천 영화({recommend.results.length})</Title>

      <Card>
        {recommend.results &&
          recommend.results.map((recommend) => (
            <MovieCard
              key={recommend.id}
              recommend={recommend}
              genres={genres}
            />
          ))}
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (max-width: 580px) {
    .title {
      margin: 25% auto 10px auto;
    }
  }
`;

const Title = styled.h1`
  border: 2px solid red;
  border-radius: 5px;
  padding: 10px;
  color: red;
  font-size: 24px;
  margin: 15% auto 10px auto;
  width: 140px;
  height: 40px;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  @media screen and (max-width: 949px) {
    margin: 0 auto;
  }
`;

export default Recommend;
