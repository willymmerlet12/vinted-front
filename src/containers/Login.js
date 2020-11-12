import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Se connecter</h1>
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

            setUser(response.data.token);
            history.push("/");
          }}
        >
          Se connecter
        </button>
        <Link to="/signup"> Pas encore de compte? inscris-toi!</Link>
      </form>
    </div>
  );
};

export default Login;
