import { Component } from "react";
import deviceStorage from "../../services/deviceStorage";
import { NavigationActions, StackActions } from "react-navigation";

export default class Auth extends Component {
  constructor(props) {
    super(props);
  }

  _startNavigation = route => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({ routeName: route })]
    });
    this.props.navigation.dispatch(resetAction);
  };

  componentDidMount() {
    deviceStorage.getJWT().then(token => {
      if (token === null) this._startNavigation("Signup");
      else this._startNavigation("Home");
    });
  }

  render() {
    return null;
  }
}
