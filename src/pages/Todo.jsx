import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteTodoAPI, getAllTodosAPI } from "../services/allAPI";

function Todo() {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
        const response = await getAllTodosAPI();
        setTodos(response.data);
    };
    const deleteTodo = async (id) => {
        const confirmDelete = confirm("Are you sure you want to delete this todo?");
        if (confirmDelete) {
            await deleteTodoAPI(id);
            getTodos();
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4"> Todo Management</h2>
            {todos.map((todo) => (
                <div className="card mb-3" key={todo.id}>
                    <div className="card-body d-flex justify-content-between align-items-center">
                        <div>
                            <h5 className="mb-2">{todo.title}</h5>
                            <p className="mb-0">Status:{" "}<span className={ todo.status == "Completed"? "badge bg-success" : "badge bg-warning text-dark" }> {todo.status} </span> </p>
                        </div>
                        <div>
                            <Link to={`/edit-todo/${todo.id}`}><button className="btn btn-dark me-2">Edit </button></Link>
                            <button onClick={() => deleteTodo(todo.id)} className="btn btn-dark"> Delete </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Todo;