import { pool } from '../database/connection.js'

// GET getAllBoletos
export async function obtenerBoletos() {
  try {
    const [result] = await pool.query('CALL ObtenerBoletos()');
    return result[0];
  } catch (error) {
    console.error('Error fetching obtenerBoletos:', error);
    throw error;
  }
}

// GET getBoletoById
export async function obtenerBoletoPorId(req) {
  try {
    const [result] = await pool.query('CALL ObtenerBoletoPorIdEvento(?)', [
      req.params.id
    ]);
    return result[0];
  }catch (error) {
    console.error('Error fetching obtenerBoletoPorId:', error);
    throw error;
  }
}