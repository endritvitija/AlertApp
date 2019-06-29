import React, { Component } from "react";
import { View, Text, StyleSheet, Image, StatusBar } from "react-native";
import Input from "../../components/text-input/Input";
import Button from "../../components/button/Button";
import axios from "axios";
import decodeJWT from "../../services/decodeJwt";
import configAxios from "../../services/configAxios";

export default class SigninScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showError: false,
      email: "mob@g.com",
      password: "1234"
    };
  }

  _onSignin = () => {
    axios
      .post("/api/auth/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        console.log(res.data.token);
        const jwtToken = res.data.token;
        decodeJWT(jwtToken);
        configAxios(jwtToken);
        const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: "Home" })]
        });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(error => {
        // Snackbar.show({
        //   title: "Email or password is incorrect!",
        //   duration: Snackbar.LENGTH_LONG
        // });

        console.log(error);
      });
  };

  render() {
    return (
      <View style={styles.content}>
        {/* <StatusBar backgroundColor="#ddd" barStyle="dark-content" /> */}
        <View style={{ marginTop: -250, padding: 0 }}>
          <Image
            style={styles.image}
            resizeMode="cover"
            opacity={0.5}
            source={require("../../assets/images/sigin-wallpaper.jpg")}
          />
        </View>
        <Text style={styles.signin}>Sign In</Text>
        <View style={styles.card}>
          <Input
            label="EMAIL"
            placeholder="Your email"
            onChangeText={email => this.setState({ name: email })}
            requred={true}
            errorShow={this.state.showError}
            errorMessage="Email is requred!"
          />
          <Input
            label="PASSWORD"
            placeholder="Your password"
            onChangeText={password => this.setState({ name: password })}
            requred={true}
            errorShow={this.state.showError}
            errorMessage="Email is requred!"
          />

          <Button value="SIGN IN" primary={true} onPress={this._onSignin} />
          <Button
            value="Create new account"
            primary={false}
            onPress={() => this.props.navigation.navigate("Signup")}
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
  signin: {
    position: "absolute",
    top: 100,
    left: 50,
    fontSize: 20,
    color: "#fff",
    fontFamily: "Merriweather-Bold"
  }
});
