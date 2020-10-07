import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import { CheckBox } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import styles from "./style";

export default class Settings extends React.Component {
  constructor(){
    super();
    this.state={
        isSelected:false
    }
  }
  render() {
    let { isSelected } = this.state;
    return (
      <View>
        <View style={styles._view1}>
          <TouchableOpacity
            style={styles._Touch1}
            onPress={() => this.props.navigation.navigate("Transaction")}
          >
            <Text style={styles._Text1}>Transaction fees</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._view2}>
          <TouchableOpacity
            style={styles._Touch2}
            onPress={() => this.props.navigation.navigate("Showphrase")}
          >
            <Text style={styles._Text2}>Show recovery phrase</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._view3}>
          <TouchableOpacity
            style={styles._Touch3}
            onPress={() => this.props.navigation.navigate("splash")}
          >
            <Text style={styles._Text3}>Restore wallet</Text>
          </TouchableOpacity>
        </View>
        <View style={styles._view4}>
          <View>
            <Text style={styles._Text4}>Manual recieving addressess</Text>
            <Text style={styles._Text5}>
              dont automatically create a new{"\n"}address for every transaction
            </Text>
          </View>
          <CheckBox
            checked={this.state.isSelected}
            onPress={(e) =>
              this.setState({ isSelected: !this.state.isSelected })
            }
            style={{marginLeft:"10%"}}
            color="#347AF0"
          />
        </View>
        <View style={styles._view5}>
          <TouchableOpacity
            style={styles._Touch4}
            onPress={() => this.props.navigation.navigate("Debugging")}
          >
            <Text style={styles._Text6}>Debugging</Text>
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
