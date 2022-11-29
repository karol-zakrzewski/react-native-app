import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Avatar from "../components/avatar/Avatar";
import Body from "../components/body/Body";
import Energy from "../components/energy/Energy";
import Header from "../components/header/Header";
import Navigation from "../components/navigation/Navigation";
import Tab from "../components/tab/Tab";

const Home = () => {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Body />
      <Tab />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
    justifyContent: "flex-end",
  },
});

export default Home;
