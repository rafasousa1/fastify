import fastify from 'fastify'
import crypto from 'node:crypto'
import { banco } from './database'

const app = fastify()

app.get('/hello', async () => {
	const transactions = await banco('transactions').where('amount', 1000).select('*')

	return transactions
})

app.listen({
	port: 3333
}).then(() => console.log('Server running!'))
