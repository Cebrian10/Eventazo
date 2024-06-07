import { pool } from "./connection.js";

// Usuario Controller
export async function obtenerUsuarios() {
    try {
        const [rows] = await pool.query('SELECT * FROM usuario');
        return rows;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
    finally {
        await pool.end();
    }
}

export async function insertarUsuario() {
    try {
        const [rows] = await pool.query(
            `INSERT INTO usuario (Nombre, Apellido, Correo, Contrasena, ID_RolUsuario) 
                VALUES (?, ?, ?, ?, ?)`, ["Juan2", "Perez", "juan@gmail.com", "123456", 2]
        );
        return rows;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
    finally {
        await pool.end();
    }
}

(async () => {
    try {
        const users = await insertarUsuario();
        console.log(users);
    } catch (error) {
        console.error('Error:', error);
    }
})();



// insertarUsuario();


// Registro Controller
// export async function registrarUsuario(req, res) {
//     try {
//         const [result] = await pool.query(
//             "INSERT INTO usuario (Nombre, Apellido, Correo, Contrasena, ID_RolUsuario) VALUES (?, ?, ?, ?, ?)",
//             [req.Nombre, req.Apellido, req.Correo, req.Contrasena, req.ID_RolUsuario]
//         );
//         return result;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// }