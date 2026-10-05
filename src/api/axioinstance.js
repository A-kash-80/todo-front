import axios from "axios";

const commonAPI = axios.create({
  baseURL: "https://exam-server-1-ving.onrender.com/"
});

export default commonAPI;