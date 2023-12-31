// const { isValidObjectId } = require("mongoose");
const expenceSchema = require("../models/user");

exports.createExpence = async (req, resp) => {
  console.log("req", req.body);
  const { date, title, amount } = req.body;

  //Else Below code will be run id user doesnot exists
  const newUser = new expenceSchema({ date, title, amount });
  await newUser.save();

  resp.status(201).json({ message: "OTP has been sent to your email" });
};

exports.getExpences = async (req, resp) => {
  const data1 = await expenceSchema.find({});
  resp.status(201).json(data1);
};

exports.deleteExpence = async (req, resp) => {
  console.log("Coming req",req)
  await expenceSchema.deleteOne({
    _id: req.body._id,
  });
  resp.status(201).json("Expence Deleted Successfully");
};

exports.editExpence = async (req, resp) => {
await expenceSchema.updateOne({
    _id: req.body._id,
  },req.body);
  resp.status(201).json("Expence Edited Successfully");
};
