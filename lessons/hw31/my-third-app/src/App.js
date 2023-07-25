import React, { useState } from "react";
import TodoList from "./components/TodoList";
import Button from "./components/Button";

function App() {
  const initialTodos = [
    // { id: 1, completed: false, title: "Купити Хліба" },
    // { id: 2, completed: false, title: "Купити Масла" },
    // { id: 3, completed: false, title: "Купити Молока" },
  ];

  const [data, setData] = useState(initialTodos);
  const [inputValue, setInputValue] = useState("");

  const buttonClick = () => {
    if (inputValue.trim() === "") {
      return; // Якщо введений пустий рядок, нічого не робимо
    }

    const newTodo = {
      id: data.length + 1,
      completed: false,
      title: inputValue,
    };

    setData([...data, newTodo]);
    setInputValue(""); // Очищуємо поле вводу після додавання справи
  };

  return (
    <>
      <div className="wrapper">
        <h1>todo-list</h1>
        <TodoList todos={data} />
      </div>
      <div>
        <Button
          buttonClick={buttonClick}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
      </div>
    </>
  );
}

export default App;
