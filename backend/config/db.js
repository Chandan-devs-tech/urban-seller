import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
// This file is used to connect to the MongoDB database. It uses the mongoose.connect() method to connect to the MongoDB database using the MONGO_URI environment variable. If the connection is successful, it logs a message to the console. If there is an error, it logs the error message and exits the process with an exit code of 1. The connectDB function is exported so that it can be imported and used in other files.
