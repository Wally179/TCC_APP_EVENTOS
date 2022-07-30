import React, {useState, useEffect} from 'react'
import { useForm, Controller} from 'react-hook-form'
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup'
import { KeyboardAvoidingView, TouchableOpacity, Text, Pressable, Keyboard, StatusBar, Animated, View, TouchableWithoutFeedback, TextInput, Image} from 'react-native';
import InputWithIcon from '../../components/InputImage/InputIcon.js'
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";
import {Picker} from '@react-native-picker/picker';
import {NavigationRouteContext, useNavigation} from '@react-navigation/native'

const schema = yup.object({
    Fornecedor: yup.string().required("Informe o seu nome"),
    Email: yup.string().email("Email Invalido").required("Informe seu Email"),
    Senha: yup.string().min(8,"A senha deve ter pelo menos 8 digitos").required("Informe sua senha"),
    CNPJ: yup.string().length(14,"Digite um CNPJ valido").required("Informe um CNPJ"),
    Celular: yup.string().min(10,"Digite um telefone valido com DDD").max(11,"Digite um numero valido com DDD Exemplo: 13974209777").required("Informe seu numero"),
    Categoria: yup.string().required('Selecione uma categoria')
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

    function cadastroFor(data){
        console.log(data);
    }

    return (
    
<Pressable onPress={Keyboard.dismiss} style={styles.fundo}>
<StatusBar translucent={true} backgroundColor={'transparent'} /> 
    <Animated.View style={[styles.voltar2,{
        opacity: opacidade,
      }]}>
            <Image source={require('../../../img/logoapp2.png')} style={{width:92, height: 92}} /> 
    </Animated.View>
    <Animated.View style={[styles.voltar,{
        opacity: opacidade,
      }]}>
            <TouchableOpacity>
                <Ionicons name="ios-arrow-back-circle" size={45} color="#fff" onPress={() => navigation.navigate('Caduser')} />    
            </TouchableOpacity>
    </Animated.View>
<KeyboardAvoidingView style={[styles.container, ]}>
   
   <Controller
   control={control}
   name='Fornecedor'
   render={({ field: {onChange, value}}) => (
    <InputWithIcon 
    placeholder='Nome da empresa'
    autoCorrect={true}
    value={value}
    onChangeText={onChange}
    icon="ios-business"
    style={ [styles.inputWithIcon,{borderWidth:errors.Fornecedor && 1, borderColor: errors.Fornecedor && '#ff375b', padding: errors.Fornecedor && 5,}]} />
   )}
   />
    {errors.Fornecedor && <Text style={styles.error}>{errors.Fornecedor?.message}</Text>}

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
        name='CNPJ'
        render={({ field: {onChange, value}}) => (
            <InputWithIcon 
            placeholder='CNPJ'
            autoCorrect={false}
            icon="document-text"
            value={value}
            onChangeText={onChange}
            keyboardType="numeric" 
            style={ [styles.inputWithIcon, {borderWidth:errors.CNPJ && 1, borderColor: errors.CNPJ && '#ff375b', padding: errors.CNPJ && 5,}]}
            />
    )}
    />
    {errors.CNPJ && <Text style={styles.error}>{errors.CNPJ?.message}</Text>}

        <Controller
        control={control}
        name='Categoria'
        render={({ field: {onChange, value}}) => (
            <View style={styles.container2}>
            <View style={styles.inputArea}>
            <TouchableWithoutFeedback>
            <Ionicons style={styles.icon} name="briefcase" size={22} color="#0D9D89" />
            </TouchableWithoutFeedback>
                <Picker style={[styles.select, {borderWidth:errors.Categoria && 1, borderColor: errors.Categoria && '#ff375b', padding: errors.Categoria && 5,}]} selectedValue={value} onValueChange={onChange}>
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
        {errors.Categoria && <Text style={styles.error}>{errors.Categoria?.message}</Text>}
    <TouchableOpacity style={styles.btn} onPress={handleSubmit(cadastroFor)}>
        <Text style={styles.btntext}>Registrar</Text>
    </TouchableOpacity>
    
</KeyboardAvoidingView>
</Pressable>
  )
}
