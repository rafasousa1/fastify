import 'dotenv/config'
import knex from 'knex'
import { Knex } from 'knex'

if(!process.env.DATABASE_URL) {
	throw new Error('DATABASE_URL not found!')
}

export const config: Knex.Config = { // tipando o config para que siga o formato do Knex.Config
	client: 'sqlite',
	connection: {
		filename: process.env.DATABASE_URL // mostrando url para meu banco de dados
	},
	useNullAsDefault: true,
	migrations: {
		extension: 'ts',
		directory: './database/migrations'
	}
}


export const banco = knex(config)