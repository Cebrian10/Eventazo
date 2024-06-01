import { createPool } from 'mysql2/promise'

export const pool = createPool({
    host: "127.0.0.1",
    port: 3366,
    database: "dsix",
    user: "root",
    password: "mimamamemima"
})