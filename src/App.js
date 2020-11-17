import React, { useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./containers/Home";
import Offer from "./containers/Offer";
import Header from "./components/Header";
import Signup from "./containers/Signup";
import Login from "./containers/Login";
import Publish from "./containers/Publish";

import Cookie from "js-cookie";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Paiment from "./containers/Paiment";
library.add(faSearch);

function App({ handleChange, data }) {
  const [token, setToken] = useState(Cookie.get("userToken") || null);
  const [search, setSearch] = useState("");
  const [searchInput, setsearchInput] = useState("");

  const setUser = (tokenToSet) => {
    if (tokenToSet) {
      Cookie.set("userToken", tokenToSet);
      setToken(tokenToSet);
    } else {
      Cookie.remove("userToken");
      setToken(null);
    }
  };

  return (
    <Router>
      <Header
        token={token}
        setUser={setUser}
        searchInput={searchInput}
        setsearchInput={setsearchInput}
        setSearch={setSearch}
      />

      <Switch>
        <Route exact path="/publish">
          {!token ? <Redirect to="/login" /> : <Publish token={token} />}
        </Route>
        <Route path="/items/:id">
          <Offer />
        </Route>
        <Route path="/paiment">
          {!token ? <Redirect to="/login" /> : <Paiment />}
        </Route>
        <Route path="/signup">
          <Signup setUser={setUser} />
        </Route>
        <Route path="/login">
          <Login setUser={setUser} />
        </Route>
        <Route path="/">
          <Home data={data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
