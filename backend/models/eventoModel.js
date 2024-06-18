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
    const [result] = await pool.query('CALL ObtenerEventoPorId(?)', [
      req.params.id
    ]);
    return result[0];
  } catch (error) {
    console.error('Error fetching obtenerEventoPorId:', error);
    throw error;
  }
}

// POST updateStatus
export async function actualizarStatus(req) {
  try {
    const [result] = await pool.query('CALL ActualizarStatus(?, ?)', [
      req.body.ID_Evento, req.body.Status
    ]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Error fetching actualizarStatus:', error);
    throw error;
  }
}