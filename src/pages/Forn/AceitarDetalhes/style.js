import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    fundo:{
        backgroundColor:"#31B1B9",
        height:"100%",
        width:"100%"
      },
      linha1:{
        width:"100%",
        height:'10%',
        marginTop:"5%",
        paddingHorizontal:15,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      btn:{
        width:50,
        height:50,
        backgroundColor:"#E8F6F7",
        borderRadius:10,
        justifyContent:"center",
        alignSelf: 'center',
        alignItems:"center",
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
      },
      container:{
        height:"100%",
        paddingTop:1,
        backgroundColor: "#E8F6F7",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
        

      },
      container2:{
        width:"80%", 
        alignSelf: 'center',
      },
      titulos:{
        fontSize:16,
        lineHeight:21,
        marginTop:10
      },
    map:{
      width:'100%',
      height:200,
      marginTop:5,
    },
    tituloUser:{
      fontSize:20,
      lineHeight:21,
      marginTop:10
    },
    pedidoN:{
      fontSize:18,
      lineHeight:21,
      alignSelf:'center',
      color:"#E8F6F7",
    },
    descri:{
      color:'#7C7C7A',
      marginTop:5
    },
    linhaP:{
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    bloco:{
      width:'30%',
      justifyContent:'center',
      alignItems: 'center',
    },
    bloco2:{
      width:'50%',
      justifyContent:'center',
      paddingLeft:'10%'
    },
    bloco3:{
      width:'20%',
      
    },

});

export default styles;