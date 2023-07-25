const { Products } = require("../models/products.model");
const {
  create,
  findOne,
  deleteOne,
  update,
} = require("../services/queryServices");


// product create
const createProduct = async (req, res) => {
  try {
    const { name, category, price } = req?.body;
    const data = await create(Products, { name, category, price });
    return res.json({ message: "created posts", data });
  } catch (error) {
    throw error;
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req?.params?.id;
    const data = await findOne(Products, { _id: id });
    return res.json({ data });
  } catch (error) {
    throw error;
  }
};

const deletePorduct = async (req, res) => {
  try {
    const id = req?.params?.id;
    const data = await deleteOne(Products, { _id: id });
    console.log("data -- ", data);
    return res.json({ message: "data deleted" });
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (req, res) => {
  try {
    const id=req?.params?.id;
    const body  = req?.body;
    const data = await update(Products, { _id: id }, body);
    res.json({ message: "product updated", data });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  createProduct,
  getProductById,
  deletePorduct,
  updateProduct,
};
