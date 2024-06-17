import express from 'express';
const router = express.Router();

import * as boletoController from '../controllers/boletoController.js';

router.route('/')
    .get(boletoController.getAllBoletos)    

router.route('/:id')
    .post(boletoController.getBoleto)

export default router;