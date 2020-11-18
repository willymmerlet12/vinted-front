import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory, useLocation } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const location = useLocation();

  const fromPublish = location.state?.fromPublish ? true : false;

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <div className="signup-container">
        <form onSubmit={handleSubmit} className="signup-form">
          <h2>Se connecter</h2>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            placeholder="Mot de passe"
          />
          <button
            type="submit"
            onClick={async () => {
              const response = await axios.post(
                "https://vinted-will.herokuapp.com/user/login",
                {
                  email: email,
                  password: password,
                }
              );
              if (response.data.token) {
                setUser(response.data.token);
                history.push(fromPublish ? "/publish" : "/");
              } else {
                alert("Une erreur est survenue");
              }
            }}
          >
            Se connecter
          </button>
          <Link to="/signup"> Pas encore de compte? inscris-toi!</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
