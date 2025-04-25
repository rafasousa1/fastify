import knex from 'knex'
import { Knex } from 'knex'
import { env } from './env'


export const config: Knex.Config = { // tipando o config para que siga o formato do Knex.Config
	client: 'sqlite',
	connection: {
		filename: env.DATABASE_URL // mostrando url do meu banco de dados
	},
	useNullAsDefault: true,
	migrations: {
		extension: 'ts',
		directory: './database/migrations'
	}
}


export const banco = knex(config)