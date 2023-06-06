import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [counter, setCounter] = React.useState(0);
  
  function doit(){
    let sum = Number(counter) + 1;
    setCounter(sum)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.elso}>Counter</Text>
      <View><Text style={styles.elso}>{counter}</Text></View>
      <Button title='Count' onPress={doit}/> 
      <Button title='zero' onPress={() => setCounter(0)}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008',
    alignItems: 'center',
    justifyContent: 'center',
  },
  elso: {
    color: '#fff',
    fontSize: 30,
  },
  input: {
    width: '90%',
    backgroundColor: 'white',
    fontSize: 30,
  },
});
