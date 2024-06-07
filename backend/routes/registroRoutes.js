import express from 'express';
const router = express.Router();

import * as registroController from '../controllers/registroController.js';

router.route('/')
    .post(registroController.registrarUsuario);

export default router;