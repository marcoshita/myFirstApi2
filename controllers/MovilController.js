const c = require('../constants/constants');

const arr = [{
  modelo: " ",
  precio: " ",
  pulgadas: " ",
  ram: " ",
  cpu: " ",
}];

module.exports.ex1 = (req, res) => {
    

    res.status(c.status.ok).send({secuencia});
}