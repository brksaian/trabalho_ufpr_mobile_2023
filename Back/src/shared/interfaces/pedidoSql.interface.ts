export interface PedidoSql {
  estado: string;
  id: string;
  nome: number;
  createdAt: Date;
  updatedAt: Date;
  pedido_produto: {
    id: string;
    quantity: number;
    forecast: number;
    createdAt: Date;
    updatedAt: Date;
    produtoId: string;
    pedidoId: string | null;
  }[];
}
