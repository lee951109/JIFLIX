import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../components/Banner";
import { movieAction } from "../redux/actions/movieAction";

const Home = () => {
  const dispatch = useDispatch();
  const { popularMovies, topRatedMovies, upComingMovies } = useSelector(
    (state) => state.movie
  );

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  return (
    <div>
      {
        /* 조건부 랜더링 => popularMovies.results가 있으면 Banner를 보여준다*/
        popularMovies.results && <Banner movie={popularMovies.results[0]} />
      }
    </div>
  );
};

export default Home;
