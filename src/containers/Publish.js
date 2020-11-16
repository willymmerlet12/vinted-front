import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Publish = ({ token }) => {
  let history = useHistory();
  const [file, setFile] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const formData = new FormData();
  formData.append("title", title);
  formData.append("picture", file);
  formData.append("description", description);
  formData.append("brand", brand);
  formData.append("size", size);
  formData.append("color", color);
  formData.append("condition", condition);
  formData.append("city", city);
  formData.append("price", Number(price));

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();

      if (
        title &&
        price &&
        file &&
        description &&
        brand &&
        size &&
        color &&
        condition &&
        city
      ) {
        const response = await axios.post(
          "https://vinted-will.herokuapp.com/offer/publish",
          formData,
          {
            headers: {
              authorization: "Bearer " + token,
            },
          }
        );
        console.log(response.data);
        history.push("/");
      } else {
        alert("missig informations!!");
      }
    } catch (error) {
      console.log(error.response);
    }
  };
  return (
    <div className="publish-main">
      <div className="publish-container">
        <form onSubmit={handleSubmit} className="form-pub">
          <h2>Vend ton article</h2>
          <div className="file-select">
            <div className="dashed-preview-without">
              <div className="input-design-default">
                <label for="file" className="label-file">
                  <span className="input-sign">+</span>
                  <span>Ajoute une photo</span>
                </label>
                <input
                  id="file"
                  type="file"
                  className="input-file"
                  onChange={(event) => {
                    setFile(event.target.files[0]);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="text-input">
            <div className="text-input1">
              <h4>Titre</h4>
              <input
                type="text"
                name="title"
                value={title}
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
                placeholder="ex: Chemise Sézane verte"
              />
            </div>
            <div className="text-input1">
              <h4>Décris ton article</h4>
              <textarea
                name="description"
                cols="30"
                rows="10"
                placeholder="ex: Porté quelque fois, taille correctement"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></textarea>
            </div>
          </div>
          <div className="text-input">
            <div className="text-input1">
              <h4>Marque</h4>
              <input
                type="text"
                name="brand"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
                placeholder="ex: Zara"
              />
            </div>
            <div className="text-input1">
              <h4>Taille</h4>
              <input
                type="text"
                name="size"
                value={size}
                onChange={(event) => {
                  setSize(event.target.value);
                }}
                placeholder="ex: L / 40 / 12"
              />
            </div>
            <div className="text-input1">
              <h4>Couleur</h4>
              <input
                type="text"
                name="color"
                value={color}
                onChange={(event) => {
                  setColor(event.target.value);
                }}
                placeholder="ex: Fushia"
              />
            </div>
            <div className="text-input1">
              <h4>État</h4>
              <input
                type="text"
                name="condition"
                value={condition}
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
                placeholder="ex: Neuf avec étiquette"
              />
            </div>
            <div className="text-input1">
              <h4>Lieu</h4>
              <input
                type="text"
                name="city"
                value={city}
                onChange={(event) => {
                  setCity(event.target.value);
                }}
                placeholder="ex: Paris"
              />
            </div>
          </div>
          <div className="text-input">
            <div className="text-input1">
              <h4>Price</h4>
              <div className="checkbox-section">
                <input
                  type="text"
                  name="price"
                  value={price}
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  placeholder="ex: 0,00 €"
                />
                <div className="checkbox-input">
                  <label for="exchange" className="checkbox-design">
                    <input
                      name="exchange"
                      type="checkbox"
                      id="exchange"
                      value="exchange"
                    />
                    <span>Je suis intéressé(e) par les échanges</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="form-button-div">
            <button type="submit" className="form-validation">
              Ajouter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Publish;
