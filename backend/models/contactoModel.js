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

// GET getMessages
export async function obtenerMensajes() {
    try {
        const [result] = await pool.query('CALL ObtenerMensajes()');
        return result[0];
    } catch (error) {
        console.error('Error fetching obtenerMensajes:', error);
        throw error;
    }
}

// POST getMessagesByUser
export async function obtenerMensajesPorUsuario(req) {
    try {
        const { id } = req.params;
        const [result] = await pool.query('CALL ObtenerMensajesPorIdUsuario(?)', [id]);
        return result[0];
    } catch (error) {
        console.error('Error fetching obtenerMensajes:', error);
        throw error;
    }
}