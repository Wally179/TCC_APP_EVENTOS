import React from "react";
import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    fundo:{
      flex:1,
      alignItems: "center",
      justifyContent: 'center',
      backgroundColor: "#31B1B9",
    },
    Logo:{
        alignItems: "center",
        width: "100%",
        height:400,
    },
    Textnome:{
    fontStyle: "normal",
    fontSize: 22,
    lineHeight: 30,
    color: "#E8F6F7",
    width:"100%",
    textAlign:"center",
    paddingTop: 25,
    },
    Textfrase:{
        fontStyle:"italic",
        fontSize: 13,
         lineHeight: 20,
        color: "#E8F6F7",
        width:"100%",
        textAlign: "center",
     },
     container:{
        flexDirection: 'row',
        width: "90%",
     },
    btnEntrar:{
        backgroundColor:'#0D9D89',
        width:"50%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderTopLeftRadius:20,
        borderBottomLeftRadius:20,
        borderRightWidth: 2,
        borderColor: "#fff",
    },
    btnRegistro:{
        backgroundColor:'#0D9D89',
        width:"50%",
        height:50,
        alignItems:"center",
        justifyContent:"center",
        borderBottomRightRadius:20,
        borderTopRightRadius: 20,
        borderLeftWidth: 2,
        borderColor: "#fff",
    },
    btntext:{
        color:"#fff",
        fontSize:18,
    },

  

});

export default styles;
