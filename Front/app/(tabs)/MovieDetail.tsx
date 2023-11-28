import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons"; // Certifique-se de instalar esse pacote

type RootStackParamList = {
  MovieDetail: {
    id: number;
  };
};

type MovieDetailsRouteProp = RouteProp<RootStackParamList, "MovieDetail">;
type MovieDetailsNavigationProp = StackNavigationProp<
  RootStackParamList,
  "MovieDetail"
>;

interface MovieDetailsProps {
  route: MovieDetailsRouteProp;
  navigation: MovieDetailsNavigationProp;
}

const MovieDetail: React.FC<MovieDetailsProps> = () => {
  const route = useRoute();
  const navigation = useNavigation();
  console.log("Route:", route);
  const { id } = route?.params || {};
  const [movieData, setMovieData] = useState<any>(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const response = await fetch(
          `http://localhost:3333/filme/buscar/${id}`
        );
        if (response.ok) {
          const data = await response.json();
          console.log("Movie data:", data);
          setMovieData(data);
        } else {
          console.error("Erro ao buscar dados do filme");
        }
      } catch (error) {
        console.error("Erro:", error);
      }
    };

    fetchMovieData();
  }, [id]);

  const handleAddToFavorites = async () => {
    try {
      // Substitua ":userId" pelo ID do usuário real
      const userId = 1; // Substitua pelo ID do usuário autenticado
      const response = await fetch(
        `http://localhost:3333/user/${userId}/favoritar`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ movieId: id }),
        }
      );

      if (response.ok) {
        Alert.alert("Success", "Movie added to favorites!");
      } else {
        Alert.alert("Error", "Failed to add movie to favorites");
      }
    } catch (error) {
      console.error("Error:", error);
      Alert.alert("Error", "An unexpected error occurred");
    }
  };

  const handleAddToWatched = async () => {
    // Implemente a lógica semelhante ao handleAddToFavorites
  };

  const handleAddToNextToWatch = async () => {
    // Implemente a lógica semelhante ao handleAddToFavorites
  };

  if (!movieData) {
    return (
      <View style={styles.container}>
        <Text>Carregando...</Text>
      </View>
    );
  }

  const {
    title,
    poster_path,
    overview,
    genres,
    release_date,
    runtime,
    spoken_languages,
    vote_average,
  } = movieData;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contentContainer}>
        <Image
          style={styles.poster}
          source={{
            uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
          }}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.text}>{overview}</Text>
          <Text style={styles.text}>
            Genres: {genres.map((genre: any) => genre.name).join(", ")}
          </Text>
          <Text style={styles.text}>Release Date: {release_date}</Text>
          <Text style={styles.text}>Runtime: {runtime} minutes</Text>
          <Text style={styles.text}>
            Spoken Languages:{" "}
            {spoken_languages.map((lang: any) => lang.name).join(", ")}
          </Text>
          <Text style={styles.text}>Vote Average: {vote_average}</Text>

          {/* Botões de adicionar aos favoritos, assistidos e próximos a assistir */}
          <TouchableOpacity
            onPress={handleAddToFavorites}
            style={[styles.button, styles.favoriteButton]}
          >
            <Text style={styles.buttonText}>Add to Favorites</Text>
            <Ionicons name="heart" size={20} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleAddToWatched} style={styles.button}>
            <Text style={styles.buttonText}>Add to Watched</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleAddToNextToWatch}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Add to Next to Watch</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flexDirection: "row",
  },
  poster: {
    width: 250, // Defina o tamanho desejado para o cartaz
    height: 350, // Defina o tamanho desejado para o cartaz
    marginRight: 16, // Espaçamento à direita do cartaz
  },
  detailsContainer: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
  },
  button: {
    maxWidth: 175,
    marginVertical: 8,
    backgroundColor: "#007BFF",
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  favoriteButton: {
    maxWidth: 175,
    backgroundColor: "red", // Cor de fundo vermelha para o botão de favoritos
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonText: {
    maxWidth: 175,
    color: "white",
    marginRight: 8,
  },
});

export default MovieDetail;
