import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Scanner from './../../components/qrscannner';
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";

export default class RecoveryPhrase2 extends React.Component {
  state = {
    isModalVisible: false,
    modalText: "",
    path: "",
  };

  toggleModal = () => {
    this.setState({
      isModalVisible: !this.state.isModalVisible,
      // modalText:value,
      // path:path
    });
  };
  nextScreen = () => {
    this.toggleModal();
    this.props.navigation.navigate("password");
  };
  render() {
    return (
      <View style={styles._Container}>
        <ScrollView>
          <View style={styles.recoveryIcon}>
            <Ionicons
              name="ios-save"
              size={24}
              color="white"
              style={{ alignSelf: "center" }}
            />
          </View>
          <View style={styles.view2}>
            <Text style={styles.phraseText2}>
              Please enter your recovery phrase:
            </Text>
            <View style={styles._inputView}>
              <TextInput
                style={styles.input1}
                style={{
                  height: 30,
                  borderColor: "gray",
                  borderWidth: 1.5,
                  borderLeftWidth: 0,
                  borderTopWidth: 0,
                  borderRightWidth: 0,
                  width: "84%",
                  // alignSelf:'center'
                }}
              />
              <View style={styles._qrCode}>
                <AntDesign name="qrcode" size={24} color="black" />
              </View>
            </View>
          </View>
          {/* <Scanner /> */}

          <View style={styles._bottom_row}>
            <TouchableOpacity onPress={() => this.toggleModal()}>
              <Text style={styles.text3}>SKIP</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.text4}>
              <Text style={styles._btnText}>NEXT</Text>
            </TouchableOpacity>
          </View>
          <Modal isVisible={this.state.isModalVisible}>
            <View style={styles._modalView}>
              <Text style={styles._modalHeading}>Skipping verification</Text>
              <Text style={styles._modalText}>
                Please make sure that your recovery phrase mathces the
                following:
              </Text>
              <Text style={styles._modalText}>
                dragon fuel plug bicycle rough bullet math find enternal pink
                wolf pilot home drama base then gravity vicious
              </Text>
              <Text style={styles._modalText}>
                It is recommended not t skip verification, so that any
                misspellings could be detected.
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
                  <Text>SKIP</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _Container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  recoveryIcon: {
    marginTop: 60,
    backgroundColor: "#347AF0",
    padding: 15,
    borderRadius: 50,
    width: "15%",
    alignSelf: "center",
  },
  _bottom_row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 280,
  },
  _inputView: {
    flexDirection: "row",
  },
  _qrCode:{
    marginLeft:"4%",
   backgroundColor:"#c2c2c2",
   padding:"1%"
  },
  _btnText: {
    color: "white",
    textAlign: "center",
    padding: 6,
    backgroundColor: "#347AF0",
    borderRadius: 50,
    width: 80,
    height: 33,
  },
  view2: {
    marginTop: 240,
    marginLeft: "5%",
  },
  phraseText2: {
    fontSize: 19,
    color: "grey",
  },
  _modalView: {
    padding: 20,
    backgroundColor: "white",
  },
  _buttonsView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  _modalHeading: {
    fontSize: 22,
  },
  _modalText: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "left",
  },
  _cancelBtn: {
    marginRight: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
});
