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
    marginTop:33
  },
  _input:{
    borderBottomWidth:1,
    width:"90%",
    alignSelf:"center",
    padding:"1%"
  },
  _inputView:{
    marginTop:15
  },
  _inputTitle:{
    marginLeft:"4%",
    fontSize:17,
    marginTop:20,
    color:"grey"
  },
  _footer:{
    flexDirection:"row",
    justifyContent:"flex-end",
    width:"100%",
    // alignSelf:"center",
    marginTop:270,
    padding:"4%"
  },
  _nextBtn:{
    backgroundColor:"#347AF0",
    padding:"3%",
    color:"white",
    width:"25%",
    borderRadius:50,
    elevation:5,
    margin:"1%"
  }
});

export default styles;


