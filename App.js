import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, View, Image } from "react-native";
import Splash from "./src/screens/splash/splash";
import Login from "./src/screens/Password/password";
import RecoveryPhrase2 from "./src/screens/recoveryphrase2/recoveryphrase2";
import RecoveryPhrase from "./src/screens/RecoveryPhrase/rcoveryPhrase";
import Navigation from "./src/config/navigation";
import About from "./src/screens/About/about";
import Contact from "./src/screens/Contact/contact";
import Sign from "./src/screens/signup/signup";
import Sweepwallet from "./src/screens/SweepWallet/sweepwallet";
import AcountDetail from "./src/screens/AcountDetail/acountDetail";
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
<Navigation/>
    );
  }
}
