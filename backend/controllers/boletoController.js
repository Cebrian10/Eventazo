import * as boletoModel from '../models/boletoModel.js';

async function getAllBoletos(req, res) {
    try {
        const result = await boletoModel.obtenerBoletos();
        res.json({ status: 201, result: result });

    } catch (error) { res.json({ status: 500, message: 'Error getAllBoletos: ' + error.message }); }
}

async function getBoleto(req, res) {
    try {
        const existBoleto = await boletoModel.obtenerBoletoPorId(req);

        if (existBoleto.length > 0) {
            res.json({ status: 201, message: 'Boleto obtenido correctamente', result: existBoleto });
        }
        else {
            res.json({ status: 404, message: 'Boleto no registrado' });
        }

    } catch (error) { res.json({ status: 500, message: 'Error getBoleto: ' + error.message }); }
}

export {
    getAllBoletos,
    getBoleto
}