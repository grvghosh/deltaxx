
const mongoose = require("mongoose");
let url = 'mongodb+srv://gaurav:ghosh@realestate.lr3uu.mongodb.net/real_estate2?retryWrites=true&w=majority'
const connectDB = async (url) => {
  await mongoose.connect(url);
};

module.exports = connectDB;
