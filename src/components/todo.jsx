"use client";

import { useState } from "react";
import TodoForm from "./todoForm";
import TodoItem from "./todoItem";

const todosDefault = [
  { text: "Learn about React", completed: false },
  { text: "Meet friend for lunch", completed: false },
  { text: "Build really cool todo app", completed: true },
];

const TodoComp = () => {
  const [todos, setTodos] = useState(todosDefault);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  return (
    <div className="todo-app">
      <h1>Tasks</h1>
      <TodoForm addTodo={addTodo} />
      <div>
        {todos.map((task, index) => (
          <TodoItem
            key={index}
            todo={task}
            index={index}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoComp;
