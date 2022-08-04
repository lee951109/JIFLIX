import { faStar, faVideoCamera, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Modal from "react-modal";

import Loading from "../components/Loading";
import { movieAction } from "../redux/actions/movieAction";
import Trailer from "../components/Trailer";
import Recommend from "../components/Recommend";

const MovieDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, loading, videoId } = useSelector(
    (state) => state.detail
  );
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    dispatch(movieAction.getMovieDetail(id));
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <div style={{ position: "relative" }}>
      <TrailerBox>
        <Trailer videoId={videoId} />
      </TrailerBox>
      <Container>
        <Card className="cardBox">
          <CardImg
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/original/${movieDetail.poster_path}` +
                ")",
            }}
          ></CardImg>
        </Card>
        <CardInfo className="cardBox cardInfo">
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
          <h3>
            {movieDetail.overview.length > 0
              ? movieDetail.overview
              : "개요 없음"}
          </h3>
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
          {videoId.results.length >= 1 ? (
            <>
              <button className="trailer" onClick={toggleModal}>
                <FontAwesomeIcon icon={faVideoCamera} /> <span>Trailer</span>
              </button>

              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="My dialog"
                className="mymodal"
                overlayClassName="myoverlay"
                closeTimeoutMS={500}
              >
                <button onClick={toggleModal}>
                  <FontAwesomeIcon icon={faX} />
                </button>

                <Trailer videoId={videoId} />
              </Modal>
            </>
          ) : (
            <>
              <FontAwesomeIcon icon={faVideoCamera} /> <span>No Trailer</span>
            </>
          )}
        </CardInfo>
      </Container>
      <Recommend id={id} />
    </div>
  );
};

export default MovieDetail;
const TrailerBox = styled.div`
  @media screen and (max-width: 1030px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100vh;
  margin: 15px auto;
  justify-content: center;
  .trailer {
    display: none;
  }

  @media screen and (max-width: 1240px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 1030px) {
    .cardBox {
      width: 58%;
      padding-bottom: 90%;
    }
  }
  @media screen and (max-width: 1007px) {
  }

  @media screen and (max-width: 768px) {
    max-width: 640px;
    .cardBox {
      width: 80%;
      margin: 0 auto;
      padding-bottom: 120%;
    }
    .cardInfo {
      top: 10rem;
    }
    .trailer {
      display: flex;
    }
  }
  @media screen and (max-width: 576px) {
    max-width: 520px;
    top: 7em;
  }
`;

const Card = styled.div`
  width: 30%;
  max-width: 640px;
  min-width: 320px;
  height: 865px;
  margin-right: 30px;
`;

const CardImg = styled.img`
  width: 100%;
  height: 0;
  padding-bottom: calc(800 / 540 * 100%);
  background-size: cover;
  background-repeat: no-repeat;
  transition: opacity 0.15s linear;
`;

const CardInfo = styled.div`
  width: 650px;
  height: 865px;
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
