import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from "expo-router";

const API_BASE_URL = "http://localhost:3333/user/autocadastro";

const SelfRegistrationScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cpf, setCpf] = useState("");
  const [endereco, setEndereco] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const response = await axios.post(API_BASE_URL, {
        name,
        email,
        telefone,
        cpf,
        endereco,
        password,
      });

      if (response.status === 200) {
        console.log("Registration successful:", response.data);
        navigation.navigate("login");
      }
    } catch (error) {
      // Handle error, e.g., display an error message
      console.error("Error during registration:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Autocadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        onChangeText={(text) => setTelefone(text)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="CPF"
        onChangeText={(text) => setCpf(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Endereco"
        onChangeText={(text) => setEndereco(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});

export default SelfRegistrationScreen;
