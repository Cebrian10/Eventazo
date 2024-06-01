import express from 'express';
const router = express.Router();

import * as usuarioController from '../controllers/usuarioController.js';

router.route('/')
    .get(usuarioController.getAllUsuario)
    .post(usuarioController.createUsuario)
    .put(usuarioController.updateUsuario)
    .delete(usuarioController.deleteUsuario)

router.route('/:id')
    .get(usuarioController.getUsuario)

export default router;