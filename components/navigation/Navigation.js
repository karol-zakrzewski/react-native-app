import { StyleSheet, View, Text, Image } from "react-native";

const Navigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <Image source={require("../../assets/img/calendar.png")} />
        <Text>My plan</Text>
      </View>
      <View style={styles.icon}>
        <Image source={require("../../assets/img/tools.png")} />
        <Text>Insights</Text>
      </View>
      <View style={styles.icon}>
        <Image source={require("../../assets/img/health.png")} />
        <Text>Health</Text>
      </View>
      <View style={styles.icon}>
        <Image source={require("../../assets/img/awards.png")} />
        <Text>Awards</Text>
      </View>
      <View style={styles.icon}>
        <Image source={require("../../assets/img/Lined.png")} />
        <Text>Chatting</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: "#fff",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    color: "#92A09F",
  },
  icon: {
    alignItems: "center",
  },
});

export default Navigation;
