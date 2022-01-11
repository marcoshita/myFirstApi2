const mongoose = require('mongoose');
const User = require('../models/joi/userSchemas');
const repository = require('../database/repository');
module.exports.selectById = async (userId) => {
  const response = { status: false };
  try {
    const data = {
      _id: mongoose.Types.ObjectId(userId),
      model: User,
      projection: {

      }
    };
    const resFromRepo = await repository.selectById(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-userService-selectById: ', err);
  }
  return response;
}

module.exports.selectAll = async () => {
  const response = { status: false };
  try {
    const data = {
      model: User,
      projection: {

      }
    };
    const resFromRepo = await repository.selectAll(data);
    if (resFromRepo.status) {
      response.result = resFromRepo.result;
      response.status = true;
    }
  } catch (err) {
    console.log('ERROR-userService-selectAll: ', err);
  }
  return response;
}