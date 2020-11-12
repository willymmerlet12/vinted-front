import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>S'inscrire</h1>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
          placeholder="Nom d'utilisateur"
        />
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
        <div>
          <button></button>
          <span>S'inscrire à notre newsletter</span>
          <p>En m'inscrivant....</p>
        </div>
        <button
          type="submit"
          onClick={async () => {
            const response = await axios.post(
              "https://vinted-will.herokuapp.com/user/signup",
              {
                username: username,
                email: email,
                password: password,
              }
            );

            setUser(response.data.token);
            history.push("/");
          }}
        >
          S'inscrire
        </button>
      </form>
    </div>
  );
};

export default Signup;
