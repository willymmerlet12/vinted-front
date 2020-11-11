import React from "react";
import { Link } from "react-router-dom";
import Offers from "../components/offers";

const Home = ({ data, isLoading }) => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/items">Offer</Link>

      <Offers data={data} isLoading={isLoading} />
    </div>
  );
};

export default Home;
