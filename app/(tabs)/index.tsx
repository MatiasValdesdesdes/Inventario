import { Link } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";


export default function Index() {
  return (
    <ScrollView>
      <View style={styles.contenedorprincipal}>
        <View>
          <Text style={styles.titulo}>Bienvenido</Text>
          <Text
            style={{
              textAlign: "center",
              fontSize: 45,
              color: "purple",
              marginTop: 15,
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </View>

        <View style={{ marginTop: 50 }}>
          <TextInput style={styles.input} placeholder="Usuario" />

          <TextInput
            style={styles.input}
            placeholder="Contraseña"
            secureTextEntry={true}
          />
        </View>

        <View
          style={{ flexDirection: "row", margin: 20, justifyContent: "center" }}
        >
          <View style={styles.contenedorBoton}>
            <TouchableOpacity style={styles.button1}>Login</TouchableOpacity>
          </View>
          <View style={styles.contenedorBoton}>
            <TouchableOpacity style={styles.button2}>
              Crear cuenta
            </TouchableOpacity>
          </View>
        </View>
        <Link href="/CrearCuenta">
          <Text style={{ color: "blue", textAlign: "center", marginTop: 20 }}>
            Crear cuenta
          </Text>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenedorprincipal: {
    flex: 1,
  },
  titulo: {
    fontSize: 60,
    textAlign: "center",
    fontWeight: "bold",
    backgroundColor: "purple",
    color: "white",
  },
  input: {
    fontSize: 20,
    margin: 15,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 10,
    padding: 7,
    backgroundColor: "white",
    color: "gray",
  },
  contenedorBoton: {
    borderRadius: 8,
    padding: 10,
    margin: 15,
    width: 150,
    alignItems: "center",
  },
  button1: {
    backgroundColor: "purple",
    borderRadius: 30,
    padding: 10,
    margin: 15,
    width: 150,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  button2: {
    backgroundColor: "#9B7EBD",
    borderRadius: 30,
    padding: 10,
    margin: 15,
    width: 150,
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});