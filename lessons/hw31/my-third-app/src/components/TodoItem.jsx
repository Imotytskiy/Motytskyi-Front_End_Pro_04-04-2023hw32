import React, { useState } from "react";

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
    marginRight: "1rem",
  },
  completed: {
    textDecoration: "line-through",
  },
  inputText: {
    textDecoration: "none",
  },
  inputTextCrossed: {
    textDecoration: "line-through",
    color: "gray", // Можете змінити колір на ваш розсуд
  },
};

export default function TodoItem({ todo, index }) {
  const [isChecked, setIsChecked] = useState(todo.completed);
  const handleClick = () => {
    console.log(todo.id, todo.completed);
    !todo.completed ? (todo.completed = true) : (todo.completed = false);
  };
  return (
    <li style={styles.li}>
      <label style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <input
          type="checkbox"
          style={styles.input}
          onClick={handleClick}
          id={`todo_${todo.id}`}
          defaultChecked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <b>{index + 1}. </b>
        <span style={isChecked ? styles.inputTextCrossed : styles.inputText}>
          {todo.title}
        </span>
      </label>
      <button className="rm">&times;</button>
    </li>
  );
}
