if (process.env.NODE_ENV === "production") {
  //module.exports = require("./configureStore4.prod");
} else {
  module.exports = require("./configureStore.dev");
}
