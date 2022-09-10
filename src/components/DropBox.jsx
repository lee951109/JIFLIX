import React, { useState } from "react";
import styled from "styled-components";
import {
  faArrowDown,
  faArrowRight,
  faArrowTrendUp,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";

const DropBox = ({ nowMovies, sortMovies, setSortMovies }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [ascPopular, setAscPopular] = useState([]);
  const [descPopular, setDescPopular] = useState([]);
  const [ascDate, setAscDate] = useState([]);
  const [descDate, setDescDate] = useState([]);

  const handleDropdown = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    console.log("isOpen ? ", isOpen);
  };

  // 인기도 오름차순
  const ascPopularityArry = () => {
    ascPopular.sort(function (a, b) {
      if (a.popularity > b.popularity) {
        return 1;
      } else if (a.popularity === b.popularity) {
        return 0;
      } else if (a.popularity < b.popularity) {
        return -1;
      }
    });
    setSortMovies(ascPopular);
  };

  //인기도 내림차순
  const descPopularityArry = () => {
    setSortMovies(descPopular);
  };

  const ascDateArry = () => {
    ascDate.sort(function (a, b) {
      return new Date(a.release_date) - new Date(b.release_date);
    });
    setSortMovies(ascDate);
    console.log("개봉일 오름차순 : ", sortMovies);
  };

  const descDateArry = () => {
    descDate.sort(function (a, b) {
      return new Date(b.release_date) - new Date(a.release_date);
    });
    setSortMovies(descDate);
    console.log("개봉일 내림차순 : ", sortMovies);
  };

  useEffect(() => {
    setAscPopular(nowMovies?.results);
    setDescPopular(nowMovies?.results);
    setAscDate(nowMovies?.results);
    setDescDate(nowMovies?.results);
    console.log("nowMovies : ", nowMovies);
  }, [sortMovies]);

  return (
    <Container>
      <SortBox>
        <div className="sort">
          <h2>정렬</h2>
          <ArrowH2 isOpen={isOpen}>
            <FontAwesomeIcon
              className="arrow"
              icon={faArrowRight}
              onClick={handleDropdown}
            />
          </ArrowH2>
        </div>
        <DropDiv isOpen={isOpen}>
          <ul className="dropbox">
            <li className="sortList" onClick={ascPopularityArry}>
              인기도 오름차순
            </li>
            <li className="sortList" onClick={descPopularityArry}>
              인기도 내림차순
            </li>
            <li className="sortList" onClick={ascDateArry}>
              출시일 오름차순
            </li>
            <li className="sortList" onClick={descDateArry}>
              출시일 내림차순
            </li>
          </ul>
        </DropDiv>
      </SortBox>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  li {
    list-style: none;
    font-size: 20px;
  }
`;

const SortBox = styled.div`
  border: 1px solid white;
  border-radius: 10px;
  margin: 0 auto;
  width: 45%;
  height: 80px;

  .sort {
    display: flex;
    justify-content: space-between;
    padding: 5px 20px;
    z-index: 1;
  }
`;
const ArrowH2 = styled.h2`
  transform: ${(props) => (props.isOpen ? "rotate(90deg)" : "rotate(0deg)")};
  transition: 0.3s;
  .arrow {
    cursor: pointer;
  }
`;
const DropDiv = styled.div`
  transition: 0.3s;
  opacity: ${(props) => (props.isOpen ? "1" : "0")};

  .dropbox {
    border: 1px solid white;
    border-radius: 0 0 10px 10px;
    border-top: none;
    margin-top: 1px;
    padding: 0;
    height: 135px;
    overflow-y: scroll;
  }
  .sortList {
    border-bottom: 1px solid white;
    padding: 10px;
    cursor: pointer;
    &:hover {
      background-color: #181818;
    }
    &:last-child {
      border: none;
      border-radius: 10px;
    }
  }
`;

export default DropBox;
