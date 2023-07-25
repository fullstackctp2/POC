const express = require("express");
const router = express.Router();
const { filterData } = require("../controllers/filter.controller");

router.get("/", filterData);

module.exports = router;