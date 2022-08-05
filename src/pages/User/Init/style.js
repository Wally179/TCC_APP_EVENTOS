import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    fundo:{
        flex:1,
        backgroundColor:"#31B1B9"
      },
      superior:{
        height:"30%",
       
      },
      container:{
        backgroundColor: "#E8F6F7",
        height:"70%",
        borderTopLeftRadius:50,
        borderTopRightRadius:50,
      },
      categoria:{
        position:'absolute',
        fontSize: 20,
        top:"4%",
        left:"5%",
        fontWeight:'bold',
        color: "#31B1B9"
      },
      inputcontainer:{
        backgroundColor:"#86CED1",
        width:"75%",
        color: "#E8F6F7",
        fontSize:17,
        borderRadius:15,
        paddingLeft:10,
        flexDirection: 'row',
        height:45,
        alignContent:'center',
        alignItems:'center',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
      },
      input: {
        fontSize: 18,
        color: '#E8F6F7',
        width:'85%',
        height:"100%",
      },
      linha: {
        marginTop:"10%",
        width:"100%",
        flexDirection: 'row',
        alignContent:'center',
        alignItems:'center',
        paddingLeft:"4%"
      },
      menu: {
        width:"35%",
        flexDirection: 'row-reverse',
      },
      icon: {
        width:"35%",
        left:"125%"
      }
      
});

export default styles;