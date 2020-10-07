import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
// import styles from "../splash/style";
import styles from "./style";

export default class AcountDetail extends React.Component {
  render() {
    return (
      <View style={styles._container}>
        <ScrollView>
            <View style={styles._View2} >
                <Text style={styles._Text1}>Public key </Text>
                <Text style={styles._Text2}>xpub67tVq9TLPPoaJtLjLa27njfYiMwNpJ
                    skoH9pXsbT6WGPSEmbevL9k285nfEqRTif
                    Lc2kVoYjXc3q1Qko3RNhigUvxbpoUkegvL{"\n"}
                    JLkMFBkHy
                </Text>
                <Text style={styles._Text3}>Sharing your public key will allow snybodyto view
                     your balance and transacion history.
                       </Text>
            </View>
        <View style={styles._View3}>
          <Image
            style={styles.image}
            source={require("./../../../assets/images/reqr.png")}
            style={{
            //   borderRadius: 100,
              width: 210,
              height: 210,
              alignSelf: "center",
              marginTop:28
            }}
          />
        </View>
        </ScrollView>
      </View>
    );
  }
}