import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";

const Nav = () => {
  const dispatch = useDispatch();
  const { serachMovie } = useSelector((state) => state.search);
  const [query, setQuery] = useState("");
  let keyword = "";
  const searchMovie = (e) => {
    e.preventDefault();
    keyword = e.target.value;
    console.log(keyword);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      keyword = e.target.value;
      console.log(keyword);
      // setQuery(keyword);
      // dispatch(movieAction.getSearchMovie(keyword));
    }
  };

  return (
    <div>
      <div className="navbar">
        <div className="nav__box">
          <div className="nav__log">
            <Link to="/">
              <img src={require("../images/logo.png")} alt="JIFLIX" />
            </Link>
          </div>

          <ul className="nav__menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/movies/:id">My Favorite</Link>
            </li>
          </ul>
        </div>

        <div className="navbar__toogleBtn">
          <button className="dropBtn">
            Menu
            <FontAwesomeIcon icon={faCaretDown} className="drop__icon" />
          </button>
          <div className="drop_menu">
            <Link to="/">Home</Link>
            <Link to="/movies">Movies</Link>
            <Link to="/movies/:id">My Favorite</Link>
          </div>
        </div>
        <form onSubmit={(e) => searchMovie(e)} onClick={(e) => searchMovie(e)}>
          <div className="nav__search">
            <input
              type="text"
              placeholder="영화 검색"
              onKeyPress={(e) => search(e)}
            />
            <button type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Nav;
