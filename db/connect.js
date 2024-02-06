const mongoose = require("mongoose");

const connectDB = function (url) {
  // returing a  promise by defult

  return mongoose.connect(url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
