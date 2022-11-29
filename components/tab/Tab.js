import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
const Tab = () => {
  return (
    <View style={styles.container}>
      <View style={styles.heading}>
        <Text>Risk of developing diabetes over 10 years</Text>
        <Text style={styles.barLabel}>Low</Text>
      </View>

      <LinearGradient
        colors={["#86CC5B", "#FFC736", "#FD7D36", "#F93B12"]}
        style={styles.linearGradient}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
      ></LinearGradient>
      <TouchableOpacity style={styles.btn}>
        <Text style={styles.text}>Learn more</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  text: {
    color: "#97A98F",
  },
  heading: {
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    fontSize: 24,
    borderRadius: 10,
  },
  linearGradient: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 10,
    margin: 20,
  },
  barLabel: {
    color: "#B7B232",
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default Tab;
