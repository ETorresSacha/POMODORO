import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import Header from './src/components/Header';
import Timer from './src/components/Timer';
import {Audio} from "expo-av"

const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"]

export default function App() {
  const [isWorking, setIsWorking] = useState(false)
  const [time, setTime] = useState(25*60)
  const [currentTime, setCurrentTime] = useState("POMO" | "SHORT" |"BREAK")
  const [isActive, setIsActive] = useState(false)


  useEffect(()=>{
    let interval = null
    if(isActive){
      //run timer
      interval = setInterval(()=>{
        setTime(time-1)

      },1000)
    }
    else{
      //clean timer
      clearInterval(interval)
      
    }
    if(time === 0){
      setIsActive(false)
      setIsWorking(prev => !prev)
      setTime(isWorking ? 300:1500)
    }
    return ()=>clearInterval(interval)
  },[isActive,time])

  const handleStartStop=()=>{
    playSound()
    setIsActive(!isActive)
  }

  const playSound = async()=>{
    const {sound} = await Audio.Sound.createAsync(
      require("./assets/click.mp3")
    )
    await sound.playAsync()

  }

  return (
    <SafeAreaView style={[styles.container, {backgroundColor:colors[currentTime]}]}>
      <View style={{ flex:1, paddingHorizontal:15, paddingTop: Platform.OS === "android" && 30}}>
      <Text style={styles.text}>POMODORO</Text>
      <Header currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
      <Timer time={time}/>
      <StatusBar style="auto" />
      <TouchableOpacity style={styles.button} onPress={handleStartStop}>
        <Text style={{color:"white", fontWeight:"bold"}}>
          {isActive ? "STOP" : "START"}
        </Text>
      </TouchableOpacity>
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
  },
  button:{
    alignItems:"center",
    backgroundColor:"#333333",
    padding:15,
    margin:15,
    borderRadius:15

  }
});
