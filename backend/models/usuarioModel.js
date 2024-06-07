import { pool } from '../database/connection.js'

// GET getAllUsuario
export async function obtenerTodosLosUsuarios() {
  try {
    const [result] = await pool.query('SELECT * FROM usuario');
    return result;
  } catch (error) {
    console.error('Error fetching obtenerTodosLosUsuarios:', error);
    throw error;
  }
  finally {
    await pool.end();
  }
}

// POST createUsuario
export async function crearUsuario(req) {
  try {
    const [result] = await pool.query(
      `INSERT INTO usuario (Nombre, Apellido, Correo, Contrasena, ID_RolUsuario) 
              VALUES (?, ?, ?, ?, ?)`, [req.Nombre, req.Apellido, req.Correo, req.Contrasena, req.ID_RolUsuario]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error('Error fetching crearUsuario:', error);
    throw error;
  }
  finally {
    await pool.end();
  }
}

// (async () => {
//   try {
//       const users = await obtenerTodosLosUsuarios();
//       console.log(users);
//   } catch (error) {
//       console.error('Error:', error);
//   }
// })();