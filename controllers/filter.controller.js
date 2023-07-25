const { Products } = require("../models/products.model");
const { find } = require("../services/queryServices");
const {queryBuilder}=require('../helpers/query.builder')

const filterData = async (req, res) => {
  try {
    const query=queryBuilder(req?.query)
    const data = await find(Products, query);
    res.json({ data });
  } catch (error) {
    throw error;
  }
};

module.exports = { filterData };
