import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.URI;
  if (!uri) {
    throw new Error(
      "Missing MongoDB connection string. Set URI in Backend/.env"
    );
  }

  await mongoose.connect(uri);
  console.log("DB connected");
};
