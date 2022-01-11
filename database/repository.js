module.exports.selectById = async (data) => {
  let response = { status: false };
try {
const doc = await data.model.findById(data._id);
response = {
  result: doc,
  status: true,
  };
  
} catch (err) {
responseObj.error = error;
console.log('ERROR-repository-selectById: ', err);
}
return response;
} 

module.exports.selectAll = async (data) => {
  let response = { status: false };
try {
const doc = await data.model.findById({}, data.projection);
response = {
  result: doc,
  status: true,
  };
  
} catch (err) {
responseObj.error = error;
console.log('ERROR-repository-selectAll: ', err);
}
return response;
}; 