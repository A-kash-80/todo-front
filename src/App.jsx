import React from "react";
import { Routes, Route } from "react-router-dom";
import Todo from "./pages/Todo";
import Addtodo from "./pages/Addtodo";
import Edittodo from "./pages/Edittodo";
import Header from "./components/Header";

function App() {
  return (

<>
    <Header/>
      <Routes>
        <Route path="/todos" element={<Todo/>} />
        <Route path="/add-todo" element={<Addtodo />} />
        <Route path="/edit-todo/:id" element={<Edittodo />} />
      </Routes>
</>
  )
}

export default App;