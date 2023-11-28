import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";

const SEARCH_API_BASE_URL = "http://localhost:3333/filme/buscar";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const SearchScreen: React.FC = () => {
  const navigation = useNavigation();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Movie[]>([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `${SEARCH_API_BASE_URL}?query=${searchQuery}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        setSearchResults(data);
      } else {
        console.error("Erro ao buscar filmes:", response.statusText);
      }
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome do filme"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
        <Button title="Pesquisar" onPress={handleSearch} />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((item) => (
            <TouchableOpacity
              key={uuid.v4().toString()}
              onPress={() => {
                navigation.navigate("MovieDetail", {
                  id: item.id,
                });
                console.log(
                  `Navigating to movie details page for ${item.title}`
                );
              }}
            >
              <View style={styles.movieContainer}>
                <Image
                  style={styles.poster}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w200${item.poster_path}`,
                  }}
                />
                <Text>{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Nenhum resultado encontrado.</Text>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  searchContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    borderWidth: 1,
    borderRadius: 5,
  },
  movieContainer: {
    margin: 10,
    alignItems: "center",
  },
  poster: {
    width: 150,
    height: 200,
  },
  scrollViewContainer: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default SearchScreen;
