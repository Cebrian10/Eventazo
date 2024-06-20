import { pool } from '../database/connection.js'

// POST sendEmail
export async function enviarMessage(req) {
    try {
        const { ID, Asunto, Detalles } = req.body;
        const [result] = await pool.query('CALL EnviarMensaje(?, ?, ?)', [ID, Asunto, Detalles]);
        return result.affectedRows > 0;
    } catch (error) {
        console.error('Error fetching enviarEmail:', error);
        throw error;
    }
    }