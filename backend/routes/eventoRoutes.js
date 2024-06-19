import express from 'express';
const router = express.Router();

import * as eventoController from '../controllers/eventoController.js';

router.route('/')
    .get(eventoController.getEvents)

router.route('/:id')
    .post(eventoController.getEvent)

router.route('/status')
    .put(eventoController.updateStatus)

export default router;