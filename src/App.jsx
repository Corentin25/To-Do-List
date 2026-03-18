import { Fragment, useState, useEffect } from "react";
import { Header } from "./components/Header/Header.jsx";
import { Form } from "./components/Form/Form.jsx";
import { List } from "./components/List/List.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import "@fortawesome/fontawesome-free/css/all.css";
import "./index.css";

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
