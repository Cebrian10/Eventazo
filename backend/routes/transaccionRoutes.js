import express from 'express';
import { registrarTransaccion, getTransacciones, getTransaccion } from '../controllers/transaccionController.js';

const router = express.Router();

// Definición de las rutas para las transacciones
router.post('/', registrarTransaccion); 
router.get('/', getTransacciones);       
router.get('/:id', getTransaccion);

export default router;
