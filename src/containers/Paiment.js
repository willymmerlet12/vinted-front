import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../components/Checkout";

const stripePromise = loadStripe(
  "pk_test_51HoU8OHjBeHezzTyg0Pm2ElnnPlw7fuAsIQ3EsYIPa9R0rPOZfImvT2xErEwg3C2IVCbvaFXWUHbDxUq2D6vtkdd00cWocRw8T"
);

const Paiment = ({}) => {
  const location = useLocation();
  const title = location.state.title;
  const amount = location.state.amount;
  const total = Number(amount + 0.4 + 0.8).toFixed(2);

  return (
    <>
      <div className="pay-wrapper">
        <div className="pay-cont">
          <div className="pay-card">
            <h4 className="pay-title">Résumé de la commande</h4>
            <div className="content">
              <ul>
                <li>
                  Commande
                  <span>{amount} €</span>
                </li>
                <li>
                  Frais rotection acheteurs
                  <span>0.40 €</span>
                </li>
                <li>
                  Frais de port
                  <span>0.80 € </span>
                </li>
              </ul>
            </div>
            <div className="divide"></div>
            <div className="content">
              <ul>
                <li>
                  Total
                  <span>{total} </span>
                </li>
              </ul>
            </div>
            <div classname="pay-card">
              <div className="content">
                <p>
                  Il ne vous reste plus qu'un étape pour vous offrir{" "}
                  <span className="bold">{title}</span>. Vous allez payer{" "}
                  <span className="bold">{total} € </span>
                  (frais de protection et frais de port inclus).
                </p>
                <div className="divide"></div>
              </div>
              <Elements stripe={stripePromise}>
                <Checkout />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Paiment;
