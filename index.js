/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";
import deviceStorage from "./src/services/deviceStorage";
import configAxios from "./src/services/configAxios";

deviceStorage.getJWT().then(res => {
  configAxios(res);
});

AppRegistry.registerComponent(appName, () => App);
