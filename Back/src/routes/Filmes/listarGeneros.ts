import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
const fetch = require("node-fetch");

export async function listarTodosGeneros(app: FastifyInstance) {
  app.get("/filme/listar/genero", async (request: FastifyRequest, reply) => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=pt-BR";
    const apiToken = process.env.TOKEN_MOVIEDB;
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
        return json.genres;
      })
      .catch((err) => console.error("error:" + err));

    return response;
  });
}
