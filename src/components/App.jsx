import { Fragment, useState, useEffect } from "react";
import { Header } from "./Header.jsx";
import { Form } from "./Form.jsx";
import { List } from "./List.jsx";
import { Footer } from "./Footer.jsx";
import "@fortawesome/fontawesome-free/css/all.css";
import "../styles/app.css";

function App() {
  const [allTodo, setAlltodo] = useState(() => {
    const savedTodos = localStorage.getItem("todoList");
    if (savedTodos) {
      return JSON.parse(savedTodos);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(allTodo));
  }, [allTodo]);

  return (
    <Fragment>
      <Header allTodo={allTodo} setAlltodo={setAlltodo} />
      <main>
        <Form allTodo={allTodo} setAlltodo={setAlltodo} />
        <List allTodo={allTodo} setAlltodo={setAlltodo} />
      </main>
      <Footer />
    </Fragment>
  );
}

export default App;
