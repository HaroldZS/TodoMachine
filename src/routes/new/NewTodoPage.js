import React from "react";
import { TodoForm } from "../../ui/TodoForm";
import { useTodos } from "../useTodos";

function NewTodoPage() {
  const { addTodo } = useTodos();

  return (
    <TodoForm
      label="Write your new TODO"
      submitText="Add"
      submitEvent={(text) => addTodo(text)}
    />
  );
}

export { NewTodoPage };
