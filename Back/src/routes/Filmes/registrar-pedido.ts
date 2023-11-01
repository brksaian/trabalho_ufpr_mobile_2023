import { FastifyInstance } from "fastify";
import { prisma } from "../../lib/prisma";
import { z } from "zod";

interface pedidosProduto {
  id: string;
}

export async function registrarPedido(app: FastifyInstance) {
  app.post("/pedido/registrarPedido", async (request, reply) => {
    const data = await request.body;
    const bodySchema = z.object({
      userId: z.string().uuid(),
      products: z.array(
        z.object({
          id: z.string().uuid(),
          quantity: z.number(),
          color: z.string(),
        })
      ),
    });
    const { userId, products } = bodySchema.parse(data);

    const user = await prisma.user.findUniqueOrThrow({
      where: { id: userId },
    });

    if (user) {
      const pedido = await prisma.pedido.create({
        data: {
          userId: userId,
          estado: "EM ABERTO",
        },
      });

      const pedidoProdutos: pedidosProduto[] = [];

      for (const product of products) {
        const produto = await prisma.produto.findUniqueOrThrow({
          where: { id: product.id },
        });

        if (produto) {
          const pedido_produto = await prisma.pedido_produto.create({
            data: {
              pedidoId: pedido.id,
              produtoId: product.id,
              quantity: product.quantity,
              color: product.color,
            },
          });
          pedidoProdutos.push({ id: pedido_produto.id });
        }
      }

      await prisma.pedido.update({
        where: { id: pedido.id },
        data: {
          pedido_produto: {
            connect: pedidoProdutos,
          },
          updatedAt: new Date(),
        },
      });
    }
    return true;
  });
}
