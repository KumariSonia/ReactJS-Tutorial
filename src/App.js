import './App.css';

import Header from './components/Header';
import Todos from './components/Todos';
import Footer from './components/Footer'
import { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import NoPage from './components/NoPage'
import MyTodoList from './components/MyTodoList';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const [todos, setTodos] = useState(initTodo)
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, description) => {
    let todoId = (todos.length === 0) ? 1 : todos[todos.length - 1].id + 1
    const myTodo = {
      id: todoId,
      title: title,
      description: description
    }
    setTodos([...todos, myTodo])
  }
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header title={"My Todos List"} aboutText="About" home="Home" searchBar={true} />}>
            <Route index element={<MyTodoList addTodo={addTodo} todos={todos} onDelete={onDelete} />} />
            <Route path="Home" element={<Home />} />
            <Route path="About" element={<About />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
