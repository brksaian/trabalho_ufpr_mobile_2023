import { prisma } from "./lib/prisma";
import { fastify } from "fastify";
import { listarFilmesPagina } from "./routes/Filmes/listarFilmePagina";
import { listarTodosGeneros } from "./routes/Filmes/listarGeneros";
import { buscarFilmes } from "./routes/Filmes/buscarPorNome";
import { buscarSerieNome } from "./routes/Series/buscarSeriePorNome";
import { listarSeriePagina } from "./routes/Series/listarSeriePorPagina";
import { listarTodosGeneroSerie } from "./routes/Series/listarGeneroSerie";
import { buscarFilmePorId } from "./routes/Filmes/buscarFilmeId";
import { efetuarLogin } from "./routes/User/realizarLogin";
import { listarUsers } from "./routes/User/listarUsers";
const fastifyCors = require("@fastify/cors");

const app = fastify();

app.register(listarFilmesPagina);
app.register(listarTodosGeneros);
app.register(buscarFilmes);
app.register(buscarSerieNome);
app.register(listarSeriePagina);
app.register(listarTodosGeneroSerie);
app.register(buscarFilmePorId);
app.register(efetuarLogin);
app.register(listarUsers);

// Configurar opções CORS

app.register(fastifyCors, {
  origin: "http://localhost:8081",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false,
  preflightContinue: false, // Adicione essa opção
});

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("Server running on port 3333");
  });
