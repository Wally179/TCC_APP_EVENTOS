import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        fundo:{
          flex:1,
          alignItems: "center",
          justifyContent: 'center',
          backgroundColor: "#31B1B9",
        },
        container:{
            alignItems: "center",
            width:"90%",
            marginTop:"20%",
          },
        container2:{
            backgroundColor:"#fff",
            width:"90%",
            marginBottom:15,
            borderRadius:15,
            color:'#222',
            fontSize:17,
            flexDirection: 'row',
            height:50,
        },
        inputArea:{
            flexDirection:'row',
            width:'100%',
            borderRadius:50,
            alignItems:"center",
            padding:10,
            height:50,
    
        },
        input:{
            width:'90%',
            flex:1,
            fontSize: 14,
            color: '#666',
            height:50,
        },
        icon: {
            justifyContent:"center",
            alignItems:"center",
            paddingRight: 25,
            
          },
          icon2: {
            width:"15%",
            justifyContent:"center",
            alignItems:"center",
            height:50,
          },
          voltar:{
            position:"absolute",
            left: 25,
            top:55,
            width:40,
            alignItems:"center",
          },
          btn:{
            backgroundColor:'#0D9D89',
            width:"90%",
            height:50,
            alignItems:"center",
            justifyContent:"center",
            borderRadius:20,
            marginTop:12,
            marginBottom:15,
          },
          btntext:{
            color:"#fff",
            fontSize:18,
          },
          btntext2:{
            color:"#fff",
            fontSize:15,
          },
          textcad:{
            color: "#fff",
            fontSize:18,
            marginBottom:-10,
          },
    })
export default styles;