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
// import Scanner from './../../components/qrscannner';
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";

export default class Sweepwallet extends React.Component {
//   state = {
//     isModalVisible: false,
//     modalText: "",
//     path: "",
//   };

//   toggleModal = () => {
//     this.setState({
//       isModalVisible: !this.state.isModalVisible,
//       // modalText:value,
//       // path:path
//     });
//   };
//   nextScreen = () => {
//     this.toggleModal();
//     this.props.navigation.navigate("password");
//   };
  render() {
    return (
      <View style={styles._Container}>
        <ScrollView>
          <View style={styles.view1}>
         <Text style={styles.text1}>You are about to transfer coins from a paper wallet to your Cashhand wallet.{"\n"}
             After the transfer is complete, please avoid reusing the paper wallet for security reasons.
         </Text>
         <Text style={styles.text2}>Supported formates: WIF,BIP38,Mini private{"\n"}key.</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.phraseText2}>
              Private key
            </Text>
            <View style={styles._inputView}>
              <TextInput
                style={styles.input1}
                placeholder="type or scan a private key"
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

          <View style={styles._bottom_row}>
            
            <TouchableOpacity style={styles.text4}>
              <Text style={styles._btnText}>NEXT</Text>
            </TouchableOpacity>
          </View>
          
                
          
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

 view1:{
  marginTop:"10%",
 },
 text1:{
  fontSize:16,
  marginLeft:"3%",
  marginBottom:"5%"

 },
 text2:{
    fontSize:16,
    marginLeft:"3%",
  
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
    justifyContent:"flex-end",
    marginLeft:"75%"
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

  text4:{
      justifyContent:"flex-end",
      marginTop:"-30%"
  }
});
