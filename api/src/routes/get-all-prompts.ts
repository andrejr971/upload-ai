import { FastifyInstance } from "fastify";
import { prisma } from "../lib";

export async function getAllPromptsRoute(app: FastifyInstance) {
  app.get('/prompts', async () => {
    const prompts = await prisma.prompt.findMany({
      orderBy: {
        title: 'asc'
      }
    });
  
    return prompts;
  })
}