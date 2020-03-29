const mongoose = require("mongoose");

const Task = mongoose.model("Task", {
  description: {
    type: String,
    required: true
  },
  done: {
    type: Boolean,
    default: false
  },
  deadline: {
    type: Date
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  }
});

module.exports = {
  Task
};
