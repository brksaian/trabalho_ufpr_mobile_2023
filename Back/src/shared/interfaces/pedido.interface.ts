import { Produto } from "./produto.interface";

export interface Pedido {
  id: string;
  nome: number;
  estado: string;
  total: number;
  forecast: number;
  criacao: Date;
  ultimaAtualizacao: Date;
  produtos: Produto[];
}
