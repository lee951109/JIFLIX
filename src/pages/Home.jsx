import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieAction } from "../redux/actions/movieAction";
import { ClipLoader } from "react-spinners";

import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import Carousel from "../components/Carousel";

const override = {
  display: "flex",
  margin: "0 auto",
  borderColor: "#E50915",
  textAlign: "center",
};

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <ClipLoader
        color="#E50915"
        loading={loading}
        cssOverride={override}
        size={150}
      />
    );
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      <h1>인기 영화</h1>
      <Carousel movies={popularMovies} />
      <h1>탑 20 영화</h1>
      <Carousel movies={topRatedMovies} />
      <h1>개봉 예정 영화</h1>
      <Carousel movies={upcomingMovies} />
    </div>
  );
};

export default Home;
