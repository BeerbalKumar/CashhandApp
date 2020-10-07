import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

export default class Debugging extends React.Component {
  render() {
    return (
      <View style={styles._view1}>
     <View style={styles._view2}>
  <Text style={styles._text1}>
      You can use a collection of tools to doing various issues with your wallet. 
  </Text>
     </View>
     <View style={styles._view3}>
         <Text style={styles._text2}>Wallet unlocking tests</Text>
         <TouchableOpacity style={styles._Touch1}>
             <Text style={styles._text3}>EXECUTE</Text>
         </TouchableOpacity>
     </View>
      </View>
    );
  }
}

