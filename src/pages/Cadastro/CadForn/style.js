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
            marginTop:"25%",
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
            borderRadius:20,
            alignItems:"center",
            paddingLeft:10,
            height:50,
    
        },
        input:{
            width:'90%',
            flex:1,
            fontSize: 14,
            color: '#666',
            height:50,
        },
        select:{
          width:'90%',
          flex:1,
          fontSize: 14,
          color: "#666",
          height:50,
        },
        selectItem:{
          fontSize: 14,
          
        },
        icon: {
            justifyContent:"center",
            alignItems:"center",
            width: "10%"
          },
          icon2: {
            width:"15%",
            justifyContent:"center",
            alignItems:"center",
            height:50,
            borderBottomRightRadius:15,
            borderTopRightRadius:15,
          },
          voltar:{
            position:"absolute",
            left: 25,
            top:"7%",
            width:40,
            alignItems:"center",
          },
          voltar2:{
            position:"absolute",
            left: 'auto',
            right: 'auto',
            top: '5%',
           alignItems:"center",
           justifyContent:"center",
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
          error:{
            alignSelf: 'flex-start',
            color:"#ff375b",
            marginBottom:8,
            marginLeft:20,
            marginTop:-12,
            fontSize:15,
          },
          inputWithIcon:{
            width:"90%",
            borderBottomRightRadius:15,
            borderTopRightRadius:15,
            height:50,
            alignSelf:'center',
          }
    })
export default styles;