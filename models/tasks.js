const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  // adding validation for properties in documents.
  // name: String,
  // completed: Boolean,
  name: {
    type: String,
    required: [true, "must be provided."],
    trim: true,
    maxlength: [50, "name should not more than 20 charactor long."],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// exporting a model's constrcutor with name 'Task'
//vese to ye model collection ko represent kr rha h, mgr iss se bne instance document hote h.

module.exports = mongoose.model("Task", schema);
