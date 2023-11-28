import { FastifyInstance, FastifyRequest } from "fastify";
import { prisma } from "../../../lib/prisma";
import { z } from "zod";
const fetch = require("node-fetch");

export async function listarUsers(app: FastifyInstance) {
  app.get("/user/listar", async (request: FastifyRequest, reply) => {
    return await prisma.user.findMany();
  });
}
