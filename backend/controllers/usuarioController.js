import usuarioModel from '../models/usuarioModel.js';
import * as bd from '../database/storage.js';

function setUsuario(req, res) {
  res.status(201).json({ message: 'Usuario setUsuario' });
}

function getUsuario(req, res) {
  res.status(201).json({ message: 'Usuario getUsuario' });
}

function getAllUsuario(req, res) {
  res.status(201).json({ message: 'Usuario getAllUsuario' });
}

async function createUsuario(req, res) {
  try {
    const result = await bd.obtenerUsuarios();
    res.status(201).json({ message: 'Usuario createUsuario', result: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error createUsuario' });
  }
}

function updateUsuario(req, res) {
  res.status(201).json({ message: 'Usuario updateUsuario' });
}

function deleteUsuario(req, res) {
  res.status(201).json({ message: 'Usuario deleteUsuario' });
}

export {
  setUsuario,
  getUsuario,
  getAllUsuario,
  createUsuario,
  updateUsuario,
  deleteUsuario
};