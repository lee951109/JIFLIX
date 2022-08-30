import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";

const NowMovieCard = ({ movie }) => {
  const posterImg = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  const dispatch = useDispatch();
  const { genres } = useSelector((state) => state.genres);
  const navigate = useNavigate();

  const showDetail = () => {
    navigate(`/movies/${movie.id}`);
  };

  let date = movie.release_date;
  let year = date.substr(0, 4);

  useEffect(() => {
    dispatch(movieAction.getGenres());
  }, []);

  return (
    <Card
      style={
        movie.backdrop_path !== null
          ? {
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/original/${movie.poster_path}` +
                ")",
            }
          : {
              backgroundImage:
                "url(https://hanamsport.or.kr/www/images/contents/thum_detail.jpg)",
            }
      }
      onClick={showDetail}
    >
      <CardInfo className="card_info">
        <Header className="header">
          <img src={posterImg} />
          <div className="title">
            <h1>{movie.title}</h1>
            <h4>{year}</h4>
          </div>
          <FlexDiv>
            {movie.genre_ids.map((id) => (
              <GenreId key={id}>
                {genres.find((movie) => movie.id === id)?.name}
              </GenreId>
            ))}
          </FlexDiv>
        </Header>
        <div className="overview">
          {movie.overview.length > 150
            ? movie.overview.substr(0, 150) + " ..."
            : movie.overview}
        </div>

        <div className="subinfo">
          <FontAwesomeIcon icon={faStar} className="star" />
          <span className="vote">
            {Math.round(movie.vote_average * 10) / 10}
          </span>
          <span className="adult" adult={+movie.adult}>
            {movie.adult ? "청불" : "Under 18"}
          </span>
        </div>
      </CardInfo>
    </Card>
  );
};

const Card = styled.div`
  width: 380px;
  height: 525px;
  background-size: contain;
  background-position: right;
  border-radius: 5px;
  margin: 20px;
  box-shadow: 0 0 150px -45px rgba(255, 51, 0, 0.5);

  @media screen and(min-width:768px) {
    .card_info {
      background: linear-gradient(90deg, #0d0d0c 50%, transparent);
    }
    .header {
      width: 70%;
    }
  }
  @media screen and (max-width: 768px) {
    .card_info {
      background: linear-gradient(0deg, #141413 50%, transparent);
      display: inline-grid;
    }
  }
`;

const CardInfo = styled.div`
  width: 90%;
  height: 100%;
  background-blend-mode: multiply;
  background: linear-gradient(90deg, #0d0d0c 50%, transparent);
  cursor: pointer;
  .overview {
    width: 180px;
    font-size: smaller;
    padding: 20px;
  }
  .subinfo {
    font-size: 30px;
    padding: 40px 20px;
    .star {
      color: yellow;
      margin-right: 5px;
    }
    .vote {
      font-weight: 600;
      margin-right: 20px;
    }
    .adult {
      color: ${(props) => (props.adult ? "#dc143c" : "#9ACD32")};
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }
  }
`;

const Header = styled.div`
  position: relative;
  float: left;
  width: 185px;
  display: flex;
  flex-wrap: wrap;
  padding-top: 25px;
  padding-left: 25px;
  padding-bottom: 25px;
  padding-right: 100%;
  img {
    margin-right: 20px;
    height: 90px;
    margin-bottom: 20px;
  }
  .title {
    display: flex;
    flex-direction: column;
    margin: 0;
    h1 {
      width: 96px;
      margin: 0;
      font-size: 25px;
      font-weight: 800;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.2;
    }
    h4 {
      color: #9ac7fa;
      font-weight: 600;
      font-size: 13px;
      margin-bottom: 20px;
      line-height: 1.2;
    }
  }
`;
const FlexDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const GenreId = styled.div`
  border: 1px solid #dc143c;
  background-color: #dc143c;
  color: #cfcee8;
  width: auto;
  font-size: small;
  border-radius: 5px;
  padding: 3px;
  margin: 3px;
  flex-wrap: wrap;
`;

export default NowMovieCard;
