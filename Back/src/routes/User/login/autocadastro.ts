import { FastifyInstance } from "fastify";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";

export async function efetuarAutocadastro(app: FastifyInstance) {
  app.post("/user/autocadastro", async (request, reply) => {
    const data = await request.body;

    const bodySchema = z.object({
      name: z.string(),
      email: z.string(),
      telefone: z.string(),
      cpf: z.string(),
      endereco: z.string(),
      password: z.string(),
    });

    try {
      const { name, email, telefone, cpf, endereco, password } =
        bodySchema.parse(data);

      // Verifica se o email ou cpf já estão cadastrados
      const existingUser = await prisma.user.findFirst({
        where: {
          OR: [{ email: email }, { cpf: cpf }],
        },
      });

      if (existingUser) {
        return reply
          .status(400)
          .send({ message: "Email ou CPF já estão cadastrados." });
      }

      // Cria um novo usuário
      const newUser = await prisma.user.create({
        data: {
          name,
          email,
          telefone,
          cpf,
          endereco,
          password,
        },
      });

      return reply.status(200).send({
        message: "Cadastro efetuado com sucesso!",
        userId: newUser.id,
      });
    } catch (error) {
      return reply.status(400).send({ message: "Erro no autocadastro." });
    }
  });
}
