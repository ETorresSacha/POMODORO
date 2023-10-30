import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Timer = ({ time }) => {
  return (
    <View style={styles.container}>
      <Text>{time}gola</Text>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F2F2F2",
    padding: 15,
    borderRadius: 15,
  },
});
