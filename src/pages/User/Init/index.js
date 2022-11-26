import React, { useEffect, useState } from "react";
import {
  View,
  FlatList,
  Text,
  Pressable,
  Keyboard,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Lista from "../../../components/Lista/Lista";
import styles from "./style";
import axios from "axios";

const { height, width } = Dimensions.get("screen");

export default function Init() {
  useEffect(() => {
    loadApi();
  }, []);
  const navigation = useNavigation();

  const baseURL = "http://192.168.15.90:3000/api/produto/forncedor/";
  const basePesq = "http://192.168.15.90:3000/api/produtos/fornecedor/";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [pesquisado, setPesquisado] = useState("");
  const [selecionado, setSelecionado] = useState("Buffet");
  const [op, setOp] = useState([
    { id: 1, cate: "Buffet", ico: "cake" },
    { id: 2, cate: "Fotografia", ico: "camera" },
    { id: 3, cate: "Decoração", ico: "balloon" },
    { id: 4, cate: "Local", ico: "warehouse" },
    { id: 5, cate: "Diversão", ico: "party-popper" },
  ]);

  async function pesquisa() {
    await axios.get(basePesq + pesquisado).then((response) => {
      setData(response.data);
      setSelecionado("Pesquisando por " + pesquisado);
    });
  }

  async function loadApi() {
    if (loading) return;
    setLoading(true);
    const response = await axios.get(baseURL + selecionado + "/page/" + page);
    setData([...data, ...response.data]);
    setPage(page + 1);
    setLoading(false);
  }

  function Footerlist({ Load }) {
    if (!Load) return null;

    return (
      <View>
        <ActivityIndicator size={25} color="black" />
      </View>
    );
  }

  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.fundo}>
      <View style={styles.superior}>
        <View style={[styles.linha]}>
          <View style={styles.inputcontainer}>
            <TextInput
              placeholder="Pesquisa"
              placeholderTextColor="#E8F6F7"
              style={styles.input}
              onChangeText={(pesquisado) => setPesquisado(pesquisado)}
              defaultValue={pesquisado}
            ></TextInput>
            <TouchableOpacity
              style={styles.seach}
              onPress={() => {
                pesquisa(pesquisado);
              }}
            >
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
        <Text style={styles.categoriatxt}>Categoria</Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={op}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.horizontal}
              onPressIn={() => {
                setSelecionado(item.cate), setData([]), setPage(1);
              }}
              onPressOut={() => {
                loadApi(selecionado, data);
              }}
            >
              <MaterialCommunityIcons
                name={item.ico}
                size={40}
                color="#31B1B9"
              />
              <Text style={styles.center}>{item.cate}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View style={[styles.container, {}]}>
        <FlatList
          ListHeaderComponent={
            <Text style={styles.categoria}>{selecionado}</Text>
          }
          ListHeaderComponentStyle={{ marginTop: 40 }}
          ListFooterComponentStyle={{ marginBottom: height / 2 }}
          contentContainerStyle={{ marginHorizontal: 25 }}
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <Lista data={item} />}
          onEndReached={loadApi}
          onEndReachedThreshold={0.2}
          ListFooterComponent={<Footerlist Load={loading} />}
        />
      </View>
    </Pressable>
  );
}
