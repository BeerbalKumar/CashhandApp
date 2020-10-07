import React from "react";
import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  _container: {
    backgroundColor: "#347AF0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  view2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginTop: "10%",
  },
  text12: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    // marginTop:-72,
    marginBottom: 30,
  },
  text1: {
    backgroundColor: "white",
    color: "#347AF0",
    fontWeight: "bold",
    padding: "4%",
    margin: "2%",
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 50,
    elevation:10
  },
  text2: {
    backgroundColor: "white",
    padding: "4%",
    color: "#347AF0",
    fontWeight: "bold",
    width: 250,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 50,
    elevation:10,
    marginTop:10
  },
  _modalView:{
      padding:20,
      backgroundColor:"white"
  },
  _buttonsView:{
      flexDirection:"row",
      justifyContent:"flex-end",
      marginTop:20
  },
  _modalHeading:{
      fontSize:22
  },
  _modalText:{
      fontSize:16,
      marginTop:10,
      textAlign:"left"
  },
  _cancelBtn:{
      marginRight:10,
      fontSize:18,
      fontWeight:"bold"
  }
});

export default styles;
