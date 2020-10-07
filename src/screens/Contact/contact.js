import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import styles from "./style";

export default class About extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <View style={styles._View1}>
          <Image
            style={styles.image}
            source={require("./../../../assets/images/Cashhand.jpg")}
            style={{
              borderRadius: 100,
              width: 150,
              height: 150,
              alignSelf: "center",
              marginTop:28

            }}
          />
        </View>
        <View style={styles._View2}>
          <Text style={styles._Text1}>Cashhand for Android</Text>
          <Text style={styles._Text2}>v1-single.6</Text>
        </View>
        <View style={styles._View3}>
          <Text style={styles._Text12}>Contact Support</Text>
        </View>
        <View style={styles._View04}>
        <Text style={styles._Text12}>
            Email:
        </Text>
        <Text style={styles._Text13}>cashhand-support@gmail.com</Text>
        <Text style={styles._Text14}>Telegram:https://t.me/cashhand_DFC</Text>
        <Text style={styles._Text15}>Discord:</Text>
        <Text style={styles._Text16}>Twitter:</Text>
        <Text style={styles._Text18}>http://explorer.cashhand.info/tx/%s</Text>
        </View>
        <View style={styles._View5}>
          <Text style={styles._Text12}> (c) 2020 Cashhand</Text>
        </View>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   _container: {
//     flex: 1,
//   },
// });
