import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  FlatList,
  StyleSheet,
  Modal,
  TouchableOpacity
} from "react-native";
import Fab from "../../components/button/Fab";
import Button from "../../components/button/Button";
import Input from "../../components/text-input/Input";
import Icon from "react-native-vector-icons/Entypo";
import ModalDropdown from "react-native-modal-dropdown";
import { Dropdown } from "react-native-material-dropdown";
import axios from "axios";
// const DropDown = require("react-native-dropdown");
// const { Select, Option, OptionList, updatePosition } = DropDown;

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      eventSelect: "",
      methodSelect: "",
      value: "",
      alertEvent: [],
      alertMethods: []
    };
  }

  componentDidMount() {
    this._getAllAlert();
    this._getAlertEvent();
    this._getAlertMethod();
  }

  static navigationOptions = {
    title: "PWDRESET",
    headerStyle: {
      backgroundColor: "#8b39e7"
    },
    headerLeft: null,
    headerTitleStyle: {
      color: "white",
      fontWeight: "bold",
      fontSize: 25
    },
    headerRight: (
      <View
        style={{
          backgroundColor: "white",
          width: 45,
          height: 45,
          borderRadius: 25,
          marginRight: 20,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontWeight: "500",
            color: "#8b39e7"
          }}
        >
          EV
        </Text>
      </View>
    )
  };

  _getAllAlert = () => {
    axios
      .get("/api/alerts")
      .then(res => {
        this.setState({ allAlert: res.data });
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  _getAlertEvent = () => {
    axios
      .get("/api/alert-events")
      .then(res => {
        this.setState({ alertEvent: res.data });
        console.log(this.state.alertEvent.map(x => x.name));
      })
      .catch(err => console.log(err));
  };

  _getAlertMethod = () => {
    axios
      .get("/api/alert-methods")
      .then(res => {
        this.setState({ alertMethods: res.data });
      })
      .catch(err => console.log(err));
  };

  _addNewAlert = () => {
    axios
      .post("/api/alerts", {
        alert_method_id: this.state.methodSelect,
        alert_event_id: this.state.eventSelect,
        value: this.state.value
      })
      .then(res => {
        console.log(res.data);
        this.setState({ modalVisible: false });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <View style={styles.content}>
        <StatusBar backgroundColor="#8b39e7" barStyle="light-content" />

        <FlatList
          data={this.state.allAlert}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between"
              }}
            >
              <Text>Value:</Text>
              <Text style={{ fontWeight: "bold" }}>{item.value}</Text>
              <Text>Methode:</Text>
              <Text style={{ fontWeight: "bold" }}>
                {item.alert_method.name}
              </Text>
              <Text>Event:</Text>
              <Text style={{ fontWeight: "bold" }}>
                {item.alert_event.name}
              </Text>
            </View>
          )}
        />

        <Fab onPress={() => this.setState({ modalVisible: true })} />

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => this.setState({ modalVisible: false })}
        >
          <View style={{ padding: 24 }}>
            <View style={styles.header}>
              <Text
                style={{
                  fontSize: 18,
                  color: "#26376f",
                  fontWeight: "bold"
                }}
              >
                Add new alert
              </Text>
              <TouchableOpacity
                onPress={() => this.setState({ modalVisible: false })}
              >
                <Icon name="plus" size={25} color="#d2d5dd" />
              </TouchableOpacity>
            </View>
            <View style={styles.body}>
              <ModalDropdown
                style={{
                  width: "100%",
                  borderColor: "#f1f1f1",
                  marginTop: 20,
                  borderRadius: 3,
                  padding: 10,
                  borderWidth: 1
                }}
                onSelect={x => this.setState({ eventSelect: x + 1 })}
                textStyle={{ fontSize: 18 }}
                dropdownTextStyle={{ fontSize: 18 }}
                options={this.state.alertEvent.map(x => x.name)}
              />
              <View>
                <ModalDropdown
                  style={{
                    width: "100%",
                    borderColor: "#f1f1f1",
                    borderRadius: 3,
                    padding: 10,
                    marginTop: 20,
                    borderWidth: 1
                  }}
                  onSelect={x => this.setState({ methodSelect: x + 1 })}
                  textStyle={{ fontSize: 18 }}
                  dropdownTextStyle={{ fontSize: 18 }}
                  options={this.state.alertMethods.map(x => x.name)}
                />
              </View>
              {/* <Dropdown
                label="Favorite Fruit"
                data={this.state.alertEvent.map(x => x.name)}
              /> */}
              <Input
                label="VALUE"
                placeholder="Enter value"
                onChangeText={value => this.setState({ value: value })}
                requred={true}
              />
            </View>
            <View style={styles.footer}>
              <Button
                value="CREATE ALERT"
                primary={true}
                onPress={this._addNewAlert}
              />
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    backgroundColor: "#f1f3f7",
    flex: 1
  },

  //modal

  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  body: {},
  footer: {}
});
