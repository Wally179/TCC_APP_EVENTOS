import React, {useState, useEffect} from 'react'
import { useForm, Controller} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { KeyboardAvoidingView, TouchableOpacity, Text, Pressable, Keyboard, StatusBar, Animated, View, TouchableWithoutFeedback, TextInput, Image} from 'react-native';
import InputWithIcon from '../../../components/InputImage/InputIcon.js'
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";
import {Picker} from '@react-native-picker/picker';
import {useNavigation} from '@react-navigation/native'
import axios from 'axios';

const schema = yup.object({
    Razao_social_fornecedor: yup.string().required("Informe o seu nome"),
    Email_fornecedor: yup.string().email("Email Invalido").required("Informe seu Email"),
    senha_usuario: yup.string().min(8,"A senha deve ter pelo menos 8 digitos").required("Informe sua senha"),
    Cpf_fornecedor: yup.string().length(14,"Digite um CNPJ valido").required("Informe um CNPJ"),
    Celular_fornecedor: yup.string().min(10,"Digite um telefone valido com DDD").max(11,"Digite um numero valido com DDD Exemplo: 13974209777").required("Informe seu numero"),
    Tipo_servico_fonercedor: yup.string().required('Selecione uma categoria')
})





export default function CadForn() {

   const { control, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
   })
    const [hidePass, setHidePass] = useState(true);
    const [opacidade] = useState(new Animated.Value(1));
    const navigation = useNavigation();

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

   async function cadastroFor(data){
        try {
            await axios.post('http://192.168.15.90:3000/api/fornecedor', data)
               alert('Fornecedor Cadastrado')
               navigation.navigate('Login')
           } catch (errors) {
               console.log('erro: ', errors)
               console.log(' ')
               console.log('Esta sendo enviado:', data)
           }
           
       return data;
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
            <TouchableOpacity onPress={() => navigation.navigate('Caduser')}>
                <Ionicons name="ios-arrow-back-circle" size={45} color="#fff"  />    
            </TouchableOpacity>
    </Animated.View>
<KeyboardAvoidingView style={[styles.container, ]}>
   
   <Controller
   control={control}
   name='Razao_social_fornecedor'
   render={({ field: {onChange, value}}) => (
    <InputWithIcon 
    placeholder='Nome da empresa'
    autoCorrect={true}
    value={value}
    onChangeText={onChange}
    icon="ios-business"
    style={ [styles.inputWithIcon,{borderWidth:errors.Razao_social_fornecedor && 1, borderColor: errors.Razao_social_fornecedor && '#ff375b', padding: errors.Razao_social_fornecedor && 5,}]} />
   )}
   />
    {errors.Razao_social_fornecedor && <Text style={styles.error}>{errors.Razao_social_fornecedor?.message}</Text>}

        <Controller
        control={control}
        name='Email_fornecedor'
        render={({ field: {onChange, value}}) => (
            <InputWithIcon 
            placeholder='Email'
            autoCorrect={true}
            value={value}
            onChangeText={onChange}
            icon="ios-mail"
            style={ [styles.inputWithIcon, {borderWidth:errors.Email_fornecedor && 1, borderColor: errors.Email_fornecedor && '#ff375b', padding: errors.Email_fornecedor && 5,}]} />
       )}
   />
   {errors.Email_fornecedor && <Text style={styles.error}>{errors.Email_fornecedor?.message}</Text>}
       
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
        name='Celular_fornecedor'
        render={({ field: {onChange, value}}) => (
            <InputWithIcon 
            placeholder='Celular'
            autoCorrect={false}
            icon="ios-call-sharp"
            value={value}
            onChangeText={onChange}
            keyboardType="numeric" 
            style={ [styles.inputWithIcon, {borderWidth:errors.Celular_fornecedor && 1, borderColor: errors.Celular_fornecedor && '#ff375b', padding: errors.Celular_fornecedor && 5,}]}/>
    )}
    />
    {errors.Celular_fornecedor && <Text style={styles.error}>{errors.Celular_fornecedor?.message}</Text>}
    
        <Controller
        control={control}
        name='Cpf_fornecedor'
        render={({ field: {onChange, value}}) => (
            <InputWithIcon 
            placeholder='CNPJ'
            autoCorrect={false}
            icon="document-text"
            value={value}
            onChangeText={onChange}
            keyboardType="numeric" 
            style={ [styles.inputWithIcon, {borderWidth:errors.Cpf_fornecedor && 1, borderColor: errors.Cpf_fornecedor && '#ff375b', padding: errors.Cpf_fornecedor && 5,}]}
            />
    )}
    />
    {errors.Cpf_fornecedor && <Text style={styles.error}>{errors.Cpf_fornecedor?.message}</Text>}

        <Controller
        control={control}
        name='Tipo_servico_fonercedor'
        render={({ field: {onChange, value}}) => (
            <View style={styles.container2}>
            <View style={styles.inputArea}>
            <TouchableWithoutFeedback>
            <Ionicons style={styles.icon} name="briefcase" size={22} color="#0D9D89" />
            </TouchableWithoutFeedback>
                <Picker style={[styles.select, {borderWidth:errors.Tipo_servico_fonercedor && 1, borderColor: errors.Tipo_servico_fonercedor && '#ff375b', padding: errors.Tipo_servico_fonercedor && 5,}]} selectedValue={value} onValueChange={onChange}>
                    <Picker.Item style={styles.selectItem} label='Categoria de negocio' disabled/>
                    <Picker.Item style={styles.selectItem} label='Local' value='Local'/>
                    <Picker.Item style={styles.selectItem} label='Buffet' value='Buffet'/>
                    <Picker.Item style={styles.selectItem} label='Entretenimento' value='Entretenimento'/>
                    <Picker.Item style={styles.selectItem} label='Brinquedo' value='Brinquedo'/>
                </Picker>
            </View>
        </View>
        )}
        />
        {errors.Tipo_servico_fonercedor && <Text style={styles.error}>{errors.Tipo_servico_fonercedor?.message}</Text>}
    <TouchableOpacity style={styles.btn} onPress={handleSubmit(cadastroFor)}>
        <Text style={styles.btntext}>Registrar</Text>
    </TouchableOpacity>
    
</KeyboardAvoidingView>
</Pressable>
  )
}
