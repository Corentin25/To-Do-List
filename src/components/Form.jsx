import { useState } from "react";

export const Form = ({ allTodo, setAlltodo }) => {
  const [todo, setTodo] = useState("");

  const addTodo = (e) => {
    e.preventDefault();
    setAlltodo([...allTodo, { check: false, description: todo }]);
    setTodo("");
  };

  return (
    <form onSubmit={addTodo}>
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
        placeholder="Ajouter une nouvelle tâche"
        required
      />
      <button>Ajouter</button>
    </form>
  );
};
