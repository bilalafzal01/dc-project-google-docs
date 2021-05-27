const Document = require("../../models/document");
const error = require("../../middleware/error");

module.exports = {
  publicDocuments: error(async () => {
    const docs = await Document.find({ mode: "public" }).populate(
      "creator editors lastEditedBy"
    );
    return docs;
  }),
};
