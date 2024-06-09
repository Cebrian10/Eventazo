import * as usuarioModel from '../models/usuarioModel.js';
import * as helper from '../helpers/auth.helper.js';

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

    if (existUser.length > 0) {
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

async function getUsuario(req, res) {
  try {
    const existUser = await usuarioModel.obtenerUsuarioPorCorreo(req);

    if (existUser.length > 0) {
      const verifyPassword = req.body.Contrasena === existUser[0].Contrasena; //helper.verifyPassword(req.body.Contrasena, existUser[0].Contrasena);

      if (verifyPassword) {
        res.status(201).json({ message: 'Usuario getUsuario', result: existUser });
      } else {
        res.status(401).json({ error: 'Contraseña incorrecta' });
      }
    }
    else {
      res.status(404).json({ error: 'Usuario no registrado' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error getUsuario: ' + error.message });
  }
}

export {
  getAllUsuario,
  createUsuario,
  getUsuario
};