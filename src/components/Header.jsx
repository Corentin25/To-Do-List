import logo from "../assets/logo.png"

export const Header = ({allTodo}) => {
  return (
    <header>
      <img src={logo} alt="Logo" />
      <h1>TO DO LIST</h1>
      <div>
        <i className="fas fa-tasks"></i>
        <span>{allTodo.filter((todo) => { return todo.check}).length} / {allTodo.length}</span>
      </div>
    </header>
  );
}