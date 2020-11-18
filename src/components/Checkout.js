import React, { useState } from "react";
import axios from "axios";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";

const Checkout = ({ price, name }) => {
  const location = useLocation();

  const stripe = useStripe();
  const elements = useElements();
  const [succeed, setSucceed] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: "id",
      });

      const stripeToken = stripeResponse.token.id;

      const response = await axios.post(
        "https://vinted-will.herokuapp.com/payment",
        {
          stripeToken: stripeToken,
          amount: price,
          title: name,
        }
      );
      if (response.data.status === "succeeded") {
        setSucceed(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {succeed ? (
        <p>succeeded</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="card-pay">
            <CardElement />
          </div>
          <button type="submit">Valider</button>
        </form>
      )}
    </>
  );
};

export default Checkout;
