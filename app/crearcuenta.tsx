import { Link } from "expo-router";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from "react-native";

export default function RegisterScreen() {
  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Crear Cuenta</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          autoCapitalize="none"
        />
        
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry
        />
        
        <TextInput
          style={styles.input}
          placeholder="Confirmar contraseña"
          secureTextEntry
        />
        
        <View style={styles.termsContainer}>
          <View style={styles.checkbox}>
            <View style={styles.checkboxInner} />
          </View>
          <Text style={styles.termsText}>
            Acepto los términos y condiciones
          </Text>
        </View>
        
        <TouchableOpacity style={styles.registerButton}>
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        
        <Link href="/home" asChild>
          <TouchableOpacity style={styles.loginLink}>
            <Text style={styles.loginLinkText}>
              ¿Ya tienes una cuenta? Inicia sesión
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    textAlign: 'center',
    marginVertical: 30,
  },
  input: {
    height: 50,
    borderColor: 'purple',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    fontSize: 16,
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkboxInner: {
    width: 14,
    height: 14,
    borderRadius: 2,
  },
  registerButton: {
    backgroundColor: 'purple',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginLinkText: {
    color: 'purple',
    fontSize: 16,
  },
  termsText: {
    fontSize: 14,
    color: '#333',
  },
});