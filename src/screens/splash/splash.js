import React from "react";
import { View, Text, Image, TouchableOpacity,Button } from "react-native";
import Modal from 'react-native-modal';


import styles from "./style";

export default class Splash extends React.Component {
    state = {
        isModalVisible: false,
        modalText:"",
        path:""
      };
     
      toggleModal = (value,path) => {
        this.setState({
            isModalVisible: !this.state.isModalVisible,
            modalText:value,
            path:path
        });
      };
      nextScreen=()=>{
          this.toggleModal("","")
          this.props.navigation.navigate(this.state.path);
      }
  render() {
    return (
      <View style={styles._container}>
        <View style={styles.view1}>
          <Image
            style={styles.image}
            source={require("./../../../assets/images/Cashhand.jpg")}
            style={{
              borderRadius: 100,
              width: 200,
              height: 200,
              alignSelf: "center",
            }}
          />
        </View>
        <View style={styles.view2}>
          <Text style={styles.text12}>Welcome to CashHand wallet</Text>

          <TouchableOpacity onPress={()=>this.toggleModal(" If you create a new wallet, your existing wallet will be lost unless yu backed up you recovery phrase.","recoveryphrase")}>
            <Text style={styles.text1}>CREATE A NEW WALLET </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.toggleModal(" If you restore a wallet, your existing wallet will be lost unless yu backed up you recovery phrase.","recoveryphrase")}>
            <Text style={styles.text2}>RESTORE A WALLET</Text>
          </TouchableOpacity>
          {/* <Button title="Show modal" onPress={this.toggleModal} /> */}
        <Modal isVisible={this.state.isModalVisible}>
          <View style={styles._modalView}>
            <Text style={styles._modalHeading}>Override existing wallet?</Text>
            <Text style={styles._modalText}>
                {this.state.modalText}
            </Text>
            <View style={styles._buttonsView}>
            <TouchableOpacity onPress={()=>this.toggleModal("","")} style={styles._cancelBtn}>
                <Text>CANCEL</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles._cancelBtn} onPress={()=>this.nextScreen()}>
                <Text>CONFIRM</Text>
            </TouchableOpacity>
            </View>
          </View>
        </Modal>
        </View>
      </View>
    );
  }
}
