const c = require('../constants/constants');

module.exports.random = (req, res) => {
  const num = req.query.num;
  const random = Math.floor(Math.random() * (num - 1 + 1)) + 1; 
    res.status(c.status.ok).send({random});
    
}
