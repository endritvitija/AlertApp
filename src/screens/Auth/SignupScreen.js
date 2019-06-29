import React, { Component } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import Button from "../../components/button/Button";
import Input from "../../components/text-input/Input";
import axios from "axios";

export default class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false,
      name: "",
      email: "",
      password: "",
      confPassword: "",
      isPassMatch: true
    };
  }

  _onSignup = () => {
    // console.log(this.state);
    if (this.state.password === this.state.confPassword) {
      console.log("no");
      axios
        .post("/api/users", {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password
        })
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    } else this.setState({ isPassMatch: false });
  };

  render() {
    // const { navigate } = navigation;
    return (
      <View style={styles.content}>
        <StatusBar backgroundColor="#ddd" barStyle="dark-content" />
        <View style={{ marginTop: -150, padding: 0 }}>
          <Image
            style={styles.image}
            resizeMode="cover"
            opacity={0.5}
            source={require("../../assets/images/signup-wallpaper.jpg")}
          />
        </View>

        <Text style={styles.signun}>Sign Up</Text>

        <View style={styles.card}>
          <Input
            label="NAME"
            placeholder="Your name"
            onChangeText={name => this.setState({ name: name })}
            requred={true}
            errorShow={this.state.showError}
            errorMessage="Email is requred!"
          />
          <Input
            label="EMAIL"
            placeholder="Your email"
            onChangeText={email => this.setState({ email: email })}
            requred={true}
            errorShow={this.state.showError}
            errorMessage="Email is requred!"
          />
          <Input
            label="PASSWORD"
            placeholder="Your password"
            onChangeText={password => this.setState({ password: password })}
            requred={true}
            errorShow={this.state.showError}
            errorMessage="Email is requred!"
          />
          <Input
            label="PASSWORD CONFIRMATION"
            placeholder="Confirm your password"
            onChangeText={confPassword =>
              this.setState({ confPassword: confPassword })
            }
            requred={true}
            errorShow={this.state.showError}
            errorMessage="Email is requred!"
          />
          {this.state.isPassMatch ? null : (
            <Text style={{ color: "red" }}>
              Password and confirm password does not match.
            </Text>
          )}

          <Button value="SIGN UP" primary={true} onPress={this._onSignup} />
          <Button
            value="Already have an account? Log in"
            primary={false}
            onPress={() => this.props.navigation.navigate("Signin")}
          />
        </View>
        <Text
          style={{
            position: "absolute",
            bottom: 20,
            fontSize: 25,
            color: "#687399",
            fontWeight: "bold"
          }}
        >
          PWD
          <Text style={{ fontWeight: "400" }}>RESET</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    paddingTop: 0,
    marginTop: 0,
    backgroundColor: "#f1f3f7"
  },
  card: {
    backgroundColor: "#fff",
    padding: 24,
    marginTop: -50,
    borderRadius: 3,
    width: "100%"
  },
  image: {
    // width: "100%",
    width: 500,

    height: 270
  },
  signun: {
    position: "absolute",
    top: 100,
    left: 50,
    fontSize: 20,
    color: "#fff",
    fontFamily: "Merriweather-Bold"
  }
});
