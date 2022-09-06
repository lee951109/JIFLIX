import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

  const [limit, setLimit] = useState(10); // 한 페이지에 보여줄 데이터의 개수
  const [page, setPage] = useState(1); // 페이지 초기 값은 1페이지
  const [blockNum, setBlockNum] = useState(0); // 한 페이지에 보여 줄 페이지네이션의 개수를 block으로 지정하는 state. 초기 값은 0
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    console.log("isOpen ? ", isOpen);
  };

  useEffect(() => {
    dispatch(movieAction.getNowMovie(page));
  }, [searchMovies, page]);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <>
      <Container>
        <LeftMenu>
          <SortBox>
            <div className="sort">
              <h2>Sort</h2>
              <h2>
                <FontAwesomeIcon
                  className="arrow"
                  icon={faArrowRight}
                  onClick={handleDropdown}
                />
              </h2>
            </div>
            <div className="dropbox"></div>
          </SortBox>
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
        <Pagination
          className="pagination"
          limit={limit}
          page={page}
          setPage={setPage}
          blockNum={blockNum}
          setBlockNum={setBlockNum}
          counts={600}
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
  display: flex;
  width: 35%;
  height: 400px;
`;
const SortBox = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  margin: 0 auto;
  width: 70%;
  height: 80px;
  .sort {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    .arrow {
      cursor: pointer;
    }
  }
  .dropbox {
    width: 200px;
  }
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
