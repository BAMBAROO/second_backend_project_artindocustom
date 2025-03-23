import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const URI_MONGO = process.env.MONGO_URI;
const client = new MongoClient(URI_MONGO);

export async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
    return client.db("artindocustom");
  } catch (error) {
    console.error("MongoDB connection error:", error);
  }
}
