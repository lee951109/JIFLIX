import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import styled from "styled-components";

import Loading from "../components/Loading";

import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, loading, videoId } = useSelector(
    (state) => state.detail
  );

  const opts = {
    width: "100%",
    height: "500px",
    playerVars: {
      autoplay: 1, //자동재생 O
      rel: 0, //관련 동영상 표시하지 않음
      modestbranding: 1,
      loop: 1,
      controls: 0,
      mute: 1,
    },
  };
  // 컨트롤 바에 youtube 로고를 표시하지 않음};
  useEffect(() => {
    dispatch(movieAction.getMovieDetail(id));
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <div style={{ position: "relative" }}>
      {videoId.results.length >= 1 ? (
        <YouTube videoId={videoId?.results[0].key} opts={opts}></YouTube>
      ) : (
        <div></div>
      )}
      <Container>
        <Card>
          <CardImg
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}` +
                ")",
            }}
          ></CardImg>
        </Card>
        <CardInfo>
          <GenerBox>
            {movieDetail.genres.map((gener) => (
              <div className="gener" key={gener.id}>
                {gener.name}
              </div>
            ))}
          </GenerBox>
          <h1>{movieDetail.title}</h1>
          <h4>{movieDetail.tagline}</h4>
          <div className="rank">
            <FontAwesomeIcon icon={faStar} className="star" />
            <span className="vote">
              {Math.round(movieDetail.vote_average * 10) / 10}
            </span>
            <span className="adult" adult={+movieDetail.adult}>
              {movieDetail.adult ? "청불" : "Under 18"}
            </span>
          </div>
          <hr />
          <h3>{movieDetail.overview}</h3>
          <hr />
          <LittleInfo>
            <div className="red__box">예산</div>
            <span>${movieDetail.budget}</span>
          </LittleInfo>
          <LittleInfo>
            <div className="red__box">수익</div>
            <span>${movieDetail.revenue} </span>
          </LittleInfo>
          <LittleInfo>
            <div className="red__box">개봉일</div>
            <span>{movieDetail.release_date}</span>
          </LittleInfo>
          <LittleInfo>
            <div className="red__box">상영 시간</div>
            <span>{movieDetail.runtime} 분</span>
          </LittleInfo>
          <hr />
        </CardInfo>
      </Container>
    </div>
  );
};

export default MovieDetail;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  margin: 15px auto;
  justify-content: center;
  text-align: left;
  @media screen and (max-width: 1023px) {
    position: absolute;
    flex-direction: column;
    top: 600px;
  }
`;

const Card = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 30px;
`;

const CardImg = styled(Card)`
  width: 100%;
  height: 0;
  padding-bottom: calc(965 / 640 * 100%);
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: 1240px) {
    margin-top: 50%;
  }
`;

const CardInfo = styled.div`
  width: 30%;
  height: 0;
  padding-bottom: calc(965 / 640 * 100%);
  margin-left: 20px;
  padding-left: 10px;

  h1 {
    text-align: left;
  }
  hr {
    margin: 30px 0;
    font-weight: 600;
  }
  .rank {
    font-size: 30px;
    font-weight: 600;
    margin: 20px 0;
    .star {
      color: #ffff00;
      margin-right: 5px;
    }
    .vote {
      margin-right: 40px;
    }
    .adult {
      color: ${(props) => (props.adult ? "#dc143c" : "#9ACD32")};
      font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    }
  }
`;
const GenerBox = styled.div`
  display: flex;
  justify-content: left;
  margin: 20px 0;
  .gener {
    font-weight: 600;
    border: 1px solid #e9123d;
    padding: 5px;
    margin-right: 10px;
    background-color: #e9123d;
    border-radius: 10px;
    color: #fcfcfc;
  }
`;

const LittleInfo = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 10px;
  .red__box {
    font-weight: 600;
    border: 1px solid #e9123d;
    padding: 5px;
    margin-right: 10px;
    background-color: #e9123d;
    border-radius: 10px;
    color: #ffe4e0;
    width: 20%;
    text-align: center;
  }
  span {
    text-align: center;
    margin-top: 5px;
  }
`;
