import express from "express";
import { getProducts } from "../controller/products.js";
const router = express.Router();

router.get("/", (req, res) => {
  res.redirect("https://artindosign.com");
});

// Product Routes
router.get("/product", getProducts);

export default router;
