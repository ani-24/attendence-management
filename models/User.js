import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  sid: { type: String },
  password: { type: String },
});

mongoose.models = {};
export default mongoose.model("User", UserSchema);
