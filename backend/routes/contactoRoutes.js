import express from 'express';
const router = express.Router();

import * as contactoController from '../controllers/contactoController.js';

router.route('/')
    .post(contactoController.sendMessage)

router.route('/all')
    .get(contactoController.getMessages)

router.route('/:id')
    .post(contactoController.getMessagesByUser)

export default router;