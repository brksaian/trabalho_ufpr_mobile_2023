import { Console } from "console";
import { FastifyInstance, FastifyRequest } from "fastify";
import { z } from "zod";
const fetch = require("node-fetch");
require("dotenv").config();

const paramsSchema = z.object({
  id: z.string(), // Agora esperamos um parâmetro 'id'
});

export async function buscarFilmePorId(app: FastifyInstance) {
  app.get("/filme/buscar/:id", async (request: FastifyRequest, reply) => {
    const params = paramsSchema.parse(request.params); // Use request.params para acessar os parâmetros da URL

    const id = params.id;

    const apiKey = process.env.API_KEY_MOVIEDB;
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`;

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
        return data; // Retornar o filme encontrado
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
