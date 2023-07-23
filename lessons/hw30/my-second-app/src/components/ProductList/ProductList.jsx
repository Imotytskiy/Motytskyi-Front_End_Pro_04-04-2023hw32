import { Product } from "../Product";
const DATA = [
  {
    id: "er",
    title: "😁",
    text: "0",
  },
];

export const ProductList = () => {
  return (
    <ul className="product-list">
      {DATA.map(({ title, text, id }) => (
        <Product key={id} title={title} text={text} />
      ))}
    </ul>
  );
};
