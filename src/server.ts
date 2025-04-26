import fastify from 'fastify'
import { banco } from './database'
import { env } from './env'
import { transaction } from './routes/transactions'

const app = fastify()

app.register(transaction, {
	prefix: 'transactions'
})

app.listen({
	port: env.PORT
}).then(() => console.log('Server running!'))
