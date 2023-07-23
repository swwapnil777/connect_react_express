import mongoose from "mongoose";

const conncetDB = async (DATABASE_URL) => {
  try {
     await mongoose.connect(DATABASE_URL);
    console.log("databse conncted successfully");
  } catch (error) {
    console.log(error);
  }
};

export default conncetDB;
