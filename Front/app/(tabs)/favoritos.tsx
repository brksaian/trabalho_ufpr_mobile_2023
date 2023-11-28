import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FAVORITES_API_BASE_URL = "http://localhost:3333/user/listar/favorito";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const FavoritesScreen: React.FC = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState<Movie[]>([]);

  useEffect(() => {
    fetchFavorites();
  }, []);

  const fetchFavorites = async () => {
    try {
      const userId = await AsyncStorage.getItem("userId");
      const response = await axios.post(FAVORITES_API_BASE_URL, {
        userId: userId,
      });

      const data = response.data;
      console.log(data);
      setFavorites(data);
    } catch (error) {
      console.error("Erro ao buscar filmes favoritos:", error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {favorites && favorites.length > 0 ? (
          favorites.map((item) => (
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
          <Text>Nenhum filme favorito encontrado.</Text>
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

export default FavoritesScreen;
