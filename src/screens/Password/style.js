import React from "react";
import { StyleSheet } from "react-native";

let styles = StyleSheet.create({
  _container: {
    flex:1
  },
  _keyView:{
  alignSelf:"center",
  marginTop:50,
  backgroundColor:"#347AF0",
  padding:"4%",
  borderRadius:50
  },
  _passwordHeading:{
    width:"85%",
    marginLeft:"5%",
    fontSize:17,
    marginTop:20
  },
  _input:{
    borderBottomWidth:1,
    width:"90%",
    alignSelf:"center",
    padding:"1%"
  },
  _inputView:{
    marginTop:155
  },
  _inputTitle:{
    marginLeft:"4%",
    fontSize:17,
    marginTop:20,
    color:"grey"
  },
  _footer:{
    flexDirection:"row",
    justifyContent:"space-between",
    width:"85%",
    alignSelf:"center",
    marginTop:200
  },
  _nextBtn:{
    backgroundColor:"#347AF0",
    padding:"2%",
    color:"white",
    width:"25%",
    borderRadius:50,
  },
  _modalView: {
    padding: 20,
    backgroundColor: "white",
  },
  _buttonsView: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginTop: 20,
  },
  _modalHeading: {
    fontSize: 22,
  },
  _modalText: {
    fontSize: 18,
    // marginTop: 10,
    textAlign: "left",
  },
  _cancelBtn: {
    marginRight: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default styles;
