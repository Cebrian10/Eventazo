import express from 'express'
import cors from 'cors';

import usuarioRoutes from './routes/usuarioRoutes.js';
import eventoRoutes from './routes/eventoRoutes.js';
import boletoRoutes from './routes/boletoRoutes.js';
import contactoRoutes from './routes/contactoRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 4000;

// Permitir solicitudes CORS
app.use(cors()); 

app.use(express.json());

// Routes
app.use('/api/usuario', usuarioRoutes);
app.use('/api/evento', eventoRoutes);
app.use('/api/boleto', boletoRoutes);
app.use('/api/contacto', contactoRoutes);

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});