import { FastifyInstance } from "fastify";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";

interface pedidosProduto {
  id: string;
}

export async function efetuarLogin(app: FastifyInstance) {
  app.post("/user/login", async (request, reply) => {
    const data = await request.body;
    const bodySchema = z.object({
      email: z.string(),
      password: z.string(),
    });
    const { email, password } = bodySchema.parse(data);

    const user = await prisma.user.findUnique({
      where: {
        email: email,
        password: password,
      },
    });

    if (user)
      return reply
        .status(200)
        .send({ message: "Login efetuado com sucesso!", userId: user.id });
    else
      return reply.status(400).send({ message: "Email ou senha incorretos!" });
  });
}
