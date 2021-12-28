const mongoose = require('mongoose');

const connectDB = async ()=>{
  const connecting = await mongoose.connect('mongodb://localhost:27017/hotelapp',{
    useNewUrlParser:true,
    useUnifiedTopology:false,
  })
  console.log(`MongoDB connected to host ${connecting.connection.host}`);
}
module.exports = connectDB