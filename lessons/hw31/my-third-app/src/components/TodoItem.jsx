import React from "react";

export default function TodoItem({ todo, index }) {
  return (
    <li>
      <b>{index + 1}</b> {todo.title}
    </li>
  );
}
