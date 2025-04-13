import  knex from 'knex'
import 	{ Knex } from 'knex'

export const config: Knex.Config = { // tipando o config para que siga o formato do Knex.Config
	client: 'sqlite',
	connection: {
		filename: './database/app.db'
	},
	useNullAsDefault: true,
	migrations: {
		extension: 'ts',
		directory: './database/migrations'
	}
}


export const banco = knex(config)