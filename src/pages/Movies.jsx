import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import Loading from "../components/Loading";
import NowMovieCard from "../components/NowMovieCard";
import { movieAction } from "../redux/actions/movieAction";

const Movies = () => {
  const dispatch = useDispatch();
  const { nowMovies, loading } = useSelector((state) => state.now);

  //Movies page
  const { searchMovies, searchQuery } = useSelector((state) => state.search);

  useEffect(() => {
    dispatch(movieAction.getNowMovie());
  }, [searchMovies]);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <Container>
      <LeftMenu>
        <form></form>
      </LeftMenu>
      <MainContant>
        {searchQuery == ""
          ? nowMovies.results.map((movie) => (
              <NowMovieCard key={movie.id} movie={movie} />
            ))
          : searchMovies.results.map((movie) => (
              <NowMovieCard key={movie.id} movie={movie} />
            ))}
      </MainContant>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
`;
const LeftMenu = styled.div`
  border: 10px solid red;
  width: 35%;
  height: 400px;
`;
const MainContant = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 65%;
`;

export default Movies;
