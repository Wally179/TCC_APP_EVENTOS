import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  botao: {
    width: "100%",
    height: 70,
    backgroundColor: "#585CE5",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    position: "absolute",
    bottom: 0,
  },
  btntxt: {
    fontSize: 18,
    lineHeight: 24,
    color: "#E8F6F7",
    alignSelf: "center",
  },
  btntxt2: {
    fontSize: 20,
    lineHeight: 24,
    color: "#E8F6F7",
    alignSelf: "center",
  },
  bloco: {
    width: "20%",
  },
  bloco2: {
    width: "60%",
  },
  bloco3: {
    width: "20%",
  },
  contador: {
    fontSize: 18,
    lineHeight: 24,
    color: "#E8F6F7",
    alignSelf: "center",
    position: "absolute",
    bottom: -5,
  },
});

export default styles;
