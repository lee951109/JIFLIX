import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const OverLay = styled.div`
  opacity: 0;
  background: rgba(43, 41, 41, 0.9);
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  width: 300px;
  height: 200px;
  background-repeat: no-repeat;
  background-size: cover;
  align-items: center;
  display: flex;
  position: relative;
  z-index: 1;
  &:hover {
    cursor: pointer;
    width: 350px;
    height: 200px;
    margin: 30px;
    background-repeat: no-repeat;
    background-size: cover;
    align-items: center;

    z-index: 5;
  }
  &:hover ${OverLay} {
    opacity: 1;
    transition: 0.5s;
  }
`;

const FlexDiv = styled.div`
  display: flex;
`;

const GenreId = styled.div`
  border: 1px solid #e50915;
  background-color: #e50915;
  color: #fff;
  width: 50px;
  border-radius: 5px;
`;

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);

  return (
    <Card
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.backdrop_path}` +
          ")",
      }}
    >
      <OverLay>
        <h1>{item.title}</h1>
        <FlexDiv>
          {item.genre_ids.map((id, index) => (
            <GenreId key={index}>
              {genreList.find((item) => item.id === id).name}
            </GenreId>
          ))}
        </FlexDiv>
        <div>
          <span>{item.vote_average}</span>
          <span>{item.adult ? "청불" : ""}</span>
        </div>
      </OverLay>
    </Card>
  );
};

export default MovieCard;
