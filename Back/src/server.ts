import { prisma } from "./lib/prisma";
import { fastify } from "fastify";
import { listarFilmesPagina } from "./routes/Filmes/listarFilmePagina";
import { listarTodosGeneros } from "./routes/Filmes/listarGeneros";
const fastifyCors = require("@fastify/cors");

const app = fastify();

app.register(listarFilmesPagina);
app.register(listarTodosGeneros);

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
