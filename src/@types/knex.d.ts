// eslint-disable-next-line
import { Knex } from 'knex'

declare module 'knex/types/tables' {
    export interface Tables { // tipando os campos para melhorar a manipulação no BD 
        transactions: { // quero que os campos da minha tabela de transactions tenha os seguintes tipos
        id: string
        title: string
        amount: number
        created_at: number
        session_id?: string
        }
    }
}