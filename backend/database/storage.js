import { pool } from "./connection.js";

export async function obtenerUsuarios() {
    try {
        const [result] = await pool.query("SELECT * FROM usuarios");
        return result;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
