import { pool } from '../database/connection.js'

// GET getAllUsuario
export async function obtenerTodosLosUsuarios() {
  try {
    const [result] = await pool.query('CALL obtenerTodosLosUsuarios()');
    return result[0];
  } catch (error) {
    console.error('Error fetching obtenerTodosLosUsuarios:', error);
    throw error;
  }
}

// GET getUsuarioByEmail
export async function obtenerUsuarioPorCorreo(req) {
  try {
    const [result] = await pool.query('CALL obtenerUsuarioPorCorreo(?)', [
      req.body.Correo
    ]);
    return result[0];
  }catch (error) {
    console.error('Error fetching obtenerUsuarioPorCorreo:', error);
    throw error;
  }
}

// POST createUsuario
export async function crearUsuario(req) {
  try {    
    const [result] = await pool.query('CALL CrearUsuario(?, ?, ?, ?, ?)', [
      req.body.Nombre, req.body.Apellido, req.body.Correo, req.body.Contrasena, req.body.ID_RolUsuario
    ]);
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Error fetching crearUsuario:', error);
    throw error;
  }  
}