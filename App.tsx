import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,Text,View,ScrollView,TouchableOpacity} from 'react-native';
import Register from './Src/Components/Register';
import List from './Src/Components/List';


const App = () => {
  return (
    <View>
      <ScrollView>
      <Register/>
      </ScrollView>
    </View>
  )
}

const style = StyleSheet.create({
  header: {
      fontSize: 45, 
      color: 'black', 
      fontWeight:'bold', 
      textAlign:'left',
      margin: 20,
      marginLeft: 0,
      marginBottom: 5,
      padding: 10,
  },
})


export default App;