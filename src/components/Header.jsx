import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link to="/todos" className="navbar-brand fw-bold"> Todo Management </Link>
        <div>
          <Link to="/todos" className="btn btn-light me-2">Todo </Link>
          <Link to="/add-todo" className="btn btn-light"> Add Todo</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;