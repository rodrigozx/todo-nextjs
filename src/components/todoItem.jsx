import style from "./todoItem.module.css";

const TodoItem = ({ todo, index, removeTodo, toggleTodo }) => {
  return (
    <div className={style.TodoItem}>
      <span
        className={
          todo.completed ? style.TodoItemTextCompleted : style.TodoItemText
        }
      >
        {todo.text}
      </span>
      <span className={style.TodoItemButtons}>
        <button onClick={() => toggleTodo(index)}>
          {todo.completed ? "✅" : "🆕"}
        </button>
        <button onClick={() => removeTodo(index)}>❌</button>
      </span>
    </div>
  );
};

export default TodoItem;
