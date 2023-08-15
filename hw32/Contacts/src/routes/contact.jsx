import { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants";

export default function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const unique_id = uuid();
    const newContact = {
      id: unique_id.slice(0, 8),
      name: name,
      username: surname,
      phone: phone,
    };
    console.log("TEST", newContact);

    const existingContacts =
      JSON.parse(sessionStorage.getItem("contacts")) || [];
    existingContacts.push(newContact);
    sessionStorage.setItem("contacts", JSON.stringify(existingContacts));

    setName("");
    setSurname("");
    setPhone("");
    window.location.href = "/";
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <label htmlFor="name" className="label">
        <p> Ім'я </p>
        <input
          type="text"
          name="title"
          id="name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={name ? "input-lightgreen" : ""}
        />
      </label>

      <label htmlFor="surname" className="label">
        <p>Прізвище</p>
        <input
          type="text"
          name="description"
          id="surname"
          required
          value={surname}
          onChange={(e) => setSurname(e.target.value)}
          className={surname ? "input-lightgreen" : ""}
        />
      </label>

      <label htmlFor="phone" className="label">
        <p>Номер телефону</p>
        <input
          type="number"
          name="phone"
          id="phone"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className={phone ? "input-lightgreen" : ""}
        />
      </label>

      <button type="submit" className="button-save">
        ЗБЕРЕГТИ
      </button>

      <Link className="button-denied" to={ROUTES.root}>
        СКАСУВАТИ
      </Link>
    </form>
  );
}
