import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MovieCard = ({ movie }) => {
  const { genreList } = useSelector((state) => state.movie);

  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/movies/${movie.id}`);
  };

  return (
    <Card
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces${movie.poster_path}` +
          ")",
      }}
      onClick={showDetail}
    >
      <OverLay>
        <h2>{movie.title}</h2>
        <FlexDiv>
          {movie.genre_ids.map((id, index) => (
            <GenreId key={index}>
              {genreList.name &&
                genreList.find((movie) => movie.id === id).name}
            </GenreId>
          ))}
        </FlexDiv>
        <MovieDetail>
          <FontAwesomeIcon icon={faStar} className="star" />
          <span className="vote">{movie.vote_average}</span>
          <span className="adult" adult={+movie.adult}>
            {movie.adult ? "청불" : "Under 18"}
          </span>
        </MovieDetail>
      </OverLay>
    </Card>
  );
};

export default MovieCard;

const OverLay = styled.div`
  position: absolute;
  opacity: 0;
  background: rgba(43, 41, 41, 0.9);
  width: 100%;
  height: 100%;
  font-family: Arial, Helvetica, sans-serif;
  h2 {
    margin-left: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  flex: none;

  &:hover {
    position: absolute;
    max-width: 400px;
    transform: scale(1.2);
    z-index: 1;
    transition: 500ms;
    box-shadow: 3px 3px 3px 3px rgba(37, 37, 37, 0.9);
  }
  &:hover ${OverLay} {
    opacity: 1;
    transition: 500ms;
    border-radius: 5px;
    z-index: 99;
  }
  @media screen and (max-width: 1023px) {
    width: 300px;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  margin-left: 10px;
`;

const GenreId = styled.div`
  border: 1px solid #dc143c;
  background-color: #dc143c;
  color: #cfcee8;
  width: auto;
  font-size: small;
  border-radius: 5px;
  padding: 3px;
  margin: 2px;
  flex-wrap: wrap;
`;

const MovieDetail = styled.div`
  position: absolute;
  bottom: 15px;
  margin-left: 10px;
  font-size: 1.2em;
  span {
    margin: 5px;
  }
  .star {
    color: #ffff00;
  }
  .vote {
    font-weight: 600;
  }
  .adult {
    color: ${(props) => (props.adult ? "#dc143c" : "#9ACD32")};
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  }
`;
