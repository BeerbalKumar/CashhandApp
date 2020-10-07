import React from "react";
import {View,Text,Image} from "react-native";

import styles from './style'


export default class HomeScreen extends React.Component{
    render(){
  return (
 <View style={styles._container}>
   
      <Text style={{color:"red"}}> Welcome to CashHand App</Text>
 </View>
  );
}
}