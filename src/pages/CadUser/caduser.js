import React, {useState} from 'react'
import { KeyboardAvoidingView, TouchableOpacity, Text, Pressable, Keyboard, StatusBar, Animated, View, TouchableWithoutFeedback, TextInput} from 'react-native';
import InputWithIcon from '../../components/InputImage/InputIcon.js'
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";

export default function Caduser() {
    const [senha, setSenha] = useState('');
    const [hidePass, setHidePass] = useState(true);
    return (
    
<Pressable onPress={Keyboard.dismiss} style={styles.fundo}>
<StatusBar translucent={true} backgroundColor={'transparent'} /> 
    
    <TouchableOpacity style={styles.voltar}>
        <Ionicons name="ios-arrow-back-circle" size={45} color="#fff" />    
    </TouchableOpacity>
<KeyboardAvoidingView style={styles.container}>
    <InputWithIcon 
    placeholder='Nome do usuario'
    autoCorrect={true}
    icon="person-circle-sharp" />
    <InputWithIcon 
    placeholder='Email'
    autoCorrect={true}
    icon="ios-mail" />

    <View style={styles.container2}>
        <View style={styles.inputArea}>
        <TouchableWithoutFeedback>
        <Ionicons style={styles.icon} name="lock-closed" size={22} color="#0D9D89" />
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
    
    <InputWithIcon 
    placeholder='Celular'
    autoCorrect={false}
    icon="ios-call-sharp"
    keyboardType="numeric" />
    <InputWithIcon 
    placeholder='CPF'
    autoCorrect={false}
    icon="document-text"
    keyboardType="numeric" />

    <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Registrar</Text>
    </TouchableOpacity>
    <Text style={styles.textcad}>Voce trabalha com festas?</Text>
    <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Criar uma conta fornecedora</Text>
    </TouchableOpacity>
</KeyboardAvoidingView>
</Pressable>
  )
}
