import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Energy = () => {
  return (
    <View style={styles.container}>
      <Text>Energy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    opacity: 100,
  },
});

export default Energy;
