import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

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
      <div className="signup-container">
        <h2>S'inscrire</h2>
        <form onSubmit={handleSubmit} className="signup-form">
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
          <div className="checkbox-container">
            <input type="checkbox" />
            <span>S'inscrire à notre newsletter</span>
            <p>
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </p>
          </div>
          <button
            className="but-signup"
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
        <Link to="/login"> Tu as déjà un compte? Connecte-toi!</Link>
      </div>
    </div>
  );
};

export default Signup;
