import { pool } from '../database/connection.js'

// GET getEvents
export async function obtenerEventos() {
  try {
    const [result] = await pool.query('CALL ObtenerEventos()');
    return result[0];
  } catch (error) {
    console.error('Error fetching obtenerEventos:', error);
    throw error;
  }
}

// GET getEventById
export async function obtenerEventoPorId(req) {
  try {
    const { id } = req.params;
    const [result] = await pool.query('CALL ObtenerEventoPorId(?)', [ id ]);
    return result[0];
  } catch (error) {
    console.error('Error fetching obtenerEventoPorId:', error);
    throw error;
  }
}

// POST updateStatus
export async function actualizarStatus(req) {
  try {
    const { ID_Evento, Status } = req.body;    
    const [result] = await pool.query('CALL ActualizarStatus(?, ?)', [ ID_Evento, Status ]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Error fetching actualizarStatus:', error);
    throw error;
  }
}