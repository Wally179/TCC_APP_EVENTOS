import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#31B1B9",
    height: "100%",
    width: "100%",
  },
  superior: {
    height: "45%",
  },
  linha1: {
    width: "100%",
    height: "20%",
    marginTop: "5%",
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: "#E8F6F7",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  linha2: {
    width: "100%",
    height: "70%",
    paddingHorizontal: 15,
    flexDirection: "row",
  },

  infos: {
    width: "60%",
    height: "95%",
    padding: 10,
  },
  titulo: {
    fontSize: 19,
    lineHeight: 29,
    color: "#E8F6F7",
  },
  categoria: {
    fontSize: 16,
    lineHeight: 20,
    color: "#E8F6F7",
    marginLeft: 3,
  },
  IconInfo: {
    width: 50,
    height: 50,
    backgroundColor: "#E8F6F7",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  infoIcon1: {
    flexDirection: "row",
    marginVertical: 20,
  },
  infoIcon2: {
    flexDirection: "row",
  },
  IconTXT: {
    fontSize: 16,
    lineHeight: 20,
    color: "#E8F6F7",
  },
  TXTContainer: {
    paddingHorizontal: 10,
    justifyContent: "space-evenly",
  },
  container: {
    height: "55%",
    backgroundColor: "#E8F6F7",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  container1: {
    width: "100%",
    marginTop: 10,
  },
  container2: {
    width: "80%",
    marginBottom: 70,
    alignSelf: "center",
  },
  descri: {
    color: "#7C7C7A",
    marginTop: 5,
  },
  titulos: {
    fontSize: 16,
    lineHeight: 21,
    marginTop: 10,
  },
  botao: {
    position: "absolute",
    width: "90%",
    height: 70,
    backgroundColor: "#585CE5",
    bottom: -5,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
  },
  btntxt: {
    color: "#E8F6F7",
    fontSize: 17,
    lineHeight: 21,
  },
  btntxt2: {
    color: "#E8F6F7",
    fontSize: 13,
  },
  map: {
    width: "100%",
    height: 250,
    marginTop: 5,
  },
  ImagemSlide: {
    maxWidth: "100%",
    height: "95%",
    borderRadius: 15,
  },
  slide: {
    maxWidth: "100%",
    height: "100%",
  },
  containerslide: {
    width: "40%",
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },
});

export default styles;
