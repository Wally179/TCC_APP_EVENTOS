import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  item: {
    borderRadius: 20,
    marginHorizontal: 10,
    borderColor: "white",
    backgroundColor: "white",
    alignItems: "center",
    alignSelf: "center",
    flexDirection: "column",
  },
  linha: {
    marginTop: "5%",
    flexDirection: "row",
    width: "90%",
  },
  textTitulo: {
    fontSize: 18,
    paddingBottom: 2,
    fontWeight: "bold",
    color: "#31B1B9",
  },
  textSubTitulo: {
    fontSize: 15,
    paddingBottom: 2,
    width: "60%",
    fontFamily: "sans-serif",
    color: "#31B1B9",
  },
  titulo: {
    marginLeft: 15,
  },
  linha2: {
    flexDirection: "row",
    backgroundColor: "#31B1B9",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    paddingVertical: 5,
  },
  icon: {
    marginRight: 20,
  },
  white: {
    color: "white",
  },
});

export default styles;
