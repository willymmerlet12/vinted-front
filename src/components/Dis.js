import React from "react";
import Hero from "../img/vint.jpg";
import { Link } from "react-router-dom";

const Dis = () => {
  return (
    <>
      <div className="home-hero-bg">
        <img src={Hero} alt="" className="home-hero-forme" />
        <div>
          <div className="home-hero-pret">
            Prêts à faire du tri dans vos placards ?
            <Link to="/signup">
              <button>Commencer à vendre</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dis;
