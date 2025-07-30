import React, { useState } from "react";
import "./TodoList.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");
  //   const [highlightedIndex, setHighlightedIndex] = useState(0); // start with first item

  //   const ulRef = useRef(null);

  //   const liRefs = useRef([]);

  const clearTodoList = () => {
    setTodos([]);
    // setHighlightedIndex(0);
  };

  //   const clearTodoList = () => setTodos([]);

  const handleAdd = () => {
    if (!input.trim()) return; // Prevent adding empty todos
    const newTodo = { id: Date.now(), text: input, completed: false }; // unique id + text
    console.log(newTodo);
    setTodos([...todos, newTodo]);
    setInput(""); // Clear the input after adding
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);
    console.log("Value Entered : ", value);
  };

  const handleKeyDown = (e) => {
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        handleAdd();
        break;

      default:
        break;
    }
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const moveUp = (index) => {
    //if we dont have index we can find it using id
    // const index = todos.findIndex((todo) => todo.id === id);

    console.log(index);
    if (index === 0) return; // Already at top

    // Swap the elements at positions index and index - 1
    const newTodos = [...todos];
    [newTodos[index - 1], newTodos[index]] = [
      newTodos[index],
      newTodos[index - 1],
    ];
    setTodos(newTodos);
  };

  const moveDown = (index) => {
    // const index = todos.findIndex((todo) => todo.id === id);
    // console.log(id);
    console.log(index);
    if (index === todos.length - 1) return; // Already at bottom

    const newTodos = [...todos];
    // Swap the elements at positions index and index + 1
    [newTodos[index + 1], newTodos[index]] = [
      newTodos[index],
      newTodos[index + 1],
    ];
    setTodos(newTodos);
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <input
        type="text"
        placeholder="Add to To-do List"
        className="input-text"
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="button" className="add-todo-button" onClick={handleAdd}>
        Add Todo
      </button>

      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={todo.id}>
            {/* for toggling completed */}
            <input
              type="checkbox"
              checked={todo.completed}
              className="toggle-input"
              onChange={() => handleToggle(todo.id)}
              aria-label={`Mark todo ${todo.text} as completed`}
            />

            <span
              className={todo.completed ? "completed" : ""}
              style={{ flex: 1 }}
            >
              {todo.text}
            </span>

            <div className="action-buttons">
              <div className="move-controls">
                <button
                  aria-label="Move up"
                  className="icon-button"
                  onClick={() => moveUp(index)}
                  disabled={index === 0}
                >
                  &#9650;
                </button>
                <button
                  aria-label="Move down"
                  className="icon-button"
                  onClick={() => moveDown(index)}
                  disabled={index === todos.length - 1}
                >
                  &#9660;
                </button>
              </div>

              <button
                aria-label="Delete todo"
                className="icon-button delete-button"
                onClick={() => handleDelete(todo.id)}
              >
                &#10006;
              </button>
            </div>
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <div className="todo-actions">
          <button
            onClick={clearTodoList}
            className="clear-all-button"
            disabled={todos.length === 0}
          >
            Clear All
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoList;
