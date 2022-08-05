import React, {useState, useEffect} from 'react'
import { useForm, Controller} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { KeyboardAvoidingView, TouchableOpacity, Text, Pressable, Keyboard, StatusBar, Animated, View, TouchableWithoutFeedback, TextInput, Image} from 'react-native';
import InputWithIcon from '../../../components/InputImage/InputIcon.js'
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";
import {useNavigation} from '@react-navigation/native';


const schema = yup.object({
    Username: yup.string().required("Informe o seu nome"),
    Email: yup.string().email("Email Invalido").required("Informe seu Email"),
    Senha: yup.string().min(8,"A senha deve ter pelo menos 8 digitos").required("Informe sua senha"),
    CPF: yup.string().length(11,"Digite um CPF valido").required("Informe um CPF"),
    Celular: yup.string().min(10,"Digite um telefone valido com DDD").max(11,"Digite um numero valido com DDD Exemplo: 13974209777").required("Informe seu numero"),
})





export default function Caduser() {
   const navigation = useNavigation()
   const { control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
   })
    const [hidePass, setHidePass] = useState(true);
    const [opacidade] = useState(new Animated.Value(1));
    
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

    function cadastroUser(data){
        console.log(data);
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
   name='Username'
   render={({ field: {onChange, value}}) => (
    <InputWithIcon 
    placeholder='Nome do usuario'
    autoCorrect={true}
    value={value}
    onChangeText={onChange}
    icon="person-circle-sharp"
    style={ [styles.inputWithIcon,{borderWidth:errors.Username && 1, borderColor: errors.Username && '#ff375b', padding: errors.Username && 5,}]} />
   )}
   />
    {errors.Username && <Text style={styles.error}>{errors.Username?.message}</Text>}

    <Controller
   control={control}
   name='Email'
   render={({ field: {onChange, value}}) => (
    <InputWithIcon 
    placeholder='Email'
    autoCorrect={true}
    value={value}
    onChangeText={onChange}
    icon="ios-mail"
    style={ [styles.inputWithIcon, {borderWidth:errors.Email && 1, borderColor: errors.Email && '#ff375b', padding: errors.Email && 5,}]} />
       )}
   />
   {errors.Email && <Text style={styles.error}>{errors.Email?.message}</Text>}
       <Controller
    control={control}
    name='Senha'
    render={({ field: {onChange, value}}) => (
        <View style={styles.container2}>
            <View style={styles.inputArea}>
            <TouchableWithoutFeedback>
            <Ionicons style={styles.icon} name="lock-closed" size={22} color="#0D9D89" />
            </TouchableWithoutFeedback>
                <TextInput 
                placeholder='Senha' 
                placeholderTextColor="#666" 
                style={[styles.input, {borderBottomWidth:errors.Senha && 1, borderTopWidth:errors.Senha && 1, borderLeftWidth:errors.Senha && 1, borderColor: errors.Senha && '#ff375b', padding: errors.Senha && 5,}]}
                value={value}
                onChangeText={onChange}
                secureTextEntry={hidePass}
                
                />
                <TouchableOpacity style={[styles.icon2,  {borderBottomWidth:errors.Senha && 1, borderTopWidth:errors.Senha && 1, borderRightWidth:errors.Senha && 1, borderColor: errors.Senha && '#ff375b'}]} 
                onPress={ () => setHidePass(!hidePass)}>
                    <Ionicons name={hidePass ? 'eye' : 'eye-off'} color='#0D9D89' size={22}/>
                </TouchableOpacity>
            </View>
        </View>
               )}
               />
        {errors.Senha && <Text style={styles.error}>{errors.Senha?.message}</Text>}


    <Controller
    control={control}
    name='Celular'
    render={({ field: {onChange, value}}) => (
        <InputWithIcon 
        placeholder='Celular'
        autoCorrect={false}
        icon="ios-call-sharp"
        value={value}
        onChangeText={onChange}
        keyboardType="numeric" 
        style={ [styles.inputWithIcon, {borderWidth:errors.Celular && 1, borderColor: errors.Celular && '#ff375b', padding: errors.Celular && 5,}]}/>
        )}
        />
    {errors.Celular && <Text style={styles.error}>{errors.Celular?.message}</Text>}
    
    <Controller
    control={control}
    name='CPF'
    render={({ field: {onChange, value}}) => (
    <InputWithIcon 
    placeholder='CPF'
    autoCorrect={false}
    icon="document-text"
    value={value}
    onChangeText={onChange}
   keyboardType="numeric" 
   style={ [styles.inputWithIcon, {borderWidth:errors.CPF && 1, borderColor: errors.CPF && '#ff375b', padding: errors.CPF && 5,}]}
   />
   )}
   />
   {errors.CPF && <Text style={styles.error}>{errors.CPF?.message}</Text>}

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
