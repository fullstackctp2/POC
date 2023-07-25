const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProductById,
  deletePorduct,
  updateProduct,
} = require("../../controllers/products.controllers");

router.post("/create", createProduct);
router.get("/:id", getProductById);
router.delete("/delete/:id", deletePorduct);
router.patch("/update/:id", updateProduct);

module.exports = router;
