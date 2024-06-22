import express from 'express'
import cors from 'cors';

import usuarioRoutes from './routes/usuarioRoutes.js';
import eventoRoutes from './routes/eventoRoutes.js';
import boletoRoutes from './routes/boletoRoutes.js';
import contactoRoutes from './routes/contactoRoutes.js';
import faqRoutes from './routes/faqRoutes.js';

const app = express();
const PORT = process.env.PORT ?? 4000;

// ['https://ld4jl3w6-3000.use2.devtunnels.ms', 'http://localhost:3000'],

const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use('/api/usuario', usuarioRoutes);
app.use('/api/evento', eventoRoutes);
app.use('/api/boleto', boletoRoutes);
app.use('/api/contacto', contactoRoutes);
app.use('/api/faqs', faqRoutes);

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});