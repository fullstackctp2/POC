const axios = require("axios");

const get = async (endpoint) => {
  return await axios
    .get(endpoint)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

module.exports = { get };
