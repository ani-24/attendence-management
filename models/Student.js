import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  sid: { type: Number },
  name: { type: String },
  course: { type: String },
  performance: { type: String },
  attendence: { type: String },
});

mongoose.models = {};
export default mongoose.model("Student", StudentSchema);
