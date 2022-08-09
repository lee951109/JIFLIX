import React from "react";
import styled from "styled-components";

const NowMovieCard = ({ movie }) => {
  const posterImg = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
  let date = movie.release_date;
  let year = date.substr(0, 4);
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
    >
      <CardInfo className="card_info">
        <Header className="header">
          <img src={posterImg} />
          <h1>{movie.title}</h1>
          <h4>{year}</h4>
        </Header>
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
  width: 100%;
  height: 100%;
  background-blend-mode: multiply;
  background: linear-gradient(90deg, #0d0d0c 50%, transparent);
`;

const Header = styled.div`
  width: 200px;
  display: flex;
  padding: 25px;
  img {
    position: relative;
    float: left;
    margin-right: 20px;
    height: 80px;
  }
  h1 {
    height: 60px;
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
    font-weight: 400;
    font-size: 13px;
    margin-bottom: 40px;
    line-height: 1.2;
  }
`;

export default NowMovieCard;
