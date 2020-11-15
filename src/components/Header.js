import React from "react";
import Logo from "../img/vinted.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ token, setUser }) => {
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
          <button className="header-button button-sold">
            Vend tes articles
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
