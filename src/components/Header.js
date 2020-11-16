import React, { useState } from "react";
import Logo from "../img/vinted.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({
  token,
  setUser,
  setSearch,
  setSearchInput,
  searchInput,
  search,
}) => {
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <div>
      <nav>
        <div className="header-container">
          <div>
            <Link to="/">
              <img className="header-logo" src={Logo} alt="logo" />
            </Link>
          </div>

          <div className="search-cont">
            <input
              type="text"
              placeholder="Recherche des articles"
              className="search-input"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
            />
            <div className="search-icon">
              <FontAwesomeIcon icon="search" />
            </div>
          </div>

          {token ? (
            <button
              onClick={() => {
                setUser(null);
              }}
            >
              Se déconnecter
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="button-signup header-button button-login-signup">
                  S'inscrire
                </button>
              </Link>
              <Link to="/login">
                <button className="header-button button-login-signup">
                  Se connecter
                </button>
              </Link>
            </>
          )}
          <Link to="/publish">
            <button className="header-button button-sold">
              Vend tes articles
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
