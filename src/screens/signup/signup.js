import React from "react";
import { View, Text, Image,ScrollView,TextInput,TouchableOpacity } from "react-native";

import styles from "./style";

export default class Sign extends React.Component {
  render() {
    return (
      <View style={styles._container}>
              <ScrollView>
      <Text style={styles._passwordHeading}>You can sign or verify a messege using an address.</Text>
      <View style={styles._inputView}>
        <Text style={styles._inputTitle}>Signing address</Text>
        <TextInput style={styles._input}/>
        <Text style={styles._inputTitle}>Messege</Text>
        <TextInput style={styles._input}/>
        <Text style={styles._inputTitle}>Signature</Text>
        <TextInput style={styles._input}/>
      </View>
      <View style={styles._footer}>
        <TouchableOpacity style={styles._nextBtn}>
          <Text style={{color:"white",textAlign:"center"}}>VERIFY</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._nextBtn}>
          <Text style={{color:"white",textAlign:"center"}}>SIGN</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>

        </View>
      // </View>
    );
  }
}
