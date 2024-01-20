import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";
import { useLocation, useParams } from "react-router-dom";

function EditTodoPage() {
  const location = useLocation();
  const { id } = useParams();

  const { loading, getTodo, editTodo } = useTodos();

  let todoText;
  if (location.state?.todo) {
    todoText = location.state.todo.text;
  } else if (loading) {
    return <p>Loading...</p>;
  } else {
    todoText = getTodo(id).text;
  }

  return (
    <TodoForm
      label="Edit your TODO"
      defaultTodoText={todoText}
      submitText="Edit"
      submitEvent={(newText) => editTodo(id, newText)}
    />
  );
}

export { EditTodoPage };
