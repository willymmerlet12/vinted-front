import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Offers from "./containers/Offers";
import Home from "./containers/Home";

function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get("https://vinted-will.herokuapp.com/");
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
    <Router>
      <Switch>
        <Route path="/items">
          <Offers />
        </Route>
        <Route>
          <Home path="/" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
