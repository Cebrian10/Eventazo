import * as contactoModel from '../models/contactoModel.js';

async function sendMessage(req, res) {
    try {
        const result = await contactoModel.enviarMessage(req);
        if (result) {
            res.json({ status: 201, message: 'Correo enviado correctamente' });
        } else {
            res.json({ status: 400, message: 'Error sendEmail' });
        }

    } catch (error) { res.json({ status: 500, message: 'Error sendEmail: ' + error.message }); }
}

async function getMessages(req, res) {
    try {
        const result = await contactoModel.obtenerMensajes();
        res.json({ status: 201, result: result });
    } catch (error) { res.json({ status: 500, message: 'Error getMessages: ' + error.message }); }
}

async function getMessagesByUser(req, res) {
    try {
        const result = await contactoModel.obtenerMensajesPorUsuario(req);
        if (result.length > 0) {
            res.json({ status: 201, result: result });
        } else {
            res.json({ status: 404, message: 'No hay mensajes para este usuario' });
        }

    } catch (error) { res.json({ status: 500, message: 'Error getMessagesByUser: ' + error.message }); }
}

export {
    sendMessage,
    getMessages,
    getMessagesByUser
}