// import { connectDB } from "../config/database.js";
import { db } from "../index.js";

export async function getProductCollection() {
  return db.collection("product");
}
