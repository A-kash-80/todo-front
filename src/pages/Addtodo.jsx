import React, { useState } from "react";
import { addTodoAPI } from "../services/allAPI";

function Addtodo() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Pending");
  const addTodo = async (e) => {
    e.preventDefault();
    const reqBody = {
      title: title,
      status: status
    };

    await addTodoAPI(reqBody);
    setTitle("");
    setStatus("Pending");
    alert(" added successfully");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow">
            <div className="card-body">
              <h2 className="text-center mb-4">Add Todo </h2>
              <form onSubmit={addTodo}>
                <div className="mb-3">
                  <label className="form-label">Todo Title</label>
                  <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="enter todo" />
                </div>
                <div className="mb-3">
          <label className="form-label"> status</label>
                  <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Pending">pending</option>
                    <option value="Completed">completed</option>
                  </select>
                </div>
                <button type="submit" className="btn btn-primary w-100" > Add Todo</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;