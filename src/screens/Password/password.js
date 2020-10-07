import React from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";

import styles from "./style";

export default class Password extends React.Component {
  state = {
    isModalVisible: false,
    modalText: "",
    path: "",
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
    });
  };
  nextScreen = () => {
    this.toggleModal();
    this.props.navigation.navigate("home");
  };
  render() {
    return (
      <View style={styles._container}>
        <View style={styles._keyView}>
          <Entypo name="key" size={24} color="white" />
        </View>
        <ScrollView>
          <Text style={styles._passwordHeading}>
            Set a password to protect your wallet in everybody use.
          </Text>
          <View style={styles._inputView}>
            <Text style={styles._inputTitle}>Type your password</Text>
            <TextInput style={styles._input} />
            <Text style={styles._inputTitle}>Re-type your password</Text>
            <TextInput style={styles._input} />
          </View>
          <View style={styles._footer}>
            <TouchableOpacity onPress={() => this.toggleModal()}>
              <Text>SKIP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles._nextBtn}>
              <Text style={{ color: "white", textAlign: "center" }}>NEXT</Text>
            </TouchableOpacity>
          </View>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles._modalView}>
              <Text style={styles._modalText}>
                By not setting a password your wallet can be accessed without
                authorization
              </Text>
              <View style={styles._buttonsView}>
                <TouchableOpacity
                  onPress={() => this.toggleModal()}
                  style={styles._cancelBtn}
                >
                  <Text>CANCEL</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles._cancelBtn}
                  onPress={() => this.nextScreen()}
                >
                  <Text>OK</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}
