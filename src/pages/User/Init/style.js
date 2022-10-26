import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  fundo: {
    backgroundColor: "#31B1B9",
    flex: 1,
  },
  superior: {
    
  },
  container: {
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
  categoria: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#31B1B9",
  },
  inputcontainer: {
    backgroundColor: "#86CED1",
    width: "75%",
    color: "#E8F6F7",
    fontSize: 17,
    borderRadius: 15,
    paddingLeft: 10,
    flexDirection: "row",
    height: 45,
    alignContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  input: {
    fontSize: 18,
    color: "#E8F6F7",
    width: "85%",
    height: "100%",
  },
  seach: {
    width: "15%",
  },
  linha: {
    marginTop: "10%",
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    paddingLeft: "4%",
  },
  menu: {
    width: "20%",
    flexDirection: "row-reverse",
  },
  icon: {
    width: "65%",
  },
  horizontal: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    backgroundColor: "#E8F6F7",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  center: {
    color: "#31B1B9",
    fontWeight: "bold",
  },
  categoriatxt: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    margin: "3%",
  },
});

export default styles;
