import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    fundo:{
        backgroundColor:"#31B1B9",
        height:"100%",
        width:"100%"
      },
      superior:{
        height:"12%",
        paddingTop:'5%'
        
      },
      linha1:{
        width:"100%",
        height:'100%',
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
        alignItems:"center",
        alignSelf: 'center',
        shadowColor: "#000",
        shadowOffset:{
        width: 0,
        height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
      },
      titulo:{
        fontSize: 20,
        lineHeight: 20,
        color: "#E8F6F7",
        alignSelf: 'center'
      },
      container:{

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
});

export default styles;