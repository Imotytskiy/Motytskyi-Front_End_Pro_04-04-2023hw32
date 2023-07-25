import React from "react";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space between",
    alignItems: "center",
    padding: ".5rem 1rem",
    border: "2px solid blue",
    borderRadius: "5px",
    marginBottom: ".5rem",
  },
  input: {
    marginRight,
  },
};

export default function TodoItem({ todo, index }) {
  return (
    <li>
      <span>
        <input type="checkbox" style={styles.input} />
        <b>{index + 1}. </b>
        {todo.title}
      </span>
      <button className="rm">&times;</button>
    </li>
  );
}
