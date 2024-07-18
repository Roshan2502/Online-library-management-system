const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const { required } = require("@hapi/joi");

const transitionSchema = new Schema({
  userEmail: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  bookName: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  transitionType: {
    type: String,
    required: true,
  },
});

transitionSchema.pre("save", async function (next) {
  try {
    /* 
    Here first checking if the document is new by using a helper of mongoose .isNew, therefore, this.isNew is true if document is new else false, and we only want to hash the password if its a new document, else  it will again hash the password if you save the document again by making some changes in other fields incase your document contains other fields.
    */

    next();
  } catch (error) {
    next(error);
  }
});

const Transition = mongoose.model("transition", transitionSchema);
module.exports = Transition;
