import { FastifyInstance } from "fastify";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";

export async function adicionarListaFavoritos(app: FastifyInstance) {
  app.post("/user/lista/favoritar", async (request, reply) => {
    const data = await request.body;
    const bodySchema = z.object({
      movieId: z.string(),
      userId: z.string(),
    });
    const { movieId, userId } = bodySchema.parse(data);

    console.log(movieId, userId);

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (user) {
      try {
        const favorito = await prisma.movie_Favorite.findFirst({
          where: {
            movieId: movieId,
            userId: userId,
          },
        });

        if (favorito) {
          return reply
            .status(400)
            .send({ message: "Filme já está na lista de favoritos!" });
        }

        const listaFavoritos = await prisma.movie_Favorite.create({
          data: {
            movieId,
            userId,
          },
        });
        console.log(listaFavoritos);
        return reply
          .status(200)
          .send({ message: "Filme adicionado aos favoritos!" });
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
