module.exports.helloworld = (req, res) => {
  let responseObj = {};
  const nombreAlumnos = ["Xavi, Jordi, Alvar, Beimar, Marcos, Pol, Roger, Raul, Ayoub, Gerard, Khadija, Alex, Alba, Eric, Miquel, Alejandro, Pau, Marc"];
  responseObj.alumnos = nombreAlumnos;
  responseObj.contadorAlumnos = nombreAlumnos.length;
  const responseStatus = 200;
  res.status(responseStatus).send(responseObj);
  };