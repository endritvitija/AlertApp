import React, { Component } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

export default class Fab extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.fab}
        activeOpacity={0.6}
        onPress={this.props.onPress}
      >
        <Icon name="plus" size={35} color="white" />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  fab: {
    position: "absolute",
    bottom: 24,
    right: 24,
    width: 66,
    height: 66,
    borderRadius: 33,
    backgroundColor: "#2fe8ae",
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4
  }
});
