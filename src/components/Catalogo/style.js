import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  item: {
    flex: 1,
    paddingBottom: 15,
    marginTop: 15,
    borderRadius: 10,
    borderTopWidth: 1,
    paddingTop: 10,
    borderColor: "#31B1B9",
  },
  linha: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  titulo: {
    color: "#31B1B9",
    fontWeight: "bold",
    fontSize: 18,
  },
  conteudo: {
    color: "#7C7C7A",
    paddingBottom: 15,
  },
  preço: {
    color: "#585CE5",
    position: "absolute",
    bottom: 0,
    left: 5,
  },
  container: {
    padding: 5,
    width: "70%",
    paddingBottom: 15,
  },
});

export default styles;
