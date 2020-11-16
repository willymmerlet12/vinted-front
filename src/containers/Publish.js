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
  formData.append("price", price);

  const handleSubmit = async (event) => {
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
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="form-pub">
        <h2>Vend ton article</h2>
        <section>
          <input
            type="file"
            onChange={(event) => {
              setFile(event.target.files[0]);
            }}
          />
        </section>

        <section>
          <div>
            <h4>Titre</h4>
            <input
              type="text"
              name="title"
              value={title}
              placeholder="ex: Chemise verte"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          <div>
            <h4>Décris ton article</h4>
            <input
              type="description"
              cols="30"
              rows="10"
              value={description}
              placeholder="ex: Porté quelque fois, taille correct"
              onChange={(event) => {
                setDescription(event.target.value);
              }}
            />
          </div>
        </section>
        <section>
          <div>
            <h4>Marque</h4>
            <input
              type="text"
              name="brand"
              value={brand}
              placeholder="ex: Raf Simmons"
              onChange={(event) => {
                setBrand(event.target.value);
              }}
            />
          </div>
          <div>
            <h4>Taille</h4>
            <input
              type="text"
              name="size"
              value={size}
              placeholder="ex: S / 43 / M"
              onChange={(event) => {
                setSize(event.target.value);
              }}
            />
          </div>
          <div>
            <h4>Couleur</h4>
            <input
              type="text"
              name="couleur"
              value={color}
              placeholder="ex: green"
              onChange={(event) => {
                setColor(event.target.value);
              }}
            />
          </div>
          <div>
            <h4>État</h4>
            <input
              type="text"
              name="condition"
              value={condition}
              placeholder="ex: Neuf"
              onChange={(event) => {
                setCondition(event.target.value);
              }}
            />
          </div>
          <div>
            <h4>Lieu</h4>
            <input
              type="text"
              name="city"
              value={city}
              placeholder="ex: Paris"
              onChange={(event) => {
                setCity(event.target.value);
              }}
            />
          </div>
        </section>
        <section>
          <div>
            <h4>Price</h4>
            <div>
              <input
                type="text"
                name="price"
                value={price}
                placeholder="ex: 20.99 €"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
              <br />
              <label htmlFor="checkbox">
                <input name="checkbox" type="checkbox" /> Je suis intéressé(e)
                par les échanges
              </label>
            </div>
          </div>
        </section>
        <button type="submit" text="Ajouter">
          Ajouter
        </button>
      </form>
    </div>
  );
};

export default Publish;
