import * as contactoModel from '../models/contactoModel.js';

async function sendMessage(req, res) {
    try {
        const result = await contactoModel.enviarMessage(req);
        if(result){
            res.json({ status: 201, message: 'Correo enviado correctamente' });
        } else {
            res.json({ status: 400, message: 'Error sendEmail' });        
        }

    } catch (error) { res.json({ status: 500, message: 'Error sendEmail: ' + error.message }); }
}

export {
    sendMessage
}