import { FastifyInstance, FastifyRequest } from "fastify";
import { z } from "zod";
const fetch = require("node-fetch");
require("dotenv").config();

const paramsSchema = z.object({
  page: z.string(),
  genres: z.string(), // Adicionando parâmetro para gêneros
});

export async function listarSeriePorGenero(app: FastifyInstance) {
  app.get("/serie/listar/:genres", async (request: FastifyRequest, reply) => {
    const params = paramsSchema.parse(request.params);

    const page = params.page;
    const genres = params.genres.split(","); // Os gêneros passados pelo usuário, separados por vírgula
    const apiToken = process.env.TOKEN_MOVIEDB;

    // Construindo a URL para buscar filmes por gênero
    const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=${page}&sort_by=popularity.desc&with_genres=${genres.join(
      ","
    )}`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    try {
      // Fazendo a chamada para a API TMDb
      const response = await fetch(url, options);
      const data = await response.json();

      return data.results;
    } catch (err) {
      console.error("Erro ao buscar filmes:", err);
      reply.status(500).send({ error: "Erro ao buscar as series" });
    }
  });
}
