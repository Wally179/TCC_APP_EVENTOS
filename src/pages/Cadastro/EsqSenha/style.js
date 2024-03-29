import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  fundo: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#31B1B9",
  },
  viewlogo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    width: "90%",
    marginTop: -20,
  },
  input: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    color: "#222",
    fontSize: 17,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#0D9D89",
    width: "90%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginTop: 20,
  },
  btntext: {
    color: "#fff",
    fontSize: 18,
  },
  textlogo: {
    fontStyle: "normal",
    fontSize: 20,
    lineHeight: 30,
    color: "#E8F6F7",
    paddingBottom: 10,
  },
  Textnome: {
    fontStyle: "normal",
    fontSize: 22,
    lineHeight: 30,
    color: "#E8F6F7",
    width: "100%",
    textAlign: "center",
  },
  Textfrase: {
    fontStyle: "italic",
    fontSize: 13,
    lineHeight: 20,
    color: "#E8F6F7",
    width: "100%",
    textAlign: "center",
  },
  voltar: {
    position: "absolute",
    left: 25,
    top: 55,
    width: 40,
    alignItems: "center",
  },
  container2: {
    backgroundColor: "#fff",
    width: "90%",
    marginBottom: 15,
    borderRadius: 15,
    color: "#222",
    fontSize: 17,
    flexDirection: "row",
    height: 50,
  },
  inputArea: {
    flexDirection: "row",
    width: "100%",
    borderRadius: 20,
    alignItems: "center",
    paddingLeft: 10,
    height: 50,
  },
  input: {
    width: "10%",
    flex: 1,
    fontSize: 14,
    color: "#666",
    height: 50,
  },
  icon: {
    justifyContent: "center",
    alignItems: "center",
    width: "10%",
  },
  icon2: {
    width: "20%",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
  },
  error: {
    alignSelf: "flex-start",
    color: "#ff375b",
    marginBottom: 8,
    marginLeft: 20,
    marginTop: -12,
    fontSize: 15,
  },
  inputWithIcon: {
    width: "90%",
    borderBottomRightRadius: 15,
    borderTopRightRadius: 15,
    height: 50,
    alignSelf: "center",
  },
});

export default styles;
