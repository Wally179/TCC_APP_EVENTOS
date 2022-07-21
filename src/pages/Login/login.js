import React, {useState, useEffect} from 'react';
import { KeyboardAvoidingView, TouchableOpacity, Text, Pressable, Keyboard, StatusBar, Animated, View, TouchableWithoutFeedback, TextInput} from 'react-native';
import InputWithIcon from '../../components/InputImage/InputIcon.js'
import { Ionicons } from '@expo/vector-icons';
import styles from "./style";

export default function Login() {
  
  const [offset] = useState(new Animated.ValueXY({x: 0, y:95}));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({x:196, y: 178}));
  const [email, setEmail] =  useState('');
  const [senha, setSenha] = useState('');
  const [hidePass, setHidePass] = useState(true);

  useEffect(()=> {
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', keyboardDidShow);
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', keyboardDidHide);
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness:15,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration:350,
        useNativeDriver: true,
      })
    ]).start();
    
  }, []);
  
  function keyboardDidShow(){

    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 92,
        duration:100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 85,
        duration:100,
        useNativeDriver: false,
      }),
    ]).start();
  }
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 196,
        duration:100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 178,
        duration:100,
        useNativeDriver: false,
      }),
    ]).start();
  }
  
  return (
    
    <Pressable onPress={Keyboard.dismiss} style={styles.fundo}>
      <StatusBar translucent={true} backgroundColor={'transparent'} />
     
      
      <KeyboardAvoidingView style={styles.viewlogo} >
        <TouchableOpacity style={styles.voltar}>
        <Ionicons name="ios-arrow-back-circle" size={45} color="#fff" />
        </TouchableOpacity>

        <Animated.Image source={require('../../../img/logoapp2.png') } style={{width:logo.x, height:logo.y,}}/>
        
        <Text style={styles.Textnome}>Clube da luta infantil</Text>
        <Text style={styles.Textfrase}>1 regra do Clube da luta infantil é não falar do Clube da luta infantil</Text>
      
      </KeyboardAvoidingView>

      <Animated.View style={[styles.container,{
        opacity: opacity,
        transform: [
          {translateY:offset.y}
        ]
      }]}>

      <Text style={styles.textlogo}>Preencha suas Informações de login</Text>
      
      <InputWithIcon
            placeholder='Email'
            autoCorrect={true}
            Value={email}
            onChangeText={(texto)=>setEmail(texto)}
            icon="person-circle-sharp" />
      

      <View style={styles.container2}>
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


      <KeyboardAvoidingView style={styles.esqueceu}>
        <TouchableOpacity style={styles.EsqueceuSenha}>
          <Text style={styles.EsqueceuSenhaText}>Esqueceu sua senha?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.btntext}>Entrar</Text>
      </TouchableOpacity>
      
      </Animated.View>
    </Pressable>
  );
}

