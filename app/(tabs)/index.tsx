import React from 'react'
import {Link} from 'expo-router'
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export default function index() {
  return (
<ScrollView>
<View style={styles.contenedorprincipal}></View>

    <View>
      <Text style={styles.titulo}>Bien venido</Text>
      <Text style={{textAlign:'center',fontSize:40, color:'purple'}}>Login</Text>
    </View>
    <View style={{marginTop:35}}>
    <TextInput style={styles.input} placeholder='Usuario'/>
    <TextInput style={styles.input} placeholder='Password'
    secureTextEntry/>
    </View>

 <View>
  <View style={{flexDirection:'row', marginTop:20}}>
      <TouchableOpacity style={styles.button1}>Login</TouchableOpacity>
  </View>
  <View>
      <View style={{flexDirection:'row', marginTop:20}}>
        <TouchableOpacity style={styles.button2}>Register</TouchableOpacity>
      </View>
  </View>

  <Link href="/crearcuenta">Crear cuenta</Link>
</View>
</ScrollView>
  )
}


const styles = StyleSheet.create({
  contenedorprincipal:{
    marginTop:120,
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    },
  titulo:{
    fontSize:50,
    textAlign:'center',
    fontWeight:'bold',
  },
  input:{
    margin:8,
    backgroundColor:'white',
    fontSize:25,
    borderRadius:8,
    padding:6,
    borderWidth:2,
    borderColor:'purple',
  },
  contenedorbutton:{
    marginTop:20,
    padding:8
  },
  button1:{
  backgroundColor:'purple',
  color:'white',
  padding:10,
  borderRadius:30,
  width:150,
  textAlign:'center',  
  },
  button2:{
  backgroundColor:'#9B7EBD',
  color:'white',
  padding:10,
  borderRadius:30,
  width:150,
  textAlign:'center',  
  },
})