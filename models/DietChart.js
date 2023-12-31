const mongoose = require("mongoose");

const DietChart = new mongoose.Schema({
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor",
  },
  calorie_lower: Number,
  calorie_upper: Number,
  ch_lower: Number,
  ch_upper: Number,
  protiens: Number,
  fats: Number,
  food_type: String,
  cuisine_type: String,
  file: String,
  createdOn: Date,
  status: {
    type: String,
    default: "Active", //De-Active
  },
});

module.exports = mongoose.model("diet-chart", DietChart);
