import logo from "../../assets/Logo.png"
import "./header.css";

export const Header = ({allTodo}) => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>TO DO LIST</h1> 
      </div>
      <div className="taskNote">
        <i className="fas fa-tasks"></i>
        <span>
          {allTodo.filter((todo) => { 
            return todo.check
          }).length} / {allTodo.length}
        </span>
      </div>
    </header>
  );
}