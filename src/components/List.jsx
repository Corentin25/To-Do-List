export const List = ({ allTodo, setAlltodo }) => {
  const checked = (index) => {
    const newTodoAdded = [...allTodo];
    newTodoAdded[index].check = !newTodoAdded[index].check;
    setAlltodo(newTodoAdded);
  };

  const deleteTodo = (index) => {
    const newTodoAdded = [...allTodo];
    newTodoAdded.splice(index, 1);
    setAlltodo(newTodoAdded);
  };

  return (
    <ul>
      {allTodo.map((todo, index) => {
        return (
          <li key={index} className={todo.check ? "done" : null}>
            <i
              className={
                "far fa-2x " + (todo.check ? "fa-check-square" : "fa-square")
              }
              onClick={() => {
                checked(index);
              }}
            ></i>
            <span>{todo.description}</span>
            <button
              onClick={() => {
                deleteTodo(index);
              }}
            >
              <i className="fas fa-trash fa-2x"></i>
            </button>
          </li>
        );
      })}
    </ul>
  );
};
