import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Loading from "../components/Loading";
import NowMovieCard from "../components/NowMovieCard";
import Pagination from "../components/Pagination";
import { movieAction } from "../redux/actions/movieAction";

const Movies = () => {
  const dispatch = useDispatch();
  const { nowMovies, loading } = useSelector((state) => state.now);
  const { searchMovies, searchQuery } = useSelector((state) => state.search); // Movies page

  const { currentPage, setCurrentPage } = useState(1);
  // const { postPerPage } = useState(20);
  // const paginate = (pageNum) => {
  //   setCurrentPage(pageNum);
  //   dispatch(movieAction.getNowMovie(currentPage));
  // };
  // console.log("currentPage ? ", currentPage);

  useEffect(() => {
    dispatch(movieAction.getNowMovie());
  }, [searchMovies, currentPage]);

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
      <Pagination postPerPage={20} totalPage={400} paginate={setCurrentPage} />
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
