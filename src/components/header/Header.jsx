import React from "react";
import "./header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="headerContainer">
          <h1 className="headerTitle">Plan India Tour</h1>
          <p className="slogan">plan it. feel it. live it.</p>
        </div>

        <div className="searchBox">
          <input
            type="search"
            className="searchInput"
            name="search"
            placeholder="Search"
          />
          <button className="searchButton" to="/tour">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
