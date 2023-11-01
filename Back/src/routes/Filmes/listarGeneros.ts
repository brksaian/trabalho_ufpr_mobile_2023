import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";
const fetch = require("node-fetch");

export async function listarTodosGeneros(app: FastifyInstance) {
  app.get("/filme/listar/genero", async (request: FastifyRequest, reply) => {
    const url = "https://api.themoviedb.org/3/genre/movie/list?language=pt-BR";
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
        return json.genres;
      })
      .catch((err) => console.error("error:" + err));

    return response;
  });
}
