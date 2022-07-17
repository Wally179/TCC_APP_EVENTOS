import React, {useState} from 'react'
import { StyleSheet, View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Inputpass() {

    const [input, setInput] = useState('');
    const [hidePass, setHidePass] = useState(true);

    return (
    <View style={styles.container}>
        <View style={styles.inputArea}>
        <TouchableWithoutFeedback>
        <Ionicons style={styles.icon} name="lock-closed" size={18} color="#0D9D89" />
        </TouchableWithoutFeedback>
            <TextInput 
            placeholder='Senha' 
            placeholderTextColor="#666" 
            style={styles.input}
            value={input}
            onChangeText={(texto) => setInput(texto)}
            secureTextEntry={hidePass}
            />
            <TouchableOpacity style={styles.icon2} 
            onPress={ () => setHidePass(!hidePass)}>
                <Ionicons name={hidePass ? 'eye' : 'eye-off'} color='#0D9D89' size={22}/>
            </TouchableOpacity>
        </View>
    </View>
  );
}

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
