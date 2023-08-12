import { Form } from "react-router-dom";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <Form method="post" action="/events" className="form">
      <label htmlFor="name" className="label">
        <p>Ім'я</p>
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
        <p> Номер телефону</p>
        <input
          type="text"
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
      <button type="button" className="button-denied">
        СКАСУВАТИ
      </button>
    </Form>
  );
}
