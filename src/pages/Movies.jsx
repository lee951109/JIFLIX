import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import DropBox from "../components/DropBox";

import Loading from "../components/Loading";
import NowMovieCard from "../components/NowMovieCard";
import Pagination from "../components/Pagination";
import { movieAction } from "../redux/actions/movieAction";

const Movies = () => {
  const dispatch = useDispatch();
  const { nowMovies, loading } = useSelector((state) => state.now);
  const { searchMovies, searchQuery } = useSelector((state) => state.search); // Movies page

  const [limit, setLimit] = useState(10); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  const [blockNum, setBlockNum] = useState(0); // 한 페이지에 보여 줄 페이지네이션의 개수를 block으로 지정하는 state. 초기 값은 0

  const [sortMovies, setSortMovies] = useState([]);
  const nowMovieCounts = Math.floor(nowMovies?.total_results / 1200); // 데이터가 너무 많아서 일시적으로 잘라 표기
  // const searchMovieCounts = Math.floor(searchMovies?.total_results);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(movieAction.getNowMovie(page));
  }, [searchMovies, page, sortMovies]);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <>
      <Container>
        <LeftMenu className="leftMenu" isOpen={isOpen}>
          <DropBox
            nowMovies={nowMovies}
            sortMovies={sortMovies}
            setSortMovies={setSortMovies}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </LeftMenu>
        <MainContant className="mainContant">
          {searchQuery === ""
            ? searchQuery === "" && sortMovies.length < 1
              ? nowMovies.results.map((movie) => (
                  <NowMovieCard key={movie.id} movie={movie} />
                ))
              : sortMovies.map((movie) => (
                  <NowMovieCard key={movie.id} movie={movie} />
                ))
            : searchMovies.results.map((movie) => (
                <NowMovieCard key={movie.id} movie={movie} />
              ))}
        </MainContant>
      </Container>
      <Paginate>
        <Pagination
          className="pagination"
          limit={limit}
          page={page}
          setPage={setPage}
          blockNum={blockNum}
          setBlockNum={setBlockNum}
          counts={nowMovieCounts}
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

  @media screen and (max-width: 992px) {
    flex-direction: column;
    .leftMenu {
      width: 100%;
      height: 150px;
    }
    .mainContant {
      margin: 0 auto;
      width: 100%;
    }
  }
`;
const LeftMenu = styled.div`
  width: 35%;
  height: 400px;
  margin-bottom: ${(props) => (props.isOpen ? "100px" : null)};
  transition: 0.5s;
  margin-top: 100px;
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
