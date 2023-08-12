import { Form } from "react-router-dom";
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function Contact() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phone, setPhone] = useState("");

  const history = useHistory();

  const handleCancelClick = () => {
    history.push("/");
  };

  return (
    <Form method="post" action="/events" className="form">
      <label htmlFor="name" className="label">
        Ім'я
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
        Прізвище
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
        Номер телефону
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

      <button type="submit" className="button">
        ЗБЕРЕГТИ
      </button>
      <button type="button" className="button" onClick={handleCancelClick}>
        СКАСУВАТИ
      </button>
    </Form>
  );
}
