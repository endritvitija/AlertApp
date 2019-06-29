import React, { Component } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={this.props.onPress}
        style={[
          styles.button,
          { backgroundColor: this.props.primary ? "#8b39e7" : "#f2f5f8" }
        ]}
      >
        <Text
          style={[
            styles.text,
            { color: this.props.primary ? "#fff" : "#515f8c" }
          ]}
        >
          {this.props.value}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    marginTop: 15,
    width: "100%",
    padding: 20,
    // height: 46,
    borderRadius: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontFamily: "Poppins-Medium",
    fontSize: 13
  }
});
