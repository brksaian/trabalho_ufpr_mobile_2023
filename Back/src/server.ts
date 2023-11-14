import { prisma } from "./lib/prisma";
import { fastify } from "fastify";
import { listarFilmesPagina } from "./routes/Filmes/listarFilmePagina";
import { listarTodosGeneros } from "./routes/Filmes/listarGeneros";
import { buscarFilmes } from "./routes/Filmes/buscarPorNome";
import { buscarSerieNome } from "./routes/Series/buscarSeriePorNome";
import { listarSeriePagina } from "./routes/Series/listarSeriePorPagina";
import { listarTodosGeneroSerie } from "./routes/Series/listarGeneroSerie";
const fastifyCors = require("@fastify/cors");

const app = fastify();

app.register(listarFilmesPagina);
app.register(listarTodosGeneros);
app.register(buscarFilmes);
app.register(buscarSerieNome);
app.register(listarSeriePagina);
app.register(listarTodosGeneroSerie);

// Configurar opções CORS

app.register(fastifyCors, {
  origin: "http://localhost:4200",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running on port 3333");
  });
