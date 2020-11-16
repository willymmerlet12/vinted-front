import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

const Publish = () => {
  let history = useHistory();
  const token = Cookies.get("userToken");
  const [file, setFile] = useState();
  const [title, setTitle] = useState();

  const formData = new FormData();
  formData.append("title", title);
  formData.append("picture", file);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "https://vinted-will.herokuapp.com/offer/publish",
      formData
    );
  };
  return token ? (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={(event) => {
            setFile(event.target.files[0]);
          }}
        />
        <br />
        <input type="text" />
      </form>
    </div>
  ) : (
    history.push("/login")
  );
};

export default Publish;
