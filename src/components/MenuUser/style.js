import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  fundo: {
    height: "100%",
  },
  linha1: {
    paddingLeft: 5,
    flexDirection: "row",
  },
  caixas: {
    alignContent: "center",
    alignSelf: "center",
    paddingLeft: 3,
  },
  txtnome: {
    fontStyle: "normal",
    fontSize: 18,
    lineHeight: 20,
    fontWeight: "bold",
  },
  txtmail: {
    fontStyle: "normal",
    fontSize: 16,
  },
  opç: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 10,
  },
  opçSair: {
    flexDirection: "row",
    paddingVertical: 15,
    paddingLeft: 10,
    position: "absolute",
    top: 400,
  },
  txtop: {
    color: "#454A4D",
    fontSize: 16,
  },
  CardOpç: {
    marginTop: "20%",
    height: "100%",
  },
});

export default styles;
