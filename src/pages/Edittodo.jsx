import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTodoByIdAPI, updateTodoAPI } from "../services/allAPI";

function Edittodo() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  const getTodo = async () => {
    const response = await getTodoByIdAPI(id);
    setTitle(response.data.title);
    setStatus(response.data.status);
  };

  useEffect(() => {
    getTodo();
  }, [id]);

  const updateTodo = async (e) => {
    e.preventDefault();
    const reqBody = {
      title: title,
      status: status
    };
    await updateTodoAPI(id, reqBody);
    alert("updated successfully");
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
         <div className="card shadow">
        <div className="card-body">
             <h2 className="text-center mb-4">Edit Todo</h2>
              <form onSubmit={updateTodo}>
                <div className="mb-3">
                  <label className="form-label"> Todo Title</label>
              <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-3">
               <label className="form-label"> status</label>
                  <select className="form-select" value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Pending">pending</option>
                    <option value="Completed">completed</option>
                  </select>
                </div>
                <button  type="submit" className="btn btn-dark w-100" > update </button>
              </form>
         </div>
         </div>
         </div>
       </div>
    </div>
  );
}

export default Edittodo;