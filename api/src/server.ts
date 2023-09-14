import { fastify } from 'fastify';
import { fastifyCors } from '@fastify/cors'
import {
  getAllPromptsRoute,
  createTranscriptionRoute,
  uploadVideoRoute,
  generateAiCompletionRoute
} from './routes';

const app = fastify();

app.register(fastifyCors, {
  origin: '*'
})

app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAiCompletionRoute)

app.listen({
  port: 3333
}).then(() => {
  console.log('🚀 server started')
})