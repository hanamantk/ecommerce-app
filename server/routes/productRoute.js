import { Router } from "express";
import Product from "../models/productModal";
const router = Router();

router.get("/", async (req, res) => {
  try {
    // const Prod = new Product(
    //     // { name: "Cashew", fileName: "cashew.png", price: 38 }
    // );
    
    const products = await Product.find();
    res.send(products);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

export default router;
