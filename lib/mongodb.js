import mongoose from "mongoose";

const connectMongoDB = async()=>{
    if(mongoose.connection.readyState >=1) return;
    await mongoose.connect(process.env.MONGODB_URL);
}

export default connectMongoDB;