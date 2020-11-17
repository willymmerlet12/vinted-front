import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Checkout from "../components/Checkout";

const stripePromise = loadStripe(
  "pk_test_51HoU8OHjBeHezzTyg0Pm2ElnnPlw7fuAsIQ3EsYIPa9R0rPOZfImvT2xErEwg3C2IVCbvaFXWUHbDxUq2D6vtkdd00cWocRw8T"
);

const Paiment = () => {
  return (
    <Elements stripe={stripePromise}>
      <Checkout />
    </Elements>
  );
};

export default Paiment;
