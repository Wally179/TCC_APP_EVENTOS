import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
        fundo:{
          flex:1,
          alignItems: "center",
          justifyContent: 'center',
          backgroundColor: "#31B1B9",
        },
        viewlogo:{
          flex:1,
          justifyContent:'center',
          alignItems:"center",
          width:"100%",
        },
        container:{
          flex:1,
          alignItems: "center",
          width:"90%",
          marginTop:-40,
        },
        input:{
          backgroundColor:"#fff",
          width:"90%",
          marginBottom:15,
          color:'#222',
          fontSize:17,
          borderRadius:15,
          padding:10,
          marginBottom:10,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        },
        btn:{
          backgroundColor:'#0D9D89',
          width:"90%",
          height:50,
          alignItems:"center",
          justifyContent:"center",
          borderRadius:20,
        },
        btntext:{
          color:"#fff",
          fontSize:18,
        },
        textlogo:{
          fontStyle: "normal",
          fontSize: 20,
          lineHeight: 30,
          color: "#E8F6F7",
          paddingBottom:10,
        },
        EsqueceuSenha:{
          width:"50%",
          alignItems:"flex-end",
          justifyContent:"center",
          padding:10,
        },
        EsqueceuSenhaText:{
          color: "#E8F6F7",
        },
        Textnome:{
          fontStyle: "normal",
          fontSize: 22,
          lineHeight: 30,
          color: "#E8F6F7",
          width:"100%",
          textAlign:"center",
        },
        Textfrase:{
          fontStyle:"italic",
          fontSize: 13,
          lineHeight: 20,
          color: "#E8F6F7",
          width:"75%",
        },
        esqueceu:{
          width:"90%",
          alignItems:"flex-end",
          marginTop:-18,
          marginBottom:25,
        },
        voltar:{
          position:"absolute",
          left: 25,
          top:55,
          width:40,
          alignItems:"center",
        }
      });

export default styles;