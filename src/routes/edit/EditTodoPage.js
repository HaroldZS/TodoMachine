import React from "react";
import { TodoForm } from "../../ui/TodoForm";

function EditTodoPage() {
  return (
    <TodoForm
      label="Edit your TODO"
      submitText="Edit"
      submitEvent={() => console.log("Edit TODO")}
    />
  );
}

export { EditTodoPage };
