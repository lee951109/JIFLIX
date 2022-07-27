import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import { movieAction } from "../redux/actions/movieAction";

const MovieDetail = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const { movieDetail, loading } = useSelector((state) => state.detail);

  console.log("movieDetail", movieDetail);

  useEffect(() => {
    dispatch(movieAction.getMovieDetail(id));
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return <div></div>;
};

export default MovieDetail;
