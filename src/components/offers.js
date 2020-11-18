import React from "react";
import { Link } from "react-router-dom";
import UserLogo from "../img/user-logo.jpg";

const Offers = ({ data, isLoading }) => {
  console.log(data);
  return isLoading ? (
    <span>en cours de chargement</span>
  ) : (
    <>
      <div className="home-card-wrapper">
        {data.offers.map((item, id) => {
          return (
            <div key={id}>
              <div className="card-container">
                <div className="card-avatar-username">
                  <span>
                    {item.owner.account.avatar ? (
                      <img
                        src={item.owner.account.avatar.secure_url}
                        alt="avatar pic"
                        className="avat"
                      />
                    ) : (
                      <img src={UserLogo} alt="" className="avat" />
                    )}
                    <span>{item.owner.account.username}</span>
                  </span>
                </div>
                <Link to={`/items/${item._id}`}>
                  <div>
                    <img src={item.product_image.secure_url} alt="" />
                    <div className="card-price-brand-size">
                      <span>{item.product_price} €</span>
                      <span>{item.product_details[1].TAILLE}</span>
                      <span>{item.product_details[0].MARQUE}</span>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Offers;
