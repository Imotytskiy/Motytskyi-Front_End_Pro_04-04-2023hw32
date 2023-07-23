import { useState } from "react";
export const Product = ({ title, text }) => {
  const [counter, setCounter] = useState(0);
  const handlerClick = () => {
    setCounter(counter + 1);
  };
  return (
    <li className="product" onClick={handlerClick}>
      <h3 className="product-title">{title}</h3>
      <p className="product-text">{text}</p>
    </li>
  );
};
