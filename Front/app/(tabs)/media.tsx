import React, { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";

export default function Form() {
  const [media_1, setMedia_1] = useState("");
  const [media_2, setMedia_2] = useState("");
  const [mediaFinal, setMediaFinal] = useState("");

  function mediaFinalCalculator() {
    let m1: number = parseFloat(media_1);
    let m2: number = parseFloat(media_2);
    let mf: number = (m1 + m2) / 2;
    setMediaFinal(mf.toFixed(2).toString());
  }

  function validationMediaFinal() {
    if (!media_2 !== null && media_1 !== null) {
      mediaFinalCalculator();
      resetInput();
    } else {
      setMediaFinal("");
    }
  }

  function resetInput() {
    setMedia_1("");
    setMedia_2("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Média</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Text>Media 1</Text>
      <TextInput
        value={media_1}
        keyboardType="numeric"
        placeholder="Insira a primeira media"
        onChangeText={setMedia_1}
        style={styles.input}
      />
      <Text>Media 2</Text>
      <TextInput
        value={media_2}
        keyboardType="numeric"
        placeholder="Insira a segunda media"
        onChangeText={setMedia_2}
        style={styles.input}
      />
      <Button
        title="Calcular Media Final"
        onPress={() => validationMediaFinal()}
      />
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
        {mediaFinal}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  input: {
    color: "#fff",
    textAlign: "center",
    borderColor: "#fff",
    borderWidth: 1,
  },
});
