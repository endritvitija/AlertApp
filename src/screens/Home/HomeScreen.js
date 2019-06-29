import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    title: "PWDRESET",
    headerLeft: null,
    headerTitleStyle: {
      fontWeight: "bold",
      fontSize: 30
    },
    headerRight: ""
  };

  render() {
    return (
      <View>
        <Text> HomeScreen </Text>
      </View>
    );
  }
}
