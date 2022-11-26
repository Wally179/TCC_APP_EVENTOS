import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  item: {
    alignItems: "center",
    position: "absolute",
    borderRadius: 100,
  },
  btn: {
    position: "absolute",
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 10,
    shadowColor: "#0F383B",
    shadowOpacity: 0.3,
    shadowOffset: { height: 10 },
    backgroundColor: "#2A6AC7",
    borderWidth: 1,
    borderColor: "#34BDC7",
  },
  submenu: {
    width: 55,
    height: 55,
    borderRadius: 55 / 2,
    backgroundColor: "#2A6AC7",
    borderWidth: 1,
    borderColor: "#34BDC7",
  },
});

export default styles;
