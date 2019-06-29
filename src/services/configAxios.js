import axios from "axios";

function configAxios(responseToken) {
  axios.defaults.baseURL = "https://alert-api.ornio.xyz";
  axios.defaults.headers.common["Authorization"] = `Bearer ${responseToken}`;
  axios.defaults.headers.post["Content-Type"] = "application/json";
}

module.exports = configAxios;
