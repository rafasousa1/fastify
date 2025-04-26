import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { randomUUID } from 'node:crypto'
import { banco } from "../database"

export async function transaction(app: FastifyInstance) {
    app.post('/', async (req, reply) => {

        const createTransactionSchema = z.object({
            title: z.string(),
            amount: z.number(),
            type: z.enum(['credit', 'debit'])
        })

        const {title, amount, type} = createTransactionSchema.parse(req.body) // validando valores

        await banco('transactions').insert({
            id: randomUUID(),
            title,
            amount: type === 'credit' ? amount : amount * -1
        })

        return reply.status(201).send()
    })
}