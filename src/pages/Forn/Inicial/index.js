import React, { useState } from "react";
import {
  View,
  FlatList,
  Text,
  Pressable,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Animated,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./style";
import SolicitaForn from "../../../components/FornSlider";
import Carousel from "react-native-snap-carousel-v4";
import AndaForn from "../../../components/FornFlat";

const { height, width } = Dimensions.get("screen");

export default function Forn() {
  const navigation = useNavigation();
  const baseURL = "";
  const perPage = 12;

  const [data, setData] = useState([
    {
      id: 1,
      nome: "Wallace",
      Local: "Rua dr joaquim coutinho marques",
      img: require("../../../../img/logoapp.png"),
      hora: "Quinta 23 de trezembro das 14 as 23",
    },
  ]);
  const [opi, setOpi] = useState([
    {
      id: 1,
      nome: "Wallace",
      Local: "Rua dr joaquim coutinho marques",
      img: require("../../../../img/logoapp.png"),
      hora: "Quinta 23 de trezembro das 14 as 23",
    },
    {
      id: 2,
      nome: "Wallace",
      Local: "Rua dr joaquim coutinho marques",
      img: require("../../../../img/logoapp.png"),
      hora: "Quinta 23 de trezembro das 14 as 23",
    },
    {
      id: 3,
      nome: "Wallace",
      Local: "Rua dr joaquim coutinho marques",
      img: require("../../../../img/logoapp.png"),
      hora: "Quinta 23 de trezembro das 14 as 23",
    },
    {
      id: 4,
      nome: "Wallace",
      Local: "Rua dr joaquim coutinho marques",
      img: require("../../../../img/logoapp.png"),
      hora: "Quinta 23 de trezembro das 14 as 23",
    },
    {
      id: 5,
      nome: "Wallace",
      Local: "Rua dr joaquim coutinho marques",
      img: require("../../../../img/logoapp.png"),
      hora: "Quinta 23 de trezembro das 14 as 23",
    },
    {
      id: 6,
      nome: "Wallace",
      Local: "Rua dr joaquim coutinho marques",
      img: require("../../../../img/logoapp.png"),
      hora: "Quinta 23 de trezembro das 14 as 23",
    },
  ]);

  const [scrollY, setScrollY] = useState(new Animated.Value(0));

  function renderItem({ item }) {
    return <SolicitaForn data={opi} />;
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.fundo}>
      <Animated.View
        style={[
          styles.superior,
          {
            height: scrollY.interpolate({
              inputRange: [10, 185],
              outputRange: [height / 2.5, 0],
              extrapolate: "clamp",
            }),
          },
          {
            opacity: scrollY.interpolate({
              inputRange: [1, 75, 170],
              outputRange: [1, 1, 0],
              extrapolate: "clamp",
            }),
          },
        ]}
      >
        <View style={[styles.linha]}>
          <View style={styles.inputcontainer}>
            <TextInput
              placeholder="Pesquisa"
              placeholderTextColor="#E8F6F7"
              style={styles.input}
            ></TextInput>
            <TouchableOpacity style={styles.seach}>
              <Ionicons name={"md-search"} size={28} color="#E8F6F7" />
            </TouchableOpacity>
          </View>
          <View style={styles.menu}>
            <TouchableOpacity
              style={styles.icon}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            >
              <Ionicons name={"menu-sharp"} size={50} color="#E8F6F7" />
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.categoriatxt}>Solicitação de serviço</Text>

        <Carousel
          layout="tinder"
          layoutCardOffset={8}
          data={opi}
          sliderWidth={width}
          itemWidth={width}
          renderItem={renderItem}
          loop
        />
      </Animated.View>

      <FlatList
        style={styles.container}
        ListHeaderComponent={<Text style={styles.categoria}>Em andamento</Text>}
        ListHeaderComponentStyle={{ marginTop: 45 }}
        contentContainerStyle={{ marginHorizontal: 20 }}
        data={opi}
        renderItem={({ item }) => <AndaForn data={item} />}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: { y: scrollY },
              },
            },
          ],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={18}
        keyExtractor={(item) => String(item.id)}
      />
    </Pressable>
  );
}
