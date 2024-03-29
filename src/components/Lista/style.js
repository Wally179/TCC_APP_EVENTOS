import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  item: {
    flex: 1,
    backgroundColor: "#31B1B9",
    paddingHorizontal: 20,
    paddingBottom: 15,
    marginTop: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  linha: {
    flexDirection: "row",
    width: "100%",
  },
  textItem: {
    fontSize: 16,
    width: "95%",
    color: "#fff",
    marginTop: 7,
    left: 5,
    paddingBottom: 2,
  },
  Num: {
    height: 35,
    width: 35,
    fontSize: 15,
    color: "#31B1B9",
    fontWeight: "bold",
    position: "absolute",
    top: "20%",
    left: "35%",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    height: 35,
    width: 35,
  },
  Rate: {
    height: 35,
    width: 35,
  },
  logo: {
    width: "35%",
    height: 100,
    borderColor: "#E8F6F7",
    borderWidth: 1,
    borderRadius: 20,
    marginRight: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  logoconte: {
    width: "100%",
    height: "100%",
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  linha2: {
    flexDirection: "row",
    marginTop: 1,
    width: "100%",
  },
  container: {
    backgroundColor: "#E8F6F7",
    marginLeft: 10,
    padding: 5,
    borderRadius: 10,
    top: 10,
    width: "60%",
  },
  conteudo: {
    color: "#31B1B9",
  },
  ver: {
    color: "#31B1B9",
    fontWeight: "bold",
    position: "absolute",
    left: "72%",
    bottom: -2,
  },
  valor: {
    left: -15,
    color: "#E8F6F7",
    width: "80%",
    top: 12,
  },
});

export default styles;
