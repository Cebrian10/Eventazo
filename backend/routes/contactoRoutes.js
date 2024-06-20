import express from 'express';
const router = express.Router();

import * as contactoController from '../controllers/contactoController.js';

router.route('/')
    .post(contactoController.sendMessage)

export default router;