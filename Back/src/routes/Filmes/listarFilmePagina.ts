import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
const fetch = require("node-fetch");

const paramsSchema = z.object({
  page: z.string(),
});

export async function listarFilmesPagina(app: FastifyInstance) {
  app.get(
    "/filme/listar/filmes/:page",
    async (request: FastifyRequest, reply) => {
      const params = paramsSchema.parse(request.params);

      const page = params.page;

      const url = `https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=pt-BR&page=${page}&sort_by=popularity.desc`;
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiM2Y2ZmE3MzMxNzY5NTAyNmFjNTM1YzM1YzA5NGMyYyIsInN1YiI6IjY0ZmY1ODJjZWIxNGZhMDEwMGU2ZTZiOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.j6koGbHeb2SMdF_TV0xeUNxXFasIwleUEKJ76NLP36w",
        },
      };

      let response = await fetch(url, options)
        .then((res) => res.json())
        .then((json) => {
          return json.results;
        })
        .catch((err) => console.error("error:" + err));

      return response;
    }
  );
}
