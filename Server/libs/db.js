const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err?.message || "Something went wrong");
  }
};

module.exports = connectDB;