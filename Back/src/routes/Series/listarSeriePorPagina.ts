import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
const fetch = require("node-fetch");
require("dotenv").config();

const paramsSchema = z.object({
  page: z.string(),
});

export async function listarSeriePagina(app: FastifyInstance) {
  app.get("/serie/listar/:page", async (request: FastifyRequest, reply) => {
    const params = paramsSchema.parse(request.params);

    const page = params.page;
    const apiToken = process.env.TOKEN_MOVIEDB;
    const url = `https://api.themoviedb.org/3/discover/tv?include_adult=true&include_video=true&language=pt-BR&page=${page}&sort_by=popularity.desc`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${apiToken}`,
      },
    };

    let response = await fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        return json.results;
      })
      .catch((err) => console.error("error:" + err));

    return response;
  });
}
