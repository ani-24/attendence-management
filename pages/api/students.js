import connectDb from "../../middleware/mongoose";
import Student from "../../models/Student";

const handler = async (req, res) => {
  const students = Student.find();
  res.status(200).json({ students });
};

export default connectDb(handler);
