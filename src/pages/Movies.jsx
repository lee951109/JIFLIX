import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Loading from "../components/Loading";
import NowMovieCard from "../components/NowMovieCard";
import Pagination from "../components/Pagination";
import Pagination2 from "../components/Pagination2";
import { movieAction } from "../redux/actions/movieAction";

const Movies = () => {
  const dispatch = useDispatch();
  const { nowMovies, loading } = useSelector((state) => state.now);
  const { searchMovies, searchQuery } = useSelector((state) => state.search); // Movies page

  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNum) => {
    console.log("pageNum : " + pageNum);

    setCurrentPage(pageNum);
    dispatch(movieAction.getNowMovie(currentPage));
  };
  console.log("currentPage ? " + currentPage);

  useEffect(() => {
    dispatch(movieAction.getNowMovie(currentPage));
  }, [searchMovies, currentPage]);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <>
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
      <Paginate>
        {/* <Pagination className="pagination" paginate={paginate} /> */}
        <Pagination2
          className="pagination"
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Paginate>
    </>
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
const Paginate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Movies;
