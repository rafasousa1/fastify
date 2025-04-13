import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    await knex.schema.alterTable('transactions', (table) => {
        table.uuid('session_id').after('id').index() // adidionando id da session com o after para que ela fique depois da coluna 'id' e o index para criar um índice automático (dizendo que o session vai ser muito usado com o where)
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.alterTable('transactions', (table) => {
        table.dropColumn('session_id') // derruando a coluna da session_id
    })
}

