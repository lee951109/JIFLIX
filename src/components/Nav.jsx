import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { movieAction } from "../redux/actions/movieAction";
import { IconGroup } from "semantic-ui-react";

const Nav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);
  const [keyword, setKeyword] = useState("");
  let inputValue = "";

  // const handleScroll = () => {
  //   if (window.scrollY === 0) {
  //     setScrolling(false);
  //   } else if (window.scrollY > 50) {
  //     setScrolling(true);
  //   }
  // };

  // window.addEventListener("scroll", handleScroll);

  const handleChange = (e) => {
    inputValue = e.target.value;
    setKeyword(inputValue);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      inputValue = e.target.value;
      if (inputValue !== "") {
        navigate("/movies");
        dispatch(movieAction.getSearchMovie(inputValue));
      } else {
        // keyword 가 ""이면 페이지 리로더
        window.location.reload();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/movies");
    dispatch(movieAction.getSearchMovie(keyword));
  };

  useEffect(() => {}, [keyword]);

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
            {/* <li>
              <Link to="/movies/:id">My Favorite</Link>
            </li> */}
          </ul>
        </div>

        <div className="navbar__toogleBtn">
          <button className="dropBtn">
            Menu
            <FontAwesomeIcon icon={faCaretDown} className="drop__icon" />
          </button>
          <div className="drop_menu">
            <Link to="/">Home</Link>
            <Link to="/movies" state={{}}>
              Movies
            </Link>
            <Link to="/movies/:id">My Favorite</Link>
          </div>
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="nav__search">
            <input
              type="text"
              placeholder="영화 검색"
              name="searchInput"
              onChange={(e) => handleChange(e)}
              onKeyPress={(e) => handleKeyPress(e)}
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
