import AsyncStorage from "@react-native-community/async-storage";

const deviceStorage = {
  async getItem(key) {
    try {
      let value = await AsyncStorage.getItem(key);
      return value;
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async saveItem(key, value) {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async getJWT() {
    try {
      const value = await AsyncStorage.getItem("auth_token");
      return value;
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async getUserId() {
    try {
      const value = await AsyncStorage.getItem("auth_id");
      return value;
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async deleteItem(key) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  },
  async deleteJWT() {
    try {
      await AsyncStorage.removeItem("auth_token");
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  }
};

export default deviceStorage;
