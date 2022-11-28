import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../components/avatar/Avatar";
import Energy from "../components/energy/Energy";

const Home = () => {
  return (
    <View style={styles.container}>
      <View>
        <Avatar />
      </View>
      {/* <View>
        <Energy />
      </View> */}
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
