import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const { id } = useParams();

  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://vinted-will.herokuapp.com/offer/${id}`
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [id]);
  return isLoading ? (
    <p>en cours de chargement</p>
  ) : (
    <div>
      <p>{data.product_name}</p>
      <img src={data.product_image.secure_url} alt="offer img" />
      {data.product_details.map((elem, index) => {
        const keys = Object.keys(elem);

        return (
          <p key={index}>
            {keys[0]} : {elem[keys[0]]}
          </p>
        );
      })}
    </div>
  );
};

export default Offer;
