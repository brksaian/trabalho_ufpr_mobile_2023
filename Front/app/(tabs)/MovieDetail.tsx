import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
} from "react-native";
import { RouteProp, useRoute, useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

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
        <View style={styles.posterContainer}>
          <Image
            style={styles.poster}
            source={{
              uri: `https://image.tmdb.org/t/p/w500${poster_path}`,
            }}
          />
        </View>
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
          <Button
            title="Voltar"
            onPress={() => {
              navigation.goBack();
            }}
          />
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
  posterContainer: {
    flex: 1,
  },
  detailsContainer: {
    flex: 2,
    marginLeft: 16,
  },
  poster: {
    width: "100%",
    height: 400,
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
});

export default MovieDetail;
