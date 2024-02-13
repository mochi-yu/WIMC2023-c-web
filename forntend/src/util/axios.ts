import axios from "axios";

const instance = axios.create({
  baseURL: "https://fho0ipnas7.execute-api.ap-northeast-1.amazonaws.com",
});

export default instance;
