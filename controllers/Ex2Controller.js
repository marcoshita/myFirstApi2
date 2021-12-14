const c = require('../constants/constants');

module.exports.ex2 = (req, res) => {
    let secuencia = [2, 4, 8, 9, 7, 3, 5, 6];

    secuencia = secuencia.map(el => el * req.query.num);

    res.status(c.status.ok).send({secuencia});
}