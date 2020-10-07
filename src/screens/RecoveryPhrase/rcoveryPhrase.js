import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  CheckBox,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
export default class RecoveryPhrase extends React.Component {
  constructor() {
    super();
    this.state = {
      recoveryPhrase: [
        "genral maximum episode earth shaft dose brand thing ecology six fancy melody venture awful adjust april velvet problem height delay mosquito beauty dizzy run",
        "spoil resources beef crash badge unware six violin romance barain plate loyal body glance pepper tube pupil join alter giraffe perfect model volume wise",
        "genral maximum episode earth shaft dose brand thing ecology six fancy melody venture awful adjust april velvet problem height delay mosquito beauty dizzy run",
        "spoil resources beef crash badge unware six violin romance barain plate loyal body glance pepper tube pupil join alter giraffe perfect model volume wise",
        "genral maximum episode earth shaft dose brand thing ecology six fancy melody venture awful adjust april velvet problem height delay mosquito beauty dizzy run",
        "spoil resources beef crash badge unware six violin romance barain plate loyal body glance pepper tube pupil join alter giraffe perfect model volume wise",
        "genral maximum episode earth shaft dose brand thing ecology six fancy melody venture awful adjust april velvet problem height delay mosquito beauty dizzy run",
        "spoil resources beef crash badge unware six violin romance barain plate loyal body glance pepper tube pupil join alter giraffe perfect model volume wise",
        "genral maximum episode earth shaft dose brand thing ecology six fancy melody venture awful adjust april velvet problem height delay mosquito beauty dizzy run",
        "spoil resources beef crash badge unware six violin romance barain plate loyal body glance pepper tube pupil join alter giraffe perfect model volume wise",
        "genral maximum episode earth shaft dose brand thing ecology six fancy melody venture awful adjust april velvet problem height delay mosquito beauty dizzy run",
      ],
      number: 0,
      value: "",
    };
  }
  changeRecoveryPhrase = () => {
    var x = Math.floor(Math.random() * 10 + 1);
    //   alert(x)
    this.setState({ number: x });
  };
  render() {
    let { isSelected } = this.state;
    return (
      <View style={styles._Container}>
        {/* <ScrollView> */}
          <View style={styles.recoveryIcon}>
            <Ionicons
              name="ios-save"
              size={24}
              color="white"
              style={{ alignSelf: "center" }}
            />
          </View>
          <Text style={styles.phraseText1}>
            This is your recovery phrase, which is used to genrate the keys for
            your wallet. Please write it down on paper and keep it in a secure
            place, as you would with paper money. Anyone with access to it has
            access to the wallet's funds.
          </Text>

          <Text style={styles.phraseText2}>
            If you lose your recovery phrase, your wallet cannot be recovered.
          </Text>
          <Text style={styles.phraseText3}>Your recovery phrase</Text>
          <TouchableOpacity onPress={() => this.changeRecoveryPhrase()}>
            <Text style={styles.phraseText4}>
              {this.state.recoveryPhrase[this.state.number]}
            </Text>
          </TouchableOpacity>
          <Text style={styles.phraseText5}>
            Touch to genrate a new recovery phrase
          </Text>
          <View style={styles.checkboxContainer}>
            <CheckBox
              value={this.state.isSelected}
              onValueChange={(e) =>
                this.setState({ isSelected: !this.state.isSelected })
              }
              style={styles.checkbox}
            />
            <Text style={styles.label}>
              I have safely stored my recovery phrase
            </Text>
            <TouchableOpacity
              disabled={isSelected ? false : true}
              style={[
                styles.text4,
                isSelected
                  ? { backgroundColor: "#347AF0"}
                  : { backgroundColor: "white", opacity: 0.9 },
              ]}
              onPress={() => this.props.navigation.navigate("recoveryphrase2")}
            >
              <Text
                style={[
                  styles._btnText,
                  isSelected ? { color: "white" } : { color: "grey" },
                ]}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View>
        {/* </ScrollView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  _Container: {
    flex: 1,
  },
  recoveryIcon: {
    marginTop: 50,
    backgroundColor: "#347AF0",
    padding: 15,
    borderRadius: 50,
    width: "15%",
    alignSelf: "center",
    elevation: 8,
  },
  phraseText1: {
    padding: "4%",
    fontSize: 17,
    textAlign: "justify",
  },
  phraseText2: {
    padding: "4%",
    fontSize: 17,
    textAlign: "left",
    marginTop: -22,
  },
  phraseText3: {
    marginLeft: "10%",
    color: "grey",
    fontSize: 17,
  },
  phraseText4: {
    textAlign: "center",
    width: "80%",
    alignSelf: "center",
    fontSize: 23,
    color: "#347AF0",
    marginTop: -10,
  },
  phraseText5: {
    marginRight: "7%",
    color: "grey",
    fontSize: 12,
    textAlign: "right",
  },
  checkboxContainer: {
    flexDirection: "row",
     alignItems: "center",
    flexWrap: "wrap",
    width: "98%",
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
  },
  checkbox: {
    alignSelf: "center",
  },
  label: {
    margin: 8,
  },

  _btnText: {
    color: "white",
    textAlign: "center",
  },
  text4: {
    color: "white",
    textAlign: "center",
    padding: "4%",
    backgroundColor: "#347AF0",
    width: "100%",
    paddingBottom: 5,
    paddingTop: 5,
    marginTop: 10,
    // elevation:2,
    borderRadius: 50,
    opacity:0
  },
});
