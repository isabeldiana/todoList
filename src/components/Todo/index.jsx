/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">({todo.category})</p>
      </div>
      <div className="buttons">
        <button className="complete" onClick={() => completeTodo(todo.id)}>
          <FaCheck />
        </button>
        <button className="remove" onClick={() => removeTodo(todo.id)}>
          <FaTrashCan />
        </button>
      </div>
    </div>
  );
};

export default Todo;
