import { createStackNavigator, createAppContainer } from "react-navigation";

import Auth from "../screens/Auth/Auth";
import SignupScreen from "../screens/Auth/SignupScreen";
import SigninScreen from "../screens/Auth/SigninScreen";
import HomeScreen from "../screens/Home/HomeScreen";

const AppStackNavigator = createStackNavigator(
  {
    Auth: Auth,

    Signin: {
      screen: SigninScreen,
      navigationOptions: {
        header: null
      }
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: HomeScreen
    }
  },
  {
    initialRouteName: "Auth"
  }
);

const StackNavigator = createAppContainer(AppStackNavigator);

export default StackNavigator;
