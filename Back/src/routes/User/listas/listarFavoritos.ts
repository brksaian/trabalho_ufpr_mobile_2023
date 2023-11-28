import { FastifyInstance } from "fastify";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";

export async function listarFavoritos(app: FastifyInstance) {
  app.post("/user/listar/favorito", async (request, reply) => {
    const data = await request.body;
    const bodySchema = z.object({
      userId: z.string(),
    });
    const { userId } = bodySchema.parse(data);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user) {
      try {
        const favoritos = await prisma.movie_Favorite.findMany({
          where: {
            userId: userId,
          },
        });

        if (favoritos) {
          let list = [];
          favoritos.forEach(async (favorito) => {
            const apiKey = process.env.API_KEY_MOVIEDB;
            const url = `https://api.themoviedb.org/3/movie/${favorito.movieId}?api_key=${apiKey}&language=pt-BR`;

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
          return reply.status(200).send(favoritos);
        } else {
          return reply
            .status(400)
            .send({ message: "Filme não está na lista de favoritos!" });
        }
      } catch (error) {
        return reply
          .status(400)
          .send({ message: "Erro ao adicionar filme aos favoritos!" });
      }
    } else {
      return reply.status(400).send({ message: "Usuario não incorretos!" });
    }
  });
}
