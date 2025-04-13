import fastify from 'fastify'
import { banco } from './database'

const app = fastify()

app.get('/hello', async () => {
	const tables = await banco('sqlite_schema').select('*')

	return tables
})

app.listen({
	port: 3333
}).then(() => console.log('Server running!'))
