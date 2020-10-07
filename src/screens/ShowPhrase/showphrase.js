import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";
import { EvilIcons } from '@expo/vector-icons'; 
export default class ShowPhrase extends React.Component {
  render() {
    return (
      <View>
      <View style={styles._View3}>
          <Text>your recovery phrase</Text>
          <Text style={styles._Text1}>
              Settle gaint eagle 
          </Text>
          <View style={styles._View1}>
          <View>
          <EvilIcons name="lock" size={24} color="black" style={styles._icon1} />
          </View>
          <View>
          <Text>This recovery phrases is protected wih a BIP39 passphrase  </Text>
          </View>
          </View>
      </View>
      <View style={styles._View4}>
          <Image
            style={styles.image}
            source={require("./../../../assets/images/reqr.png")}
            style={{
            //   borderRadius: 100,
              width: 200,
              height: 200,
              alignSelf: "center",
              marginTop:"48%"
            }}
          />
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
