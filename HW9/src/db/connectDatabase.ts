import mongoose, { mongo } from "mongoose";

const { DATABASE_URI } = process.env;

const connectDatabase = async (): Promise<void> => {
  try {
    if (typeof DATABASE_URI !== "string")
      throw new Error("DATABASE_URI  not found");
    await mongoose.connect(DATABASE_URI);
    console.log("Successfully connected to the database");
  } catch (error) {
    console.error("Unable to connect to the databse");
    throw error;
  }
};

export default connectDatabase;
