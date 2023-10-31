import { prisma } from "./lib/prisma";
import { fastify } from "fastify";
import { getAllColors } from "./routes/get-all-colors";
import { registrarPedido } from "./routes/pedido/registrar-pedido";
import { atualizarEstadoPedido } from "./routes/pedido/atualizar-estado-pedido";
import { criarUsuario } from "./routes/usuario/criar-usuario";
import { getAllProducts } from "./routes/produto/listar-todos-produtos";
import { login } from "./routes/usuario/login";
import { getOrdersByUser } from "./routes/pedido/listar-pedidos-usuario";
import { getOrders } from "./routes/pedido/listar-pedidos-funcionario";
import { getOrdersFiltered } from "./routes/pedido/listar-pedidos-filtrado";
const fastifyCors = require("@fastify/cors");

const app = fastify();

app.register(getAllColors);
app.register(registrarPedido);
app.register(atualizarEstadoPedido);
app.register(criarUsuario);
app.register(getAllProducts);
app.register(login);
app.register(getOrdersByUser);
app.register(getOrders);
app.register(getOrdersFiltered);

// Configurar opções CORS

app.register(fastifyCors, {
  origin: "http://localhost:4200", // Defina a origem permitida
  methods: ["GET", "POST", "PUT", "DELETE"], // Defina os métodos permitidos
  credentials: true, // Permitir credenciais (cookies, cabeçalhos de autorização)
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running on port 3333");
  });
