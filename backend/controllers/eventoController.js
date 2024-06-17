import * as eventoModel from '../models/eventoModel.js';

async function getEvents(req, res) {
    try {
        const result = await eventoModel.obtenerEventos();
        res.json({ status: 201, result: result });

    } catch (error) { res.json({ status: 500, message: 'Error getEvents: ' + error.message }); }
}

async function getEvent(req, res) {
    try {
        const existEvent = await eventoModel.obtenerEventoPorId(req);

        if (existEvent.length > 0) {
            res.json({ status: 201, message: 'Evento obtenido correctamente', result: existEvent });
        }
        else {
            res.json({ status: 404, message: 'Evento no registrado' });
        }

    } catch (error) { res.json({ status: 500, message: 'Error getEvent: ' + error.message }); }
}

export {
    getEvents,
    getEvent
}