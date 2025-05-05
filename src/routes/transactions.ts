import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { banco } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
	app.get('/', async () => { // listando todas as transações
		const transactions = await banco('transactions').select()

		return { transactions }
	})

	app.get('/:id', async (req) => {  // listando transação específica pelo id
		const getTransactionSchema = z.object({
			id: z.string().uuid()
		})

		const { id } = getTransactionSchema.parse(req.params)

		const transaction = await banco('transactions').where('id', id).first()

		return { transaction }
	})

	app.get('/summary', async () => {
		const summary = await banco('transactions').sum('amount',
			{as: 'amount'}).first()

		return { summary }
	})

	app.post('/', async (req, reply) => {

		const createTransactionSchema = z.object({
			title: z.string(),
			amount: z.number(),
			type: z.enum(['credit', 'debit'])
		})

		const {title, amount, type} = createTransactionSchema.parse(req.body) // validando valores

		let sessionId = req.cookies.sessionId

		if (!sessionId) {
			sessionId = randomUUID()

			reply.setCookie('sessionId', sessionId, {
				path: '/',
				maxAge: 60 * 60 * 24 * 7 // 7 dias
			})
		}

		await banco('transactions').insert({
			id: randomUUID(),
			title,
			amount: type === 'credit' ? amount : amount * -1,
			session_id: sessionId
		})

		return reply.status(201).send()
	})
}