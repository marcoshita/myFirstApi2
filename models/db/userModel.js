const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  title: String,
  year: String,
  duration: String,
});

module.exports = mongoose.model('films', userSchema);


// module.exports = mongoose.model('User', mongoose.Schema({
//   mail: String
// }));