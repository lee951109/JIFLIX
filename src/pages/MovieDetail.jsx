import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import Loading from "../components/Loading";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, loading } = useSelector((state) => state.detail);
  console.log(movieDetail);

  useEffect(() => {
    dispatch(movieAction.getMovieDetail(id));
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
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
        <GenerInfo>
          {movieDetail.genres.map((gener) => (
            <div className="gener" key={gener.id}>
              {gener.name}
            </div>
          ))}
        </GenerInfo>
        <h1>{movieDetail.title}</h1>
        <h4>{movieDetail.tagline}</h4>
      </CardInfo>
    </Container>
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
`;

const Card = styled.div`
  width: 30%;
  height: 100%;
  margin-right: 30px;
`;

const CardImg = styled(Card)`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
`;

const CardInfo = styled.div`
  width: 30%;
  height: 100%;
  margin-left: 20px;
  padding-left: 10px;
  h1 {
    text-align: left;
  }
`;
const GenerInfo = styled.div`
  display: flex;
  justify-content: left;
  margin: 20px 0;
  .gener {
    border: 1px solid #e9123d;
    padding: 5px;
    margin-left: 10px;
    background-color: #e9123d;
    border-radius: 10px;
    color: #cfcee8;
  }
`;
