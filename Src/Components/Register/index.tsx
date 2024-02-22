import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const onPress = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.th}>Registration</Text>
      </View>
      <ScrollView>
        <View style={styles.u}>
          <Text style={styles.name}> Name </Text>
        </View>
        <TextInput
          placeholder='Masukkan nama lengkap anda'
          style={styles.in2}
          value={name}
          onChangeText={setName}
        />
        <View style={styles.u}>
          <Text style={styles.username}> Username </Text>
        </View>
        <TextInput
          placeholder='Masukkan username anda'
          style={styles.in2}
          value={username}
          onChangeText={setUsername}
        />
        <View style={styles.u}>
          <Text style={styles.email}> Email </Text>
        </View>
        <TextInput
          placeholder='Masukkan email anda'
          style={styles.in2}
          value={email}
          onChangeText={setEmail}
        />
        <View style={styles.u}>
          <Text style={styles.address}> Address </Text>
        </View>
        <TextInput
          placeholder='Masukkan alamat anda'
          style={styles.in2}
          value={address}
          onChangeText={setAddress}
        />
        <View style={styles.u}>
          <Text style={styles.number}> Phone Number </Text>
        </View>
        <TextInput
          placeholder='Masukkan Nomor telepon anda'
          style={styles.in2}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType='numeric'
        />
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.sign}>Register</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  header:{
    marginBottom:50,
    marginTop:25,
    marginLeft:10,
  },
  th:{
    fontSize:35,
    fontWeight:'bold',
    color:'black'
  },
  name:{
    fontWeight:'bold',
    marginLeft:4,
    fontSize:20,
    color:'black',
  },
  username:{
    fontWeight:'bold',
    marginLeft:4,
    fontSize:20,
    color:'black',
  },
  email:{
    fontWeight:'bold',
    marginLeft:4,
    fontSize:20,
    color:'black',
  },
  address:{
    fontWeight:'bold',
    marginLeft:4,
    fontSize:20,
    color:'black',
  },
  number:{
    fontWeight:'bold',
    marginLeft:4,
    fontSize:20,
    color:'black',
    
  },
  in2:{
    height: 50,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius:10,
    marginBottom: 16,
    marginLeft:9,
    paddingLeft: 10,
    width: '95%',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#a740e3',
    padding: 10,
    marginTop:30,
    width:'95%',
    height: 50,
    borderRadius:15,
    marginLeft:9,
  },
  sign:{
    paddingTop:4,
    color:'white',
    fontSize: 20,
  },
});

export default App;