const { get } = require("../services/http-request.service");
const { Products } = require("../models/products.model");
const { insertMany } = require("../services/queryServices");
const { dataCustomChanges } = require("../helpers/custom.changes");

const fetchData = async (req, res) => {
  try {
    const endpoint = process.env.THIRD_PARTY_API || "https://fakestoreapi.com/products";
    let data = await get(endpoint);
    data = dataCustomChanges(data);
    await insertMany(Products, data);
    res.json({ message: "fetched data", data });
  } catch (error) {
    throw error;
  }
};

module.exports = { fetchData };
