import React from "react";

const Offers = ({ data, isLoading }) => {
  console.log(data);
  return isLoading ? (
    <span>en cours de chargement</span>
  ) : (
    <>
      {data.offers.map((item, id) => {
        return (
          <div key={id}>
            <p>{item.owner.account.username}</p>
            <img src={item.product_image.secure_url} alt="" />
            <p>{item.product_price} €</p>
            <p>{item.product_details[1].TAILLE}</p>
            <p>{item.product_details[0].MARQUE}</p>
          </div>
        );
      })}
    </>
  );
};

export default Offers;
