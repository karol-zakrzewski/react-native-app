import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Avatar from "../avatar/Avatar";
import Energy from "../energy/Energy";

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerInner}>
        <Text style={styles.title}>Health</Text>
        <Text style={styles.subtitle}>Your body condition</Text>
      </View>
      <View style={styles.iconContainer}>
        <Energy />
        <Avatar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  containerInner: {
    marginLeft: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
  },
  title: {
    color: "#293C32",
    fontSize: 28,
  },
  subtitle: {
    color: "#97A98F",
    fontSize: 16,
  },
});

export default Header;
