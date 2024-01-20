import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function NewTodoPage() {
  return (
    <TodoForm
      label="Write your new TODO"
      submitText="Add"
      submitEvent={() => console.log("Create new TODO")}
    />
  );
}

export { NewTodoPage };
