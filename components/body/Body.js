import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

const Body = () => {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.bodyImg}
          source={require("../../assets/img/body.png")}
        />
      </View>
      <View>
        <View style={styles.bmiContainer}>
          <Text style={styles.bmiValue}>23.2</Text>
          <Text style={styles.bmiLabel}>BMI</Text>
          <TouchableOpacity style={styles.bmiBtn}>
            <Text style={styles.bmiBtnText}>Normal</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bmiContainer}>
          <Text style={styles.bmiValue}>23.2</Text>
          <Text style={styles.bmiLabel}>BMI</Text>
          <TouchableOpacity style={styles.bmiWhr}>
            <Text style={styles.whrBtnText}>Normal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  bmiBtn: {
    backgroundColor: "#EEF3DF",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  bmiWhr: {
    backgroundColor: "#FFF0D2",
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 20,
  },
  bmiBtnText: {
    color: "#8FBD12",
  },
  whrBtnText: {
    color: "#FDA901",
  },
  bmiContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  bmiValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "293C32",
  },
  bmiLabel: {
    color: "293C32",
    fontSize: 16,
    marginBottom: 7,
  },
});

export default Body;
