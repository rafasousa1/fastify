import fastify from 'fastify'
import { banco } from './database'
import { env } from './env'
import { transactionsRoutes } from './routes/transactions'

const app = fastify()

app.register(transactionsRoutes, {
	prefix: 'transactions'
})

app.listen({
	port: env.PORT
}).then(() => console.log('Server running!'))
