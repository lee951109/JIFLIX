import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";

const MovieCard = ({ movie, recommend }) => {
  const { genreList } = useSelector((state) => state.movie);
  const { genres } = useSelector((state) => state.recommend);

  const navigate = useNavigate();

  const showDetail = () => {
    if (movie !== undefined) {
      navigate(`/movies/${movie.id}`);
    } else {
      navigate(`/movies/${recommend.id}`);
      window.location.reload();
    }
  };

  useEffect(() => {}, [recommend]);

  if (movie !== undefined) {
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
                {genreList.find((movie) => movie.id === id)?.name}
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
  }
  return (
    <RecommendCard
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${recommend.poster_path}` +
          ")",
      }}
      onClick={showDetail}
    >
      <RecommendOverLay>
        <h2>{recommend.title}</h2>
        <FlexDiv>
          {recommend.genre_ids.map((id, index) => (
            <Genre key={index}>
              {genres && genres.find((genre) => genre.id === id).name}
            </Genre>
          ))}
        </FlexDiv>
        <RecoMovieDetail>
          <FontAwesomeIcon icon={faStar} className="star" />
          <span className="vote">
            {Math.round(recommend.vote_average * 10) / 10}
          </span>
          <span className="adult" adult={+recommend.adult}>
            {recommend.adult ? "청불" : "Under 18"}
          </span>
        </RecoMovieDetail>
      </RecommendOverLay>
    </RecommendCard>
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

// Recommend styled !!
const RecommendOverLay = styled(OverLay)`
  opacity: 0;
  background: rgba(43, 41, 41, 0.9);
  width: 300px;
  height: 450px;
  font-family: Arial, Helvetica, sans-serif;
  h2 {
    margin-left: 10px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
`;

const RecommendCard = styled.div`
  width: 300px;
  height: 450px;
  margin: 20px 5%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 5px;
  &:hover ${RecommendOverLay} {
    opacity: 1;
    transition: 500ms;
    border-radius: 5px;
    z-index: 99;
  }
  &,
  ${RecommendOverLay} {
    @media screen and (max-width: 749px) {
      width: 270px;
      height: 400px;
    }
    @media screen and (max-width: 675px) {
      width: 230px;
      height: 350px;
    }
    @media screen and (max-width: 575px) {
      width: 200px;
      height: 310px;
    }
  }
`;

const Genre = styled(GenreId)`
  font-size: 15px;
`;

const RecoMovieDetail = styled(MovieDetail)`
  font-size: 1.8em;
`;
