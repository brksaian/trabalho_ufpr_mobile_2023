import { Console } from "console";
import { FastifyInstance, FastifyRequest } from "fastify";
import { z } from "zod";
const fetch = require("node-fetch");
require("dotenv").config();

const paramsSchema = z.object({
  query: z.string(),
});

export async function buscarSerieNome(app: FastifyInstance) {
  app.get("/serie/buscar", async (request: FastifyRequest, reply) => {
    const params = paramsSchema.parse(request.query);

    const query = params.query;

    const apiKey = process.env.API_KEY_MOVIEDB;
    const url = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=pt-BR&query=${query}`;

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const data = await response.json();
        return data.results;
      } else {
        reply.code(response.status).send(response);
        console.error("Erro:", response);
      }
    } catch (err) {
      console.error("Erro:", err);
      reply.code(500).send("Erro interno do servidor");
    }
  });
}
