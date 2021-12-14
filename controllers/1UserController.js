const hoy = new Date();
const fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();
const hoy2 = new Date();
const fecha2 = hoy2.getHours() + ':' + hoy2.getMinutes() + ':' + hoy2.getSeconds();
const hoy3 = new Date();
const fecha3 = hoy3.getTime();
module.exports = {
  list: (req, res) => {
    console.log(req.body)
    res.status(200).send({Fecha: fecha});
  },

  list2: (req, res) => {
    console.log(req.body)
    res.status(200).send({Hora: fecha2});
  },

  list3: (req, res) => {
    console.log(req.body)
    res.status(200).send({Milisegundos: fecha3});
  },

  profile: (req, res) => {
    const user = users.find((user) => user.id == req.params.userId);
    if(user) {
      res.status(status.ok).send(user);
    }else{
      const msg = {error: 'user ID not found'};
      res.status(status.notFound).send(msg);
    }
    
  },
  }