const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/CandleStick_TradePal", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("Database connected!");
}).catch((err) => {
  console.log(err, "error");
});