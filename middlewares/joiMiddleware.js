const Joi = require('@hapi/joi');
module.exports.validate = (schema, inputValidation) => {
return (req, res, next) => {
let objToValidate = {};
if (inputValidation === 'body') objToValidate = req.body;
else if (inputValidation ==='query') objToValidate = req.query;
else if (inputValidation ==='path') objToValidate = req.params;
const result = schema.validate(objToValidate);
if (result.error) {
const errorDetails = result.error.details.map((value) => value.message);
const responseObj = {
status: 400,
body: errorDetails
};
return res.status(responseObj.status).send(responseObj);
}
else next();
};
}; 