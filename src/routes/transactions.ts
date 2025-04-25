import { FastifyInstance } from "fastify"
import { banco } from "../database"

export async function transaction(app: FastifyInstance) {
    app.get('/hello', async () => {
        const transactions = await banco('transactions').where('amount', 1000).select('*')
    
        return transactions
    })
}