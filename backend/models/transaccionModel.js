import { pool } from '../database/connection.js';

export async function registrarTransaccion(transaccion) {
  const { transactionId, payerName, payerEmail, amount, currency, status, eventoId, usuarioId, platino, gold, silver, general } = transaccion;

  try {
    const query = `
      CALL registrarTransaccion(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [transactionId, payerName, payerEmail, amount, currency, status, eventoId, usuarioId, platino, gold, silver, general];
    const [result] = await pool.query(query, params);

    console.log('Stored procedure result:', result); // Añadido para depuración

    return result; // Devolver el resultado completo para fines de depuración
  } catch (error) {
    console.error('Error registrando la transacción:', error);
    throw error;
  }
}
