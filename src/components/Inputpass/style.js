import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
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

});

export default styles;