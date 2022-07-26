import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const OverLay = styled.div`
  position: absolute;
  opacity: 0;
  background: rgba(43, 41, 41, 0.9);
  width: 100%;
  height: 100%;
`;

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 5px;
  flex: none;
  &:hover,
  &:focus {
    transform: scale(1.2);
    z-index: 1;
    position: absolute;
    transition: 500ms;
  }
  &:hover ${OverLay} {
    opacity: 1;
    transition: 500ms;
  }
`;

const FlexDiv = styled.div`
  display: flex;
`;

const GenreId = styled.div`
  border: 1px solid #e50915;
  background-color: #e50915;
  color: #fff;
  width: auto;
  border-radius: 5px;
  padding: 3px;
  margin: 2px;
`;

const MovieCard = ({ item }) => {
  const { genreList } = useSelector((state) => state.movie);
  console.log(item);
  return (
    <Card
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${item.poster_path}` +
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
