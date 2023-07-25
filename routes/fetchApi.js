const express = require("express");
const router = express.Router();
const { fetchData } = require("../controllers/third-party-api.controller");

router.get("/", fetchData);

module.exports = router;
