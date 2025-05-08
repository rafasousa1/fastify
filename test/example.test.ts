import { test, beforeAll, afterAll } from 'vitest'
import supertest from 'supertest'
import { app } from '../src/app'

beforeAll(async () => {
	app.ready()
})

afterAll(async () => {
	app.close()
})

test('user can create a new transaction', async () => {
	await supertest(app.server)
		.post('/transactions')
		.send({
			title: 'New Transaction',
			amount: 4000,
			type: 'credit'
		})
		.expect(201)
})