import { PedidoSql } from "./../interfaces";
import { Pedido } from "./../interfaces";
import { Produto } from "./../interfaces";
import { prisma } from "../../lib/prisma";

export async function populaPedidos(pedidos: PedidoSql[]) {
  const response: Pedido[] = [];
  for (const pedido of pedidos) {
    const resp: Pedido = {
      nome: pedido.nome,
      id: pedido.id,
      estado: pedido.estado,
      total: 0,
      forecast: 0,
      produtos: [],
      criacao: pedido.createdAt,
      ultimaAtualizacao: pedido.updatedAt,
    };

    for (const pedido_p of pedido.pedido_produto) {
      const product: Produto = {
        quantity: pedido_p.quantity,
        forecast: 0,
        nome: "",
        valor: 0,
      };
      const produto = await prisma.produto.findUnique({
        where: {
          id: pedido_p.produtoId,
        },
      });
      product.nome = produto?.name || "";
      product.valor = produto?.price || 0;
      resp.produtos.push(product);
    }
    resp.total = resp.produtos.reduce(
      (total, item) => total + item.valor * item.quantity,
      0
    );
    resp.forecast = Math.max(...resp.produtos.map((obj) => obj.forecast));

    response.push(resp);
  }
  return response;
}
