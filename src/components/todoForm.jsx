import { useState } from "react";

import style from "./todoForm.module.css";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task.trim()) return;
    addTodo?.(task);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className={style.TodoForm}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoForm;
