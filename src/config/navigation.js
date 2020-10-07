import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, HeaderBackButton } from "@react-navigation/stack";
import Splash from "./../screens/splash/splash";
import RecoveryPhrase from "./../screens/RecoveryPhrase/rcoveryPhrase";
import RecoveryPhrase2 from "./../screens/recoveryphrase2/recoveryphrase2";
import Password from "./../screens/Password/password";
import About from "./../screens/About/about";
import Contact from "./../screens/Contact/contact";
import Sign from "./../screens/signup/signup";
import Sweepwallet from "./../screens/SweepWallet/sweepwallet";
import AcountDetail from "./../screens/AcountDetail/acountDetail";
import Home from "./../screens/Home/home";
import Settings from "./../screens/setting/setting";
import Transaction from "./../screens/TransactionFees/transaction";
import Showphrase from "./../screens/ShowPhrase/showphrase";
import Debugging from "./../screens/Debugging/debugging";


const Stack = createStackNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="recoveryphrase"
          component={RecoveryPhrase}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="recoveryphrase2"
          component={RecoveryPhrase2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="password"
          component={Password}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ headerTitle:"About Cashhand",headerStyle:{backgroundColor:"#347AF0"},headerTitleStyle:{color:"white"},}}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{ headerTitle:"Contact support",headerStyle:{backgroundColor:"#347AF0"},headerTitleStyle:{color:"white"},}}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Sign"
          component={Sign}
          options={{ headerTitle:"Sign/verify message",headerStyle:{backgroundColor:"#347AF0"},headerTitleStyle:{color:"white"},headerLeft:null}}
        />
        <Stack.Screen
          name="Sweepwallet"
          component={Sweepwallet}
          options={{ headerTitle:"Sweep paper wallet",headerStyle:{backgroundColor:"#347AF0"},headerTitleStyle:{color:"white"},headerLeft:null}}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AcountDetail"
          component={AcountDetail}
          options={{ headerTitle:"Acount details",headerStyle:{backgroundColor:"#347AF0"},headerTitleStyle:{color:"white"},headerLeft:null}}
          // options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Settings"
          component={Settings}
          options={{ headerTitle:"Settings",headerStyle:{backgroundColor:"#347AF0"},headerTitleStyle:{color:"white"},}}
          // options={{ headerShown: false }}
        />
         <Stack.Screen
          name="Transaction"
          component={Transaction}
          options={{ headerTitle:"Transaction fees",headerStyle:{backgroundColor:"#347AF0"},headerTitleStyle:{color:"white"},}}
          // options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Showphrase"
          component={Showphrase}
          options={{ headerTitle:"Show recovery phrase",headerStyle:{backgroundColor:"#347AF0"},headerTitleStyle:{color:"white"},}}
          // options={{ headerShown: false }}
        />
          <Stack.Screen
          name="Debugging"
          component={Debugging}
          options={{ headerTitle:"Debugging",headerStyle:{backgroundColor:"#347AF0"},headerTitleStyle:{color:"white"},}}
          // options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigation;
