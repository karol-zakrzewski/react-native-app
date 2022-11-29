import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Energy = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/img/thunder.png")} />
      <Text style={styles.text}>1</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 30,
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    marginRight: 10,
  },
  text: { marginLeft: 5, fontWeight: "bold", fontSize: 12 },
  icon: {},
});

export default Energy;
