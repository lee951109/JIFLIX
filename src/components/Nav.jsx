import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";

const Nav = () => {
  return (
    <div>
      <div className="navbar">
        <div className="nav__box">
          <div className="nav__log">
            <Link to="/">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
                alt="Netflix"
              />
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
        <form>
          <div className="nav__search">
            <input type="text" placeholder="Search" />
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
