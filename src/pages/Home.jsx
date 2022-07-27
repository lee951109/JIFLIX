import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { movieAction } from "../redux/actions/movieAction";

import Banner from "../components/Banner";
import Carousel from "../components/Carousel";
import Loading from "../components/Loading";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upcomingMovies, loading } =
    useSelector((state) => state.movie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return <Loading loading={loading} />;
  }
  return (
    <div>
      <Banner movie={popularMovies.results[0]} />
      <div className="movie__container">
        <h1>인기 영화</h1>
        <Carousel movies={popularMovies} />
        <h1>탑 20 영화</h1>
        <Carousel movies={topRatedMovies} />
        <h1>개봉 예정 영화</h1>
        <Carousel movies={upcomingMovies} />
      </div>
    </div>
  );
};

export default Home;
