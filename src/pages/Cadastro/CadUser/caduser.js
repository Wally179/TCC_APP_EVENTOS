import React, {useState, useEffect} from 'react'
import { useForm, Controller} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { KeyboardAvoidingView, TouchableOpacity, Text, Pressable, Keyboard, StatusBar, Animated, View, TouchableWithoutFeedback, TextInput, Image, Alert} from 'react-native';
import InputWithIcon from '../../../components/InputImage/InputIcon.js'
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';


const schema = yup.object({
    Nome_usuario: yup.string().required("Informe o seu nome"),
    Email_usuario: yup.string().email("Email Invalido").required("Informe seu Email"),
    senha_usuario: yup.string().min(8,"A senha deve ter pelo menos 8 digitos").required("Informe sua senha"),
    Cpf_usuario: yup.string().length(11,"Digite um CPF valido").required("Informe um CPF"),
    Celular_usuario: yup.string().min(10,"Digite um telefone valido com DDD").max(11,"Digite um numero valido com DDD Exemplo: 13974209777").required("Informe seu numero"),
})





export default function Caduser() {
   const navigation = useNavigation()
   const { control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
   })
    const [hidePass, setHidePass] = useState(true);
    const [opacidade] = useState(new Animated.Value(1));


     async function cadastroUser(data){ 
        try {
         await axios.post('http://192.168.15.90:3000/api/usuario', data)
            alert('Usuario Cadastrado')
            navigation.navigate('Login')
        } catch (errors) {
            console.log('erro: ', errors)
            console.log(' ')
            console.log('Esta sendo enviado:', data)
        }
        
    return data;
    
        
    }

    useEffect(()=>{
        keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
        keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    }, []);

    function keyboardDidShow(){
        Animated.timing(opacidade, {
            toValue:0,
            duration:1,
            useNativeDriver: true
        }).start()
    }

    function keyboardDidHide(){
        Animated.timing(opacidade, {
            toValue:1,
            duration:125,
            useNativeDriver: true
        }).start()
    }


    return (
    
<Pressable onPress={Keyboard.dismiss} style={styles.fundo}>
<StatusBar translucent={true} backgroundColor={'transparent'} /> 
    <Animated.View style={[styles.voltar2,{
        opacity: opacidade,
      }]}>
            <Image source={require('../../../../img/logoapp.png')} style={{width:92, height: 92}} /> 
    </Animated.View>
    <Animated.View style={[styles.voltar,{
        opacity: opacidade,
      }]}>
            <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')} >
                <Ionicons name="ios-arrow-back-circle" size={45} color="#fff" />    
            </TouchableOpacity>
    </Animated.View>
<KeyboardAvoidingView style={[styles.container, ]}>
   
   <Controller
   control={control}
   name='Nome_usuario'
   render={({ field: {onChange, value}}) => (
    <InputWithIcon 
    placeholder='Nome do usuario'
    autoCorrect={true}
    value={value}
    onChangeText={onChange}
    icon="person-circle-sharp"
    style={ [styles.inputWithIcon,{borderWidth:errors.Nome_usuario && 1, borderColor: errors.Nome_usuario && '#ff375b', padding: errors.Nome_usuario && 5,}]} />
   )}
   />
    {errors.Nome_usuario && <Text style={styles.error}>{errors.Nome_usuario?.message}</Text>}

    <Controller
   control={control}
   name='Email_usuario'
   render={({ field: {onChange, value}}) => (
    <InputWithIcon 
    placeholder='Email'
    autoCorrect={true}
    value={value}
    onChangeText={onChange}
    icon="ios-mail"
    style={ [styles.inputWithIcon, {borderWidth:errors.Email_usuario && 1, borderColor: errors.Email_usuario && '#ff375b', padding: errors.Email_usuario && 5,}]} />
       )}
   />
   {errors.Email_usuario && <Text style={styles.error}>{errors.Email_usuario?.message}</Text>}

   
    <Controller
    control={control}
    name='senha_usuario'
    render={({ field: {onChange, value}}) => (
        <View style={styles.container2}>
            <View style={styles.inputArea}>
            <TouchableWithoutFeedback>
            <Ionicons style={styles.icon} name="lock-closed" size={22} color="#0D9D89" />
            </TouchableWithoutFeedback>
                <TextInput 
                placeholder='Senha' 
                placeholderTextColor="#666" 
                style={[styles.input, {borderBottomWidth:errors.senha_usuario && 1, borderTopWidth:errors.senha_usuario && 1, borderLeftWidth:errors.senha_usuario && 1, borderColor: errors.senha_usuario && '#ff375b', padding: errors.senha_usuario && 5,}]}
                value={value}
                onChangeText={onChange}
                secureTextEntry={hidePass}
                
                />
                <TouchableOpacity style={[styles.icon2,  {borderBottomWidth:errors.senha_usuario && 1, borderTopWidth:errors.senha_usuario && 1, borderRightWidth:errors.senha_usuario && 1, borderColor: errors.senha_usuario && '#ff375b'}]} 
                onPress={ () => setHidePass(!hidePass)}>
                    <Ionicons name={hidePass ? 'eye' : 'eye-off'} color='#0D9D89' size={22}/>
                </TouchableOpacity>
            </View>
        </View>
               )}
               />
        {errors.senha_usuario && <Text style={styles.error}>{errors.senha_usuario?.message}</Text>}
   

    <Controller
    control={control}
    name='Celular_usuario'
    render={({ field: {onChange, value}}) => (
        <InputWithIcon 
        placeholder='Celular'
        autoCorrect={false}
        icon="ios-call-sharp"
        value={value}
        onChangeText={onChange}
        keyboardType="numeric" 
        style={ [styles.inputWithIcon, {borderWidth:errors.Celular_usuario && 1, borderColor: errors.Celular_usuario && '#ff375b', padding: errors.Celular_usuario && 5,}]}/>
        )}
        />
    {errors.Celular_usuario && <Text style={styles.error}>{errors.Celular_usuario?.message}</Text>}
    
     <Controller
    control={control}
    name='Cpf_usuario'
    render={({ field: {onChange, value}}) => (
    <InputWithIcon 
    placeholder='CPF'
    autoCorrect={false}
    icon="document-text"
    value={value}
    onChangeText={onChange}
   keyboardType="numeric" 
   style={ [styles.inputWithIcon, {borderWidth:errors.Cpf_usuario && 1, borderColor: errors.Cpf_usuario && '#ff375b', padding: errors.Cpf_usuario && 5,}]}
   />
   )}
   />
   {errors.Cpf_usuario && <Text style={styles.error}>{errors.Cpf_usuario?.message}</Text>} 
 
    
    <TouchableOpacity style={styles.btn} onPress={handleSubmit(cadastroUser)}>
        <Text style={styles.btntext}>Registrar</Text>
    </TouchableOpacity>
    <Text style={styles.textcad}>Voce trabalha com festas?</Text>
    <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('CadForn')}>
        <Text style={styles.btntext}>Criar uma conta fornecedora</Text>
    </TouchableOpacity>
</KeyboardAvoidingView>
</Pressable>
  )
}
