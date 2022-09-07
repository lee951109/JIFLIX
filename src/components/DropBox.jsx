import React, { useState } from "react";
import styled from "styled-components";
import {
  faArrowDown,
  faArrowRight,
  faArrowTrendUp,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DropBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdown = () => {
    if (!isOpen) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
    console.log("isOpen ? ", isOpen);
  };

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
            <li className="sortList">인기도 오름차순</li>
            <li className="sortList">인기도 내림차순</li>
            <li className="sortList">출시일 오름차순</li>
            <li className="sortList">출시일 내림차순</li>
            <li className="sortList">별점 오름차순</li>
            <li className="sortList">별점 내림차순</li>
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
  }
  .sortList {
    border-bottom: 1px solid white;
    padding: 10px;
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
