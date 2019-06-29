import deviceStorage from "./deviceStorage";
const jwtDecode = require("jwt-decode");

function decodeJWT(token) {
  const decoded = jwtDecode(token);
  deviceStorage.saveItem("auth_token", token);
  deviceStorage.saveItem("auth_id", decoded.sub);
}
module.exports = decodeJWT;
