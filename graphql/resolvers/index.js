const userResolver = require("./user");
const documentResolver = require("./document");

const rootResolver = {
  ...userResolver,
  ...documentResolver,
};

module.exports = rootResolver;
