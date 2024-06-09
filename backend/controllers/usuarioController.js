import * as usuarioModel from '../models/usuarioModel.js';

async function getAllUsuario(req, res) {
  try {
    const result = await usuarioModel.obtenerTodosLosUsuarios();
    res.status(201).json({ result: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getAllUsuario: ' + error.message });
  }
}

async function createUsuario(req, res) {
  try {
    const existUser = await usuarioModel.obtenerUsuarioPorCorreo(req);
    if (existUser) {
      return res.status(409).json({ error: 'Correo ya registrado' });
    } else {
      const result = await usuarioModel.crearUsuario(req);
      res.status(201).json({ message: 'Usuario createUsuario', result: result });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error createUsuario: ' + error.message });
  }
}

export {
  getAllUsuario,
  createUsuario
};