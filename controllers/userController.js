const users = [
  {id: 1, name: 'john'}, 
  {id: 2, name:'david'},
  {id: 3, name: 'maria'}
];

const status = {
  ok: 200,
  notFound: 404,
  created: 201,
};

const c = require('../constants/constants');
const userService = require('../services/userService');

module.exports = {
  list: (req, res) => {
    console.log(req.body)
    res.status(200).send(users);
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

  create: (req, res) => {
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.status(status.created).send(user);
  },

  selectById: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'INTERNAL SERVER ERROR' };
    try {
      const userId = req.params.id;
      const resFromService = await userService.selectById(userId);
      if (resFromService.status) {
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'User found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'User not found';
        }
      }
    } catch (err) {
      console.log('ERROR-userController-selectById: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  selectAll: async (req, res) => {
    const response = { status: c.status.serverError, msg: 'INTERNAL SERVER ERROR' };
    try {
      const userId = req.params.id;
      const resFromService = await userService.selectById(userId);
      if (resFromService.status) {
        response.status = c.status.ok;
        // response.body = resFromService.result;
        if (resFromService.result) {
          response.status = c.status.ok;
          response.msg = 'Users found';
          response.body = resFromService.result;
        } else {
          response.status = c.status.notFound;
          response.msg = 'Users not found';
        }
      }
    } catch (err) {
      console.log('ERROR-userController-selectAll: ', err);
      response.error = err;
    }
    res.status(response.status).send(response);
  },

  }