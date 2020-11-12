import React, { useState, useEffect } from "react";
import axios from "axios";
import Offers from "../components/offers";
import Dis from "../components/Dis";

const Home = () => {
  const [data, setData] = useState([{}]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://vinted-will.herokuapp.com/offers"
      );
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container">
      <Dis />
      <Offers data={data} isLoading={isLoading} />
    </div>
  );
};

export default Home;
