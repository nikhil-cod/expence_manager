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
