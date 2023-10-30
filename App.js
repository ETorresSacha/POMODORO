import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';

const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"]

export default function App() {
  const [isWorking, setIsWorking] = useState(false)
  const [time, setTime] = useState(25*60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" |"BREAK")

  return (
    <SafeAreaView style={[styles.container, {backgroundColor:colors[currentTime]}]}>
      <View style={{paddingTop: Platform.OS === "android" && 30}}>
      <Text style={styles.text}>POMODORO</Text>
      <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
      <Timer time={time}/>
      <StatusBar style="auto" />
      </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    fontSize:32,
    fontWeight:"bold"
  }
});
