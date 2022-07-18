import React, {useState} from 'react'
import { View, TextInput, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";
export default function Inputpass() {

    const [senha, setSenha] = useState('');
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
            value={senha}
            onChangeText={(texto) => setSenha(texto)}
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
