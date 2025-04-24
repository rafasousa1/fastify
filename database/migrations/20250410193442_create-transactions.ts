import type { Knex } from 'knex'


export async function up(knex: Knex): Promise<void> { // indica o que a migration vai fazer
    await knex.schema.createTable('transactions', (table) => { // criando a tabela transactions do db
        table.uuid('id').primary(), // campo do id sendo primary key
        table.text('title').notNullable() // campo de texto que não pode ser nulo
        table.decimal('amount', 10, 2).notNullable() // precisão do número e quantidade de casas decimais (2)
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable // anota a data atual que cada registro foi criado
    })
}


export async function down(knex: Knex): Promise<void> { // se precisar fazer o método ao contrário
    await knex.schema.dropTable('transactions')
}

