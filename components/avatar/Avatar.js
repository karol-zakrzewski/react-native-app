import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";

const Avatar = () => {
  return (
    <View style={styles.avatar}>
      <Ionicons name="person" size={24} color="black" />
    </View>
  );
};

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
  },
});

export default Avatar;
