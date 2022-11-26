import React, { useState, useEffect } from "react";
import {
  Alert,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
  Pressable,
  Keyboard,
  StatusBar,
  Animated,
  View,
  TouchableWithoutFeedback,
  TextInput,
  BackHandler,
} from "react-native";
import InputWithIcon from "../../../components/InputImage/InputIcon.js";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  NavigationRouteContext,
  useNavigation,
} from "@react-navigation/native";
import axios from "axios";
const schema = yup.object({
  login_usuario: yup
    .string()
    .email("Email Invalido")
    .required("Informe seu Email"),
  senha_usuario: yup
    .string()
    .min(8, "A senha deve ter pelo menos 8 digitos")
    .required("Informe sua senha"),
});

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [offset] = useState(new Animated.ValueXY({ x: 0, y: 95 }));
  const [opacity] = useState(new Animated.Value(0));
  const [logo] = useState(new Animated.ValueXY({ x: 196, y: 178 }));
  const [hidePass, setHidePass] = useState(true);
  const navigation = useNavigation();
  const [res, setRes] = useState("");
  const [resUs, setResUs] = useState("");
  useEffect(() => {
    keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      keyboardDidShow
    );
    keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      keyboardDidHide
    );
    Animated.parallel([
      Animated.spring(offset.y, {
        toValue: 0,
        speed: 4,
        bounciness: 15,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 350,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  function keyboardDidShow() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 92,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 85,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }
  function keyboardDidHide() {
    Animated.parallel([
      Animated.timing(logo.x, {
        toValue: 196,
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(logo.y, {
        toValue: 178,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  }

  async function cadastroForApi(data) {
    await axios
      .post("http://192.168.15.90:3000/api/login/fornecedor", data)
      .then((response) => {
        setResUs(response.data.id_fornecedor);
        console.log(resUs);
        if (response.data.id_fornecedor == 0) {
          alert("Opção de login errada, tente novamente");
        } else {
          navigation.navigate("Forn", resUs);
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Falha ao fazer login, tente novamente");
      });
  }

  async function cadastroUserApi(data) {
    await axios
      .post("http://192.168.15.90:3000/api/login/usuario", data)
      .then((response) => {
        setRes(response.data.id_usuario);
        console.log(res);
        if (response.data.id_usuario == 0) {
          alert("Opção de login errada, tente novamente");
        } else {
          navigation.navigate("Init");
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Falha ao fazer login, tente novamente");
      });
  }

  async function cadastroFor(data) {
    Alert.alert("Tipo de conta", "Sua conta é uma conta:", [
      {
        text: "Fornecedor",
        onPress: () => {
          cadastroForApi(data);
        },
      },
      {
        text: "Cliente",
        onPress: () => {
          cadastroUserApi(data);
        },
      },
    ]);
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.fundo}>
      <StatusBar translucent={true} backgroundColor={"transparent"} />

      <KeyboardAvoidingView style={styles.viewlogo}>
        <TouchableOpacity
          style={styles.voltar}
          onPress={() => navigation.navigate("TelaInicial")}
        >
          <Ionicons name="ios-arrow-back-circle" size={45} color="#fff" />
        </TouchableOpacity>

        <Animated.Image
          source={require("../../../../img/logoapp.png")}
          style={{ width: logo.x, height: logo.y }}
        />

        <Text style={styles.Textnome}>Fast Fest</Text>
        <Text style={styles.Textfrase}>Sua diversão mais ágil</Text>
      </KeyboardAvoidingView>

      <Animated.View
        style={[
          styles.container,
          {
            opacity: opacity,
            transform: [{ translateY: offset.y }],
          },
        ]}
      >
        <Text style={styles.textlogo}>Preencha suas Informações de login</Text>
        <Controller
          control={control}
          name="login_usuario"
          render={({ field: { onChange, value } }) => (
            <InputWithIcon
              placeholder="Email"
              autoCorrect={true}
              value={value}
              onChangeText={onChange}
              icon="person-circle-sharp"
              style={[
                styles.inputWithIcon,
                {
                  borderWidth: errors.login_usuario && 1,
                  borderColor: errors.login_usuario && "#ff375b",
                  padding: errors.login_usuario && 5,
                },
              ]}
            />
          )}
        />
        {errors.login_usuario && (
          <Text style={styles.error}>{errors.login_usuario?.message}</Text>
        )}
        <Controller
          control={control}
          name="senha_usuario"
          render={({ field: { onChange, value } }) => (
            <View style={styles.container2}>
              <View style={styles.inputArea}>
                <TouchableWithoutFeedback>
                  <Ionicons
                    style={styles.icon}
                    name="lock-closed"
                    size={22}
                    color="#0D9D89"
                  />
                </TouchableWithoutFeedback>
                <TextInput
                  placeholder="Senha"
                  placeholderTextColor="#666"
                  style={[
                    styles.input,
                    {
                      borderBottomWidth: errors.senha_usuario && 1,
                      borderTopWidth: errors.senha_usuario && 1,
                      borderLeftWidth: errors.senha_usuario && 1,
                      borderColor: errors.senha_usuario && "#ff375b",
                      padding: errors.senha_usuario && 5,
                    },
                  ]}
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={hidePass}
                />
                <TouchableOpacity
                  style={[
                    styles.icon2,
                    {
                      borderBottomWidth: errors.senha_usuario && 1,
                      borderTopWidth: errors.senha_usuario && 1,
                      borderRightWidth: errors.senha_usuario && 1,
                      borderColor: errors.senha_usuario && "#ff375b",
                    },
                  ]}
                  onPress={() => setHidePass(!hidePass)}
                >
                  <Ionicons
                    name={hidePass ? "eye" : "eye-off"}
                    color="#0D9D89"
                    size={22}
                  />
                </TouchableOpacity>
              </View>
            </View>
          )}
        />
        {errors.senha_usuario && (
          <Text style={styles.error}>{errors.senha_usuario?.message}</Text>
        )}

        <KeyboardAvoidingView style={styles.esqueceu}>
          <TouchableOpacity
            style={styles.EsqueceuSenha}
            onPress={() => navigation.navigate("EsqSenha")}
          >
            <Text style={styles.EsqueceuSenhaText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </KeyboardAvoidingView>

        <TouchableOpacity
          style={styles.btn}
          onPress={handleSubmit(cadastroFor)}
        >
          <Text style={styles.btntext}>Entrar</Text>
        </TouchableOpacity>
      </Animated.View>
    </Pressable>
  );
}
