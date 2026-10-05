import commonAPI from "../api/axioinstance";

export const getAllTodosAPI = async () => {
  return await commonAPI.get("/todos");
};

export const addTodoAPI = async (reqBody) => {
  return await commonAPI.post("/todos", reqBody);
};

export const getTodoByIdAPI = async (id) => {
  return await commonAPI.get(`/todos/${id}`);
};

export const updateTodoAPI = async (id, reqBody) => {
  return await commonAPI.put(`/todos/${id}`, reqBody);
};

export const deleteTodoAPI = async (id) => {
  return await commonAPI.delete(`/todos/${id}`);
};