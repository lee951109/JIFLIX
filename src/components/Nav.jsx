import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Dropdown, DropdownDivider } from "semantic-ui-react";

const options = [
  { key: 1, text: "Choice 1", value: 1 },
  { key: 2, text: "Choice 2", value: 2 },
  { key: 3, text: "Choice 3", value: 3 },
];

const Nav = () => {
  let navigate = useNavigate();

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
