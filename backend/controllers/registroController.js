import * as bd from '../database/storage.js';

export async function registrarUsuario(req, res) {
    try {
      console.log(req);
        const result = await bd.registrarUsuario(req.body);
        res.status(201).json({ message: 'Usuario registrado', result: result });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al registrar usuario' });
    }
}