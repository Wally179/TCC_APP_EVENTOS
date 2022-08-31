import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    item:{
        borderRadius:20,
        margin:10,
        backgroundColor:"#31B1B9",
     
        alignItems:'center',
        alignSelf: "center",
        flexDirection: 'column',

      },
      linha:{
        marginTop:'5%',
        flexDirection: 'row',
        width:"90%",
      },
      textTitulo:{
        fontSize: 18,
        paddingBottom:2,
        fontWeight: "bold",
        color:"white",
      },
      textSubTitulo:{
        fontSize: 15,
        paddingBottom:2,
        width:'60%',
        fontFamily:'sans-serif',
        color:"white",
      },
      titulo:{
        marginLeft:15,
      },
      linha2:{
        flexDirection: 'row',
        backgroundColor:"white",
        width:'90%',
        justifyContent:'center',
        alignItems: 'center',
        marginTop:'4%',
        borderRadius:10,
        paddingVertical:5
      },
      icon:{
        marginRight:20      
      },
      white:{
        color:'#31B1B9'
      }

});

export default styles;