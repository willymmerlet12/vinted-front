import React, { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState();

  const formData = new FormData();
  formData.append("username", username);
  //formData.append("file", avatar);
  formData.append("email", email);
  formData.append("password", password);

  const history = useHistory();

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      if (username && email && password) {
        const response = await axios.post(
          "https://vinted-will.herokuapp.com/user/signup",
          formData
        );
        console.log(response.data);
        setUser(response.data.token);
        history.push("/");
      } else {
        alert("missing informations!");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="signup-container">
            <form onSubmit={handleSubmit} className="signup-form">
              <h2>S'inscrire</h2>

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
                  Conditions et Politique de Confidentialité de Vinted. Je
                  confirme avoir au moins 18 ans.
                </p>
              </div>
              <button className="but-signup" type="submit">
                S'inscrire
              </button>
            </form>
            <Link to="/login"> Tu as déjà un compte? Connecte-toi!</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
