import dotenv from "dotenv";
import express from "express";
import { connectDB } from "./config/db.js";
import router from "./routes/router.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT;
const app = express();
const allowedOrigins = process.env.FRONTEND;
export const db = await connectDB();

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  }
  // Handle preflight (OPTIONS) requests
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

app.get("/robots.txt", (req, res) => {
  res.type("text/plain");
  res.send(`User-agent: *\nDisallow: /`);
});

app.use(express.urlencoded({ extended: true }));
app.use("/", router);

app.listen(PORT, () => {
  console.log("SERVER RUNNING AT PORT " + PORT);
});

export default app;
