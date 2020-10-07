import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import styles from "./style";
import * as Linking from "expo-linking";

export default class About extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <ScrollView>
          <View style={styles._View1}>
            <Image
              style={styles.image}
              source={require("./../../../assets/images/Cashhand.jpg")}
              style={{
                borderRadius: 100,
                width: 150,
                height: 150,
                alignSelf: "center",
                marginTop: 28,
              }}
            />
          </View>
          <View style={styles._View2}>
            <Text style={styles._Text1}>Cashhand for Android</Text>
            <Text style={styles._Text2}>v1-single.6</Text>
          </View>
          <View style={styles._View3}>
            <Text style={styles._Text3}>TERMS OF SERVICES</Text>
          </View>
          <View style={styles._View4}>
            <Text style={styles._Text4}>
              A Translation provided by:{"\n"}Tamara Castellano (itailian){" "}
              {"\n"}Jorge Nicolas Karmis (Spanish) {"\n"}George Kimionis (Greek){" "}
              {"\n"}@VisVirial (Japanese){"\n"}ehnc Penh (Russian,Ukrainian)
            </Text>
            <Text style={styles._Text4}>
              An open Source project{"\n"}{" "}
              https://github.com/Coinomi/coinomi-android
            </Text>
            <Text style={styles._Text4}>
              Using Bitcoinj library{"\n"}https://bitcoinj.github.io/
            </Text>
            <Text style={styles._Text4}>
              Uses Electrum server software {"\n"}https://electrum.org/
            </Text>
            <Text style={styles._Text4}>
              Influenced byAndreas Schildbach{"\n"}
              https://github.com/schildbach/bitcoin-wallet/
            </Text>
            <Text style={styles._Text4}>
              QR-code functionality by ZXing{"\n"}https://github.com/zxing/zxing
            </Text>
            <Text style={styles._Text4}>
              Font-icons by Daniel Bruce{"\n"}http://www.entypo.com
            </Text>
          </View>
          <View style={styles._View5}>
            <Text> (c) 2020 Cashhand</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   _container: {
//     flex: 1,
//   },
// });
