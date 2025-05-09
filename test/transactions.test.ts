import { it, beforeAll, afterAll, describe } from 'vitest'
import supertest from 'supertest'
import { app } from '../src/app'

describe('Transactions Routes', () => {
	beforeAll(async () => {
		app.ready()
	})

	afterAll(async () => {
		app.close()
	})

	it('should be able user create a transaction', async () => {
		await supertest(app.server)
			.post('/transactions')
			.send({
				title: 'New Transaction',
				amount: 4000,
				type: 'credit'
			})
			.expect(201)
	})
})