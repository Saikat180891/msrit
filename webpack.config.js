var path = require("path");

module.exports = {
  entry: "temp/js/app.js",
  output: {
    path: path.resolve(__dirname, "js"),
    filename: "app.js"
  }
};
