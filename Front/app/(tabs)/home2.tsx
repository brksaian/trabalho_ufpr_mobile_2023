import React, { useState } from "react";
import { TextInput, Button, StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { FlatList } from "react-native-gesture-handler";

export default function Home2() {
  const [color, setColor] = useState<string[]>([]);

  function geraCor() {
    let r: number = Math.floor(Math.random() * 255);
    let g: number = Math.floor(Math.random() * 255);
    let b: number = Math.floor(Math.random() * 255);
    let cor: string = `rgb(${r},${g},${b})`;
    setColor((prevColor) => [...prevColor, cor]);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerador de cores</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <Button title="Gerar Cor" onPress={() => geraCor()} />
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <FlatList
        data={color}
        horizontal={true}
        keyExtractor={(item) => item}
        renderItem={({ item }) => {
          return (
            <View style={{ width: 100, height: 100, backgroundColor: item }} />
          );
        }}
      />
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
  box: {
    width: 100,
    height: 100,
  },
});
