import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios";
import uuid from "react-native-uuid";
import { useNavigation } from "@react-navigation/native";

const API_BASE_URL = "http://localhost:3333/filme/listar";

interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

const Api: React.FC = () => {
  const navigation = useNavigation();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchMovies();
  }, [currentPage]);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/${currentPage}`);
      const data = response.data;

      console.log("Data:", data);

      setMovies((prevMovies) => {
        // Se prevMovies for undefined, inicialize com um array vazio
        const currentMovies = prevMovies || [];
        return [...currentMovies, ...data];
      });
    } catch (error) {
      console.error("Erro ao buscar filmes:", error);
    }
  };

  const handleLoadMore = () => {
    setCurrentPage(currentPage + 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        onMomentumScrollEnd={handleLoadMore}
      >
        {movies && movies.length > 0 ? (
          movies.map((item) => (
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
          <Text>Nenhum filme encontrado.</Text>
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

export default Api;
