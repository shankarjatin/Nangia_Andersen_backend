const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://shankarjatin1005:nYdr2TsoY4NXfCnm@cluster0.subvhvu.mongodb.net/nagarsia', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
   
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
