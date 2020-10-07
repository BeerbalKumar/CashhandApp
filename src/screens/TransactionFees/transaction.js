import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

export default class Transaction extends React.Component {
  render() {
    return (
      <View>
        <View style={styles._view1}>
          <TouchableOpacity style={styles._Touch1}>
            <Image
              style={styles.image}
              source={require("./../../../assets/images/Cashhand.jpg")}
              style={{
                borderRadius: 100,
                width: 40,
                height: 40,
                alignSelf: "center",
                marginTop: "4%",

                marginLeft: "7%",
                justifyContent: "flex-start",
              }}
            />
            <Text style={styles._Text1}>Cashhand</Text>
            <Text style={styles._Text2}>0.001 CHD</Text>
          </TouchableOpacity>
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
